/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Terral Shrewsbury';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = 'images/terralheadshot.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of ' + fullName);





/* Step 5 - Array */
let favoriteFood = ['Homemade pizza', ' Ice cream', ' Chicken Pot Pie', ' Salmon'];

const favoriteFoodsElement = document.getElementById('favoriteFoods');
favoriteFoodsElement.innerHTML = favoriteFood.join(',');

//added an item
favoriteFood.push('Sushi');
//reprinted list
updatedFavoriteFood = favoriteFood.slice();
favoriteFoodsElement.innerHTML += `<br>${updatedFavoriteFood.join(', ')}`;
//removed first item
favoriteFood.splice(0,1);
//reprinted list
simplifiedFavoriteFood = favoriteFood.slice();
favoriteFoodsElement.innerHTML += `<br>${simplifiedFavoriteFood.join(', ')}`;
//removed last item
favoriteFood.pop();
//reprinted list
finalFavoriteFood = favoriteFood.slice();
favoriteFoodsElement.innerHTML += `<br>${finalFavoriteFood.join(', ')}`;

