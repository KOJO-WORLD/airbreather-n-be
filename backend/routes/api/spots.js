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

    const spots = await Spot.findAll({
        where: {
            ownerId: userId
        },
        include: [
            {
                model: SpotImage,
                where: {
                    preview: true
                },
                attributes: []
            },
            {
                model: Review,
                attributes: []
            }
        ],
        attributes: {
            //aliasing column
            include: [
                [
                    sequelize.fn("AVG", sequelize.col("Reviews.stars")),
                    "avgStarRating"
                ],
                [
                    sequelize.col("SpotImages.url"), "previewImage"
                ]
            ]
        },
        group: ['Spot.id']
    });

    res.json({ 'Spots': spots });
});

// get spot by id
router.get('/:id', async (req, res) => {

    const spotId = req.params.id

    const spot = await Spot.findByPk(req.params.id, {
        include: [
            {
                model: SpotImage,
                where: { spotId },
                attributes: ['id', 'url', 'preview']
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Review,
                where: {
                    spotId,
                },
                attributes: []
            }
        ],
        attributes: {
            include: [
                [
                    sequelize.fn('COUNT', sequelize.col('Reviews.id')), 'numReviews'
                ],
                [
                    sequelize.fn("AVG", sequelize.col("Reviews.stars")), "avgStarRating"
                ]
            ]
        }
    });

    return res.json(spot);
});

// Get all Reviews by a Spot's id
router.get('/:spotId/reviews', async (req, res) => {

    const { spotId } = req.params

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

// get bookings for spot
router.get('/:spotId/bookings', requireAuth, async (req, res) => {

    const spot = await Spot.findByPk(req.params.spotId)

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

// get all spots
router.get('/', async (req, res, next) => {

    if (!Object.keys(req.query).length) {

        const spots = await Spot.findAll({

            include: [
                {
                    model: SpotImage,
                    where: {
                        preview: true
                    },
                    attributes: []
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
                        "avgStarRating"
                    ],
                    [
                        sequelize.col("SpotImages.url"), "previewImage"
                    ]
                ],
            },
            group: ['Spot.id'],
        });

        res.json({ 'Spots': spots });
    }
    else {

        // Return spots filtered by query parameters.
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

        const spots = await Spot.findAll(
            {
                where: {
                    // lat: {
                    //     [Op.between]: [minLat, maxLat]
                    // },
                    // lng: {
                    //     [Op.between]: [minLng, maxLng]
                    // },
                    price: {
                        [Op.between]: [minPrice, maxPrice]
                    }
                },
                limit: size,
                offset: (size * (page - 1)),

                group: ['Spot.id'],
            }
        );

        for (let spot of spots) {

            const spotImages = await SpotImage.findAll({
                where: {
                    spotId: spot.id
                }
            })
            const prevImg = spotImages[0].dataValues.url

            spot.dataValues.previewImage = prevImg;
        }
        res.json({ 'Spots': spots, page, size });
    }
});

module.exports = router;
