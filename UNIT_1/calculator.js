const calculator = () => {
    return {
        add: (a, b) => a + b,
        sub: (a, b) => a - b,
        mul: (a, b) => a * b,
        div: (a, b) => {
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        }
    };
};
const calc = calculator();

console.log(calc.add(35, 5)); 
console.log(calc.sub(20, 2)); 
console.log(calc.mul(64, 4)); 
console.log(calc.div(100, 0));
