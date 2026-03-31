
let user = {
    firstName : "Akash",
    lastName : "Sen",

}

let getUser = function (hometown, state) {
       console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ',' + state);
}

let result = getUser.bind(user, "kolkata", "wB");// return function
result(); // Akash Sen from kolkata,WB

Function.prototype.myBind = function (...args) { //custom myBind method we create just like bind method build in javascript use 
    const obj = this;// it point current obj which is "this" like myBind(user)
    params = args.slice(1); // here args contains everything so that we slice it so we can get rest of parameter what we will pass later if needed here. params hold from 1 index to...rest [1....rest] & 0 index hold "this" 
    return function(...args2){ // in our previous bind method return so we also should return a function & args2 id for result1() if needed to pass any argument in future
        obj.apply(args[0], [...params, ...args2]) //we pass it via apply method
        //obj.call(args[0], ...params, ...args2) // we pass it viw call method 
    } // both call & apply are we can use but we use apply modern es6 (ECMAScript 2015). 
}

let result1 = getUser.myBind(user, "kolkata"); //return function 
result1("wb"); // Akash Sen from kolkata,wb