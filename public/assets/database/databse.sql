-- First, drop tables if they exist
DROP TABLE IF EXISTS BUYPRODUCT;
DROP TABLE IF EXISTS PRODUCT;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS USER;

-- Next, drop the database if it exists
DROP DATABASE IF EXISTS CoolWear;

-- Now, create the database
CREATE DATABASE CoolWear;
USE CoolWear;

-- Create the USER table
CREATE TABLE USER (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(50),
    phone_user VARCHAR(15),
    email_user VARCHAR(50),
    password_user VARCHAR(50)
);

-- Create the CATEGORY table
CREATE TABLE CATEGORY (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    name_category VARCHAR(50)
);

-- Create the PRODUCT table with a foreign key
CREATE TABLE PRODUCT (
    id_product INT AUTO_INCREMENT PRIMARY KEY,
    img_product VARCHAR(300),
    name_product VARCHAR(100),
    description_product VARCHAR(300),
    price_product DECIMAL(10,2),
    stock_product INT,
    fk_category_id INT,
    FOREIGN KEY (fk_category_id) REFERENCES CATEGORY(id_category)
);

-- Create the BUYPRODUCT table with two foreign keys
CREATE TABLE BUYPRODUCT (
    id_buy_product INT AUTO_INCREMENT PRIMARY KEY,
    purchase_date DATE,
    total_price DECIMAL(10,2),
    fk_user_id INT,
    fk_product_id INT,
    FOREIGN KEY (fk_user_id) REFERENCES USER(id_user),
    FOREIGN KEY (fk_product_id) REFERENCES PRODUCT(id_product)
);

-- Insert the CATEGORY DATE

Insert into CATEGORY (name_category) values ('Camisa'),('Pantalon'),('Zapato');