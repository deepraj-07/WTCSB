console.log("1) Start");

const p = new Promise((resolve, reject) => {
  console.log("2) Promise created ");
  setTimeout(() => {
    resolve("3) Work finished");
  }, 1000);
});

console.log("4) After creating promise");

p.then((value) => {
  console.log(value);
  console.log("5) then() runs only when promise is resolved");
})
.catch((error) => {
  console.log(error);
})
.finally(() => {
  console.log("Promise finished");
});

console.log("6) End (JS keeps running; then will run later)");
