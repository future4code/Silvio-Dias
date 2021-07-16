type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a: Eu escreveria tsc no node.js
//b: Não seria diferente pois no tsconfi está configurado para reconhecer src e a pasta build para js
//c: Com os arquivos nas pastas corretas e com o tsconfi configurado no outDir e rootDir, todos os arquivos são transpilados 
//O mais impressionante do arquivo criado com tsc --init é a quantidade de configurações e possibilidades do TypeScript