const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.mainStory);
router.get('/feature',mainController.mainStory);
router.get('/khalil',mainController.profKhalil);
router.get('/fatima',mainController.profFatima);
router.get('/mohammed',mainController.profMohammed);
router.get('/wadad',mainController.profWadad);
router.get('/abid',mainController.profAbid);

module.exports = router;