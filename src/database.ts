import { DataSource } from 'typeorm'

const {
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
} = process.env

const envDbPortValue = parseInt(DB_PORT || '')
const PORT : number = Number.isInteger(envDbPortValue) ? envDbPortValue : 5432

const dataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [__dirname + "/models/*.ts"],
})

const getDataSource = () => dataSource

const connect = async () => dataSource.initialize()
    .catch((err) => {
        console.log('Error during Data Source initialization', err)
    })

export default {
    getDataSource,
    connect
}