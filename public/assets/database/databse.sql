-- Next, drop the database if it exists
DROP DATABASE IF EXISTS CoolWear;

-- Now, create the database
CREATE DATABASE CoolWear;
USE CoolWear;
-- First, drop tables if they exist
DROP TABLE IF EXISTS BUYPRODUCT;
DROP TABLE IF EXISTS PRODUCT;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS USER;


-- Create the USER table
CREATE TABLE USER (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    img_user VARCHAR(500),
    name_user VARCHAR(50),
    phone_user VARCHAR(15),
    email_user VARCHAR(150),
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
    description_product VARCHAR(10000),
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
    fk_id_user INT,
    fk_id_product INT,
    FOREIGN KEY (fk_id_user) REFERENCES USER(id_user),
    FOREIGN KEY (fk_id_product) REFERENCES PRODUCT(id_product)
);




INSERT INTO CATEGORY (name_category) VALUES ('Shirts'),('Dress Bags'),('Shoes');

INSERT INTO USER (email_user,password_user) VALUES ('admin@admin','admin');

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/armaniBlack.png','Armani Black','Descubre la esencia del lujo casual con nuestra camisa de manga corta Armani en negro. Sofisticación sin esfuerzo y calidad excepcional se unen en esta prenda icónica. Desde un look elegante para una noche especial hasta un estilo relajado y sofisticado, esta camisa se adapta a todas tus ocasiones. Experimenta la moda de Armani y destaca en cada momento.',250000.00,15,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/armaniBlueElegant.png','Armani Mangas largas','Armani es sinónimo de lujo y estilo, y esta prenda no es una excepción. Su diseño con mangas largas te ofrece versatilidad y comodidad en cada ocasión. Ya sea para una reunión importante o una salida casual, esta camisa te asegura un aspecto sofisticado y con clase. La calidad excepcional de Armani se refleja en cada costura, asegurándote que estás vistiendo lo mejor de la moda.',1200000.00,5,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/armaniNewBlack.png','Armani New Black','No dejes que el estilo pase desapercibido! Nuestra camisa Armani de manga corta en color negro con un estampado de alto impacto en el pecho es la clave para convertirte en el centro de atención. Llévala y prepárate para recibir elogios y miradas de admiración. Esta prenda no es solo una camisa, es una declaración de moda que grita audacia y confianza.',250000.00,10,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/BossBlue.png','Boss Blue','Imagina un mundo donde tu estilo habla por ti. Con nuestra camisa de manga corta "Boss" en azul, esa visión se convierte en realidad. Esta prenda no es simplemente una camisa, es un boleto para un nivel superior de sofisticación. Cuando la vistes, te conviertes en el jefe de tu estilo, listo para conquistar cualquier situación.',320000.00,18,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/bossElegant.png','Boss classic en negro','La elegancia atemporal cobra vida con nuestra exclusiva camisa "Boss" de manga larga en un sofisticado negro. Esta no es solo una prenda de vestir, es una declaración de estilo que trasciende las tendencias. Con su diseño impecable, esta camisa es una obra maestra de la moda que te brinda un look elegante y distinguido en cualquier ocasión.',650000.00,4,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/calvinKleinWhite.png','Calvin Klein blanca','La simplicidad nunca se ha visto tan bien. Nuestra camisa básica de manga corta Calvin Klein en blanco es un claro ejemplo de cómo la elegancia puede encontrarse en la sencillez. Esta prenda es un lienzo en blanco para tu estilo personal, listo para ser personalizado a tu gusto.',280000.00,5,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/calvinkleinBlack.png','Calvin Klein negra','La esencia del minimalismo y el estilo se unen en nuestra camisa Calvin Klein de manga corta en un elegante negro con el icónico logo de la empresa en el pecho. Esta prenda es mucho más que una camisa; es una declaración de moda que lleva la simplicidad a un nuevo nivel.',280000.00,5,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/gucciBlack.png','Gucci Black','La camisa Gucci en negro con el icónico logo en el pecho es la epítome del lujo y la moda en su máxima expresión. Cuando buscas la excelencia, Gucci es la respuesta, y esta camisa lo demuestra con elegancia.',320000.00,10,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/hugoDulivioBlack.png','Hugo Dulivio Black','El negro elegante se combina con el rojo vibrante para crear un contraste que no pasa desapercibido. Cada vez que te pones esta camisa, estás transmitiendo confianza y originalidad. Es una prenda que se destaca en la multitud y te permite expresar tu personalidad con estilo.',280000.00,7,1);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shirts/poloGrey.png','Camisa Polo Gris','El gris atemporal es un lienzo versátil para tu estilo, y la camisa polo de manga corta es el lienzo perfecto para mostrar tu individualidad. Ya sea para una tarde de golf o una cena al aire libre, esta camisa se adapta a todas tus actividades, manteniendo tu aspecto fresco y relajado.',600000.00,10,1);



INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/addidasBlack.png','Saco Adidas Negro','El saco Adidas en negro con el icónico logo en el pecho es la expresión perfecta de la moda deportiva y el estilo urbano. Esta prenda combina la comodidad y el diseño de alta calidad que esperas de Adidas.',150000.00,40,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/addidasBlue.png','Saco Adidas Azul','El azul claro evoca una sensación de frescura y energía, mientras que el logo de Adidas le añade un toque de deportividad y moda. Este saco es más que una prenda deportiva; es una declaración de estilo que encaja perfectamente en tu vida activa y en tus aventuras cotidianas.',1500000.00,40,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/foxBlack.png','Saco Fox negro clásico','El negro enigmático se une al legendario logo de Fox para crear un saco que va más allá de la moda deportiva; es una declaración de identidad para aquellos que buscan la emoción y la pasión en su vida.',90000.00,20,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/foxBlue.png','Saco fox azul clásico','El saco azul clásico de la marca Fox es la elección perfecta para quienes aman la moda y la aventura. Esta prenda combina la funcionalidad de alto rendimiento que caracteriza a Fox con un estilo icónico.',90000.00,20,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/kuvablue.png','Saco kuva azul','El azul oscuro es sinónimo de clase y refinamiento, y este saco lleva la esencia de la marca Kuva en cada detalle. Ya sea para una ocasión especial o para elevar tu estilo diario, este saco es la elección perfecta.',85000.00,4,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/nikeBlack.png','Saco Nike negro','Nike es un referente en moda deportiva y calidad insuperable, y este saco lo refleja a la perfección. ¿Estás listo para destacar con un estilo que combina el rendimiento y la moda? Haz que cada día sea una expresión de tu pasión por el deporte y la individualidad.',180000.00,2,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/nikeRed.png','Saco nike multicolor','Los tonos de vino, blanco y rojo aportan un toque de vitalidad y dinamismo a tu atuendo, mientras que el logo de Nike en el pecho anuncia tu compromiso con el rendimiento y la moda. Cada vez que te pones este saco, estás listo para enfrentar tus desafíos con un toque de originalidad y energía.',180000.00,12,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/pumaBlack.png','Saco puma negro','Puma es un referente en moda deportiva y calidad insuperable, y este saco refleja esa reputación. ¿Estás listo para llevar tu estilo al siguiente nivel mientras mantienes la comodidad y el estilo? Haz que cada día sea una expresión de tu pasión por la moda y el rendimiento.',230000.00,10,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/pumaGrey.png','saco puma gris','El gris es sinónimo de versatilidad y elegancia, y el logo de Puma a la derecha agrega un toque de autenticidad y estilo único. Cada vez que te pones este saco, estás listo para destacar en cualquier ocasión, ya sea en tus actividades deportivas o en tu día a día.',230000.00,5,2);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/dressBags/pumaRed.png','saco puma rojo','El rojo vibrante es un llamado a la acción y la energía, y este saco te permite expresar tu entusiasmo en cada paso que das. Ya sea en el gimnasio, en la calle o en tus aventuras diarias, este saco es la declaración perfecta de tu amor por la moda deportiva.',230000.00,5,2);


INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/adidasCoreWhite.png','Adidas core blancos','Los zapatos Adidas Core en un blanco limpio son la esencia del estilo y la versatilidad. Estos zapatos son mucho más que un accesorio; son una declaración de moda que te permite destacar en cualquier ocasión.',180000.00,12,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/adidasFalconBlack.png','Adidas falcon en negro','os Adidas Falcon combinan la esencia de la marca con un toque de originalidad y rebeldía. Cada paso que das en estos zapatos es una declaración de confianza y estilo único. Ya sea en la calle, en una reunión o en una salida con amigos, estos sneakers te mantendrán a la vanguardia de la moda.',180000.00,10,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/airForceBlack.png','Air force en negro','Los Nike Air Force en negro son la elección definitiva para quienes buscan lo mejor de ambos mundos: estilo y confort. ¿Estás listo para unirte a la legión de aficionados a estos zapatos icónicos? Haz una declaración de moda con los Nike Air Force y experimenta el confort y el diseño que los convierten en los más vendidos del mercado.',230000.00,60,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/airMaxWhite.png','air max en blanco','Cada paso en los Nike Air Max es una experiencia de comodidad y estilo excepcionales. Estos sneakers son más que un calzado; son una declaración audaz de tu pasión por la moda y la innovación. Ya sea en la cancha o en la calle, estos zapatos te permiten destacar con confianza.',180000.00,10,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/jordanBlack.png','Jordan Clasicos','Los zapatos Jordan clásicos en negro y rojo son una oda al legado del icónico Michael Jordan y un tributo a los amantes de la moda de bota. Con su combinación de colores atemporales, estos sneakers no son simplemente un par de zapatos, son una declaración de pasión por el baloncesto y el estilo',240000.00,5,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/nikeCourtLegacyBlack.png','Nike Court legacy en negro','os Nike Court Legacy en negro son la personificación del estilo clásico y la versatilidad. Estos sneakers son la elección perfecta para quienes buscan un look atemporal con un toque contemporáneo.',230000.00,4,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/nikeDunkLowBlack.png','Nike Dunk Low en negro','Con su diseño en negro, los Nike Dunk Low son la elección perfecta para quienes buscan un look elegante y sofisticado. Ya sea que los combines con jeans, pantalones cortos o pantalones de vestir, estos zapatos te brindan un aspecto impecable en cualquier ocasión.',150000.00,10,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/pumaIgniteBlack.jpg','puma Ignite en negro','Con su diseño en negro, los Puma Ignite son una elección de estilo y elegancia. Su comodidad excepcional y su diseño innovador te permiten destacar en cualquier actividad, ya sea en el gimnasio, en la pista o en la ciudad. Cada paso en estos zapatos es una afirmación de confianza y energía.',230000.00,6,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/pumaRomaBlack.png','Puma Roman en negro','Los Puma Roman en negro son una fusión de estilo y comodidad que se adapta perfectamente a tu vida activa. Estos sneakers no solo son una elección de calzado, sino una declaración de tu pasión por la moda y el rendimiento.',150000.00,6,3);

INSERT INTO PRODUCT (img_product, name_product,description_product,price_product,stock_product,fk_category_id) VALUES ('../product/shoes/pumaRomaGreen.png','Puma Roman Verdes','Con su vibrante diseño en verde, los Puma Roman te permiten destacar con confianza en cualquier contexto. Ya sea en la pista, en el gimnasio o en la ciudad, estos zapatos son un tributo a la frescura y la energía. Cada paso que das es una afirmación de tu estilo distintivo.',150000.00,6,3);