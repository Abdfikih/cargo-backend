const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainController');

// CRUD Users
router.get('/getAllUser', mainControllers.getAllUser);
router.delete('/deleteOneUser', mainControllers.deleteOneUser);
router.put('/updateOneUser', mainControllers.updateOneUser);
router.put('/updateUserProfile', mainControllers.updateUserProfile);
router.post('/addOneUser', mainControllers.addOneUser);
router.put('/updateDealerStatus', mainControllers.updateDealerStatus);

// CRUD Mobil
router.get('/getAllMobil', mainControllers.getAllMobil);
router.get('/getAllOrderJoinMobil', mainControllers.getAllOrderJoinMobil);
router.delete('/deleteOneMobil', mainControllers.deleteOneMobil);
router.put('/updateOneMobil', mainControllers.updateOneMobil);
router.post('/addOneMobil', mainControllers.addOneMobil);
router.put('/updateMobilImage', mainControllers.updateMobilImage);

// CRUD Orders
router.get('/getAllOrder', mainControllers.getAllOrder);
router.delete('/deleteOneOrder/:id', mainControllers.deleteOneOrder);
router.put('/updateOneOrder', mainControllers.updateOneOrder);
router.post('/addOneOrder', mainControllers.addOneOrder);

module.exports = router;