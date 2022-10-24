const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


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

// get all spots pagination
// router.get('/', async (req, res) => {

//     const allSpots = await Spot.findAll();

//     return res.json(allSpots);
// });

// get all spots
router.get('/', async (req, res, next) => {

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

module.exports = router;
