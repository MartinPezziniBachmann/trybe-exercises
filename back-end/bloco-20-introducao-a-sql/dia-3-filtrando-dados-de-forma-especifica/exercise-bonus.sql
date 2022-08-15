SELECT * FROM Scientists.Scientists WHERE name LIKE '%E%';

SELECT name FROM Scientists.Projects WHERE code LIKE 'A%' ORDER BY name;

SELECT code, name FROM Scientists.Projects WHERE code LIKE '%3%' ORDER BY name;

SELECT scientist FROM Scientists.AssignedTo WHERE project IN ('AeH3', 'Ast3', 'Che1');

SELECT * FROM Scientists.Projects WHERE hours > 500;

SELECT * FROM Scientists.Projects WHERE hours BETWEEN 250 AND 800;

SELECT code, name FROM Scientists.Projects WHERE code NOT LIKE 'A%';

SELECT name FROM Scientists.Projects WHERE code LIKE '%H%';
