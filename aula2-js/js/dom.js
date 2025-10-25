//Selecionando  o H1
const titulo = document.getElementById("titulo")
const descricao= document.getElementById("descricao")
const btn= document.getElementById("btn")
const area= document.getElementById("area")
console.log(titulo, descricao, btn, area);


titulo.textContent = "Anne Cachaça";
titulo.style.color = "green";
titulo.style.fontSize = "4rem";

descricao.style.color = "red";

//document.body.style.backgroundColor = "#a6ebd5c1";

//teste de evento ao clicar no botao
btn.addEventListener("click", () => {
    //altera o texto do titulo
    titulo.textContent = "Anneee";
    descricao.style.color = "#2600e5ff";

    let nome = prompt("Você é a Anner Cachaça Taboeiro??");
    alert("Bem vindo ao Taboeiro " + nome);
});

const nomeUsuario = document.getElementById("nomeUsuario");
const saudar = document.getElementById("saudar");
const mensagem = document.getElementById("mensagem");

//Quando o botao for clicado
saudar.addEventListener("click", () => {
    mensagem.textContent = "Seja bem vindo ao tabueiro," + nomeUsuario.value;
    nomeUsuario.value = " ";
});


const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Sou um paragrafo Anne";
area.appendChild(novoParagrafo);

novoParagrafo.remove();


const texto = document.getElementById("texto");
const btnClasse = document.getElementById("btnClasse");

btnClasse.addEventListener("click", () => {
    texto.classList.toggle("destaque");
});

const inputCor = document.getElementById("corEscolhida");
const botaoCor = document.getElementById("mudarCor");
const atual = document.getElementById("atual");

botaoCor.addEventListener("click", ()=> {
    document.body.style.backgroundColor = inputCor.value;
    atual.textContent = "Cor atual: " + inputCor.value;
});