function onlyInitials(inputArray){
    let forenameInitial = "";
    let surnameInitial = "";
    let bothInitials = "";
    let initialsArray = [];
    
    for(let string of inputArray){
        stringLength = string.length;
        for (let c = 0; c <= stringLength; c++){
            if (c == 0){
               forenameInitial = string[c];
            }

            if (string[c] == " "){
                surnameInitial = string[c + 1];
            } 
        }
        bothInitials = `${forenameInitial}.${surnameInitial}.`;
        initialsArray.push(bothInitials)  
    } 
    return initialsArray;
}

console.log(onlyInitials(["Alice Moore", "John Cloud"]));