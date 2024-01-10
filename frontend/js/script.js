// frontend/js/script.js

document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after the DOM is fully loaded

    // Check if the user is authenticated (you may need to implement a more secure way)
    const isAuthenticated = localStorage.getItem("token") !== null;

    // Update the UI based on authentication status
    updateUI(isAuthenticated);

    // Attach event listeners
    document.getElementById("loginForm").addEventListener("submit", loginUser);
    document.getElementById("contactForm").addEventListener("submit", submitContactForm);
});

async function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        // Send login request to the server
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();

            // Store the token (you may want to use more secure methods for authentication)
            localStorage.setItem("token", data.token);

            // Update the UI based on authentication status
            updateUI(true);
        } else {
            alert("Login failed. Please check your credentials.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
    }
}

async function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        // Send contact form data to the server
        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Include the token for authentication (if required)
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert("Contact form submitted successfully!");
        } else {
            alert("Failed to submit the contact form. Please try again.");
        }
    } catch (error) {
        console.error("Error during contact form submission:", error);
        alert("An error occurred. Please try again.");
    }
}

function updateUI(isAuthenticated) {
    // Update UI elements based on authentication status
    const loginForm = document.getElementById("loginForm");
    const contactForm = document.getElementById("contactForm");

    if (isAuthenticated) {
        // Hide the login form if the user is authenticated
        loginForm.style.display = "none";
        // Show the contact form for authenticated users
        contactForm.style.display = "block";
    } else {
        // Show the login form for non-authenticated users
        loginForm.style.display = "block";
        // Hide the contact form for non-authenticated users
        contactForm.style.display = "none";
    }
}
