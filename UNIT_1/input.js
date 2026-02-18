const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter something: ",
    // console.log(`You entered: ${answer}`);
    // r1.close();
    (answer) => {
        console.log("You entered:", answer);
});
r1.close();
