const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.mainStory);
router.get('/feature',mainController.mainStory);
router.get('/khalil',mainController.profiles);
router.get('/fatima',mainController.profiles);
router.get('/mohammed',mainController.profiles);
router.get('/wadad',mainController.profiles);
router.get('/abid',mainController.profiles);

module.exports = router;