var express = require('express');
const { createPost } = require('../controller/postController');
const upload = require('../middleware/multerMiddleware');
var router = express.Router();

/* GET users listing. */

router.post('/',upload.single('file') ,createPost);

module.exports = router;
