function countStrings(inputArray){
    lengthsArray = [];
    let length = 0;
    for (let string of inputArray){
        length = string.length;
        lengthsArray.push(length);
    }

    return lengthsArray;
}

console.log(countStrings(["Hello", "no", "cat"]));