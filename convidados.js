function confirmarPresenca(){

    let nome = document.getElementById("nomeConvidado").value;

    if(nome === "") {
        alert ("Por favor digite o seu nome!");
        return;
    }

    let lista = document.getElementById("listaConvidados");
    let convidados = lista.getElementsByTagName("li");
    
    //verifica se o nome já está na lista
    for(let i = 0; i < convidados.length; i++){
        if(convidados[i].textContent.toLowerCase() === nome.toLowerCase()){
            alert("Esse nome já confirmou presença!");
            return;
        }
    }

    alert("presença confirmada! 🎉")

    let template = document.getElementById("templateConvidado");
    let clone = template.content.cloneNode(true);

    // coloca o nome
    clone.querySelector(".nome").textContent = nome;

    // botão de remover
    clone.querySelector(".remover").onclick = function() {
    this.parentElement.remove();
    };

    // adiciona na lista
    lista.appendChild(clone);
}

 //acão da tecla enter
    document.getElementById("nomeConvidado").addEventListener("keydown", function(event){

        if(event.key === "Enter"){
            confirmarPresenca()
        }
    });

