/*
Este script obtém os IDs de todos os arquivos dentro de uma pasta de interesse.
O objetivo é pegar uma pasta e obter todos os IDs dos arquivos que estão dentro dessa pasta, de forma automática.
*/

function fileExporter() {
  // Definindo o diretório central
  const mainFolderId = "[INSERIR O ID]"; // Inserir o ID do diretório que contém as pastas que receberão os arquivos
  const mainFolder = DriveApp.getFolderById(mainFolderId);
  const fileIterator = mainFolder.getFiles();

  
  // Declarando o array de pastas e a variável de checagem
  const files = new Array();
  let check = fileIterator.hasNext();

  // Armazenando os IDs dos arquivos dentro da pasta
  while (check) {
    files.push(fileIterator.next().getId());
    check = fileIterator.hasNext();
  }
}