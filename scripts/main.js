
let about = document.querySelector("#about");
let portfolio = document.querySelector("#portfolio");
let resume = document.querySelector("#resume");

let aboutLink = document.querySelector("#aboutLink");
let portfolioLink = document.querySelector("#portfolioLink");
let resumeLink = document.querySelector("#resumeLink");
aboutLink.onclick = (params) => {
    about.classList.remove("hidden");
    portfolio.classList.add("hidden");
    resume.classList.add("hidden");
}


portfolioLink.onclick = (params) => {
    about.classList.add("hidden");
    portfolio.classList.remove("hidden");
    resume.classList.add("hidden");
}


resumeLink.onclick = (params) => {
    about.classList.add("hidden");
    portfolio.classList.add("hidden");
    resume.classList.remove("hidden");
}

