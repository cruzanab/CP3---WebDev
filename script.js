// Array de strings
let wishlist = [
    "Notebook Gamer",
    "Headset Bluetooth",
    "Mouse Sem Fio"
];

// Elementos
let lista = document.getElementById("listaWishlist");
let erroItem = document.getElementById("erroItem");
let erroLogin = document.getElementById("erroLogin");

// Renderizar lista
function renderizarLista() {

    lista.innerHTML = "";

    for (let i = 0; i < wishlist.length; i++) {

        let li = document.createElement("li");

        // Texto do item
        let texto = document.createElement("span");
        texto.innerText = wishlist[i];

        // Área dos botões
        let divAcoes = document.createElement("div");
        divAcoes.className = "acoes";

        // Botão editar
        let botaoEditar = document.createElement("button");
        botaoEditar.innerText = "Editar";

        botaoEditar.onclick = function () {
            editarItem(i);
        };

        // Botão remover
        let botaoRemover = document.createElement("button");
        botaoRemover.innerText = "Remover";

        botaoRemover.onclick = function () {
            removerItem(i);
        };

        divAcoes.appendChild(botaoEditar);
        divAcoes.appendChild(botaoRemover);

        li.appendChild(texto);
        li.appendChild(divAcoes);

        lista.appendChild(li);
    }
}

// Login
function fazerLogin() {

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    erroLogin.innerText = "";

    // Campos vazios
    if (usuario === "" || senha === "") {

        erroLogin.innerText = "Preencha todos os campos.";
        return;
    }

    // Credenciais corretas
    if (usuario === "aluno" && senha === "fiap2025") {

        alert("Login realizado com sucesso!");

        document.getElementById("modalLogin").style.display = "none";

    } else {

        erroLogin.innerText = "Usuário ou senha inválidos.";
    }
}

// Adicionar item no final
function adicionarFim() {

    let input = document.getElementById("novoItem");
    let valor = input.value;

    erroItem.innerText = "";

    if (valor === "") {

        erroItem.innerText = "Digite um item.";
        return;
    }

    wishlist.push(valor);

    input.value = "";

    renderizarLista();
}

// Adicionar item no início
function adicionarInicio() {

    let input = document.getElementById("novoItem");
    let valor = input.value;

    erroItem.innerText = "";

    if (valor === "") {

        erroItem.innerText = "Digite um item.";
        return;
    }

    wishlist.unshift(valor);

    input.value = "";

    renderizarLista();
}

// Editar item
function editarItem(indice) {

    let novoValor = prompt(
        "Editar item:",
        wishlist[indice]
    );

    // Cancelou
    if (novoValor === null) {
        return;
    }

    // Campo vazio
    if (novoValor === "") {

        alert("Campo vazio. O item original foi mantido.");
        return;
    }

    wishlist[indice] = novoValor;

    renderizarLista();
}

// Remover item
function removerItem(indice) {

    let confirmar = confirm(
        "Deseja remover este item?"
    );

    if (confirmar) {

        // Remove pelo índice
        wishlist.splice(indice, 1);

        renderizarLista();
    }
}

// Inicialização
renderizarLista();