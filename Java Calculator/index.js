var num1 = parseFloat(prompt("Enter First Number"));
var op = prompt("Enter operator (+, -, /, *)");
var num2 = parseFloat(prompt("Enter second number"));

if(op =="+"){
    var result = num1 + num2;
    console.log(result);
    document.write(result);
}else if(op =="-"){
    var result = num1 - num2;
    console.log(result);
    document.write(result);
}else if(op =="/"){
    var result = num1 / num2;
    console.log(result);
    document.write(result);
}else if(op =="*"){
    var result = num1 * num2;
    console.log(result);
    document.write(result);
}else {
    console.log("Operator is undefined");
    document.write("Operator is undefined");
}

