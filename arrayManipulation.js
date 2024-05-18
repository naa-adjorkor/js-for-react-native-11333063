//array of numbers

const numbers =[3, 10, 5, 22, 19, 28];
const names =["Bernice", "Bernard", "Ophelia", "Cherry","Thelma", "Juliana"];

//Task 1: processArray function
function processArray(numbers){
    return numbers.map(num => num%2 === 0? num*num : num*3);
}

//Task 2 : formatArrayStrings
function formatArrayStrings(names,numbers){
    return names.map((str, index)=>{
        if (numbers[index] % 2 === 0){
            return str.toUpperCase();
        }else{
            return str.toLowerCase();
        }
        });
    }


console.log(formatArrayStrings(names,numbers));
console.log(processArray(numbers));