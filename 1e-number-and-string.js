function numberAndString(inputArray){

    let numberAndStringArray = [];
    let numberAndStringCombo;

    for (let number of inputArray){
        let string = number.toString();
        numberAndStringCombo = {asNumber: number, asString: string};
        numberAndStringArray.push(numberAndStringCombo);
    }
    return numberAndStringArray;
}

console.log(numberAndString([4,5,6]));