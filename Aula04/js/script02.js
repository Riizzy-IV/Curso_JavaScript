/*function array() {
  var cidades = ["São Paulo", "Leme", "Campinas", "Salvador"];
  console.log(cidades);
  for (var i = 0; i <= 3; i++) {
    console.log(cidades[i] + " => Cidade");
  }
}
function array2() {
  var cidades = [
    ["Campinas", "Cidade de SP", "500000"],
    ["Leme", "Cidade de SP", "20000"],
    ["Salvador", "Cidade de BA", "500000"]
  ];
  console.log(cidades);
  var exibir = "";
  for (var i = 0; i <= 2; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 2; j++) {
      exibir += "<p>" + cidades[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}*/

function array3() {
  var cursos = [
    [
      "<h1>Admininstração</h1>",
      "Administração Financeira ",
      "Análise e Planejamento",
      "Assistente Administrativo"
    ],

    [
      "<h1>Beleza e Estética</h1>",
      "Depilação",
      "Depilação Facial com Linha",
      "Drenagem Linfática Manual"
    ],

    [
      "<h1>Computação</h1>",
      "Autocad - Projetos de 2D",
      "Coreldraw - Ilustração Digital",
      "Photoshop - Tratamento de imagem"
    ],

    [
      "Fotografia",
      "<h1>Captação de Vídeos com DSLR ou Mirrorless</h1>",
      "Formação Básica em Fotografia",
      "Lightroom: Fuxo de Trabalho e Tratamento de Imagem"
    ],

    [
      "<h1>Tecnologia da Informação</h1>",
      "Básico em Computação - Windows e Office 2019",
      "Excel 2019 - Avançado",
      "Excel com VBA"
    ]
  ];
  console.log(cursos);
  var exibir = "";
  for (var i = 0; i <= 4; i++) {
    exibir += "<div>";
    for (var j = 0; j <= 3; j++) {
      exibir += "<p>" + cursos[i][j] + "</p>";
    }
    exibir += "</div>";
  }
  document.getElementById("saida").innerHTML = exibir;
}
