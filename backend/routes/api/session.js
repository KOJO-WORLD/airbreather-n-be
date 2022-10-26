const express = require('express')

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

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

// Log in
// router.post('/', validateLogin, async (req, res, next) => {
//   const { credential, password } = req.body;

//   const user = await User.login({ credential, password });

//   if (!user) {
//     const err = new Error('Login failed');
//     err.status = 401;
//     err.title = 'Login failed';
//     err.errors = ['The provided credentials were invalid.'];
//     return next(err);
//   }

//   await setTokenCookie(res, user);

//   return res.json({ user });
// });

// Log in
router.post('/', validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;

  // body validation error
  if (!credential || !password) {
    res.status(400);
    res.json({
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    })
    //  Invalid credentials pt1
  } else if (typeof credential !== 'string') {
    res.status(401);
    res.json({
      "message": "Invalid credentials",
      "statusCode": 401
    })
  } else {

    const user = await User.login({ credential, password });

    //  Invalid credentials pt2
    if (!user) {
      // const err = new Error('Login failed');
      // err.status = 401;
      // err.title = 'Login failed';
      // err.errors = ['The provided credentials were invalid.'];
      // return next(err);
      res.status(401);
      res.json({
        "message": "Invalid credentials",
        "statusCode": 401
      })
    }

    await setTokenCookie(res, user);

    const loginUser = await User.findOne({
      where: {
        id: user.id
      },
      attributes: {
        include: ['email']
      },
      raw: true
    })
    loginUser.token = '';
    return res.json(loginUser);
  }
});

// Log out
router.delete('/', (_req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'success' });
}
);

// Restore session user
// router.get(
//   '/',
//   restoreUser,
//   (req, res) => {
//     const { user } = req;
//     if (user) {
//       return res.json({
//         user: user.toSafeObject()
//       });
//     } else return res.json({});
//   }
// );

// Get the Current User
router.get('/', requireAuth, async (req, res) => {
  const { user } = req;

  const currUser = await User.findOne({
    where: {
      id: user.id
    },
    attributes: {
      include: ['email']
    }
  })

  res.json(currUser)
});




module.exports = router;
