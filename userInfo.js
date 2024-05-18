//Task 3: createUserProfiles

function createUserProfiles(names,modifiedNames){
    return names.map((str, index)=>({
        id : index ++,
        originalName: str,
        modifiedName:modifiedNames[index]
    }));
}
const originalNames = ["Bernice", "Bernard", "Ophelia", "Cherry","Thelma", "Juliana"];
const modifiedNames = [ 'bernice', 'BERNARD', 'ophelia', 'CHERRY', 'thelma', 'JULIANA' ];
const userProfiles = createUserProfiles(originalNames,modifiedNames);
console.log(userProfiles);