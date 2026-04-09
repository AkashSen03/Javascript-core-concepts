
let counter = 0;// counter for check the count
let getData = () =>{
  console.log("Getting data...", counter++);// this will print the count of how many times the function is called
}

let debouncing = function (fn, d) { // fn is the function which we want to call and d is the delay time in milliseconds
    let timer;                     // timer is a variable which will store the timer id of the setTimeout function
    return function (){            // this function will be returned and will be called when the event is triggered
        let context = this;        // context is the current context of the function which is being called
        let args = arguments;      // args is the arguments which are passed to the function which is being called
        clearTimeout(timer);       // this will clear the previous timer if there is any 
        timer = setTimeout(() => { // this will set a new timer for the function which is being called and will execute the function after the delay time
            fn.apply(context, args); // this will call the function which is being called with the current context and arguments
        }, d);
    }
}

let betterFunction = debouncing(getData, 400) // this will return a new function which will be called when the event is triggered and will call the getData function after 400 milliseconds of delay time

