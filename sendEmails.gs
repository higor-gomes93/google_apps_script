function SendEmails() {
  // Definindo a planilha
  var sheet = SpreadsheetApp.getActive().getSheetByName("[SHEET_NAME]");    
  var dataRange = sheet.getDataRange();            
  var data = dataRange.getValues();           
  
  // Definindo os intervalos
  for (var i=1; i<data.length;i++){  
    var row = data[i];
    var email_destinatario = row[2];                                                       
    var subject = row[5];                                                                  
    var message = row[6];
    var check = row[7];
    var planilha = row[3].toString();                                                               
    var options = {htmlBody: message};                                             

    if(check != "ENVIADO" & subject != ""){
      var id = SpreadsheetApp.openByUrl(planilha).getId();
      DriveApp.getFileById(id).addEditor(email_destinatario);
      MailApp.sendEmail(email_destinatario, subject, message, options);
      sheet.getRange(i+1, 8).setValue("ENVIADO");   
      SpreadsheetApp.flush();                                       
    }
  }
}