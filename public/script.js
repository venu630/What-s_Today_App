const signInButton = document.querySelector(".signIn-button");
const signUpButton = document.querySelector(".signUp-button");

signInButton.addEventListener("click", () => {
    location.href="/public/pages/authPages/signIn/index.html";

});

signUpButton.addEventListener("click", () => {
   location.href="/public/pages/authPages/signUp/index.html"
});