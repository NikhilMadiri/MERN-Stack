const heading = document.getElementById("heading");
const button = document.getElementById("btn");
const input = document.getElementById("name");
const container = document.getElementById("container");

heading.innerHTML = "JavaScript Example";

heading.style.color = "blue";
heading.style.fontSize = "30px";

button.addEventListener("click", function () {

    let userName = input.value;

    let para = document.createElement("p");
    para.innerHTML = "Hello " + userName;

    container.appendChild(para);

    para.classList.add("message");

    document.body.classList.toggle("dark-mode");
});

setTimeout(() => {
    let firstPara = container.querySelector("p");

    if (firstPara) {
        firstPara.remove();
    }
}, 3000);

heading.addEventListener("mouseover", () => {
    heading.style.color = "red";
});

input.addEventListener("keyup", (event) => {
    console.log("You typed: " + event.target.value);
});

const allParagraphs = document.querySelectorAll("p");

allParagraphs.forEach((p) => {
    console.log(p.textContent);
});