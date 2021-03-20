/*
Este script replica arquivos dentro de pastas de interesse.
O objetivo é pegar uma lista de pastas e inserir dentro dessas pastas cópias de determinados arquivos.
*/

function fileExporter() {
  // Definindo o diretório central
  const mainFolderId = "[INSERIR O ID]"; // Inserir o ID do diretório que contém as pastas que receberão os arquivos
  const mainFolder = DriveApp.getFolderById(mainFolderId);
  const mainFolderIterator = mainFolder.getFolders();

  // Definindo os arquivos a serem copiados
  const files = new Array();
  // Replicar a linha abaixo quantas vezes desejar
  files.push('[INSERIR O ID]');  // Inserir o id do arquivo que deseja copiar e enviar
  
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
    for(let j in files){
      DriveApp.getFileById(files[j]).makeCopy().moveTo(DriveApp.getFolderById(folders[i]));
    }
  }
}