// "Основное задание"
function makeFibonacciFunction() {
  let previousNumber = -1, nextNumber = 1;

  const getNext = function () {
    let result = previousNumber + nextNumber;
    previousNumber = nextNumber;
    nextNumber = result;
    return result;
  }

  return getNext;
}

const fibonacci = makeFibonacciFunction();
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());

// "Со звёздочкой"

// const fibonacci = ((previousNumber = -1, nextNumber = 1) => () => {
// const result = previousNumber + nextNumber;
// previousNumber = nextNumber;
// nextNumber = result;
// return result;
// })()

// console.log(fibonacci());
// console.log(fibonacci());
// console.log(fibonacci());
// console.log(fibonacci());
// console.log(fibonacci());
// console.log(fibonacci());   
