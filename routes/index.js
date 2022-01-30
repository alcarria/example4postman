var express = require('express');
var router = express.Router();

const feedController = require('../controllers/feed');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router;
