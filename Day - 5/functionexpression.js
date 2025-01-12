let exp1 = function(){
    console.log("hello world")
}
exp1()

//
let ap = function(a){
    console.log(a)
    console.log(arguments[1])
    console.log(arguments[2])
}
ap(10,20,30)
//create a function to perform the artithemic operation of 3 numbers and find largest number input from end user
let demo = function()
{
    let a = Number(window.prompt("Enter the first number : "))
    let b = Number(window.prompt("Enter the second number : "))
    let c = Number(window.prompt("Enter the third number : "))
    let e = a+b+c
    console.log("addition is : ",e)
    let f = a-b-c
    console.log("substitution is : ",f)
    let d = a*b*c
    console.log("Multiplication is : ",d)
    let g = a/b/c
    console.log("division is : ",g)
    let h = a%b%c
    console.log("modulous is : ",h)
    let i = a++
    console.log("addition is : ",i)
    console.log(a++)
    if (a>b && a>c){
        console.log(" a is biggest")
    }
    else if(b>c){
        console.log("b is largest")
    }
    else{
        console.log("C is largest")
    }
}
demo()