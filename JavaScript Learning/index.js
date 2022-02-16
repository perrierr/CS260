//Welcome message

//let welcomeEl = document.getElementById("welcome-el");
//let myName = "Rachel";
//let greeting = "Welcome back " + myName;
//welcomeEl.innerText = greeting;
//welcomeEl.innerText = welcomeEl.innerText + "!!!";



let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

//Create a function, save() which logs out the count when it is calledlet saveEl = document.getElementById("save-el");
//Create a varaible that contains both the count and the dash separator
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    //Reset to zero
    count = 0;
    countEl.innerText = count;
}



