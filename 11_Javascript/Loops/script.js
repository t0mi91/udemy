var todos =[
    "have sex",
    "clean house",
    "cook lunch",
    "drink coffee",
    "lift weights"
];

//FOR LOOP
//Display the indexes of the array
/*for (var i=0; i < todos.length; i++) {
    console.log(i);
}*/

//Display the elements of the array
/*for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
}*/

//Add exclamation mark
/*for (var i=0; i < todos.length; i++) {
    console.log(todos[i] + "!");
}*/

/*for (var i=0; i < todos.length; i++) {
    todos[i]=todos[i] + "!";
    console.log(todos[i]);
}*/

//Finish all todos
/*var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
    todos.pop();
}*/

//WHILE LOOP

/*var counterOne = 0;
while (counterOne < 10){
    console.log(counterOne);
    counterOne++
}*/

/*var counterOne = 10;
while (counterOne > 0){
    console.log(counterOne);
    counterOne--
}*/

//DO WHILE LOOP
/*var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
}while (counterTwo > 0);*/

//FOREACH LOOP
/*for (var i=0; i < todos.length; i++) {
    console.log(todos[i], i);
}

todos.forEach(function(todos, i) {
    console.log(todos, i)
});*/

var todosImportant =[
    "make bed",
    "run a mile",
    "sleep enough",
    "meditate",
    "call home"
];

function logTodos (todos, i){
    console.log(todos, i);
}
todos.forEach(logTodos);
todosImportant.forEach(logTodos);