var express = require('express');
const { createPost } = require('../controller/postController');
var router = express.Router();

/* GET users listing. */
router.post('/', createPost);

module.exports = router;
