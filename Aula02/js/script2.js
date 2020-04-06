var cor = prompt(
  "Digite uma das cores para o plano de fundo: Preto, Vermelho, Verde, Azul, Amarelo"
);

//cor = cor.toUpperCase(); //Converte todas as letras para masiúscula
cor = cor.toLowerCase(); //Converte todas letras para minúsculas
console.log(cor);
// if (cor == "Preto") document.bgColor = "black";
// if (cor == "vermelho") document.bgColor = "red";
// if (cor == "verde") document.bgColor = "green";
// if (cor == "azul") document.bgColor = "blue";
// if (cor == "amarelo") document.bgColor = "Yellow";

// if (cor == "Preto") document.bgColor = "black";
// else if (cor == "vermelho") document.bgColor = "red";
// else if (cor == "verde") document.bgColor = "green";
// else if (cor == "azul") document.bgColor = "blue";
// else if (cor == "amarelo") document.bgColor = "Yellow";
// else document.bgColor = "pink"

//quando temos muitos teste a fazer ultilizamos a
//estrutura switch ao invés de if
switch (cor) {
  case "vermelho":
    document.bgColor = "#f44336";
    break;
  case "roxo":
    document.bgColor = "#9c27b0";
    break;
  case "preto":
    document.bgColor = "#000000";
    break;
  case "verde":
    document.bgColor = "#00ff00";
    break;
  case "azul":
    document.bgColor = "#000ff";
    break;
  case "laranja":
    document.bgColor = "#ff9800";
    break;

  default:
    document.bgColor = "#eeeeee";
}
