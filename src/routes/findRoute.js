const express = require('express');
const router = express.Router();

const findControllers = require('../controllers/findController');

router.get('/findUserById/:id', findControllers.findUserById);
router.get('/findUserByUsername', findControllers.findUserByUsername);
router.get('/findUserByEmail', findControllers.findUserByEmail);

router.get('/findMobilById/:id', findControllers.findMobilById);
router.get('/findMobilByName', findControllers.findMobilByName);
router.get('/findMobilByType', findControllers.findMobilByType);

router.get('/findOrderByOrderId', findControllers.findOrderByOrderId);
router.get('/findOrderByUserId/:id', findControllers.findOrderByUserId);
router.get('/findOrderByMobilId', findControllers.findOrderByMobilId);

router.get('/findOrderJoinMobil/:id', findControllers.findOrderJoinMobil);

module.exports = router;