function function1() {
    console.log("hello world")
}


function1();


function function2(message) {
    console.log(message);
}



function2("hello world2");


function function3(num1, num2) {
    let ans = num1 + num2;

    return ans;
}

let answer = function3(1, 1);

console.log(answer);


function function4(num1, num2, num3) {
    let ans = (num1 + num2) - num3;

    return ans;
}
let ans = function4(1, 1, 2);

console.log(answer);

function function5(string1, string2) {
    let name = (string1 + " " + string2);

    return name;
}
let name = function5("Oscar", "Lok");

console.log(name);

