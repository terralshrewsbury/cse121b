/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList= [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) =>
    {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        const img = document.createElement("img");
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () =>
{
    try 
    {
        fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
        .then(response => {
            if (!response.ok){
                throw new Error('network response was not ok.');
            }
            return response.json();
        })
        .then(data =>{
            templeList = data;
            // displayTemples(templeList);
            console.log(templeList);
        })
        .catch(error => {
            console.error('Error Fetching Data:', error);
        })
    //     const response = await fetch( "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    //     if (!response.ok)
    //     {
    //         throw new Error('Fetch Failed!');
    //     }
    //     const results = await response.json();
    //     templeList= Array.isArray(results) ? results: Object.entries(results);
    //     displayTemples(templeList);
    //     console.log(results);
    //     return templeList;
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    } catch (error) {console.error('Error Fetching Data:', error)};
}


/* reset Function */

const resetFunction = (list) => 
{
    list.length = 0 ;
    return list;
}


/* sortBy Function */
const sortBy = (templeList) => {
    let sortedTemples = [];
    let filter = document.querySelector("#sortBy").value;

    switch (filter){
        case "utah":
            sortedTemples = templeList.filter(temple => temple.location("Utah"));
            displayTemples(sortedTemples);
            break;
        case "notutah":
            sortedTemples = templeList.filter(temple => !temple.location.includes("Utah"));
            displayTemples(sortedTemples);
            break;    
        case "older":
            sortedTemples =  templeList.filter(temple => new Date(temple.dedicated) < new Date("1950-01-01"));
            displayTemples(sortedTemples);
            break;    
        case "all":
            sortedTemples = templeList;
            break;
        default:
            sortedTemples = [];
    }
    displayTemples(sortedTemples);
}   



// const onSortByChange = () => {
//     const filter = document.querySelector("#sortBy").value;
//     const sortedTemples = sortByFilter(filter);
//     displayTemples(sortedTemples)
// }

// document.querySelector("#sortBy").addEventListener("change", onSortByChange);





/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", sortBy);

getTemples();