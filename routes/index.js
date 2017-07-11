const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/syria-exodus/', mainController.mainStory);
router.get('/syria-exodus/feature',mainController.mainStory);
router.get('/syria-exodus/khalil',mainController.profKhalil);
router.get('/syria-exodus/fatima',mainController.profFatima);
router.get('/syria-exodus/mohammed',mainController.profMohammed);
router.get('/syria-exodus/wadad',mainController.profWadad);
router.get('/syria-exodus/abid',mainController.profAbid);

module.exports = router;