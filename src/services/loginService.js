const { db } = require('../config/connectToDb');
const bcrypt = require("bcrypt");

async function login (user, session){
    const {username, password} = user;
    const query = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await db.query(query, values);
    if(result.rows.length === 0){
        return {
            message: 'User not found',
            user: null
        }
    }else{
        const user = result.rows[0];
        const pass = await bcrypt.compare(password, user.password);
        if(pass){
            session.user = user;
            session.authorized = true; 
            return {
                message: 'Login successful',
                user: user
            }
        }else{
            return {
                message: 'Password is not correct',
                user: null
            }
        }
    }
}

async function register (user, session){
    const {username, password, email, phone_no, name, birth_date, address} = user;
    const pass = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (username, password, email, phone_no, name, birth_date, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const values = [username, pass, email, phone_no, name, birth_date, address];
    const result = await db.query(query, values);
    if(result.rowCount === 1){
        user = result.rows[0];
        session.user = user;
        session.authorized = true;
        return {
            message: 'Register successful',
            user: user
        }
    }else{
        return{
            message: 'Failed to register',
            user: null
        } 
    }
}

async function authorize(session){
    console.log(session.authorized);
    if(session.authorized){
        return {
            message: 'User is authorized',
            user: session.user,
            authorized: session.authorized
        }
    }else{
        return {
            message: 'User is not authorized'
        }
    }
}

async function logout (session){
    session.destroy();
    return {
        message: 'Logout successful'
    }
}

module.exports = { login, register, authorize, logout };