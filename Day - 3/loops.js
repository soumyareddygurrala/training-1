//Conditional statements : simple – if, if else, elseif ladder

//simple if
if(5<20)
{
console.log( "hello world");
}

//if else 
if (5<10 ){
    console.log("hello");
} else {
    console.log("bye");
}

//else if
let a =90;
if (a>=90 && a<100){
console.log("a+");
}
else if (a>=80 && a<=90){
console.log("a");
}
else if (a>=70 && a<=80){
console.log("b+");
} 
else if (a>=60 && a<=70){
console.log("b");
}
else{
console.log("c");
}

//switch condition :
let z = 1;
switch(z){
    case 1:
        {
        console.log("Sunday")
        }
        break;
    case 2 :
        {
            console.log("Monday")
        }
        break;
    default :
    {
        console.log("Invalid")
    }
}

//for loop
for(let i=1;i<=5;i++){
    console.log(i)
}

//while loop
let n = 1;
while(n<=5){
    console.log(n);
    n++;
}

//do while
let y = 1;
do{
    console.log(y);
    y++;
}while(y<=5)
