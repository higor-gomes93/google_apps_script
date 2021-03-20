/*
Este script cria múltiplas pastas em múltiplos diretórios.
O objetivo é ter um diretório base, explorar todas as pastas dentro dele e criar diversas
novas pastas em cada uma delas.
*/

function fileExporter() {
  // Definindo o diretório central
  const mainFolderId = "[INSERIR O ID]"; // Inserir o ID do diretório que contém as pastas que receberão os arquivos
  const mainFolder = DriveApp.getFolderById(mainFolderId);
  const mainFolderIterator = mainFolder.getFolders();

  // Definindo as pastas a serem criadas
  const newFolders = new Array();
  // Replicar a linha abaixo quantas vezes desejar
  newFolders.push('[INSERIR O NOME DA PASTA]');  // Inserir o id da pasta que deseja criar e enviar
  
  // Declarando o array de pastas e a variável de checagem
  const folders = new Array();
  let check = mainFolderIterator.hasNext();

  // Armazenando os IDs das pastas que receberão as cópias dos arquivos
  while (check) {
    folders.push(mainFolderIterator.next().getId());
    check = mainFolderIterator.hasNext();
  }

  // Copiando os arquivos
  for(let i in folders) {
    for(let j in newFolders){
      DriveApp.getFolderById(files[j]).createFolder(newFolders[i]);
    }
  }
}