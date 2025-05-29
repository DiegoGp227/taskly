import db from "../../db/db.js";

const getMyTasks = async (req, res) => {
    try {
        const { topicId, statusId } = req.params;

        if (!topicId || !statusId) {
            return res.status(400).json({ error: 'topic y status is required' });
        }

        const [data] = await db.query(
            "SELECT * FROM tasks WHERE topics_id = ? AND status = ?",
            [topicId, statusId]
        );

        return res.status(200).json(data);

    } catch (error) {
        console.error("Error en la consulta:", error);
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}

const postMyTasks = async (req, res) => {
    try {
        await db.connect();

        const { user_id, topics_id, title, priority, status } = req.body;

        const [result] = await db.query(
            "INSERT INTO tasks (user_id, topics_id, title, priority, status) VALUES (?, ?, ?, ?, ?)",
            [user_id, topics_id, title, priority, status]
        );

        return res.status(201).json({
            message: "Project added successfully",
            projectId: result.insertId,
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error: error
        })
    }
}

const putMyTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const { user_id, topics_id, title, priority, status } = req.body;

        const [result] = await db.query(
            "UPDATE tasks SET user_id = ?, topics_id = ?, title = ?, priority = ?, status = ? WHERE id = ?",
            [user_id, topics_id, title, priority, status, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tema no encontrado" });
        };

        return res.status(200).json({
            message: "tarea actualizado correctamente"
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error: error
        })
    }
};

const deleteMyTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await db.query(
            "DELETE FROM tasks WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.status(200).json({ message: "tarea eliminada con éxito" });
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        res.status(500).json({ message: "Error al eliminar la tarea", error });
    }
}

export { getMyTasks, postMyTasks, putMyTasks, deleteMyTasks } 