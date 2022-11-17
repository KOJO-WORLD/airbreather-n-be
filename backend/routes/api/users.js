const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// check username/email and user password on signup
const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// Sign up
router.post('/', validateSignup, async (req, res) => {
    const { email, password, username, firstName, lastName } = req.body;

    // Body validation errors
    if (!email || !username) {
        res.status(400);
        res.json({
            "message": "Validation error",
            "statusCode": 400,
            "errors": {
                "email": "Invalid email",
                "username": "Username is required",
                // "firstName": "First Name is required",
                // "lastName": "Last Name is required"
            }
        })
    }

    const users = await User.findAll({
        attributes: {
            include: ['email']
        }
    });

    for (let user of users) {
        let userObj = user.toJSON()
        // User already exists with the specified email
        if (userObj.email === email) {
            res.status(403);
            res.json({
                "message": "User already exists",
                "statusCode": 403,
                "errors": {
                    "email": "User with that email already exists"
                }
            })
        }
        // User already exists with the specified username
        else if (user.username === username) {
            res.status(403);
            res.json({
                "message": "User already exists",
                "statusCode": 403,
                "errors": {
                    "username": "User with that username already exists"
                }
            })
        }
    }

    const signUpUser = await User.signup({ email, username, password, firstName, lastName });

    let userToken = await setTokenCookie(res, signUpUser);

    const user = await User.findByPk(signUpUser.id, {
        attributes: {
            include: ['email']
        },
        raw: true
    })
    user.token = userToken;

    return res.json({ user });
});

// Get all users
router.get('/', async (req, res) => {

    const allUsers = await User.findAll();

    return res.json(allUsers);
});

module.exports = router;
