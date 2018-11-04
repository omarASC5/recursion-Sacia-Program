//Input number, if number is odd
//Multiply it by 3 and add 1
//If input number is even
//Divide by 2

let amountOfLoops = 10;
let arrayOfNumbers = [];

function recursion(input) {
    if (input % 2 == 0) {
        return input = (input / 2);
    } else {
         return input = (input * 3) + 1;
    }

} 

function recursionAgain(howManyTimes, count) {
    let firstHalf = "";
    let secondHalf = "";
    for (let i = 0; i < howManyTimes; i++) {
        firstHalf += 'recursion(';
        secondHalf += ')';
    }
    const recursiveExpression = eval(firstHalf + count + secondHalf + ';');
    return recursiveExpression;
}

console.log(recursionAgain(4,4));
console.log(recursion(recursion(recursion(recursion(4)))));
for (let n = 1; n < amountOfLoops; n++) {
    // arrayOfNumbers.push(recursion(i));
    // console.log(recursionAgain(n,n));

}
