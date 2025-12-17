const router = require('express').Router();
const { loginController } = require('../../../container/loginContainer');

router.post('/', loginController.login);

module.exports = router;
