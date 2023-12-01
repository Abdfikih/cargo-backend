const {db} = require('../config/connectToDb');

async function updatePayment(payment){
    const {id_order, amount_paid, status} = payment;
    const query = 'UPDATE orders SET amount_paid = $2, status = $3 WHERE id_order = $1';
    const values = [id_order, amount_paid, status];
    const result = await db.query(query, values);
    if(result.rowCount > 0){
        return {
            message: 'Payment updated successfully'
        }
    }else{
        return {
            message: 'Failed to update payment'
        }
    }
}

module.exports = { updatePayment };