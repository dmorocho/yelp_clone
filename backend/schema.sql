DROP DATABASE iF EXISTS yelp_db;
CREATE DATABASE yelp_db;

\c yelp_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS reviews;



CREATE Table users
(

    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    profile_pic url,
    password VARCHAR
    (50) NOT NULL,
    email VARCHAR
    (355) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP

)



CREATE Table reviews
(
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id) ON DELETE CASCADE,
    image url,
    business_id int REFERENCES businesses(id) ON DELETE CASCADE,
    rating int,
    body varchar,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE Table businesses
(

    id serial PRIMARY KEY,
    name varchar,
    address varchar,
    owner int REFERENCES users(id) ON DELETE CASCADE,
    type varchar,
    offer varchar,
    images url,
) 


