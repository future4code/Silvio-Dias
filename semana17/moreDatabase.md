#AprofundamentoSQL

##Exercicio 1

a) Apaga coluna salário

b) Altera nome da coluna gender para sex

c) Não encontra mais valore gender

d) ALTER TABLE Actor CHANGE sex gender VARCHAR(100);

##Exercicio 2

a) UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003"

b)UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c)UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

##Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) DELETE FROM Actor WHERE salary > 1000000 AND gender = "male"

##Exercicio 4

a) SELECT MAX(salary) FROM Actor

b) SELECT MIN(salary) FROM Actor WHERE gender = "female"

c) SELECT COUNT(*) FROM Actor WHERE gender = "female"

d) SELECT SUM(salary) FROM Actor

##Exercicio 5

a) Exibe os 3 primeiros da tabela

b) SELECT id FROM Actor ORDER BY name DESC 

c) SELECT * FROM Actor ORDER BY salary DESC 

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

##Exercicio 6   

a) ALTER TABLE Movies ADD playing_limit_date DATE;

b) ALTER TABLE Movies CHANGE Score Score FLOAT;

c) UPDATE Movies
SET playing_limit_date = "2021-07-25"
WHERE Name = "Se Eu Fosse Você";

UPDATE Movies
SET playing_limit_date = "2020-07-25"
WHERE Name = "Cidade de Deus";

d) Exibi tabela vazia

##Exercicio 7

a) 3

b)9.3

c) 0 (Apaguei o filme em estreia)

e) 10

f) 8

##Exercicio 8