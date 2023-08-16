// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const nouns1 = ["Elephant", "Book", "Ocean", "Mountain", "Guitar"];
const verbs = ["Jump", "Swim", "Sleep", "Play", "Dance"];
const adjectives = ["Mysterious", "Sparkling", "Quirky", "Majestic", "Whimsical"];
const nouns2 = ["Pizza", "Bicycle", "Sunflower", "Diamond", "Cloud"];
const settings = ["Ancient temple", "Cabin", "Starlit night sky", "Magical underwater world", "Castle"];
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// Variables for pre-defined arrays


// Variables for count to grab array elements


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    const randomNoun = nouns1[Math.floor(Math.random() * nouns1.length)];
    choosenNoun1.textContent = randomNoun;
    // if-else to change count setting
}

function verb_on_click() {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    choosenVerb.textContent = randomVerb;
}

function adjective_on_click() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    choosenAdjective.textContent = randomAdjective;
}

function noun2_on_click() {
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    choosenNoun2.textContent = randomNoun2;
}

function setting_on_click() {
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    choosenSetting.textContent = randomSetting;
}

// concatenate the user story and display
function playback_on_click() {
    const userStory = [
        choosenNoun1.textContent,
        choosenVerb.textContent,
        choosenAdjective.textContent,
        choosenNoun2.textContent,
        choosenSetting.textContent
    ].join(" ");
    story.textContent = userStory;
    speakStory(userStory);
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomUserStory = [
        getRandomElement(nouns1),
        getRandomElement(verbs),
        getRandomElement(adjectives),
        getRandomElement(nouns2),
        getRandomElement(settings)
    ].join(" ");
    story.textContent = randomUserStory;
    speakStory(randomUserStory);
}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Audio Output
function speakStory(text) {
    const audioStory = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(audioStory);
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);