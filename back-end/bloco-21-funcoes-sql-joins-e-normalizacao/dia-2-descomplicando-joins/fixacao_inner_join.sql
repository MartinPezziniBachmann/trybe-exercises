SELECT * FROM actor;

SELECT * FROM film_actor;

SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS name, f.film_id
	FROM actor AS a
    INNER JOIN film_actor AS f
    ON a.actor_id = f.actor_id;

SELECT * FROM staff;

SELECT * FROM address;

SELECT s.first_name, s.last_name, a.address
	FROM staff s
    INNER JOIN address a
    ON s.address_id = a.address_id;

SELECT * FROM customer;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
	FROM customer c
    INNER JOIN address a
    ON c.address_id = a.address_id
    ORDER BY c.first_name DESC
    LIMIT 100;
    
SELECT c.first_name, c.email, a.address, a.district
	FROM customer c
    INNER JOIN address a
    ON c.address_id = a.address_id
	WHERE c.first_name LIKE '%rene%'
    AND a.district = 'California';

SELECT
    c.first_name,
    COUNT(a.address) AS `quantidade de endereço`
FROM
    sakila.customer c
INNER JOIN
    sakila.address AS a ON a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    first_name DESC,
    last_name DESC;

SELECT * FROM payment;

SELECT * FROM staff;

SELECT s.first_name, s.last_name, AVG(p.amount) 'Média de pagamento'
	FROM staff s
    INNER JOIN payment p
    ON s.staff_id = p.staff_id
    WHERE YEAR(p.payment_date) = 2006
    GROUP BY s.staff_id;

SELECT
    a.actor_id,
    a.first_name,
    f.film_id,
    f.title
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN
    sakila.film AS f ON f.film_id = fa.film_id;
    