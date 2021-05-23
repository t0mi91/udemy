var database =[
    {
        username: "Tomi",
        password: "12345"
    },
    {
        username: "Vixi",
        password: "54321"
    },
    {
        username: "Ingrid",
        password: "777"
    }
];

var newsfeed = [
    {
        username: "Marcus",
        timeline: "I am a Quanon freak.",
    },
    {
        username: "Remus",
        timeline: "I am a werewolf.",
    },
    {
        username: "Tonks",
        timeline: "I can transform my hair."
    },
    {
        username: "Bruce",
        timeline: "I took over for God for the week."
    }
];

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function validateUser(username, password){
    for(i=0; i<database.length; i++){
        if (database[i].username ===username &&
            database[i].password ===password){
            return true;
        }   
    }
    return false;
}

function signIn (username, password){
    if (validateUser(username, password)){
        console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong username or password. Cannot log you in.");
    }
}

signIn(userNamePrompt, passwordPrompt);