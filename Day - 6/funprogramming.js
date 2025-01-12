// function main(a)
// {
//     //console.log(a)
//     console.log(a())
// }
// main(function(){
//     let b = Number(window.prompt("Enter a value"));
//     let g = Number(window.prompt("Enter b value"));
//     return b+g
// })
// main(function(){
//     return "i am cbf2"
// })


let a = Number(window.prompt("Enter a value"));
let b = Number(window.prompt("Enter b value"));

let main = function(task) {
    console.log(task(a, b)); // Pass `a` and `b` explicitly
};

// Call `main` with different operations
main(function(a, b) {
    return a + b;
});

main(function(a, b) {
    return a - b;
});

main(function(a, b) {
    return a * b;
});

main(function(a, b) {
    return a / b;
});



// //implicit return arrow function
// let a = () => console.log("hello")
// a()
// //explicit return arrow function
// let b = () => {return "hello1"}
// console.log(b)
// console.log(b())