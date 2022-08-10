SELECT * FROM Scientists.Scientists;

SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Scientists.Projects;

SELECT name FROM Scientists.Scientists ORDER BY name;

SELECT name FROM Scientists.Projects ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS tempo_de_trabalho FROM Scientists.Projects;
