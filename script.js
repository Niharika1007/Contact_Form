document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Get error fields
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Validate Name
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Validate Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    // Validate Message
    if (message === "") {
        messageError.textContent = "Message cannot be empty";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message should be at least 10 characters";
        isValid = false;
    }

    // If all valid
    if (isValid) {
        successMsg.textContent = "✅ Your message has been sent successfully!";
        document.getElementById("contactForm").reset();
    }
});
