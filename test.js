
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;    
    expect(dollars).toBe(expected); 
});

test("One dollar should be 146.26 yenes", function() {
    
    const yenes = fromDollarToYen(1);    
    const expected = (1 / 1.07) * 156.5;
    
    expect(yenes).toBeCloseTo(expected, 2); 
});


test("One thousand yenes should be 5.56 pounds", function() {
    
    const pounds = fromYenToPound(1000);    
    const expected = (1000 / 156.5) * 0.87;

    
    expect(pounds).toBeCloseTo(expected, 2); 
});