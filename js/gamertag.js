const btnClick = new Audio();
btnClick.src = "./sounds/btnClick.wav";

function getGamerTag() {
    // Getting the value of your text input
    var gamerTag = document.getElementById("gamerTag").value;

    // Storing the value above into localStorage
    localStorage.setItem("gamerTag", gamerTag);

    return true;
}

function init() {
    // Retrieving the text input's value which was stored into localStorage
    var gamerTag = localStorage.getItem("gamerTag");

    // Writing the value in the document
    document.write("Hi! " + gamerTag);
}

init();


function goBack() {
    window.history.back();
}