function print(name){ //callback fn
    console.log("hello world",name)
}
function greet(num){ //higher order fn
    console.log("welcome to my class")
    setTimeout(() =>{
        console.log("inside setTimeout")
        let firstName="shivam"
        num(firstName)

    }, 2000);
}
 greet(print)


 