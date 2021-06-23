CREATE DATABASE inventarios;

USE inventarios;

CREATE TABLE elemento(
    id_elem INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    elemento TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE elemento;

INSERT INTO elemento(title, elemento) values ("pan", "20");

SELECT * FROM elemento;