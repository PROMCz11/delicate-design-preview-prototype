const designProcess = document.querySelector(".design-process");

const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("click", e => {
    const target = e.target;
    if(target.parentElement.classList.contains("question")) {
        target.parentElement.classList.toggle("active");
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('animation-hide')
        }
        // else
        //     entry.target.classList.add('animation-hide');
    });
});

designProcess.querySelectorAll(".step").forEach(step => {
    observer.observe(step);
})