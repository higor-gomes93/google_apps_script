/*
Este script envia e-mails automaticamente e compartilha um arquivo.
O objetivo é enviar um e-mail automaticamente para uma lista de pessoas, e compartilhar um
arquivo com permissões de editor.
*/

function SendEmails() {
  // Definindo a planilha
  var sheet = SpreadsheetApp.getActive().getSheetByName("[SHEET_NAME]");    
  var dataRange = sheet.getDataRange();            
  var data = dataRange.getValues();           
  
  // Definindo os intervalos
  for (var i=1; i<data.length;i++){  
    var row = data[i];
    var email_destinatario = row[x];  // Inserir o número da coluna menos 1                                             
    var subject = row[x];   // Inserir o número da coluna menos 1                                                               
    var message = row[x];   // Inserir o número da coluna menos 1
    var check = row[x];   // Inserir o número da coluna menos 1
    var link = row[x].toString();   // Inserir o número da coluna menos 1                                                               
    var options = {htmlBody: message};                                             

    // Enviando os e-mails
    if(check != "ENVIADO" & subject != ""){
      var id = SpreadsheetApp.openByUrl(link).getId();
      DriveApp.getFileById(id).addEditor(email_destinatario);
      MailApp.sendEmail(email_destinatario, subject, message, options);
      sheet.getRange(i+1, 8).setValue("ENVIADO");   
      SpreadsheetApp.flush();                                       
    }
  }
}