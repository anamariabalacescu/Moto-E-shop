const express = require('express');
var Review = require('../schemas/reviewSchema');
const { getTokenFrom } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const { USER_TYPES, switchUserSecret } = require('../utils/enums')
const router = express.Router();

// GET reviews by product id 
router.get('/:productId', async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
});

// POST a review
router.post('/', async (req, res) => {

  const token = getTokenFrom(req)

  const decodedToken = jwt.verify(token, switchUserSecret(USER_TYPES.CLIENT))

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const review = new Review({
    description: req.body.description,
    userId: decodedToken.id,
    rating: req.body.rating,
    productId: req.body.productId
  });
  const savedReview = await review.save();
  res.json(savedReview);
});
module.exports = router;