-- Crear la base de datos
CREATE DATABASE taskly;

-- Seleccionar la base de datos para usarla
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
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Crear la tabla de tareas
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    topics_id INT,
    title VARCHAR(255) NOT NULL,
    priority TINYINT NOT NULL,  -- 1 = low, 2 = medium, 3 = high
    status TINYINT NOT NULL,    -- 1 = todo, 2 = in_progress, 3 = done
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (topics_id) REFERENCES topics(id) ON DELETE CASCADE
);