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

// Delete a Review Image
router.delete('/:reviewImageId', requireAuth, async (req, res) => {
    const reviewImage = await ReviewImage.findByPk(req.params.reviewImageId)

    if (!reviewImage) {
        res.status(404)
        res.json({
            "message": "Review Image couldn't be found",
            "statusCode": 404
        });

    } else {

        await reviewImage.destroy();

        res.json({
            "message": "Successfully deleted",
            "statusCode": 200
        })
    }
})

module.exports = router;
