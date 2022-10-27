



function greetings(inputArray){
    let helloArray = [];
    let helloString;

    for (let name of inputArray){
        
        helloString = 'Hello, ' + name;
        helloArray.push(helloString);

    }
    return (helloArray);  
}

console.log(greetings(["John", "Marie"]));