const promptTextBox = document.querySelector("#prompt-text-box");
let promptList = [];

const getPrompts = async() => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/terralshrewsbury/cse121b/main/prompts.json");
        const data = await response.json();
        promptList = Array.isArray(data.prompts) ? data.prompts : [];
        console.log(promptList);
    } catch (error) {
        console.error("Error fetching prompts:", error);
    }
};

const randomPrompt = (prompts) => {
    const randomIndex = Math.floor(Math.random()* prompts.length);
    return prompts[randomIndex];
};

const displayPrompt = async () => {
    await getPrompts();
    console.log(promptList);
    let prompt = randomPrompt(promptList);
    promptTextBox.textContent = prompt;  
};

document.getElementById('prompt-button-box').addEventListener('click', () =>{ 
    displayPrompt();
});

displayPrompt();