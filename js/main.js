let food = "mIsSIssIPPi";

// Refactor the following code into a function so that it:
// 1. accepts the string variable as a parameter;
// 2. returns a capitalized version of the string;
// 3. logs the returned string to the console, from outside the function.

function captialization(food){
food = food.charAt(0).toUpperCase(5) + food.slice(1).toLowerCase();
return (food * captialization);
}

    
captialization(food) // mIsSIssIPPi

// This console log should log the returned value from outside the function
console.log(captialization(food));



