const { db } = require('../config/connectToDb');
const bcrypt = require("bcrypt");

async function getAllUser() {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);
    if (result.rows.length > 0) {
        return result.rows;
    }else{
        return {
            message: "No users found"
        }
    }
}

async function getAllOrderJoinMobil(){
    const query = 'SELECT Orders.id_order, Mobil.name, Mobil.year, Mobil.price, Mobil.mpg, Mobil.transmission, Mobil.type, Mobil.description, Mobil.image_url, Orders.order_date, Orders.shipping_date, Orders.zip_code, Orders.quantity, Orders.total_payment, Orders.amount_paid, Orders.status FROM Mobil INNER JOIN Orders ON Mobil.id_mobil = Orders.id_mobil;';
    const result = await db.query(query);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: 'Order not found'
        }
    }
}

async function deleteOneUser(user){
    const { id } = user;
    const query = 'DELETE FROM users WHERE id_user = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'User deleted successfully'
        }
    }else{
        return {
            message: 'No user found'
        }
    }
}

async function updateOneUser(user){
    const { id, username, password, email, phone_no, is_dealer, name, birth_date, address } = user;
    const pass = await bcrypt.hash(password, 10);
    const query = 'UPDATE users SET username = $2, password = $3, email = $4, phone_no = $5, is_dealer = &6 name = $7, birth_date = $8, address = $9 WHERE id_user = $1';
    const values = [id, username, pass, email, phone_no, is_dealer, name, birth_date, address];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'User updated successfully'
        }
    }else{
        return {
            message: 'No user found'
        }
    }
}

const updateUserProfile = async (user) => {
    const { id, phone_no, full_name, birth_date, address } = user;
    const query = 'UPDATE users SET phone_no = $2, name = $3, birth_date = $4, address = $5 WHERE id_user = $1';
    const values = [id, phone_no, full_name, birth_date, address];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'User profile updated successfully'
        }
    }else{
        return {
            message: 'No user profile found'
        }
    }
}
async function addOneUser(user){
    const { username, password, email, phone_no, is_dealer, name, birth_date, address } = user;
    const pass = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [username, password, email, phone_no, is_dealer, name, birth_date, address];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'User added successfully'
        }
    }else{
        return {
            message: 'No user found'
        }
    }
}

async function updateDealerStatus(user){
    const { username, email, is_dealer } = user;
    const query = 'UPDATE users SET is_dealer = $3 WHERE username = $1 OR email = $2';
    const values = [username, email, is_dealer];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Dealer status updated successfully'
        }
    }else{
        return {
            message: 'No user found'
        }
    }
}

async function getAllMobil(mobil){
    const query = "SELECT * FROM mobil";
    const result = await db.query(query);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: "No mobil found"
        }
    }
}

async function deleteOneMobil(mobil){
    const { id } = mobil;
    const query = 'DELETE FROM mobil WHERE id_mobil = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Mobil deleted successfully'
        }
    }else{
        return {
            message: 'No mobil found'
        }
    }
}

async function updateOneMobil(mobil){
    const { id, name, year, price, mpg, transmission, type, description, url } = mobil;
    const query = 'UPDATE mobil SET name = $2, year = $3, price = $4, mpg = $5, transmission = $6, type = $7, description = $8, image_url = $9 WHERE id_mobil = $1';
    const values = [id, name, year, price, mpg, transmission, type, description, url];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Mobil updated successfully'
        }
    }else{
        return {
            message: 'No mobil found'
        }
    }
}

async function addOneMobil(mobil){
    const { name, year, price, mpg, transmission, type, description, url } = mobil;
    const query = 'INSERT INTO mobil VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [name, year, price, mpg, transmission, type, description, url];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Mobil added successfully'
        }
    }else{
        return {
            message: 'Failed to add mobil'
        }
    }
}

async function updateMobilImage(mobil){
    const { id, image_url } = mobil;
    const query = 'UPDATE mobil SET image_url = $2 WHERE id_mobil = $1';
    const values = [id, image_url];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Mobil image updated successfully'
        }
    }else{
        return {
            message: 'No mobil found'
        }
    }
}

async function getAllOrder(){
    const query = "SELECT * FROM orders";
    const result = await db.query(query);
    if(result.rows.length > 0){
        return result.rows;
    }else{
        return {
            message: "No orders found"
        }
    }
}

async function deleteOneOrder(id){
    const query = 'DELETE FROM orders WHERE id_order = $1';
    const values = [id];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Order deleted successfully'
        }
    }else{
        return {
            message: 'Failed to delete order'
        }
    }
}

async function updateOneOrder(order){
    const { id_order, id_user, id_mobil, order_date, shipping_date, zipcode, quantity, total_payment, amount_paid , status } = order;
    const query = 'UPDATE orders SET id_user = $2, id_mobil = $3, order_date = $4, shipping_date = $5, zipcode = $6, quantity = $7, total_payment = $8, amount_paid = $9 status = $10 WHERE id_order = $1';
    const values = [id_order, id_user, id_mobil, order_date, shipping_date, zipcode, quantity, total_payment, amount_paid, status];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Order updated successfully'
        }
    }else{
        return {
            message: 'Failed to update order'
        }
    }
}

async function addOneOrder(order){
    const { id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid, status } = order;
    const query = 'INSERT INTO orders (id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const values = [id_user, id_mobil, order_date, shipping_date, zip_code, quantity, total_payment, amount_paid, status];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Order added successfully'
        }
    }else{
        return {
            message: 'Failed to add order'
        }
    }
}


module.exports = { getAllUser, deleteOneUser, updateOneUser, updateUserProfile, addOneUser 
                , getAllMobil, getAllOrderJoinMobil, deleteOneMobil, updateOneMobil, addOneMobil, updateMobilImage, updateDealerStatus,
                getAllOrder, deleteOneOrder, updateOneOrder, addOneOrder};
