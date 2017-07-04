const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.mainStory);
router.get('/feature',mainController.mainStory);
router.get('/profiles',mainController.profiles);

module.exports = router;