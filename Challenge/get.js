// struktur awal
const db = require('./db')

const runQuery = async () => {
    const data = await db('products').select()
    db.destroy()

    console.log(data)
}

runQuery()