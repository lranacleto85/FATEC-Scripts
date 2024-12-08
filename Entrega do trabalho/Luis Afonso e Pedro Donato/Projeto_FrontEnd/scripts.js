function redirecionarHome(){
    event.preventDefault();
    window.location.href = "home.html"
    
}

function redirecionarIndex(){
    event.preventDefault();
    window.location.href = "index.html"
    
}

// Modal functionality for Reserve button
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("reserveModal");
    const btn = document.getElementById("reserveButton");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("reserveForm");
    const successMessage = document.getElementById("successMessage");

    // Open modal
    btn.onclick = function reserveButton() {
        modal.style.display = "block";
    };

    // Close modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Handle form submission
    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Hide the form and show the success message
        form.style.display = "none";
        successMessage.style.display = "block";

        // Close modal after 3 seconds
        setTimeout(() => {
            modal.style.display = "none";
            // Reset form and show it again for future use
            form.reset();
            form.style.display = "block";
            successMessage.style.display = "none";
        }, 3000);
    };
});

