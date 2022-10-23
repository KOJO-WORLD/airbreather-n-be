const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { Spot, User, SpotImage, Review, ReviewImage, sequelize } = require('../../db/models');

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

// get all spots
router.get('/', async (req, res) => {

    const allSpots = await Spot.findAll();

    return res.json(allSpots);
});

// get spot by id
router.get('/:id', async (req, res) => {

    const spot = await Spot.findByPk(req.params.id);

    return res.json(spot);
});

// get reviews for spot
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

    return res.json(reviews);
});

// get bookings for spot
router.get('/:spotId/bookings', async (req, res) => {

    const spot = await Spot.findByPk(req.params.id, {
        include: [
            {
                model: Booking
            }
        ]
    });

    return res.json({
        // spot.Bookings,
        'message': 'If you ARE the owner of the spot'
    });
});

// get all spots pagination
router.get('/', async (req, res) => {

    const allSpots = await Spot.findAll();

    return res.json(allSpots);
});

module.exports = router;
