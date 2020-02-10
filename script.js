document.querySelector("h1").innerText=document.title;
document.querySelector("h1").classList.add('title');

var elementparagraphs = document.querySelectorAll("p");

elementparagraphs.forEach(element => {
    element.classList.add("paragraaf");
});