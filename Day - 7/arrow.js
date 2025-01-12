let main = (a,b,task) => {
    console.log(task(a,b))
}
main(a = Number(prompt("Enter a value ")),
    b = Number(prompt("Enter b value")),
      (a , b) => {
        return a+b
      })