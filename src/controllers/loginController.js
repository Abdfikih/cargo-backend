const loginServices = require('../services/loginService'); 

async function login(req, res) {
    try {
        const result = await loginServices.login(req.body, req.session);
        res.status(200).json(result);
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

async function register(req, res) {
    try {
        const result = await loginServices.register(req.body, req.session);
        res.status(200).json(result);
    } catch (err) {
        console.log(err)
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

async function authorize(req, res) {
    try {
        const result = await loginServices.authorize(req.session);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

async function logout(req, res) {
    try {
        const result = await loginServices.logout(req.session);
        res.status(200).redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { login, register, authorize, logout };