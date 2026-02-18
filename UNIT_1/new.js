const aa = () => { return { user: "name" } };
console.log(aa());

const bb= () => [1,2,3,4,5,6];
console.log(bb());

const user= {
    name: "aj", age:22,
    welcome: function() {
        console.log(`hello ${this.name}`);
        //temporal literal back ticks
        console.log(this);
    }
};

const f =user.welcome();
console.log(f);
// user.name="ajay";
// user.welcome();
//const cc = user.welcome;