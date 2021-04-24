function addNumber(num1, num2){
    return num1 + num2;
}
const result = addNumber(5,4);
console.log(result);


const addNumber2 = function(num1,num2){
    return num1 + num2
}

const result2 = addNumber2(8,7);
console.log(result2);

// ES6 =====================

const addNumber3 = (num1,num2) => num1 + num2;
const result3 = addNumber3(9,3);
console.log(result3);

const addNumber4 = (num1, num2) =>{
    return num1 + num2;
}
const result4 = addNumber4(2,1);
console.log(result4);