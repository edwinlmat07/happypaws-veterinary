// =============================
// MOBILE MENU
// =============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =============================
// APPOINTMENT FORM
// =============================

const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const ownerName =
        document.getElementById("ownerName").value;

    const petName =
        document.getElementById("petName").value;

    const service =
        document.getElementById("service").value;

    alert(
        `Thank you, ${ownerName}!\n\n` +
        `We received your appointment request for ${petName}.\n\n` +
        `Requested service: ${service}\n\n` +
        `Our team will contact you shortly.`
    );

    appointmentForm.reset();

    

});

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Your appointment request has been submitted!");

    form.reset();
});