function verificarCampos() {
  var nome = document.getElementById("nome").value;
  var razao = document.getElementById("razao").value;
  /*var cnpj = document.getElementById("cnpj").value;*/
  var email = document.getElementById("email").value;
  var tel = document.getElementById("tel").value;
  var radioSim = document.getElementById("cliente").checked;
  var radioNao = document.getElementById("nao_cliente").checked;

  // Verifica se todos os campos estão preenchidos e se pelo menos um radio está selecionado
  if (
    nome !== "" &&
    razao !== "" &&
    /*cnpj !== "" && // Verifica se o CNPJ não está vazio
    cnpj.replace(/[^\d]/g, "").length === 14 && // Verifica se o CNPJ tem 14 dígitos após remover caracteres não numéricos*/
    email !== "" &&
    tel !== "" && // Verifica se o telefone não está vazio
    tel.replace(/[^\d]/g, "").length === 11 && // Verifica se o telefone tem 11 dígitos após remover caracteres não numéricos
    (radioSim || radioNao)
  ) {
    document.getElementById("submit-button").disabled = false; // Ativa o botão de submit
    document.getElementById("submit-button").style.opacity = 1; // Torna o botão visível
  } else {
    document.getElementById("submit-button").disabled = true; // Desativa o botão de submit
    document.getElementById("submit-button").style.opacity = 0.5; // Reduz a opacidade do botão
  }
}

// Adiciona um ouvinte de eventos input para cada campo do formulário
var inputs = document.getElementsByClassName("forms-check");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", verificarCampos);
}

// Função para desativar o botão de submit ao carregar a página
window.onload = function () {
  document.getElementById("submit-button").disabled = true; // Desativa o botão de submit
  document.getElementById("submit-button").style.opacity = 0.5; // Reduz a opacidade do botão
};

// Adiciona um evento de foco para os inputs
var inputs = document.getElementsByClassName("obrigatorio");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function () {
    this.setAttribute("placeholder", "Preenchimento obrigatório");
  });
}

function atualizarClienteDellamed(valor) {
  formData.cliente_dellamed = valor;
}
