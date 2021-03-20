/*
Este script cria pastas dentro de um diretório principal.
O objetivo é definir uma lista de nomes de pastas e criá-las automaticamente num diretório definido.
*/

function newFolder() {
  // Definindo o diretório destino
  const mainFolderId = "[INSERIR O ID]" // Inserir o ID do diretório que receberá as novas pastas
  const mainFolder = DriveApp.getFolderById(mainFolderId);

  // Array com as pastas que serão criadas
  const folders = new Array();
  // Replicar a linha abaixo quantas vezes desejar
  folders.push('[INSERIR O NOME]');  // Inserir o nome da pasta que deseja criar

  // Criando as pastas dentro do diretório
  for(let i in folders) {
    mainFolder.createFolder(folders[i]);
  }
}