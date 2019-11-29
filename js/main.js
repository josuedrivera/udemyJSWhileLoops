console.log("connected");

//Exercise 1
var num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
}

//Exercise 2
var num = 1;

while(num <= 20) {
    if(num % 4 === 0) {
        console.log(num);
    }
    num++;
}

//Exercise 3
//ifinite loop -- erased

//WHILE LOOP PROBLEM SET
//print all numbers between -10 and 19
console.log("print all numbers between -10 and 19");
var counter = -10;

while(counter < 20) {
    console.log(counter);
    counter++;
}

//print all even numbers between 10 and 40
console.log("print all even numbers between 10 and 40");
var counter = 10;

while(counter <= 40) {
    console.log(counter);
    counter+=2;
}
//alternate version
console.log("alt v. - print all even numbers between 10 and 40");
var counter = 10;

while(counter < 40) {
    if(counter % 2 === 0) {
        console.log(counter);
    }
    counter+=1;
}

//print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333");
var counter = 300;

while(counter <= 333) {
    if(counter % 2 !== 0) {
        console.log(counter);
    }
    counter+=1;
}

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");
var counter = 5;

while(counter <= 50) {
    if(counter % 5 === 0 && counter % 3 === 0) {
        console.log(counter);
    }
    counter+=1;
}