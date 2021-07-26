export  const randomNumber = (list) => { //Cria números aleatórios 
    const number = Math.floor(Math.random() * list.length);
    return number
}