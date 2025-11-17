const router = require('express').Router();

const streamEvents = require('../controllers/eventController');

router.get('/', streamEvents);

module.exports = router;