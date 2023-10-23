const promptTextBox = document.querySelector("#prompt-text-box");
const promptresponse = document.querySelector("#text-box");
const data = promptresponse.value;
const entries = []
const textBox = document.querySelector 

let promptList = [];

const getPrompts = async() => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/terralshrewsbury/cse121b/main/prompts.json");
        if (!response.ok){
            throw new Error('Not fetching well.');
        }
        const data = await response.json();
        promptList = Array.isArray(data.prompts) ? data.prompts : [];
        console.log(promptList);
        displayPrompt;
    } catch (error) {
        console.error("Error fetching prompts:", error);
    }
};

const randomPrompt = (prompts) => {
    const randomIndex = Math.floor(Math.random()* prompts.length);
    return prompts[randomIndex];
};

const displayPrompt = () => {
    console.log(promptList);
    let prompt = randomPrompt(promptList);
    promptTextBox.textContent = prompt;
    promptresponse.value = "";
};

document.getElementById("prompt-button-box").addEventListener('click', (event) =>{ 
    displayPrompt();
    event.preventDefault();
});

document.getElementById("delete-button").addEventListener("click", (event) => {
    promptresponse.value="";
    event.preventDefault();
})

const save = () =>{
    const currentDate = new Date();
    const entrie = `${currentDate}: ${promptTextBox.textContent}- ${promptresponse.value}`;
    promptresponse.value = "";
    return entrie;
};

document.getElementById("save-button").addEventListener("click",(event) =>{
addtohtml();
event.preventDefault();
})

const addtohtml = () =>{
    const newEntry = document.createElement("li");
    newEntry.textContent = save();

    const list = document.getElementById("entrylog");
    list.appendChild(newEntry);
};

getPrompts();