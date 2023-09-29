/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Liam Byrne";
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = "images/Me and Dipper.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
let liamsFoods = ["Licorice", "Lasagna", "Popcorn", "Toast", "Pizza"];
food.textContent = liamsFoods;
const taboo = "Taco Time's Crisp Bean Burrito";
liamsFoods.push(taboo);
foodElement.innerHTML += `<br>${liamsFoods}`;
liamsFoods.shift();
foodElement.innerHTML += `<br>${liamsFoods}`
liamsFoods.pop();
foodElement.innerHTML += `<br>${liamsFoods}`
