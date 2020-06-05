let array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let contador = 0;
let arr = [];
let arrayMaster = [];
let x = array.length + 1;
let arrayTeste = array;
for (let i = 0; i < x; i++) {
  if (array[contador] === array[i]) {
    arr.push(array[i]);
    if ((teste = 1)) {
      arrayTeste.splice(i, 1, "");
      teste = 0;
    }
    teste = 0;
  } else if (array.length === i) {
    contador += 1;
    arrayMaster.push(arr);
    arr = [];
    i = 0;
  }
}
console.log(arrayMaster);
console.log(contador);
