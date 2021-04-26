/*
Este script coleta respostas de múltiplas planilhas em múltiplas pastas.
O objetivo é definir um diretório central, listar as pastas dentro dele, e na sequência listar todas as planilhas
dentro das subpastas. Por fim, o script coleta os dados de todas as planilhas.
*/

function coletorPastas() {
  // Definindo a pasta de respostas
  const folder = DriveApp.getFolderById("[FOLDER_ID]");
  const folderIterator = folder.getFolders();
  let folderCheck = folderIterator.hasNext();
  const folders = new Array();

  // Coletando todas as subpastas com as respostas
  while (folderCheck == true){
    let folderId = folderIterator.next().getId().toString();
    folders.push(folderId);
    folderCheck = folderIterator.hasNext();
  }

  // Retornando os valores
  return folders
}

function coletorArquivos(folderId) {
  // Definindo a pasta de respostas
  const folder = DriveApp.getFolderById(folderId);
  const fileterator = folder.getFiles();
  let fileCheck = fileterator.hasNext();
  const files = new Array();

  // Coletando todas as subpastas com as respostas
  while (fileCheck == true){
    let fileId = fileterator.next().getId().toString();
    files.push(fileId);
    fileCheck = fileterator.hasNext();
  }

  // Retornando os valores
  return files
}

function coletorDados(fileId) {
  // Definindo a origem dos dados
  const spreadsheetId = fileId;
  const sheetName = "[SHEET_NAME]";
  const startRow = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número  
  const startColumn = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número;
  const endRow = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número;
  const endColumn = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número; 
  
  // Coletando os valores
  const data = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getRange(startRow, startColumn, endRow-1, endColumn).getValues();

  // Retornando os valores
  return data
}

function coletorNomes(fileId) {
  // Função para personalizar uma string de nomes. Pode ser dispensável
  // Coletando o nome da planilha
  const rawName = DriveApp.getFileById(fileId).getName().toString();
  const name = rawName.split(" - ")[1];
  const listNames = [name, name, name, name, name];

  // Retornando o valor
  return listNames
}

function registroDados(data, names) {
   // Definindo a planilha destino
  const mainSpreadsheetId = "1RtPiORyQqR1eyq7_n8BPuLK9JeEX3FgVKBfGfM0_ns8";
  const mainSheetName = "Dataset";
  const mainSheet = SpreadsheetApp.openById(mainSpreadsheetId).getSheetByName(mainSheetName);
  const mainstartRow = mainSheet.getLastRow();
  const mainstartColumn = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número;
  const mainendRow = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número;
  const mainendColumn = parseInt("[INSERIR]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número;
  
  // Inserindo os dados
  mainSheet.getRange(mainstartRow+1, mainstartColumn+1, mainendRow, mainendColumn).setValues(data);
  // Pode ser dispensável
  mainSheet.getRange(mainstartRow+1, mainstartColumn, mainendRow, 1).setValue(names);
}

function coletorRespostas() {
  const folders = coletorPastas();

  for (let i in folders) {
    files = coletorArquivos(folders[i]);
    for (let j in files) {
      dados = coletorDados(files[j]);
      nome = coletorNomes(files[j]);
      registroDados(dados, nome);
    }
  }
}