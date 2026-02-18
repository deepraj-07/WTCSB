const calculator = () => {
    return (op, a, b) => {
        switch (op) {
            case "add":
                return (x, y) => x + y;
            case "sub":
                return (x, y) => x - y;
            case "mul":
                return (x, y) => x * y;
            case "div":
                return (x, y) => y !== 0 ? x / y : "Error aa gayi";
            default:
                return () => "Invalid operation";
        }
    };
};
const calc = calculator();
console.log(calc("add")(50, 5)); 
console.log(calc("sub")(40, 5));
console.log(calc("mul")(80, 5)); 
console.log(calc("div")(100, 0));
