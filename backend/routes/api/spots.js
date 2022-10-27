const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Op } = require("sequelize");

const { Spot, User, SpotImage, Review, ReviewImage, Booking, sequelize } = require('../../db/models');

const router = express.Router();

// const validateSignup = [
//     check('email')
//         .exists({ checkFalsy: true })
//         .isEmail()
//         .withMessage('Please provide a valid email.'),
//     check('username')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 4 })
//         .withMessage('Please provide a username with at least 4 characters.'),
//     check('username')
//         .not()
//         .isEmail()
//         .withMessage('Username cannot be an email.'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .isLength({ min: 6 })
//         .withMessage('Password must be 6 characters or more.'),
//     handleValidationErrors
// ];

// check and validate username/email and user password
const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors
];


// Get all Spots owned by the Current User
router.get('/current', requireAuth, async (req, res) => {

    const userId = req.user.id

    const allSpots = await Spot.findAll({
        where: {
            ownerId: userId
        }
    });

    const spots = [];

    for (let spot of allSpots) {
        spot = spot.toJSON()
        const reviews = await Review.findAll({
            where: {
                spotId: spot.id
            },
            attributes: ['stars']
        })

        if (!reviews.length) {
            spot.avgRating = null
        } else {
            let ratings = 0;
            for (let review of reviews) {
                ratings += review.stars;
            }

            spot.avgRating = ratings / reviews.length;
        }

        const img = await SpotImage.findOne({
            where: {
                spotId: spot.id,
                preview: true
            }
        })

        if (img === null) {
            spot.previewImage = null
        } else spot.previewImage = img.url;

        spots.push(spot);
    }

    // const spots = await Spot.findAll({
    //     where: {
    //         ownerId: userId
    //     },
    //     include: [
    //         {
    //             model: SpotImage,
    //             where: {
    //                 // preview: true
    //             },
    //             attributes: []
    //         },
    //         {
    //             model: Review,
    //             attributes: []
    //         }
    //     ],
    //     attributes: {
    //         //aliasing column
    //         include: [
    //             [
    //                 sequelize.fn("AVG", sequelize.col("Reviews.stars")),
    //                 "avgRating"
    //             ],
    //             [
    //                 sequelize.col("SpotImages.url"), "previewImage"
    //             ]
    //         ]
    // },
    //     group: ['Spot.id', 'SpotImage.url']
    // });

    res.json({ 'Spots': spots });
});


// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {

    const { spotId } = req.params

    const spot = await Spot.findByPk(spotId)

    if (spot === null) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    const reviews = await Review.findAll({
        where: {
            spotId
        },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ]
    });


    return res.json({ 'Reviews': reviews });
});

// Edit a Spot
router.put('/:spotId', requireAuth, async (req, res) => {

    // const owner = req.user.toJSON()

    const { address, city, state, country,
        lat, lng, name, description, price } = req.body;

    if (!address || !city || !state || !country || lat > 90 || typeof lat !== 'number'
        || lng > 180 || typeof lng !== 'number' || name.length > 50 || !description || !price) {

        res.status(400)
        return res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "address": "Street address is required",
                "city": "City is required",
                "state": "State is required",
                "country": "Country is required",
                "lat": "Latitude is not valid",
                "lng": "Longitude is not valid",
                "name": "Name must be less than 50 characters",
                "description": "Description is required",
                "price": "Price per day is required"
            }
        })
    }

    const findSpot = await Spot.findByPk(req.params.spotId);

    if (!findSpot) {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    } else {

        const editSpot = await findSpot.update({
            address, city, state, country,
            lat, lng, name, description, price,
            // ownerId: owner.id
        })

        res.json(editSpot)
    }
});

// Delete a Spot
router.delete('/:spotId', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId)

    if (!spot) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    } else {

        await spot.destroy();

        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }
})

// Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', requireAuth, async (req, res) => {

    let user = req.user.toJSON()

    const { review, stars } = req.body;

    const checkSpot = await Spot.findByPk(req.params.spotId)
    if (!checkSpot) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    const checkReview = await Review.findOne({
        where: {
            spotId: checkSpot.id,
            userId: user.id
        }
    })

    if (!review || !stars || typeof stars !== 'number' || stars > 5 || stars < 1) {
        res.status(400)
        res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "review": "Review text is required",
                "stars": "Stars must be an integer from 1 to 5",
            }
        })
    } else if (checkReview) {
        res.status(403);
        res.json({
            "message": "User already has a review for this spot",
            "statusCode": 403
        })
    } else {
        const newReview = await Review.create({
            spotId: checkSpot.id,
            review,
            stars,
            userId: user.id
        })
        res.status(201);
        res.json(newReview);
    }
});

// Add an Image to a Spot based on the Spot's id
router.post('/:spotId/images', requireAuth, async (req, res) => {

    const { url, preview } = req.body;

    const checkSpot = await Spot.findByPk(req.params.spotId)

    if (!checkSpot) {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    } else {
        const newSpotImage = await SpotImage.create({
            spotId: checkSpot.id,
            url,
            preview
        })

        const returnSpotImage = await SpotImage.findOne({
            where: {
                spotId: checkSpot.id
            },
            attributes: {
                exclude: ['spotId', 'createdAt', 'updatedAt']
            }
        })

        res.json(returnSpotImage);
    }
});

// Create a Booking from a Spot based on the Spot's id
router.post('/:spotId/bookings', requireAuth, async (req, res) => {

    let user = req.user.toJSON()

    const { startDate, endDate } = req.body;

    const checkBookings = await Booking.findAll({
        where: {
            spotId: req.params.spotId
        }
    });

    for (let booking of checkBookings) {

        if ((booking.startDate >= startDate && booking.startDate <= endDate) ||
            (booking.endDate >= startDate && booking.endDate <= endDate)) {

            res.status(403);
            return res.json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "statusCode": 403,
                "errors": {
                    "startDate": "Start date conflicts with an existing booking",
                    "endDate": "End date conflicts with an existing booking"
                }
            })
        }
    }

    const checkSpot = await Spot.findByPk(req.params.spotId)

    if (!checkSpot) {
        res.status(404);
        return res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    } else {

        if (startDate.valueOf() >= endDate.valueOf()) {
            res.status(400);
            return res.json({
                "message": "Validation error",
                "statusCode": 400,
                "errors": {
                    "endDate": "endDate cannot be on or before startDate"
                }
            })
        } else {

            const newbooking = await Booking.create({
                spotId: checkSpot.id,
                startDate, endDate,
                userId: user.id
            })

            res.json(newbooking);
        }
    }
});

// Create a Spot
router.post('/', requireAuth, async (req, res) => {

    let owner = req.user.toJSON()

    const { address, city, state, country,
        lat, lng, name, description, price } = req.body;

    console.log('WHAT', typeof lng)
    console.log('IS GOING ONE???', isNaN(lng))

    if (!address || !city || !state || !country || lat > 90 || typeof lat !== 'number'
        || lng > 180 || typeof lng !== 'number' || name.length > 50 || !description || !price) {

        res.status(400)
        res.json({
            "message": "Validation Error",
            "statusCode": 400,
            "errors": {
                "address": "Street address is required",
                "city": "City is required",
                "state": "State is required",
                "country": "Country is required",
                "lat": "Latitude is not valid",
                "lng": "Longitude is not valid",
                "name": "Name must be less than 50 characters",
                "description": "Description is required",
                "price": "Price per day is required"
            }
        })
    }

    const newSpot = await Spot.create({
        address, city, state,
        country, lat, lng,
        name, description, price,
        ownerId: owner.id
    })

    res.status(201)
    res.json(newSpot)

});


// get bookings for spot
router.get('/:spotId/bookings', requireAuth, async (req, res) => {

    const spot = await Spot.findByPk(req.params.spotId)

    if (spot === null) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    const userId = req.user.id

    if (spot.ownerId === userId) {

        const bookings = await Spot.findByPk(req.params.spotId, {

            attributes: [],
            include: [
                {
                    model: Booking,
                    include:
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    }
                }
            ]
        });
        return res.json(bookings);
    } else {
        const bookings = await Spot.findByPk(req.params.spotId, {

            attributes: [],
            include: [
                {
                    model: Booking,
                    attributes: ['spotId', 'startDate', 'endDate'],
                }
            ]
        });
        return res.json(bookings);
    }
});

