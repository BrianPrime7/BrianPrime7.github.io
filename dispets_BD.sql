CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    correo varchar NOT NULL,
    clave varchar NOT NULL,
    rol varchar NOT NULL DEFAULT usuario,
    PRIMARY KEY (id),
    UNIQUE KEY idx_unique_email (correo)
)
