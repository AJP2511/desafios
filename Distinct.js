function distinct(value) {
  //Organizo os itens do array em ordem crescente
  const sortedArray = value.sort();
  let equals = [];
  //for para verificação unitária conforme index
  for (let i = 0; i < sortedArray.length; i++) {
    //condição primária de que se o valor correspondente ao index atual for diferente do proximo index ele entra para a próxima ação.
    if (sortedArray[i] !== sortedArray[i + 1]) {
      //caso o valor selecionado NÃO exista no array "equals" ele será adicionado.
      if (!equals.includes(sortedArray[i])) {
        equals.push(sortedArray[i]);
      }
    }
  }

  console.log(equals);
}

const arrayToTest = [2, 6, 8, 3, 6, 8, 3, 2, 8, 6, 2, 3];
distinct(arrayToTest);
