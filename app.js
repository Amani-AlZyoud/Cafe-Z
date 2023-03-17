
// Ask the user to enter his/her name as input. ✔️
// Ask the user to enter his/her gender as input. The answer should be either (male or female). ✔️
// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title
// Ask the user if he/she wants to drink a hot or cold drink ✔️
// Ask the user to write the name of the drink he/she wants ✔️
// Alert to the user a message that their drink is getting prepared ✔️
// Print on the console a statement that shows the name of the user with the drink he/she ordered ✔️



let name = prompt("▶ Enter Your Name ⌨️");
let gender = prompt("▶ Enter Your Gender (Male or Female) 👩 👨");

if(gender == "male" || gender == "Male"){
    alert("Welcome to Our Cafe Mr. "+ name + " 🌹" );
}
else if(gender == "female" || gender == "Female"){
    alert("Welcome to Our Cafe Ms. " + name + " 🌹");
}

else{
    alert("Welcome to Our Cafe "+ name + " 🌹");
}


let drink = prompt("Do you want a hot or cold drink? ☕️ 🍹 🍸");
let order = prompt("Please, Write the name of the drink you want. ✏️");
if(drink != "" && order != ""){
    alert("Your drink is getting prepared...⏳");
}
else
{
    alert("Please, Order now. ✏️");
}

if((gender == "male" || gender == "Male") || (order != "" && drink != "")){
    console.log(name + " ordered a " + drink +" "+ order);
}
else if((gender == "female" || gender == "Female") || (order != "" && drink != "")){
    console.log(name + " ordered a " + drink +" "+ order);

}
