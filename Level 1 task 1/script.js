document.addEventListener("DOMContentLoaded", function() {
    const readMoreButton = document.querySelector(".about-us .read-more");
    const extraContent = document.querySelector(".about-us .content .extra-content");
    
    readMoreButton.addEventListener("click", function() {
        if (extraContent.style.display === "none" || extraContent.style.display === "") {
            extraContent.style.display = "block";
            readMoreButton.textContent = "Read Less";
        } else {
            extraContent.style.display = "none";
            readMoreButton.textContent = "Read More";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const requestConsultButton = document.querySelector(".hero-section .request-consult");
    const consultForm = document.querySelector(".hero-section .consult-form");
    
    requestConsultButton.addEventListener("click", function() {
        if (consultForm.style.display === "none" || consultForm.style.display === "") {
            consultForm.style.display = "block";
        } else {
            consultForm.style.display = "none";
        }
    });
});
