import express from 'express'
import { createPool } from 'mysql2/promise'

const app = express()
const pool = createPool({
    host: 'mysqldb',
    user: 'root',
    password: '123456',
    port: 3306
})

app.get('/', (req,res) => {
    res.send('Hello World')
})

//consultar hora de cuando se haga la consulta
app.get('/ping', async(req,res) => {
    const result = await pool.query('SELECT NOW()')
    res.json(result[0])
})

app.listen(3000)
console.log('Server on port', 3000)
