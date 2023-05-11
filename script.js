if (window.location.href.includes("index.html")) {
    alert("Seja bem vindo");
  }
  
/*criando um array de imagens  */
var imagens=[
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/1.jpg',
    'img/8.jpg',
    'img/2.webp',
    'img/9.webp',
    'img/10.jpeg',
    'img/11.webp',
];

/*declarando variaveis */
var Index =0;
var time =3000;

/* criando uma função */

function slideShow(){
    document.getElementById('image').src =imagens[Index]; /* pega  id e o caminho da imagem*/
    Index++;/* incrementa */
    if (Index == imagens.length){Index =0;} /* verifica se tem imagens e conta */
    setTimeout("slideShow()",time);/* definindo o tempo de 2 milesegundos*/
}

slideShow(); /* chamando a função */

var corFundo = "#f8f8f8"; // cor de fundo clara
      
      var btnMudarCor = document.getElementById("btn-mudar-cor");
      btnMudarCor.addEventListener("click", function() {
        if (corFundo === "#f8f8f8") {
          corFundo = "#343a40"; // cor de fundo escura
        } else {
          corFundo = "#f8f8f8"; // cor de fundo clara
        }
        document.body.style.backgroundColor = corFundo;
      });