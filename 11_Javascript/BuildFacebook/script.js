document.write("Hello");

var dataBase = [
    {username: "t0mi91",
    password: "12345"}
];

var newsFeed = [
    {username: "Vixi",
    timeline: "What a rainy day!"},

    {username: "Zsolti",
    timeline: "Yes, it is a rainy day!"},

    {username: "Szandi",
    timeline: "The weather is cold too."}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function SignIn(user, pass){
    if(user === dataBase[0].username && pass === dataBase[0].password){
        console.log(newsFeed);
    }
    else{alert("Sorry, wrong username or password.")}
};

SignIn(userNamePrompt, passwordPrompt);