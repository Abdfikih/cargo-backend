const express = require('express');
const router = express.Router();

const loginControllers = require('../controllers/loginController');

router.post('/login', loginControllers.login);
router.post('/register', loginControllers.register);
router.get('/authorize', loginControllers.authorize);
router.get('/logout', loginControllers.logout);

module.exports = router;
