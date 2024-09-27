const closeMenuBtn = document.getElementById("close-menu-btn");
const tabs = document.querySelector(".tabs");
const previewModalWrapper = document.querySelector(".preview-modal-wrapper");
const navbar = document.querySelector(".navbar");

navbar.addEventListener("click", e => {
    const target = e.target;
    if(target.classList.contains("menu-btn")) {
        tabs.classList.add("active");
    }
});

closeMenuBtn.addEventListener("click", () => {
    tabs.classList.remove("active");
});

window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    if (offset > 100) {
        navbar.classList.remove('transparent');
    }
    else
        navbar.classList.add('transparent');
});

window.addEventListener("click", e => {
    if(e.target.classList.contains("disabled")) {
        previewModalWrapper.classList.remove("hide");
    }

    else if(e.target.id === "hide-modal" || e.target === previewModalWrapper) {
        previewModalWrapper.classList.add("hide");
    }

    else if(e.target.id === "about-us-link") {
        window.location.href = "about-us.html";
    }
});