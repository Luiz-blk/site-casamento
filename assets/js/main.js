//Menu
document.addEventListener("DOMContentLoaded", () => {
    
    const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

    fetch(basePath + "components/menu.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar menu");
        }
        return response.text();
    })
    .then(data => {
        // injeta o menu
        document.getElementById("menu-container").innerHTML = data;

        // pega elementos depois que o menu existe
        const toggle = document.getElementById("menu-toggle");
        const menu = document.getElementById("menu");

        if (toggle && menu) {
            // abre/fecha menu
            toggle.addEventListener("click", () => {
                menu.classList.toggle("active");
            });

            // fecha ao clicar em links
            const links = document.querySelectorAll("#menu a");

            links.forEach(link => {
                link.addEventListener("click", () => {
                    menu.classList.remove("active");
                });
            });
        }
    })
    .catch(err => console.error("Menu:", err));


    // FOOTER
  
    fetch(basePath + "components/footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar footer");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    })
    .catch(err => console.error("Footer:", err));

});