SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
	SET first_name = 'JULES'
	WHERE first_name = 'JULIA';

SELECT * FROM sakila.actor;

UPDATE sakila.category
	SET name = 'Science Fiction'
    WHERE name = 'Sci-Fi';

SELECT * FROM sakila.category;

UPDATE sakila.film
	SET rental_rate = 25
    WHERE rating IN('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);

SELECT * FROM sakila.film;