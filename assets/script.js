document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("email", document.getElementById("email").value);

    // Preserve line breaks in the message
    let message = document.getElementById("message").value;
    message = message.replace(/\n/g, "<br>"); // Replace new lines with <br>
    formData.append("message", message);

    // Send data to Getform
    fetch("https://getform.io/f/bdrngngb", {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Reset form fields
        } else {
            alert("Failed to send message.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong.");
    });
});
