SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'Karl';

DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'Matthew';

SELECT * FROM sakila.film_actor;

SELECT * FROM sakila.actor;

DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

SELECT * FROM sakila.film_text;

TRUNCATE sakila.film_actor;

SELECT * FROM sakila.film_actor;

TRUNCATE sakila.film_category;

SELECT * FROM sakila.film_category;
