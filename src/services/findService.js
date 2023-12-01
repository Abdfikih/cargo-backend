const {db} = require('../config/connectToDb');

// Find user
async function findUserById(id){
    const query = 'SELECT * FROM users WHERE id_user = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        user = result.rows[0];
        return {
            user: user
        }
    }else{
        return {
            message: 'User not found'
        }
    }
}

async function findUserByUsername(username_){
    const {username} = username_;
    const query = 'SELECT * FROM users WHERE username LIKE $1';
    const values = ['%' + username + '%'];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'User not found'
        }
    }
}

async function findUserByEmail(email_){
    const {email} = email_;
    const query = 'SELECT * FROM users WHERE email LIKE $1';
    const values = ['%' + email + '%'];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'User not found'
        }
    }
}

// Find mobil
async function findMobilById(id){
    const query = 'SELECT * FROM mobil WHERE id_mobil = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Mobil not found'
        }
    }
}

async function findMobilByName(mobil){
    const {name} = mobil;
    const query = 'SELECT * FROM mobil WHERE name ILIKE $1';
    const values = ['%' + name + '%'];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return [];
    }
}

async function findMobilByType(type){
    const query = 'SELECT * FROM mobil WHERE type = $1';
    const values = [type];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: `Mobil with type ${type} not found`
        }
    }
}


// Find order
async function findOrderByOrderId(id_){
    const {id} = id_;
    const query = 'SELECT * FROM orders WHERE id_order = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Order not found'
        }
    }
}

async function findOrderByUserId(id){
    const query = 'SELECT * FROM orders WHERE id_user = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Order not found'
        }
    }
}

async function findOrderByMobilId(id_){
    const {id} = id_;
    const query = 'SELECT * FROM orders WHERE id_mobil = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Order not found'
        }
    }
}


async function findOrderJoinMobil(id){
    const query = 'SELECT Orders.id_order, Mobil.name, Mobil.year, Mobil.price, Mobil.mpg, Mobil.transmission, Mobil.type, Mobil.description, Mobil.image_url, Orders.order_date, Orders.shipping_date, Orders.zip_code, Orders.quantity, Orders.total_payment, Orders.amount_paid, Orders.status FROM Mobil INNER JOIN Orders ON Mobil.id_mobil = Orders.id_mobil WHERE Orders.id_user = $1;';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Order not found'
        }
    }
}

module.exports = { findUserById, findUserByUsername, findUserByEmail
                , findMobilById, findMobilByName, findMobilByType,
                findOrderByOrderId, findOrderByUserId, findOrderByMobilId, findOrderJoinMobil};