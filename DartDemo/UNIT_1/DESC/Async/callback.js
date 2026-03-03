// console.log("first");
// console.log("second");
// /////--------Async Callback Example--------/////
// console.log("third");

// function aa (){
//     console.log("first");
// }
// setTimeout(aa, 4000);

// let count = 0;

// const intervalId = setInterval(() => {
//     console.log("first");
//     count++;

//     if (count === 5) {
//         clearInterval(intervalId);
//     }
// }, 2000);

function roll(num, next) {
    setTimeout(() => {
        console.log("Roll.no. is:", num);
        if (next) next();
    }, 2000);
}

roll(12212, () => {
    console.log("Wait its getting downloaded...");
    roll(12312, () => {
        console.log("wait its getting downloaded..");
        roll(12412, () => {
            console.log("wait its almost done.");
        })
    })
})
//this is callback hell and we can avoid this by using promises and async await.
//set all roll no with different setTimeout  and call them one by one using callback function.


//Q.Consider the following JavaScript program.It maintains two arrays named uiTeam and flutterTeam.The function showMenu() prints both teams separately and then prints a merged list of both teams using the spread operator.The function display(teamType, option) uses a switch statement to display a team based on the value of teamType.
// Arrays for teams
const uiTeam = ["HTML", "CSS", "JavaScript"];
const flutterTeam = ["Dart", "Flutter", "Firebase"];

// Function to display team based on type
const display = (teamType, option) => {
    switch (teamType) {
        case "UI":
            console.log("UI Team:", uiTeam);
            break;

        case "FLUTTER":
            console.log("Flutter Team:", flutterTeam);
            break;

        case "ALL":
            const mergedTeam = [...uiTeam, ...flutterTeam]; // spread operator
            console.log("All Teams:", mergedTeam);
            break;

        default:
            console.log("Invalid team type");
    }
};

// Function to show menu and teams
const showMenu = () => {
    console.log("UI Team Members:");
    console.log(uiTeam);

    console.log("\nFlutter Team Members:");
    console.log(flutterTeam);

    console.log("\nMerged Team Members:");
    const merged = [...uiTeam, ...flutterTeam];
    console.log(merged);
};

// Function calls
showMenu();
display("UI");
display("FLUTTER");
display("ALL");

//Q. Write an arrow function isEven(num) that takes a number as input and returns "Even" if the number is even, otherwise returns "Odd".
const isEven = (num) => {
    if (num % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}   