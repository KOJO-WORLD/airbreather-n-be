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

// Add an Image to a Review based on the Review's id
router.post('/:reviewId/images', async (req, res) => {

    const { url } = req.body;

    const checkReview = await Review.findByPk(req.params.reviewId)

    if (!checkReview) {
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        })
    } else {

        const allReviewImages = await ReviewImage.findAll()

        let count = 0
        for (let reviewImage of allReviewImages) {
            if (reviewImage.reviewId === checkReview.id)
                count++
        }

        if (count >= 10) {
            res.status(403)
            res.json({
                "message": "Maximum number of images for this resource was reached",
                "statusCode": 403
            })
        } else {

            const newReviewImage = await ReviewImage.create({
                reviewId: checkReview.id,
                url
            })

            const returnReviewImage = await ReviewImage.findOne({
                where: {
                    id: newReviewImage.id,
                    url
                },
                attributes: {
                    exclude: ['reviewId', 'createdAt', 'updatedAt']
                }
            })
            res.json(returnReviewImage);
        }
    }
});

// Edit a Review
router.put('/:reviewId', requireAuth, async (req, res) => {

    // const owner = req.user.toJSON()

    const { review, stars } = req.body;

    if (!review || !stars || typeof stars !== 'number' || stars > 5 || stars < 1) {

        res.status(400)
        return res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "review": "Review text is required",
                "stars": "Stars must be an integer from 1 to 5",
            }
        })
    }

    const findReview = await Review.findByPk(req.params.reviewId);

    if (!findReview) {
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        });
    } else {

        const editReview = await findReview.update({ review, stars })

        res.json(editReview)
    }
});

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

// Delete a Review
router.delete('/:reviewId', requireAuth, async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId)

    if (!review) {
        res.status(404)
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        });
    } else {

        await review.destroy();

        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }
})

module.exports = router;
