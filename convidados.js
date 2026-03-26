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

    let li = document.createElement("li");

    li.innerHTML = `
        ${nome}
        <button onclick="removerConvidado(this)">❌</button>
    `;

    lista.appendChild(li);

    let novoConvidado = document.createElement("li");
    novoConvidado.textContent = nome;
    
   

    document.getElementById("nomeConvidado").value = "";
}

//evento para confirmar enter
  document.getElementById("nomeConvidado").addEventListener("keydown", function(event){

        if(event.key === "Enter"){
            confirmarPresenca()
        }
    });

function removerConvidado(botao) {
    botao.parentElement.remove();
}

