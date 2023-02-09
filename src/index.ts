import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/routes'
import database from './database'

const { PORT } = process.env

const app = express()

app.use(routes)

database.connect()

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})