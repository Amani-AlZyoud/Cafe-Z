// Ask the user to enter his/her name as input. ✔️
// Ask the user to enter his/her gender as input. The answer should be either (male or female). ✔️
// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title
// Ask the user if he/she wants to drink a hot or cold drink ✔️
// Ask the user to write the name of the drink he/she wants ✔️
// Alert to the user a message that their drink is getting prepared ✔️
// Print on the console a statement that shows the name of the user with the drink he/she ordered ✔️
// +
// One of the questions in the previous task was to ask the user about his/her gender and if they didn't write the correct answer nothing will happen, today you have to keep asking the user to enter their gender until you get the correct answer (while loop) ✔️
// When the user answers all the questions you should save the answers in an array, it will contain [username, gender, type of drink , drink name ] ✔️
// Loop through the array and print the element using console (for loop) ✔️
// +
// Create a function for the gender question and call it in the proper place ✔️

function getGender(userGender, Username){

    if(userGender == "male" || userGender == "Male"){
        alert("Welcome to Our Cafe Mr. "+ Username + " 🌹" );
    }
    else if(userGender == "female" || userGender == "Female"){
        alert("Welcome to Our Cafe Ms. " + Username + " 🌹");
    }
    
    else{
       
        userGender = prompt("Please, enter your gender."); 
    
    while((userGender != "male" && userGender != "female") && (userGender != "Male" && userGender != "Female"))
    {
        userGender = prompt("Please, re-enter your gender correctly.");
    }
    
    if(userGender == "male" || userGender == "Male"){
        alert("Welcome to Our Cafe Mr. "+ Username + " 🌹" );
    }

    else if(userGender == "female" || userGender == "Female"){
        alert("Welcome to Our Cafe Ms. " + Username + " 🌹");
    }
    
    }
    
    return userGender;
}


const array = [];
let user_name = prompt("▶ Enter Your Name ⌨️");

while (user_name == ""){
    user_name = prompt("▶ Enter Your Name ⌨️");
}


let gender = prompt("▶ Enter Your Gender (Male or Female) 👩 👨");
gender = getGender(gender, user_name);

array.push(user_name, gender);

let drink = prompt("Do you want a hot or cold drink? ☕️ 🍹 🍸");

while(drink != "cold" && drink != "hot"){
    drink = prompt("Please, what do you want (hot) or (cold) drink?");

}


let order = prompt("Please, Write the name of the drink you want. ✏️");
while(order == ""){
    order = prompt("Please, enter your order.");
}

    alert("Your drink is getting prepared...⏳");




array.push(drink, order);

for(let i = 0; i < array.length ; i++){
    console.log(array[i]);
}
