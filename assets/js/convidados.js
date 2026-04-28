document.addEventListener("DOMContentLoaded", () => {

    function confirmarPresenca(){

        let nome = document.getElementById("nomeConvidado").value;

        if(nome === "") {
            alert ("Por favor digite o seu nome!");
            return;
        }

        let lista = document.getElementById("listaConvidados");
        let convidados = lista.getElementsByTagName("li");
        
        for(let i = 0; i < convidados.length; i++){
            if(convidados[i].textContent.toLowerCase() === nome.toLowerCase()){
                alert("Esse nome já confirmou presença!");
                return;
            }
        }

        alert("Presença confirmada! 🎉");

        let template = document.getElementById("templateConvidado");
        let clone = template.content.cloneNode(true);

        clone.querySelector(".nome").textContent = nome;

        clone.querySelector(".remover").onclick = function() {
            this.parentElement.remove();
        };

        lista.appendChild(clone);
    }

    // tecla Enter
    const input = document.getElementById("nomeConvidado");

    if (input) {
        input.addEventListener("keydown", function(event){
            if(event.key === "Enter"){
                confirmarPresenca();
            }
        });
    }

    window.confirmarPresenca = confirmarPresenca;

}); 