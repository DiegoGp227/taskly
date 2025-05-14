import mysql from "mysql2/promise"; 
import dotenv from 'dotenv'; 

dotenv.config();

const DB_HOST = process.env.DB_HOST; 
const DB_PORT = process.env.DB_PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE

const db = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
});

// Función para conectarse a la base de datos y realizar consultas
async function connectAndQuery() {
    try {
        await db.connect(); 
    } catch (err) {
        console.error('Error al conectar o consultar la base de datos:', err.message);
    }
}

connectAndQuery();
export { db }; 