fetch("menu.html")
.then(response => response.text())
.then(data => {
    document.getElementById("menu-container").innerHTML = data;

    //botão hamburguer
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
})