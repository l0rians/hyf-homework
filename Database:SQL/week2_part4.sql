CREATE DATABASE IF NOT EXISTS farm;

USE farm;

CREATE TABLE Farm (
    farm_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255)
);

CREATE TABLE Field (
    field_id INT PRIMARY KEY AUTO_INCREMENT,
    farm_id INT,
    name VARCHAR(100) NOT NULL,
    size INT,
    FOREIGN KEY (farm_id) REFERENCES Farm(farm_id)
);

CREATE TABLE Crop (
    crop_id INT PRIMARY KEY AUTO_INCREMENT,
    field_id INT,
    type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (field_id) REFERENCES Field(field_id)
);

CREATE TABLE Livestock (
    livestock_id INT PRIMARY KEY AUTO_INCREMENT,
    species VARCHAR(50) NOT NULL,
    age INT
);

CREATE TABLE Barn (
    barn_id INT PRIMARY KEY AUTO_INCREMENT,
    farm_id INT,
    type VARCHAR(50) NOT NULL,
    FOREIGN KEY (farm_id) REFERENCES Farm(farm_id)
);

CREATE TABLE Barn_Livestock (
    barn_id INT,
    livestock_id INT,
    PRIMARY KEY (barn_id, livestock_id),
    FOREIGN KEY (barn_id) REFERENCES Barn(barn_id),
    FOREIGN KEY (livestock_id) REFERENCES Livestock(livestock_id)
);
