import bcryptjs from "bcryptjs";
import db from "../../db/db.js";
import dotenv from 'dotenv'; 
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY; 
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION; 

const signup = async (req, res) => {
    try {
        const connection = await db; 
        
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({
                message: "Some field is missing."
            });
        }

        console.log('Consultando usuario con email:', email);
        const [results] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

        if (results.length > 0) {
            console.log("El usuario ya existe");
            return res.status(409).send({
                message: "User already exists.",
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        console.log('Contraseña encriptada');

        const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        const [insertResult] = await connection.execute(insertQuery, [username, email, hashedPassword]);

        console.log('Usuario creado exitosamente con ID:', insertResult.insertId);

        // Generar el token al crear el usuario
        const token = jwt.sign({ id: insertResult.insertId, email: email }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });

        //Frontend
        // //guarda el token en localstorage
        // localStorage.setItem('token', token);

        // //guarda el userId en localstorage
        // localStorage.setItem('userId', insertResult.insertId);

        // //guarda el email en localstorage
        // localStorage.setItem('email', email);

        return res.status(201).json({
            message: 'User successfully created.',
            userId: insertResult.insertId,
            token,
            email,
            username
        });

    } catch (error) {
        console.error('Error en la operación:', error);
        return res.status(500).send({
            message: 'Internal server error.',
        });
    }
};

export default signup;