function onlyInitials(inputArray){
    let initials = "";
    let forenameInitial = "";
    let surnameInitial = "";
    let bothInitials = "";
    let initialsArray = [];
    for(let string of inputArray){
        stringLength = string.length;
        for (let c = 0; c <= stringLength; c++){
            if (c == 0){
               forenameInitial = string[c];
               // initials += forenameInitial; //forename initial put in string
               // bothInitials.push(forenameInitial);
            }

            if (string[c] == " "){
                surnameInitial = string[c + 1];
              //  initials += surnameInitial; //surname initial put in string
              //  bothInitials.push(surnameInitial);
            } 
        }
        bothInitials = `${forenameInitial}.${surnameInitial}.`;
        initialsArray.push(bothInitials);
        
    }
   
    return initialsArray;

}

console.log(onlyInitials(["Alice Moore", "John Cloud"]));