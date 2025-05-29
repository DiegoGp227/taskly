import db from '../../db/db.js';

const getMyTopics = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: 'user_id is required' });
        }

        const [data] = await db.query(
            "SELECT * FROM topics WHERE user_id = ?",
            [id]
        );

        return res.status(200).json(data);

    } catch (error) {
        console.error("Error al solicitar los tópicos:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const postMyTopics = async (req, res) => {
    try {
        await db.connect();

        const { user_id, title, description } = req.body;

        if (!user_id || !title) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const [result] = await db.query(
            "INSERT INTO topics (user_id, title, description) VALUES (?, ?, ?)",
            [user_id, title, description]
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
        const id = req.params.id;
        const { user_id, title, description } = req.body;

        const [result] = await db.query(
            "UPDATE topics SET user_id = ?, title = ?, description = ? WHERE id = ?",
            [ user_id, title, description, id ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tema no encontrado" });
        }

        return res.status(200).json({
            message: "Tema actualizado correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error en el servidor",
            error
        });
    }
};

const deleteMyTopics = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await db.query(
            "DELETE FROM topics WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "topic not found" });
        }

        res.status(200).json({ message: "topic successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el tema", error });
    }
}

export { getMyTopics, postMyTopics, putMyTopics, deleteMyTopics }