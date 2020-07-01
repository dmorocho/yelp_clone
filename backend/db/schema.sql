DROP DATABASE IF EXISTS yelp_db;
CREATE DATABASE yelp_db;

\c yelp_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS operations;



CREATE Table users
(

    id VARCHAR PRIMARY KEY,
    fname VARCHAR,
    lastname VARCHAR,
    profile_pic VARCHAR,
    location VARCHAR,
    password VARCHAR,
    email VARCHAR UNIQUE NOT NULL,
    DOB VARCHAR,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


-- CREATE TABLE subscriptions
-- (
--     id SERIAL PRIMARY KEY,
--     submemmitID INT REFERENCES submemmits(id) ON DELETE CASCADE,
--     userID INT REFERENCES users(id) ON DELETE CASCADE,
--     CONSTRAINT UC_subscription UNIQUE (submemmitID, userID)
-- );

CREATE Table businesses
(

    id serial PRIMARY KEY,
    name VARCHAR,
    about VARCHAR,
    address VARCHAR,
    phone_number VARCHAR,
    owner VARCHAR REFERENCES users
(id) ON DELETE CASCADE,
    bizType VARCHAR,
    offer VARCHAR,
    hours VARCHAR,
    url VARCHAR,
    categories VARCHAR,
    amenities VARCHAR,
    images VARCHAR,
    latitude DECIMAL,
    longitude DECIMAL,
    budget VARCHAR
);

CREATE Table reviews
(
    id serial PRIMARY KEY,
    userid VARCHAR REFERENCES users(id) ON DELETE CASCADE,
    imageUrl VARCHAR,
    businessid int REFERENCES businesses(id) ON DELETE CASCADE,
    rating int,
    body varchar,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE Table features
(
    id serial PRIMARY KEY,
    businessid int REFERENCES businesses(id) ON DELETE CASCADE,
    parking boolean,
    curbside boolean,
    pets boolean,
    delivery boolean,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE Table operations
(
    id serial PRIMARY KEY,
    businessid int REFERENCES businesses(id) ON DELETE CASCADE,
    monday VARCHAR,
    tuesday VARCHAR,
    wednesday VARCHAR,
    thursday VARCHAR,
    friday VARCHAR,
    saturday VARCHAR,
    sunday VARCHAR
);





INSERT INTO users
    (id, fname, lastname, email, password)
VALUES
    ('D7UEGe1QDMf2N0e6ua8WAp7QdR43', 'Anthony', 'Stark', 'test1@test.com', 'abc123'),
    ('k9QYmbfmqAcuRyVCRhgEZKnI3hM2', 'Peter', 'Parker', 'test2@test.com', 'abc123'),
    ('cTNtuLAjMLWKfkWEzeBXidv3P3k2', 'Jessica', 'Drew', 'test3@test.com', 'abc123');


INSERT INTO businesses
    (name, address, phone_number, categories, url, images, latitude,longitude,budget)
VALUES
    ('Black Nile', '592 Nostrand Avenue Brooklyn, NY', '(347) 879-8911', 'Seafood', 'https://blacknilerestaurant.com/', ' https://www.dinneratthezoo.com/wp-content/uploads/2019/05/seafood-boil-5-500x500.jpg', 40.678250, -73.950010, '1' ),
    ('The Soul Spot', '302 Atlantic Avenue, Brooklyn, NY', '(718) 596-9933', 'Southern Soul / Caribbean Cooking', 'https://soulspotrestaurant.com/', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d8n9qr8jfrri5wcpda5i.jpg', 40.688230, -73.988870, '2'),
    ('Hills Kitchen', '252 Knickerbocker Avenue, Brooklyn, NY', '(929) 480-8775', 'African', 'https://hillskitchenonline.com/', 'https://www.calgaryjournal.ca/uploads/Africanfood.jpg', 40.700943, -73.921680, '2'),
    ('Cafe Rue Dix', '1451 Bedford AvenueBrooklyn,NY', '(929) 234-2543', 'Cafe', 'https://www.caferuedix.com/', 'https://images.squarespace-cdn.com/content/v1/53fccdc3e4b06d598890737d/1411587633081-XO2AF5IYI84A06SZMKLE/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/GINGERWHITECOFFEELAND.jpg?format=1500w', 40.673520, -73.953610, '2' ),
    ('Le Baobab Gouygui', '120 West 116th Street Manhattan', '(212) 864-4700', 'West African', '', 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/44/54/47/UkXwrHEdQ7GY9oWZnRk3_authentic-west-african-jollof-rice-3447.jpg', 40.802320, -73.951120, '3'),
    ('Las Lap', '74 Orchard St, New York, NY 10002', '(646) 484-6002', 'Caribbean', 'laslapnewyork.com', 'https://www.classic-collection.co.uk/blog/wp-content/uploads/2017/04/14203653_ml-medium.jpg', 40.717590, -73.990220, '3'),
    ('Urban Vegan Kitchen', '41 Carmine St, New York, NY 10014', '(646) 438-9939', 'Vegan', 'https://urbanvegankitchen.com/', 'https://media.guestofaguest.com/t_article_content/gofg-media/2019/02/1/51945/46549273_1978712398909449_4751202885380127128_n_(2).jpg', 40.730190, -74.003662, '4'),
    ('Harlem Seafood Soul', 'W.125th St & 7th Ave, New York, NY', '(212) 212-2121', 'Seafood', 'https://www.instagram.com/harlemseafoodsoul/', 'https://rasamalaysia.com/wp-content/uploads/2019/12/seafood-boil-thumb-new.jpg', 40.750992, -73.990623, '3'),
    ('Sabor De Cuba', '3703 31st Ave Astoria, NY 11103', '(718) 777-1693', 'cuban', 'sabordecubaastoria.com', 'https://assets.dmagstatic.com/wp-content/uploads/2018/09/the-latin-pig.jpg', 39.743943, -73.918290, '3'),
    ('La Vecina', '30-66 Steinway St Astoria, NY 11103', '(718) 433-9399', 'Colombian', 'lavecinaastoria.com', 'https://bigseventravel.com/wp-content/uploads/2019/10/colombias-bandeja-paisa.jpg', 40.762257, -73.916326, '2');
INSERT INTO reviews
    (userid, businessid, rating, body)
VALUES
    ('D7UEGe1QDMf2N0e6ua8WAp7QdR43', 4, 4, 'Good Cafe'),
    ('k9QYmbfmqAcuRyVCRhgEZKnI3hM2', 1, 4, 'really good Cafe'),
    ('cTNtuLAjMLWKfkWEzeBXidv3P3k2', 4, 4, 'really good food'),
    ('D7UEGe1QDMf2N0e6ua8WAp7QdR43', 3, 4, 'great rice'),
    ('k9QYmbfmqAcuRyVCRhgEZKnI3hM2', 2, 5, 'really good Cafe'),
    ('D7UEGe1QDMf2N0e6ua8WAp7QdR43', 5, 4, 'came here when I was hungry, turned out to be really good'),
    ('cTNtuLAjMLWKfkWEzeBXidv3P3k2', 6, 2, 'could have been better'),
    ('k9QYmbfmqAcuRyVCRhgEZKnI3hM2', 3, 3, 'The enviroment was nice but the wait time was long');


INSERT INTO features
    ( businessid , parking, curbside, pets,delivery)
VALUES
    (1, true, false, true, true),
    (2, false, true, true, false),
    (3, true, true, false, true),
    (4, true, false, true, true),
    (5, true, true, true, true),
    (6, false, true, true, false),
    (7, true, true, true, true),
    (8, true, true, false, true),
    (9, true, true, false, true),
    (10, true, true, false, true);

INSERT INTO operations
    (businessid ,monday, tuesday, wednesday,thursday,friday,saturday,sunday)
VALUES
    (1, '9,19', '9,19', '9,19', '9,19', '9,19', '9,19', '9,19'),
    (2, '10,17', '10,17', '10,17', '10,17', '10,17', '10,17', '10,17'),
    (3, '9,20', '9,20', '9,20', '9,20', 'closed', '9,20', '9,20'),
    (4, '9,15', '9,15', '9,15', '9,15', '9,15', '9,15', '9,15'),
    (5, 'closed', 'closed', 'closed', '9,15', '9,15', '9,15', '9,15'),
    (6, '11,20', 'closed', '11,20', '11,20', '11,20', '11,20', '11,20'),
    (7, 'closed', '12,20', '9,15', '9,15', '9,15', '12,20', '12,20'),
    (8, 'closed', '9,15', '9,15', '9,15', '9,15', '9,15', '9,15'),
    (9, 'closed', '9,15', '9,15', '9,15', '9,15', '12,20', '12,20'),
    (10, '12,15', '12,15', '12,20', '12,20', '12,15', '12,20', '12,20');


 

    -- name
    -- about
    -- address
    -- phone_number NUMERIC,
    -- owner int REFERENCES users(id) ON DELETE CASCADE,
    -- bizType
    -- offer
    -- hours
    -- categories
    -- amenities
    -- images
    -- latitude
    -- longitud