#Respostas

##Exercicio 1

a) Varchar = String
    DATE = formato de data 
    Primary Key = id da tabela

b)  Show Database = Exibi as databases 
    Show Tables = Exibi tabelas da database selecionada

c) Decribe exibe as caracteriticas do conteudo da tabela

##Exercicio 2

a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) MySQL não aceita id duplicada 

c) A tabela exige que todas as informações sejam preenchidas e faltam direções na query

d)Não enviou nome e não pode ter algo faltando preencher

##Exercicio 3

a) SELECT * FROM actor WHERE gender = "female"

b)SELECT salary FROM actor WHERE name = "Tony Ramos"

c)Não exibe nada, pois apenas temos gender male e female