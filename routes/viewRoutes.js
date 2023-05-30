const express = require('express');
const viewsController = require('./../controllers/viewsController');
const authController = require('./../controllers/authController');
const bookingController = require('./../controllers/bookingController');
const tourController = require('./../controllers/tourController');

const router = express.Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getHomepage
);

router.get(
  '/all-tours',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.post('/addNewTour',
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  tourController.createTour
);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/about', authController.isLoggedIn, viewsController.getAbout);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/verifySignup', viewsController.getVerifySignupForm);
router.get('/signup', viewsController.getSignupForm);
router.post('/signup', authController.signup);
router.get('/resetPassword', viewsController.getForgotPasswordForm);
router.post('/resetPassword', authController.resetPassword);
router.get('/me', authController.protect, viewsController.getAccount);
router.get(
  '/manageTour',
  authController.protect,
  viewsController.getManageTour
);
router.get('/listUser', authController.protect, viewsController.getListUser);
router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
