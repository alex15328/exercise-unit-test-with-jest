// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
  };
    
  const sum = (a, b) => {
    return a + b;
  };
  
  
  const fromDollarToYen = function (valueInDollar) { 
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
   
    return valueInYen;
  };
  
 
  const fromYenToPound = function (valueInYen) {
    
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
  };
  
  
  console.log(sum(7, 3)); // --> 10

  module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };