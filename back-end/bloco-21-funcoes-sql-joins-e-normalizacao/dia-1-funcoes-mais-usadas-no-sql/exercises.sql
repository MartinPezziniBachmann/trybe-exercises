SELECT * FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS average_salary
	FROM hr.employees
	GROUP BY job_id
    ORDER BY average_salary DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary, SUM(salary) AS sum_salary, ROUND(AVG(salary), 2) AS average_salary FROM hr.employees;

SELECT COUNT(*) AS programadores FROM hr.employees WHERE job_id = 'it_prog';

SELECT job_id, SUM(salary) AS sum_salary FROM hr.employees
	GROUP BY job_id
    ORDER BY sum_salary DESC;

SELECT job_id, SUM(salary) AS sum_salary FROM hr.employees
	GROUP BY job_id
   	HAVING job_id = 'it_prog'
    ORDER BY sum_salary DESC;

SELECT job_id, AVG(salary) AS avg_salary FROM hr.employees
	GROUP BY job_id
	HAVING job_id <> 'it_prog'
    ORDER BY avg_salary DESC;

SELECT department_id, AVG(salary), COUNT(employee_id) FROM hr.employees
	GROUP BY department_id
    HAVING COUNT(employee_id) > 10;

UPDATE hr.employees
	SET phone_number = REPLACE(phone_number, '515', '777')
	WHERE phone_number LIKE '515%';

SELECT * FROM hr.employees
	WHERE CHAR_LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM hr.employees;

SELECT last_name, hire_date FROM hr.employees WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM hr.employees;
