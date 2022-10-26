const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { Spot, SpotImage, Booking, sequelize } = require('../../db/models');

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

router.get('/current', requireAuth, async (req, res) => {

    const userId = req.user.id

    const bookings = await Booking.findAll({
        where: {
            userId
        },
        attributes: ['id', 'spotId']
    })

    for (let booking of bookings) {

        const spot = await Spot.findOne({
            where: {
                id: booking.spotId
            },
            include: [
                {
                    model: SpotImage,
                    attributes: [],
                    where: {
                        preview: true
                    }
                }
            ],
            attributes: {
                //aliasing column
                include: [[sequelize.col("SpotImages.url"), "previewImage"]],
                exclude: ['description', 'createdAt', 'updatedAt']
            }
        })
        booking.dataValues.Spot = spot;
    }
    res.json({ 'Bookings': bookings });
});

// Delete a Booking
router.delete('/:bookingId', requireAuth, async (req, res) => {
    const booking = await Booking.findByPk(req.params.bookingId)

    if (!booking) {
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        });
    } else {

        await booking.destroy();

        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }
})

module.exports = router;
