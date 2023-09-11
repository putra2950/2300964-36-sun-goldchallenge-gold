const db = require('./db')

const runQuery = async () => {
//proses eksekusi, insert into products(name,stock) values()
await db('products').insert({
    name: 'products',
    stock: 100
})

    db.destroy()
}

runQuery()