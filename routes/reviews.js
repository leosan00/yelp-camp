const express = require('express');
const router = express.Router({mergeParams: true});

const catchAsync = require('../utils/catchAsync');
const Review = require('../models/review.js');
const Campground = require('../models/campground.js');
const {validateReview, isLoggedIn, isReviewAuthor} = require ('../middleware.js');

const reviews = require('../controllers/reviews.js');


router.post('/', isLoggedIn, validateReview, catchAsync(reviews.creteReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
