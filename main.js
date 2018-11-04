//Input number, if number is odd
//Multiply it by 3 and add 1
//If input number is even
//Divide by 2

//This first function finds an output based on whether the input is odd or even
function recursion(input) {
    if (input % 2 == 0) {
        return input = (input / 2);
    } else {
         return input = (input * 3) + 1;
    }

} 

//This function rewrites the recursion function automatically
//howManyTimes writes everything, but the x, example: recursion(recursion(recursion(x)));
//Count fills in x with a starting value, usually 1, example: recursion(recursion(recursion(1)));
//The example expression was written from: recursionAgain(3, 1);
function recursionAgain(howManyTimes, count) {
    let firstHalf = "";
    let secondHalf = "";
    for (let i = 0; i < howManyTimes; i++) {
        firstHalf += 'recursion(';
        secondHalf += ')';
    }
    let recursiveExpression = firstHalf + count + secondHalf + ';';
    recursiveExpression = eval(recursiveExpression)
    return recursiveExpression;
}