const mainServices = require('../services/mainService'); 

// CRUD users
async function getAllUser(req, res) {
    try {
        const result = await mainServices.getAllUser();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneUser(req, res) {
    try {
        const result = await mainServices.deleteOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneUser(req, res) {
    try {
        const result = await mainServices.updateOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        if(err.code == "23514"){
            let col = err.constraint.split("_")[1];
            let errMessage = "User " + col + " cannot be empty";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23502"){
            let errMessage = "Missing " + err.column + " attribute";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23505" && err.constraint == "users_username_key"){
            res.status(400).json({ message: "Username already exists" });
        }else if(err.code == "23505" && err.constraint == "users_email_key"){
            res.status(400).json({ message: "Email already exists" });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

async function updateUserProfile(req, res) {
    try {
        const result = await mainServices.updateUserProfile(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function addOneUser(req, res) {
    try {
        const result = await mainServices.addOneUser(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        if(err.code == "23514"){
            let col = err.constraint.split("_")[1];
            let errMessage = "User " + col + " cannot be empty";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23502"){
            let errMessage = "Missing " + err.column + " attribute";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23505" && err.constraint == "users_username_key"){
            res.status(400).json({ message: "Username already exists" });
        }else if(err.code == "23505" && err.constraint == "users_email_key"){
            res.status(400).json({ message: "Email already exists" });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

async function updateDealerStatus(req, res){
    try {
        const result = await mainServices.updateDealerStatus(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// CRUD Mobil
async function getAllMobil(req, res) {
    try {
        const result = await mainServices.getAllMobil();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function getAllOrderJoinMobil(req, res) {
    try {
        const result = await mainServices.getAllOrderJoinMobil();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneMobil(req, res) {
    try {
        const result = await mainServices.deleteOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneMobil(req, res) {
    try {
        const result = await mainServices.updateOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        if(err.code == "23514"){
            let col = err.constraint.split("_")[1];
            let errMessage = "Mobil " + col + " cannot be empty";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23502"){
            let errMessage = "Missing " + err.column + " attribute";
            res.status(400).json({ message: errMessage });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

async function addOneMobil(req, res) {
    try {
        const result = await mainServices.addOneMobil(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        if(err.code == "23514"){
            let col = err.constraint.split("_")[1];
            let errMessage = "Mobil " + col + " cannot be empty";
            res.status(400).json({ message: errMessage });
        }else if(err.code == "23502"){
            let errMessage = "Missing " + err.column + " attribute";
            res.status(400).json({ message: errMessage });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

async function updateMobilImage(req, res) {
    try {
        const result = await mainServices.updateMobilImage(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function getAllOrder(req, res) {
    try {
        const result = await mainServices.getAllOrder();
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function deleteOneOrder(req, res) {
    try {
        const result = await mainServices.deleteOneOrder(req.params.id);
        res.status(200).json({ message: result});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function updateOneOrder(req, res) {
    try {
        const result = await mainServices.updateOneOrder(req.body);
        res.status(200).json({ message: result});
    } catch (err) {
        if(err.code == "23502"){
            let errMessage = "Order " + err.column + " must not be empty";
            res.status(400).json({ message: errMessage });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

async function addOneOrder(req, res) {
    try {
        const result = await mainServices.addOneOrder(req.body);
        res.status(200).json({ message: result });
    } catch (err) {
        if(err.code == "23502"){
            let errMessage = "Order " + err.column + " must not be empty";
            res.status(400).json({ message: errMessage });
        }else{
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = { getAllUser, deleteOneUser, updateOneUser, updateUserProfile, addOneUser,
                getAllMobil, getAllOrderJoinMobil, deleteOneMobil, updateOneMobil, addOneMobil, updateMobilImage, updateDealerStatus,
                getAllOrder, deleteOneOrder, updateOneOrder, addOneOrder};