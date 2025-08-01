// Definição do array de imagens
const imagens = [
  "../imagens/imagem1/imagem1_1.jpg",
  "../imagens/imagem2/imagem2_1.jpg",
  "../imagens/imagem3/imagem3_1.jpg",
  "../imagens/imagem4/imagem4_1.jpg",
  "../imagens/imagem5/imagem5_1.jpg",
  "../imagens/imagem6/imagem6_1.jpg",
  "../imagens/imagem7/imagem7_1.jpg",
  "../imagens/imagem8/imagem8_1.jpg",
];

// Função para duplicar e espalhar as imagens
function shuffleAndDuplicateImages(imagens) {
  // Duplica as imagens
  let duplicatedImagens = [...imagens, ...imagens];
  
  // Espalha as imagens
  let shuffledImagens = duplicatedImagens.sort(() => Math.random() - 0.5);
  
  return shuffledImagens;
}

// Chama a função para duplicar e espalhar as imagens
let shuffleImagens = shuffleAndDuplicateImages(imagens);

// Criação dos elementos HTML dinamicamente
for (let i = 0; i < shuffleImagens.length; i++) {
  // Cria um elemento div para cada imagem
  let box = document.createElement("div");
  box.className = "item";
  
  // Cria um elemento img para cada imagem
  let img = document.createElement("img");
  img.src = shuffleImagens[i];
  img.style.display = "none"; // Esconde a imagem inicialmente
  
  // Adiciona a imagem ao elemento div
  box.appendChild(img);
  
  // Adiciona o evento de clique ao elemento div
  box.onclick = handleClick;
  
  // Adiciona o elemento div ao elemento .game
  document.querySelector(".game").appendChild(box);
}

// Variável para armazenar os cards abertos
let openCards = [];

// Função para lidar com o clique nos cards
function handleClick() {
  // Verifica se há menos de 2 cards abertos
  if (openCards.length < 2) {
    // Adiciona a classe boxOpen ao card clicado
    this.classList.add("boxOpen");
    
    // Mostra a imagem do card clicado
    this.querySelector("img").style.display = "block";
    
    // Adiciona o card clicado à lista de cards abertos
    openCards.push(this);
  }
  
  // Verifica se há 2 cards abertos
  if (openCards.length === 2) {
    // Chama a função checkMatch após 500ms
    setTimeout(checkMatch, 500);
  }
  
  console.log(openCards);
}

// Função para verificar se os dois cards abertos são iguais
function checkMatch() {
  // Verifica se os dois cards abertos são iguais
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    // Adiciona a classe boxMatch aos cards iguais
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    // Remove a classe boxOpen dos cards não iguais
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    
    // Esconde as imagens dos cards não iguais
    openCards[0].querySelector("img").style.display = "none";
    openCards[1].querySelector("img").style.display = "none";
  }
  
  // Limpa a lista de cards abertos
  openCards = [];
  
  // Verifica se todos os cards foram encontrados
  if (document.querySelectorAll(".boxMatch").length === shuffleImagens.length / 2) {
    // Exibe uma mensagem de vitória
    alert("Parabéns, você ganhou!");
  }
}
// Adiciona o evento de clique ao botão de reiniciar
document.querySelector(".restart_button").onclick = function() {  
  // Limpa o elemento .game
  document.querySelector(".game").innerHTML = "";
  
  // Chama a função para duplicar e espalhar as imagens novamente
  shuffleImagens = shuffleAndDuplicateImages(imagens);
  
  // Recria os elementos HTML dinamicamente
  for (let i = 0; i < shuffleImagens.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    
    let img = document.createElement("img");
    img.src = shuffleImagens[i];
    img.style.display = "none";
    
    box.appendChild(img);
    box.onclick = handleClick;
    
    document.querySelector(".game").appendChild(box);
  }
  
  // Limpa a lista de cards abertos
  openCards = [];
} 