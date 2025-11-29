const router = require('express').Router();
const { aboutMe } = require('../controllers/aboutController');
router.get('/', aboutMe);

module.exports = router;