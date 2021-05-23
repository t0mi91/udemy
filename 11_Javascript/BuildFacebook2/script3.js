var dataBase = [
{  
    username: "t0mi91",
    password: "12345"
},
{   
    username: "sally",
    password: "123"
},
{
    username: "ingrid",
    password: "777"
}
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


function isUserValid (username, password){
    for (i=0; i<dataBase.length; i++){
        if(dataBase[i].username ===username &&
            dataBase[i].password === password){
                return true;
            }
    }
    return false;
}

function SignIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsFeed);
    }
    else{
        alert("Sorry, wrong username or password.");
    }
}

SignIn(userNamePrompt, passwordPrompt);