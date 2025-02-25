document.addEventListener("DOMContentLoaded", () => {
    // Signup
    document.getElementById("signupForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Store user data
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        alert("Signup Successful! Please login.");
        window.location.href = "login.html";
    });

    // Login
    document.getElementById("loginForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            localStorage.setItem("isAuthenticated", "true");
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    });
});
