import bcryptjs from "bcryptjs";
import db from "../../db/db.js";
import dotenv from 'dotenv'; 
import jwt from 'jsonwebtoken';


dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY; 
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION; 

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const connection = await db;
        const query = 'SELECT * FROM users WHERE email = ?';
        const [user] = await connection.execute(query, [email]);

        if (!user || user.length === 0) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        const hashedPassword = user[0].password;

        const isMatch = await bcryptjs.compare(password, hashedPassword);

        if (isMatch) {
            console.log('Password matched');
            const token = jwt.sign({ id: user[0].id, email: user[0].email }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });

            return res.status(200).json({ 
                message: 'Correct login',
                token,
                email,
                username
            });
        } else {
            console.log('Password does not match');
            return res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error in the server:', error);
        return res.status(500).json({ message: 'Internal server error' }); 
    }
};

export default login;