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

// function getGender(userGender, Username){

//     if(userGender == "male" || userGender == "Male"){
//         alert("Welcome to Our Cafe Mr. "+ Username + " 🌹" );
//     }
//     else if(userGender == "female" || userGender == "Female"){
//         alert("Welcome to Our Cafe Ms. " + Username + " 🌹");
//     }
    
//     else{
       
//         userGender = prompt("Please, enter your gender."); 
    
//     while((userGender != "male" && userGender != "female") && (userGender != "Male" && userGender != "Female"))
//     {
//         userGender = prompt("Please, re-enter your gender correctly.");
//     }
    
//     if(userGender == "male" || userGender == "Male"){
//         alert("Welcome to Our Cafe Mr. "+ Username + " 🌹" );
//     }

//     else if(userGender == "female" || userGender == "Female"){
//         alert("Welcome to Our Cafe Ms. " + Username + " 🌹");
//     }
    
//     }
    
//     return userGender;
// }


// const array = [];
// let user_name = prompt("▶ Enter Your Name ⌨️");

// while (user_name == ""){
//     user_name = prompt("▶ Enter Your Name ⌨️");
// }

// let age = prompt("▶ Enter Your Age ⌨️");

// while (age == ""){
//     age = prompt("▶ Enter Your Age ⌨️");
// }

// let gender = prompt("▶ Enter Your Gender (Male or Female) 👩 👨");
// gender = getGender(gender, user_name);

// array.push(user_name, gender);

// let drink = prompt("Do you want a hot or cold drink? ☕️ 🍹 🍸");

// while(drink != "cold" && drink != "hot"){
//     drink = prompt("Please, what do you want (hot) or (cold) drink?");

// }


// let order = prompt("Please, Write the name of the drink you want. ✏️");
// while(order == ""){
//     order = prompt("Please, enter your order.");
// }

//     alert("Your drink is getting prepared...⏳");




// array.push(drink, order);

// for(let i = 0; i < array.length ; i++){
//     console.log(array[i]);
// }


// create a div and give it an id so you can read it in js 
// - In the JS file : 
//      Create a div > paragraph > ul > li 
//      Fill the data you got from the user into the previous elements : 
//      Write it back to the html page 


let user_name;
let age;
let drink;
let order;



const cafe_form = document.getElementById("contactForm");

cafe_form.addEventListener("submit", (event) => {

event.preventDefault();

user_name = event.target.userName.value;

age = event.target.user_age.value;


let isCold = event.target.cold.checked;
let isHot = event.target.hot.checked;

if (isCold || isHot) {
    if(isCold && isHot) drink = event.target.cold.value  + " And " + event.target.hot.value;
    else if(isCold) drink = event.target.cold.value;
    else
    drink = event.target.hot.value;
}

else
{
    drink = "";
}



order = event.target.drinkType.value;

console.log(user_name,age,drink,order);

render(user_name,age,drink,order);

});


function render(user_name,age,drink,order){
    const getDiv = document.getElementById("user-info");
    const div_2 = document.createElement("div");


const div_p = document.createElement("p");

div_p.textContent = ` ☕︎❤️${user_name}❤️☕︎ `;

div_2.appendChild(div_p);
getDiv.appendChild(div_2); 

const div_ul = document.createElement("ul");

div_2.appendChild(div_ul);



const div_ul_li_2 = document.createElement("li");
div_ul_li_2.textContent = `Age  :  ${age}`;

const div_ul_li_3 = document.createElement("li");
div_ul_li_3.textContent = `Drink  :  ${drink} ${order}`;


div_ul.appendChild(div_ul_li_2);
div_ul.appendChild(div_ul_li_3);

}

















