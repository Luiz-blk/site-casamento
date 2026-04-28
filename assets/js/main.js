fetch("../components/menu.html")
.then(response => {
    if (!response.ok) {
        throw new Error ("Erro ao carregar menu");
    }
    return response.text();
})

.then(data => {
    // injetamos o menu
    document.getElementById("menu-container").innerHTML = data;

    //pegando elementos
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    //verifica se exitem
    if (toggle && menu){
    
    //abre e fecha menu
    toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    });

    //fecha quando clicar nos links
    const links = document.querySelectorAll("#menu a");

    links.forEach(link=> {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}
});
