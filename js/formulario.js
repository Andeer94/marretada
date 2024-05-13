const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const fs = require("fs");

// Função para salvar os dados em um arquivo CSV
function salvarDadosCSV(dados) {
  // Caminho do arquivo CSV
  const filePath = "dados_formulario.csv";

  // Definindo cabeçalhos do arquivo CSV
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: "nome", title: "Nome" },
      { id: "razao", title: "Razão Social" },
      { id: "cnpj", title: "CNPJ" },
      { id: "email", title: "E-mail" },
      { id: "tel", title: "Telefone" },
      { id: "cliente_dellamed", title: "Cliente Dellamed" },
    ],
  });

  // Escrevendo os dados no arquivo CSV
  csvWriter
    .writeRecords([dados])
    .then(() => {
      console.log("Dados salvos com sucesso no arquivo CSV.");
    })
    .catch((error) => {
      console.error("Erro ao salvar os dados no arquivo CSV:", error);
    });
}

// Dados do formulário (exemplo)
const formData = {
  nome: "nome",
  razao: "razao",
  cnpj: "cnpj",
  email: "email",
  tel: "tel",
  cliente_dellamed: "Sim", // Ou 'Não', dependendo da opção selecionada
};

// Chamando a função para salvar os dados
salvarDadosCSV(formData);
