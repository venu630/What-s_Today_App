const sportsButton = document.querySelector(".sports");
const entertainmentButton = document.querySelector(".entertainment");
const technologyButton = document.querySelector(".technology");
const politicalButton = document.querySelector(".political");
const businessButton = document.querySelector(".business");
const scienceButton = document.querySelector(".science");
const healthButton = document.querySelector(".health");
const generalButton = document.querySelector(".general");
const input = document.querySelector(".search");

sportsButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=sports";
});

entertainmentButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=entertainment";
});

technologyButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=technology";
});

politicalButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=political";
});

businessButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=business";
});

scienceButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=science";
});

healthButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=health";
});

generalButton.addEventListener("click", () => {
    location.href = "/public/pages/newsPages/index.html?topic=general";
});


window.addEventListener("load", (event) => {
    event.preventDefault();
    
});


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        const topic = input.value;
        if(topic == ''){
            alter("input field is empty!");
        }
        location.href = `/public/pages/newsPages/index.html?topic=${topic}`
    }
    
});

