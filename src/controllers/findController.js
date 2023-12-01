const findServices = require('../services/findService');

async function findUserById(req, res) {
    try {
        const result = await findServices.findUserById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findUserByUsername(req, res) {
    try {
        const result = await findServices.findUserByUsername(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findUserByEmail(req, res) {
    try {
        const result = await findServices.findUserByEmail(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findMobilById(req, res) {
    try {
        const result = await findServices.findMobilById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findMobilByName(req, res) {
    try {
        const result = await findServices.findMobilByName(req.query);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findOrderByOrderId(req, res) {
    try {
        const result = await findServices.findOrderByOrderId(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findOrderByUserId(req, res) {
    try {
        const result = await findServices.findOrderByUserId(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findOrderByMobilId(req, res) {
    try {
        const result = await findServices.findOrderByMobilId(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findMobilByType(req, res) {
    try {
        const result = await findServices.findMobilByType(req.query.type);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function findOrderJoinMobil(req, res) {
    try {
        const result = await findServices.findOrderJoinMobil(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { findUserById, findUserByUsername, findUserByEmail 
                , findMobilById, findMobilByName, findMobilByType,
                findOrderByOrderId, findOrderByUserId, findOrderByMobilId, findOrderJoinMobil};


