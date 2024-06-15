const express = require('express');
const { getUsageDetails } = require('../controllers/usageController');
const router = express.Router();

router.get('/:userId', getUsageDetails);

module.exports = router;
