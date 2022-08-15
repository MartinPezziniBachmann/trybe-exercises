SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY fornecedor;

SELECT * FROM PecasFornecedores.Fornecimentos WHERE fornecedor LIKE '%n%';

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%s%';

SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY code;

SELECT * FROM PecasFornecedores.Vendas WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
