//Menu
document.addEventListener("DOMContentLoaded", () => {

    // MENU
    fetch("/components/menu.html")
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
    fetch("/components/footer.html")
        .then(res => {
            if (!res.ok) throw new Error("Erro ao carregar footer");
            return res.text();
        })
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(err => console.error("Footer:", err));

});