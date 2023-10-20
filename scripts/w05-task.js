/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList= [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        templesElement.appendChild(article);

        const h3 = document.createElement("h3");
        h3.innerText = temple.templeName;
        article.appendChild(h3);

        const img = document.createElement("img");
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(img);

    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    // try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const data = await response.json();
        templeList = Array.isArray(data) ? data : [];
        displayTemples(templeList);
        console.log(templeList);
};

/* reset Function */
const resetFunction = () => 
{
    templesElement.innerHTML = "";
};


/* sortBy Function */
const sortBy = (templeList) => {
    resetFunction();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.imageUrl.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.imageUrl.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date("1950-01-01")));
            break;   
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
const sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener("change", () => {
    sortBy(templeList)
});

getTemples();