SELECT * FROM hr.employees;

SELECT e.first_name employee, m.first_name manager
	FROM hr.employees e
    LEFT JOIN hr.employees m
    ON e.manager_id = m.employee_id
    WHERE e.department_id <> m.department_id;

SELECT m.first_name, COUNT(e.employee_id)
	FROM hr.employees m
    INNER JOIN hr.employees e
    ON m.employee_id = e.manager_id
    GROUP BY m.employee_id;