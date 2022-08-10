SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT project FROM Scientists.AssignedTo;

SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;

SELECT name FROM Scientists.Projects ORDER BY hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects ORDER BY hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(SSN), ' cientistas na tabela Scientists.') FROM Scientists.Scientists;
