function formulario() {
  var nome = document.createElement("input", "type");
  document.getElementById("saida").append(nome);
  nome.setAttribute("placeholder", "Nome");

  var email = document.createElement("input");
  document.getElementById("saida").append(email);
  email.setAttribute("placeholder", "E-mail");

  var botao = document.createElement("input");
  botao.setAttribute("type", "submit");
  document.getElementById("saida").append(botao);
}
