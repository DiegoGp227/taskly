import db from "../../db/db.js";

const getMyTopics = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        let userId
        if (authHeader) {
            userId = authHeader.split(' ')[1];

            const query = 'SELECT * FROM topics WHERE user_id = ?';
            const [data] = await db.query(query, [userId]);

            res.json(data);
        }

        if (!userId) {
            return res.status(400).json({
                message: "User ID no encontrado"
            });
        }

    } catch (error) {
        console.error("Error en la consulta:", error);
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}

const postMyTopics = async (req, res) => {
    try {
        await db.connect();

        const { userId, title, description } = req.body;

        const [result] = await db.query(
            "INSERT INTO topics (user_id, title, description) VALUES (?, ?, ?)",
            [userId, title, description]
        );

        return res.status(201).json({
            message: "Project added successfully",
            projectId: result.insertId,
        });
    } catch (error) {
        console.error("Error inserting topic:", error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
}

const putMyTopics = async (req, res) => {
    try {
        const topicId = req.params.id;
        const { userId, title, description } = req.body;
        const result = await db.query(
            "UPDATE topics SET user_id = ?, title = ?, description = ? WHERE id = ?",
            [userId, title, description, topicId]
        );

        db.connect((error) => {
            if (error) {
                console.error('Error de conexión:', error);
                return;
            }
            console.log('Conectado a la base de datos');
        });
        return res.status(201).json({
            message: "Book added successfully",
            bookId: result.insertId,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong", error: error

        })
    }
}

const deleteMyTopics = async (req, res) => {
    try {
        const bookId = req.params.id;
        const [result] = await db.query(
            "DELETE FROM topics WHERE id = ?",
            [topicId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "topic not found" });
        }

        // Si la eliminación fue exitosa
        res.status(200).json({ message: "topic successfully deleted" });
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        res.status(500).json({ message: "Error al eliminar el libro", error });
    }
}

export  { getMyTopics, postMyTopics, putMyTopics, deleteMyTopics }