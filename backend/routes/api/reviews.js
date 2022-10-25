const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const { Spot, User, SpotImage, Review, ReviewImage, Booking, sequelize } = require('../../db/models');

const router = express.Router();


// const validateLogin = [
//     check('credential')
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .withMessage('Please provide a valid email or username.'),
//     check('password')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a password.'),
//     handleValidationErrors
// ];

// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res) => {

    const userId = req.user.id

    const reviews = await Review.findAll({
        where: {
            userId
        },
        include: [
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            },

        ]
    })

    for (let review of reviews) {
        const user = await User.findOne({
            where: {
                id: review.userId
            },
            attributes: ['id', 'firstName', 'lastName']
        })

        const spot = await Spot.findOne({
            where: {
                id: review.spotId
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
                include: [
                    [
                        sequelize.col("SpotImages.url"), "previewImage"
                    ]
                ],
                exclude: ['description', 'createdAt', 'updatedAt']
            }
        })
        // console.log(review.dataValues);
        review.dataValues.User = user;
        review.dataValues.Spot = spot;
    }
    res.json({ 'Reviews': reviews });
});

module.exports = router;
