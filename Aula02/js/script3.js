/* Foi criada a função alterarcor para que seja chamda pelo
botão de formulário no html. assim o usúario poderá 
interargir com os elementos em tela.
*/

function alteracor() {
  /*
    Para saber em qual botão de rádio o usúario clicou estamos usando o comando document.forms[0].cor[x].checked, onde:
    document trata dos elementos que estão no body
    para pegar o formulário usamos o comando forms[0], ou seja,
    o primeiro formulário de uma página html sempre terá o seu índice igual a zero(0), portanto estamos pegando o peimeiro formulário
    Epara pegar os elementos dentro do formulário também usamos 
    os seus índices, assim temos cor que é um botão de radio e seguido do seu índice, Ex: cor[0] assim pegamos o primeiro elemento do formulário 
    Depois usamos o comando checked para saber se a caixa foi selecionada.
    */

  if (document.forms[0].cor[0].checked) document.bgColor = "red";
  else if (document.forms[0].cor[1].checked) document.bgColor = "green";
  else if (document.forms[0].cor[2].checked) document.bgColor = "blue";
  else if (document.forms[0].cor[3].checked) document.bgColor = "yellow";
  else if (document.forms[0].cor[4].checked) document.bgColor = "black";
}
function abreFoto(x) {
  //   if (x == 1)
  //     document.getElementById("area").innerHTML = "<img src=img/car1.jpg>";
  //   else if (x == 2)
  //     document.getElementById("area").innerHTML = "<img src=img/car2.jpg>";
  //   else if (x == 3)
  //     document.getElementById("area").innerHTML = "<img src=img/car3.jpg>";
  //   else if (x == 4)
  //     document.getElementById("area").innerHTML = "<img src=img/moto4.jpg>";
  // }

  switch (x) {
    case 1:
      document.getElementById("area").innerHTML = "<img src=img/car1.jpg>";
      break;
    case 2:
      document.getElementById("area").innerHTML = "<img src=img/car2.jpg>";
      break;
    case 3:
      document.getElementById("area").innerHTML = "<img src=img/car3.jpg>";
      break;
    case 4:
      document.getElementById("area").innerHTML = "<img src=img/moto4.jpg>";
      break;
    case 5:
      document.getElementById("area").innerHTML = "<img src=img/car5.jpg>";
      break;
    case 6:
      document.getElementById("area").innerHTML = "<img src=img/moto6.jpg>";
      break;
  }
}
