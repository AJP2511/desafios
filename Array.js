function readArray(value) {
  // Criação de variáveis que utilizarei para armazear o dado de saída e comparar os valores internamente
  let different = [];
  let oldPair = 0;
  let oldOdd = 1;
  //primeiro for faz uma verificação nos index pares do array, procurando se eles possuem valores iguais, se ele encontrar um valor diferente, ele armazena no array different.
  for (let pair = 0; pair < value.length; pair += 2) {
    if (value[pair] !== value[oldPair]) {
      different.push(value[pair]);
    }
    oldPair = pair;
  }
  //segundo for faz uma verificação nos index ímpares do array, procurando se eles possuem valores iguais, se ele encontrar um valor diferente, ele armazena no array different.
  for (let odd = 1; odd < value.length; odd += 2) {
    if (value[odd] !== value[oldOdd]) {
      different.push(value[odd]);
    }
    oldOdd = odd;
  }
  //print do valor encontrado
  console.log(different);
}

// inserir o array na constante arrayToRead e executar o comando node ./Array.js

const arrayToRead = [9, 3, 9, 3, 9, 7, 9];
readArray(arrayToRead);
