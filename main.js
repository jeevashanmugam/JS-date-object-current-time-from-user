let user = parseInt(prompt("Enter the 24 Format time"))

let dob = new Date();

dob.setHours(user)
let getAns = dob.getHours();

if ((user < 0) || (user > 24)) {

    document.write(user + " It's a Invalid hour");
}

else if ((getAns >= 0) && (getAns < 11)) {
    document.write(getAns + " Its to a good morning");
}

else if ((getAns >= 12) && (getAns < 18)) {
    document.write(getAns + " Its to a good after-noon");
}

else if ((getAns >= 18) && (getAns < 24)) {
    document.write(getAns + " Its to a good-night");
}