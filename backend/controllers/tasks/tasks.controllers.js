import db from "../../db/db.js";

const getMyTasks = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        let topicsId
        if (authHeader) {
            topicsId = authHeader.split(' ')[1];

            const query = 'SELECT * FROM tasks WHERE topics_id = ?';
            const [data] = await db.query(query, [topicsId]);

            res.json(data);
        }
        if (!topicsId) {
            return res.status(400).json({
                message: "topics Id no encontrado"
            });
        }

    } catch (error) {
        console.error("Error en la consulta:", error);
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}


const postMyTasks = async (req, res) => {
    try {
        const { user_Id, topics_id, title, priority, status } = req.body;
        const rows = await db.query(
            "INSERT INTO tasks (user_id, topics_id, title, priority, status) VALUES (?, ?, ?, ?, ?)", [user_Id, topics_id, title, priority, status]
        );
        db.connect((error) => {
            if (error) {
                console.error('Error de conexión:', error);
                return;
            }
            console.log('Conectado a la base de datos');
        });
        return res.status(201).json({
            message: "Books added successfully",
            tasksId: rows.insertId,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong", error: error

        })
    }
}

const putMyTasks = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { user_id, topics_id, title, priority, status } = req.body;
        const result = await db.query(
            "UPDATE books SET user_id = ?, topics_id = ?, title = ?, priority = ?, status = ?", 
            [ user_id, topics_id, title, priority, status ]
        );

        db.connect((error) => {
            if (error) {
                console.error('Error de conexión:', error);
                return;
            }
            console.log('Conectado a la base de datos');
        });
        return res.status(201).json({
            message: "Books added successfully",
            bookId: result.insertId,
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong", error: error
            
        })
    }
};

const deleteMyTasks = async (req, res) => {
    try {
        const taskId = req.params.id;
        const [result] = await db.query(
            "DELETE FROM tasks WHERE id = ?",
            [taskId]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        // Si la eliminación fue exitosa
        res.status(200).json({ message: "tarea eliminada con éxito" });
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        res.status(500).json({ message: "Error al eliminar el libro", error });
    }
}

export { getMyTasks, postMyTasks, putMyTasks, deleteMyTasks } 