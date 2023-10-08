/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Terral Shrewsbury",
    photo: {
        src:"images/terralheadshot.jpg",
        alt: "Headshot of Terral Shrewsbury"
    },
    favoriteFoods: [
        "Bacon",
        "Eggs",
        "Sushi",
        "Steak",
        "Broccoli"
    ],
    hobbies: [
        "Learning",
        "Playing with my kids",
        "Swimming", 
        "Kayaking"
    ],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place:"California",
        length: "7 years"
    }
    );

myProfile.placesLived.push(
    {
        place:"Murray, Ut",
        length: "3 years"
    }
    );
    
myProfile.placesLived.push(
    {
        place:"West Valley, Ut",
        length: "8 years"
    }
    );
    
myProfile.placesLived.push(
    {
        place:"Taylorsville, Ut",
        length: "3 years"
    }
    );
    
myProfile.placesLived.push(
    {
        place:"Clinton, Ut",
        length: "8 years"
    }
    );

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */

document.querySelector('#photo').setAttribute('alt', myProfile.photo.alt)

document.querySelector('#photo').setAttribute('src', myProfile.photo.src)

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textcontent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);

});
