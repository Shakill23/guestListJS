let nameArray = [];
let guestList = "";

alert("Give the names (a maximum of 10 people) you want to invite.");

while (nameArray[nameArray.length - 1] !== "FINISHED") {
    nameArray.push(prompt("Enter the name:\n(Enter \"FINISHED\" if you're done)"));
    
    if (nameArray[nameArray.length - 1] === "FINISHED") {
        break;
    }

    let name11th = nameArray[nameArray.length - 1];

    if (nameArray.length > 10) {
        alert("You've already added 10 people to your guest list.");

        let yesNo = prompt("Would you like to replace someone on the list with " + name11th + "?\nEnter y/n:").toLowerCase();

        if (yesNo === "n") {
            nameArray.pop();
            break;
        } else if (yesNo === "y") {
            name11th = nameArray.splice(-1, 1);

            let removeable = -1;
            removeable += Number(prompt("Enter the number of the person you wish to remove:\n" + guestList));
            nameArray.splice(removeable, 1, name11th);
            break;
        }
    }     
}

if (nameArray[nameArray.length - 1] === "FINISHED") {
    nameArray.pop();
}

let j = 1;
for (let i = 0; i < nameArray.length; i++) {
    guestList += j + ") " + nameArray[i] + "<br>";
    j++;
}

document.getElementById("guestList").innerHTML = guestList;
