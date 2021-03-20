/*
Este script serve para coletar dados de uma planilha.
O objetivo é definir uma planilha, uma aba e um range, copiar todos os dados e colar em outra planilha,
automatizando um processo de coleta e centralização de dados.
*/

function dataRangeGetter() {
  // Definindo a origem dos dados
  const spreadsheetId = "[INSERIR O ID DA PLANILHA]";
  const sheetName = "[NOME DA ABA]";
  const startRow = parseInt("[INSERIR A PRIMEIRA LINHA]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número
  const startColumn = parseInt("[INSERIR A PRIMEIRA COLUNA]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número
  const endRow = parseInt("[INSERIR A ÚLTIMA LINHA]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número
  const endColumn = parseInt("[INSERIR A ÚLTIMA COLUNA]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número
  const data = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getRange(startRow, startColumn, endRow, endColumn).getValues();  // Pegando os valores

  // Definindo a planilha destino
  const mainSpreadsheetId = "[INSERIR O ID DA PLANILHA]";
  const mainSheetName = "[NOME DA ABA]";
  const mainSheet = SpreadsheetApp.openById(mainSpreadsheetId).getSheetByName(mainSheetName);
  const mainstartRow = mainSheet.getLastRow()+1;
  const mainstartColumn = parseInt("[INSERIR A PRIMEIRA COLUNA]");  // Inserir o número entre aspas ou trocar toda a expressão depois do '=' por um número
  const mainendRow = endRow - startRow;
  const mainendColumn = (endColumn - startColumn)+1;
  
  // Inserindo os dados
  mainSheet.getRange(mainstartRow, mainstartColumn, mainendRow+1, mainendColumn).setValues(data);
}