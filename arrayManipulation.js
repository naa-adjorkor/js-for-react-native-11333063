//array of numbers

const numbers =[3, 10, 5, 22, 19, 28];
const strings =["Bernice", "Bernard", "Ophelia", "Cherry","Thelma", "Juliana"];

//Task 1: processArray function
function processArray(numbers){
    return numbers.map(num => num%2 === 0? num*num : num*3);
}

//Task 2 : formatArrayStrings
function formatArrayStrings(strings,numbers){
    return strings.map((str, index)=>{
        if (numbers[index] % 2 === 0){
            return str.toUpperCase();
        }else{
            return str.toLowerCase();
        }
        });
    }


console.log(formatArrayStrings(strings,numbers));
console.log(processArray(numbers));