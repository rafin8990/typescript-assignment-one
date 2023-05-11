type fruit=any;

function add(a:fruit):void{
    if(typeof a === "string"){
        console.log(a);
    }
    else{
        console.log("this parameter is not a string");
    }
}

add("Banana")
add(123)