const db = require('./db')

const runQuery = async () => {
    await db('products').where('id', 1).update({
        stock:200
    })
    db.destroy()
}

runQuery()