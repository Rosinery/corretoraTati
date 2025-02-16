const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imoveis = {
    "1": { imagem: "img/c1.jpg", titulo: "Casa no Gabriela", local: "Gabriela", preco: "R$ 219.000,00" },
    "2": { imagem: "img/casa2.jpg", titulo: "Casa no Gabriela", local: "Gabriela", preco: "R$ 219.000,00" },
    "3": { imagem: "img/casa3.jpg", titulo: "Casa no Gabriela", local: "Gabriela", preco: "R$ 219.000,00" },
    "4": { imagem: "img/casa4.jpg", titulo: "Casa no Gabriela", local: "Gabriela", preco: "R$ 219.000,00" },
};

if (id && imoveis[id]) {
    document.getElementById("imagem-detalhe").src = imoveis[id].imagem;
    document.getElementById("titulo").innerText = imoveis[id].titulo;
    document.getElementById("localizacao").innerText = "Localização: " + imoveis[id].local;
    document.getElementById("preco").innerText = "Preço: " + imoveis[id].preco;
}
