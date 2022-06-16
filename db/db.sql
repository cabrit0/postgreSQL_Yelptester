-- list DB           \l
-- create DB         CREATE DATABASE (nameDB)
-- connect DB        \c (nameDB)
-- list tables       \d
-- list nametable    \d (nameTable)
-- add column        ALTER TABLE (tableName) ADD COLUMN (nameColumn) (typeData)
-- delete column     ALTER TABLE (tableName) DROP COLUMN (nameColumn)
-- delete table      DROP TABLE (tableName)
-- select all        SELECT * FROM (tableName)


CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

INSERT INTO restaurants (id, name, location, price_range) 
    values(123, 'macdonalds', 'new york', 3);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >=1 and rating <= 5)
);

select trunc( AVG(rating), 3) as average_review from reviews;

SELECT AVG(rating) FROM reviews WHERE restaurant_id = 4;
SELECT trunc( AVG(rating), 2) AS average_rating FROM reviews WHERE restaurant_id = 4;

count(rating) FROM reviews WHERE restaurant_id = 4;

SELECT restaurant_id, count(restaurant_id) FROM reviews group by restaurant_id;

select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;