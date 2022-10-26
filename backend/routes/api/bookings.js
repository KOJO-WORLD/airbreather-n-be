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

// Edit a Booking
router.put('/:bookingId', requireAuth, async (req, res) => {

    // const owner = req.user.toJSON()

    const { startDate, endDate } = req.body;

    // console.log("LORDY", review, stars)

    if (startDate.valueOf() > endDate.valueOf()) {
        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "endDate": "endDate cannot come before startDate"
            }
        })
    }

    const findBooking = await Booking.findByPk(req.params.bookingId);

    if (!findBooking) {
        res.status(404);
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        });
    } else {

        const editBooking = await findBooking.update({ startDate, endDate })

        res.json(editBooking)
    }
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