// get spot by id
router.get('/:spotId', async (req, res) => {

    const { spotId } = req.params

    let spot = await Spot.findByPk(spotId, {
        include: [
            {
                model: User,
                as: "Owner",
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
    });


    if (spot === null) {
        res.status(404)
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }

    spot = spot.toJSON()

    const reviews = await Review.findAll({
        where: {
            spotId: spotId
        },
        attributes: ['stars']
    })

    spot.numReviews = reviews.length;

    const images = await SpotImage.findAll({
        where: {
            spotId: spotId
        },
        attributes: ['id', 'url', 'preview']
    })

    spot.SpotImages = images

    if (!reviews.length) {
        spot.avgStarRating = null
    } else {
        let ratings = 0;
        for (let review of reviews) {
            ratings += review.stars;
        }

        spot.avgRating = ratings / reviews.length;
    }

    // const spot = await Spot.findByPk(id, {
    //     include: [
    //         {
    //             model: SpotImage,
    //             attributes: ['id', 'url', 'preview']
    //         },
    //         {
    //             model: User,
    //             as: 'Owner',
    //             attributes: ['id', 'firstName', 'lastName']
    //         },
    //         {
    //             model: Review,
    //             attributes: []
    //         }
    //     ],
    //     attributes: {
    //         include: [
    //             [
    //                 sequelize.fn('COUNT', sequelize.col('Reviews.id')), 'numReviews'
    //             ],
    //             [
    //                 sequelize.fn("AVG", sequelize.col("Reviews.stars")), "avgStarRating"
    //             ]
    //         ]
    //     },
    //     group: ['Spot.id', 'SpotImage.url']
    // });

    return res.json(spot);
});

// get all spots
router.get('/', async (req, res, next) => {

    if (!Object.keys(req.query).length) {

        const spots = await Spot.findAll({

            include: [
                {
                    model: SpotImage,
                    // where: {
                    //     preview: true
                    // },
                    attributes: [],
                    required: false
                },
                {
                    model: Review,
                    attributes: []
                },
            ],
            attributes: {
                //aliasing column
                include: [
                    [
                        sequelize.fn("AVG", sequelize.col("stars")),
                        "avgRating"
                    ],
                    [
                        sequelize.col("SpotImages.url"), "previewImage"
                    ]
                ],
            },
            group: ['Spot.id', 'SpotImages.url'],
        });

        res.json({ 'Spots': spots });
    }
    else { // Return spots filtered by query parameters.

        let { page, size, minLat, maxLat,
            minLng, maxLng, minPrice, maxPrice } = req.query;

        // set page and size of results
        if (page && (Number(page) > 0)) {
            if (Number(page) > 10) page = 10
            page = parseInt(page);
        } else page = 1

        if (size && Number(size) > 0) {
            if (Number(size) > 20) size = 20
            size = parseInt(size);
        } else size = 20

        // set min & max latitude of results
        if (minLat) {
            minLat = parseInt(minLat);
        } else minLat = 1 // change later?

        if (maxLat) {
            maxLat = parseInt(maxLat);
        } else maxLat = 1000 // change later?

        // set min & max longitude of results
        if (minLng) {
            minLng = parseInt(minLng);
        } else minLng = 1 // change later?

        if (maxLng) {
            maxLng = parseInt(maxLng);
        } else maxLng = 180 // change later?

        // set min & max price of results
        if (minPrice && (Number(minPrice) > 0)) {
            minPrice = parseInt(minPrice);
        }

        if (maxPrice && (Number(maxPrice) > 0)) {
            maxPrice = parseInt(maxPrice);
        }

        let spots = await Spot.findAll(
            {
                where: {
                    // lat: {
                    //     [Op.between]: [minLat, maxLat]
                    // },
                    // lng: {
                    //     [Op.between]: [minLng, maxLng]
                    // },
                    // price: {
                    //     [Op.between]: [minPrice, maxPrice]
                    // }
                },
                limit: size,
                offset: (size * (page - 1)),

                group: ['Spot.id'],
            }
        );

        spot = spot.toJSON()
        for (let spot of spots) {

            let spotImage = await SpotImage.findOne({
                where: {
                    spotId: spot.id,
                    preview: true
                }
            });

            if (!spotImage) {

                // const prevImg = spotImage[0].dataValues.url

                spot.previewImage = null;
            } else {
                spotImage = spotImage.toJSON()
                spot.previewImage = spotImage.url
            }
        }
        res.json({ 'Spots': spots, page, size });
    }
});

module.exports = router;
