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
// function recursion2(input2) {
//     return input2 += 4;
// }


// console.log(recursion2(recursion(2)));
// 10 to 5 to 16

function recursionAgain(howManyTimes, count) {
    let firstHalf = "";
    let secondHalf = "";
    for (let i = 0; i < howManyTimes; i++) {
        firstHalf += 'recursion(';
        secondHalf += ')';
    }
    const recursiveExpression = firstHalf + count + secondHalf + ';';
    return recursiveExpression;
}

obj = eval(recursionAgain(2, 2));
console.log(recursionAgain(2,3));
// console.log(recursion(recursion(recursion(3))));
for (let n = 1; n < amountOfLoops; n++) {
    // arrayOfNumbers.push(recursion(i));
}

// var factor = function(number) {
//     var result = 1;
//     var count;
//     for (count = number; count > 1; count--) {
//         if (number % 2 != 0) {
//              result = (number * 3) + 1;
//         } else {
//              result = (number / 2);
//         }
//     return result;
//   }};



let add = function(n) {
    return recursion(n-1);
}

