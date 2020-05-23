DROP DATABASE iF EXISTS yelp_db;
CREATE DATABASE yelp_db;

\c yelp_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS reviews;



CREATE Table users
(

    id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    profile_pic VARCHAR,
    password VARCHAR
    (50) NOT NULL,
    email VARCHAR
    (355) UNIQUE NOT NULL,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
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
    name varchar,
    address varchar,
    owner int REFERENCES users(id) ON DELETE CASCADE,
    bizType varchar,
    offer varchar,
    images VARCHAR
);

CREATE Table reviews
(
    id serial PRIMARY KEY,
    userid int REFERENCES users(id) ON DELETE CASCADE,
    imageUrl VARCHAR,
    businessid int REFERENCES businesses(id) ON DELETE CASCADE,
    rating int,
    body varchar,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

