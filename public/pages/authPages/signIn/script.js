const signInButton = document.querySelector(".signIn-button");


const apiUrl = "http://localhost:8000";


signInButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signIn-email").value;
    const password = document.querySelector(".signIn-password").value;

    fetch(`${apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            const { token } = data;

            if (token) {
                localStorage.setItem("jwt", token);
                location.href = "/public/pages/dashboard/index.html";
            } else {
                alert("signIn Again!");
            }
        })
        .catch((err) => {
            alert("Error in Signing In! Re-Try");
            console.log(err);
        });

});