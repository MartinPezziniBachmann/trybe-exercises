SELECT AVG(length) FROM film;

SELECT MIN(length) FROM film;

SELECT MAX(length) FROM film;

SELECT SUM(length) FROM film;

SELECT COUNT(film_id) AS 'Filmes Registrados' FROM film;

SELECT active, COUNT(customer_id) FROM customer
	GROUP BY active;

SELECT store_id, active, COUNT(*) FROM customer
	GROUP BY store_id, active;
    
SELECT rating, AVG(length) AS length FROM film
	GROUP BY rating
    ORDER BY length DESC;
    
SELECT  district, COUNT(address_id) AS quantity FROM address
	GROUP BY district
    ORDER BY quantity DESC;

SELECT rating, AVG(length) AS average_length
    FROM sakila.film
    GROUP BY rating
    HAVING average_length BETWEEN 115 AND 121.5
    ORDER BY average_length DESC;

SELECT rating, SUM(replacement_cost) AS total_replacement_cost
    FROM sakila.film
    GROUP by rating
    HAVING total_replacement_cost > 3950.5
    ORDER BY total_replacement_cost;
