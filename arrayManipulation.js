//array of numbers

const numbers =[3, 10, 5, 22, 19, 28];

//Task 1: processArray function
function processArray(numbers){
    return numbers.map(num => num%2 === 0? num*num : num*3);
}
console.log(processArray(numbers));