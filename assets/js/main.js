//Menu
document.addEventListener("DOMContentLoaded", () => {

    // Detecta o base path automaticamente para funcionar local e no GitHub Pages
    const base = document.querySelector('base')?.href || '/';
    const isPages = window.location.hostname.includes('github.io');
    const basePath = isPages ? '/site-casamento' : '';

    // MENU
    fetch(`${basePath}/components/menu.html`)
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar menu");
            return res.text();
        })
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            const toggle = document.getElementById("menu-toggle");
            const menu = document.getElementById("menu");

            if (toggle && menu) {
                toggle.addEventListener("click", () => {
                    menu.classList.toggle("active");
                });

                document.querySelectorAll("#menu a").forEach(link => {
                    link.addEventListener("click", () => {
                        menu.classList.remove("active");
                    });
                });
            }
        })
        .catch(err => console.error("Menu:", err));

    // FOOTER
    fetch(`${basePath}/components/footer.html`)
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar footer");
            return res.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(err => console.error("Footer:", err));

});