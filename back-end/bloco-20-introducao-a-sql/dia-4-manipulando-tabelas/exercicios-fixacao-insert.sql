INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Martin', 'Bachmann', 5, 'oitudobem@gmail.com', 1, 1, 'Martin', 'abc123qwerty098');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Pedro', 'Silva', 3, 'pedro@gmail.com', 1, 1, 'Pedro', 'abc123qwerty098'),
('Ana', 'Soares', 2, 'anas@gmail.com', 2, 1, 'Ana', 'abc123qwerty098');

SELECT * FROM sakila.staff;

INSERT INTO sakila.actor (first_name, last_name)
	SELECT sakila.customer.first_name, sakila.customer.last_name
    FROM sakila.customer
    LIMIT 5;

SELECT * FROM sakila.customer;

SELECT * FROM sakila.actor;

INSERT INTO sakila.category (name)
VALUES ('Cooking'), ('Reality Show');

SELECT * FROM sakila.category;

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

SELECT * FROM sakila.store;
