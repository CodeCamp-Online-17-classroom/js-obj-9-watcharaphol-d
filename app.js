let obj = {}

// Solution - 1 =======================
while (true) {
    let key = prompt("Please enter 'OBJECT KEY':\n\tor type 'STOP' to finish:");
    if (key == "") {
        alert("You are not filled any data, try again.");
        continue;
    }
    if (key.toLowerCase() == "stop") break;

    let value = prompt("Please enter OBJECT VALUE data:");
    if (value == "") {
        alert("You are not filled any data, try again.");
        continue;
    }
    alert(`The object property is being restored\n\tKEY: ${key} \n\tVALUE: ${value}`);
    obj[key] = value;
}

console.log(obj);


// // Solution-2 =======================
// while (true) {
//     let userInput;
//     userInput = prompt("Enter key-value pair (key:value), or type 'stop' to finish:");

//     if (userInput.toLowerCase() === "stop") break;
//     let [key, value] = userInput.split(':');

//     key = key.trim();
//     value = value.trim();

//     obj[key] = value;
// }

// console.log(obj);