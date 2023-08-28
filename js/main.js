const menuBtn = document.querySelector(".menu-btn");
const smMenu = document.querySelector(".sm-menu");
const contact = document.getElementById("contact");
const contactForm = document.querySelector(".contact form");

menuBtn.addEventListener("click", () => {
    smMenu.classList.toggle("flex");
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const messageText = document.getElementById("message-text").value;
    const messageCode = messageText.split(" ").join("%20");
    console.log(messageCode);
    location.assign(`https://wa.me/+201091009675?text=${messageCode}`);
});