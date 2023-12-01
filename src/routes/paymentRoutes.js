const express = require('express');
const router = express.Router();

const paymentControllers = require('../controllers/paymentController');

router.put('/updatePayment', paymentControllers.updatePayment);

module.exports = router;