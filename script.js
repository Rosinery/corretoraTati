document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});


function filtrarImoveis() {
    const tipo = document.getElementById("tipo-imovel").value;
    const localizacao = document.getElementById("localizacao").value;
    const transacao = document.getElementById("transacao").value;
    const preco = document.getElementById("preco").value;

    if (!transacao) {
        alert("Por favor, selecione se deseja comprar ou alugar.");
        return;
    }

    // Construir a URL dinâmica com os filtros selecionados
    let url = transacao + ".html"; // Vai para 'comprar.html' ou 'alugar.html'
    let params = [];

    if (tipo) params.push(`tipo=${tipo}`);
    if (localizacao) params.push(`localizacao=${localizacao}`);
    if (preco) params.push(`preco=${preco}`);

    if (params.length > 0) {
        url += "?" + params.join("&"); // Adiciona os parâmetros à URL
    }

    // Redireciona para a página correspondente com os filtros aplicados
    window.location.href = url;
}

function aplicarFiltros() {
    const params = new URLSearchParams(window.location.search);

    const tipo = params.get("tipo");
    const localizacao = params.get("localizacao");
    const preco = params.get("preco");

    const imoveis = document.querySelectorAll(".imovel");

    imoveis.forEach(imovel => {
        const tipoImovel = imovel.getAttribute("data-tipo");
        const localizacaoImovel = imovel.getAttribute("data-localizacao");
        const precoImovel = imovel.getAttribute("data-preco");

        if (
            (!tipo || tipo === tipoImovel) &&
            (!localizacao || localizacao === localizacaoImovel) &&
            (!preco || preco === precoImovel)
        ) {
            imovel.style.display = "block"; // Exibir imóvel
        } else {
            imovel.style.display = "none"; // Ocultar imóvel
        }
    });
}

// Chamar a função ao carregar a página
window.onload = aplicarFiltros;

const precos = {
    comprar: [
        { valor: "ate100", texto: "Até R$ 200.000,00" },
        { valor: "100-250", texto: "R$ 200.000,00 - R$ 350.000,00" },
        { valor: "250-500", texto: "R$ 300.000,00 - R$ 500.000,00" },
        { valor: "acima500", texto: "Acima de R$ 500.000,00" }
    ],
    alugar: [
        { valor: "ate1000", texto: "Até R$ 1.000,00" },
        { valor: "1000-2000", texto: "R$ 1.000,00 - R$ 2.000,00" },
        { valor: "acima2000", texto: "Acima de R$ 2.000,00" }
    ]
};
function atualizarPreco() {
    const transacao = document.getElementById("transacao").value;
    const precoSelect = document.getElementById("preco");

    precoSelect.innerHTML = ""; // Limpa as opções

    if (transacao && precos[transacao]) {
        precos[transacao].forEach(faixa => {
            const option = document.createElement("option");
            option.value = faixa.valor;
            option.textContent = faixa.texto;
            precoSelect.appendChild(option);
        });
    } else {
        const option = document.createElement("option");
        option.textContent = "Selecione um tipo primeiro";
        precoSelect.appendChild(option);
    }
}

// Adicionar evento para quando o usuário mudar entre "Comprar" e "Alugar"
document.getElementById("transacao").addEventListener("change", atualizarPreco);

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
