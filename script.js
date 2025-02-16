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
    
    const imoveis = document.querySelectorAll(".imovel");

    imoveis.forEach(imovel => {
        const tipoImovel = imovel.getAttribute("data-tipo");
        const localizacaoImovel = imovel.getAttribute("data-localizacao");
        const transacaoImovel = imovel.getAttribute("data-transacao");
        const precoImovel = imovel.getAttribute("data-preco");

        if (
            (tipo === "" || tipo === tipoImovel) &&
            (localizacao === "" || localizacao === localizacaoImovel) &&
            (transacao === "" || transacao === transacaoImovel) &&
            (preco === "" || preco === precoImovel)
        ) {
            imovel.style.display = "block"; // Exibir imóveis que correspondem ao filtro
        } else {
            imovel.style.display = "none"; // Esconder os imóveis que não correspondem
        }
    });
}
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
