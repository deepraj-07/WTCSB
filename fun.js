// (function show(){
//     console.log("Welcome to CSB");
    
// })();
//IIFE - Immediately Invoked Function Expression


// const show =(()=>{
//     console.log("Welcome to CSB");
// }
// )();;
// show();
//Arrow function with IIFE

function person() {
    this.age=25;

    setTimeout(function () {
        console.log(this.age);
    }, 1000);
}
new person();
//The this inside the normal fucntion refers to the global object , not the Person object
//In regular function this refers to global object

function person() {
    this.age=25;

    setTimeout(() => {
        console.log(this.age);
    }, 1000);
}
new person();
//In arrow function this refers to the enclosing context , here it is Person object