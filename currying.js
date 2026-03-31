
//we can use currying by bind method & another way is function closure

function multiply(x, y){
    console.log(x * y)
}

let multiplybytwo = multiply.bind(this, 2); // it males a code of multiply function & insert parmanently 2 as a value 
/*
function multiplybytwo(y){
    let x = 2;
    console.log(x * y);
}

*/
multiplybytwo(5); //10
//here we use closure

let multiply = function (x){
    return function(y){
        console.log(x * y);
    }
}

let multiplybytwo = multiply(2);
multiplybytwo(3); //6
