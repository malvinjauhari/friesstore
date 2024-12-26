document.addEventListener("DOMContentLoaded", () => {
    alert("Welcome to Friesstore!");

    // FAQ Interaction
    const faqs = document.querySelectorAll("details");
    faqs.forEach((faq) => {
        faq.addEventListener("toggle", () => {
            console.log(`${faq.querySelector("summary").textContent} is ${faq.open ? "opened" : "closed"}`);
        });
    });
});