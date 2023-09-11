const db = require('./db')

const runQuery =  async () => {
    await db('products').where('id', 1).delete()
    db.destroy()
}

runQuery()