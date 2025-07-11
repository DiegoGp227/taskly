-- Crear la base de datos
CREATE DATABASE taskly;

-- Seleccionar la base de datos
USE taskly;

-- Crear la tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Crear la tabla de proyectos (temas)
CREATE TABLE topics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    todo_count INT DEFAULT 0,
    done_count INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Crear la tabla de tareas
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    topics_id INT,
    title VARCHAR(255) NOT NULL,
    priority TINYINT NOT NULL,  -- 1 = low, 2 = medium, 3 = high
    status TINYINT NOT NULL,    -- 0 = todo, 1 = done
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (topics_id) REFERENCES topics(id) ON DELETE CASCADE
);

-- TRIGGER: Al insertar una tarea
DELIMITER $$
CREATE TRIGGER trg_after_insert_task
AFTER INSERT ON tasks
FOR EACH ROW
BEGIN
    IF NEW.status = 0 THEN
        UPDATE topics SET todo_count = todo_count + 1 WHERE id = NEW.topics_id;
    ELSE
        UPDATE topics SET done_count = done_count + 1 WHERE id = NEW.topics_id;
    END IF;
END$$
DELIMITER ;

-- TRIGGER: Al actualizar una tarea
DELIMITER $$
CREATE TRIGGER trg_after_update_task
AFTER UPDATE ON tasks
FOR EACH ROW
BEGIN
    IF OLD.status != NEW.status THEN
        IF OLD.status = 0 THEN
            UPDATE topics SET todo_count = todo_count - 1 WHERE id = NEW.topics_id;
        ELSE
            UPDATE topics SET done_count = done_count - 1 WHERE id = NEW.topics_id;
        END IF;

        IF NEW.status = 0 THEN
            UPDATE topics SET todo_count = todo_count + 1 WHERE id = NEW.topics_id;
        ELSE
            UPDATE topics SET done_count = done_count + 1 WHERE id = NEW.topics_id;
        END IF;
    END IF;
END$$
DELIMITER ;

-- TRIGGER: Al eliminar una tarea
DELIMITER $$
CREATE TRIGGER trg_after_delete_task
AFTER DELETE ON tasks
FOR EACH ROW
BEGIN
    IF OLD.status = 0 THEN
        UPDATE topics SET todo_count = todo_count - 1 WHERE id = OLD.topics_id;
    ELSE
        UPDATE topics SET done_count = done_count - 1 WHERE id = OLD.topics_id;
    END IF;
END$$
DELIMITER ;
