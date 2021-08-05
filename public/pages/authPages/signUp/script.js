const signUpButton = document.querySelector(".signUp-button");


const apiUrl = "http://localhost:8000";


signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signUp-email").value;
    console.log(email);
    const name = document.querySelector(".signUp-name").value;
    console.log(name);
    const password = document.querySelector(".signUp-password").value;
    const reTypedPassword = document.querySelector(".signUp-retyped-password").value;


    if (password !== reTypedPassword) {
        alert("Password doesn't match!");
        return;
    }

    fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            
            const { token } = data;

            if (token) {
                localStorage.setItem("jwt", token);
                location.href = "/public/pages/dashboard/index.html";
            } else {
                alert("signUp Again!");
            }
        })
        .catch((err) => {
            alert("Error in Signing Up! Re-Try");
            console.log(err);
        });

});