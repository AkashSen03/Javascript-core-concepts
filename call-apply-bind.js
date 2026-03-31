let user = {
    firstName: "Akash",
    lastName: "Sen",
    //getUser: function (hometown) {
      // console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown);
        
    //}
}

let getUser = function (hometown) {
       console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown);
        
}

let user1 = {
    firstName: "Akash",
    lastName: "Sen",
}

//user.getUser.call(user1, "kolkata"); // using call in call first arg indicates current this that is why we put user1
getUser.call(user1, "kolkata");
//user.getUser.apply(user1, ["kolkata"]); // using apply same as call but rest of the args we pass in via array
getUser.apply(user1, ["kolkata"]);
//let result = user.getUser.bind(user1,"kolkata"); 
let result = getUser.bind(user1,"kolkata");// using bind you get return as function
result(); // call the bind function

