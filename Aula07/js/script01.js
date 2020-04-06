function abrir() {
  /*
    Essa função abre um menu lateral da esquerda para direita, esse menu
    foi formatado em css e inicialmente ele não é apresentado mno site.
    Quando o usuário clica sobre o botão de menu é chamada essa função
    para abroir o menu. Usamos o comando style.leftn para manipular a posição
    ao lado esquerdo colocando-a em 0 vw isso faz o menu abrir
    */
  document.getElementById("menu").style.left = "0vw";
}
function fechar() {
  /* 
    Para fechar o menu foi aplicado um estilo na posição colocando-a em -10vw, assim
    nos estamos escondendo o menu ao lado esquerdo do navegador
    */
  document.getElementById("menu").style.left = "-20vw";
}
function abrirImagem(info) {
  /*
    Criamos uma função para pegar algumas informações da imagem clicada pelo 
    usuário, neste caso estamos pegando o endereço da imagem(src)
    */
  console.log(info.src);
  /*
  Criar um elemento de html de forma dinâmica para exibir uma 
  imagem
  */
  //   document.bgColor = "black";
  /*
  Criando um elemento de html de forma dinâmica para fazer um efeio de
  sobreposição com uma cor esvura para dar a ideia de uma sombra.
  Usamos o comando CreatElemnt para criar uma div e, isso poderia ser feito com qualquer elemento

  */
  /*
 foi aplicada a div um id com nome fundo, usamos o comando setAtribute para essa operação
 */

  var fundo = document.createElement("div");
  fundo.setAttribute("id", "fundo");
  fundo.style.background = "rgba(0,0,0,0.6)";
  fundo.style.width = "100vw";
  fundo.style.height = "100vh";
  fundo.style.position = "absolute";
  fundo.style.left = "0px";
  fundo.style.top = "0px";
  fundo.zIndex = "9999";

  /*
  Para exibir a ikmagem num tamanho maior foi necessario criar um novo elemento com o comando 
  cretaElement para uma nova div
  */
  var caixa = document.createElement("div");
  /*
  para essa div aplicamos o atributo id com o nome de exibir
  */

  caixa.setAttribute("id", "exibir");
  /*
  O comando append(adicona) e , portanto, neste exemplo estamos adicionando a caixa 
  dentro do fundo.
  Os elementos caixa e fundo foram nomeados com os respectvos ids fundo exibir
  */

  fundo.append(caixa);
  /*
  Para exibir a imagem num tamanho maior criamos um elemento de imagem(img)
  com o comando creatElement. Para essa imagem será passado o atributo src, que
  indica a origem da foto, ou seja, o caminho da que deve ser aberta.
  O caminho da foto é obtido pelo paramêtro da função abrirImagem que tem o nome de info.
  Pegamos, então a informação da imagem clicada e passamos como parametro para o elemento imagem que foi craido logo abaixo

  */

  var imagem = document.createElement("img");
  imagem.src = info.src;

  imagem.setAttribute("id", "exibirImg");

  caixa.append(imagem);
  document.getElementById("conteudo").append(fundo);
  var d = document.getElementById("exibir");
  var i = document.getElementById("exibirImg");

  d.style.width = "35%";
  d.style.position = "absolute";
  d.style.zIndex = 10000;
  d.style.left = "30vw";
  d.style.top = "0vh";
  d.style.textAlign = "center";
  d.style.boxShadow = "0px 0px 20px blue";
  d.style.transition = "ease 0.5s";

  i.style.width = "100%";
  i.style.cursor = "pointer";

  /*
  Foi aplicado a imagem um atributo chamado onclick, que na verdade é um
  evento de javascript para que o meu usuário clique na imagem e faça algumaoperação. Veja que neste 
  exemplo o valor de atributo é uma função-> fecharImagem().
  O que quer dizer que quando nosso usuário clica na imagem criada será chamda
  a função fecharImagem()

  */
  i.setAttribute("onclick", "fecharImagem()");
}
function fecharImagem() {
  /*
    Para fechar a imagem aberta em tamanho maior, estamos usando o comando remove para
    remover o codigo e , portanto, da tela o elemento "fundo"criado na função abrirImagem    */
  document.getElementById("fundo").remove();
  //   document.bgColor = "black";
  //   document.bgColor = "white";
}
