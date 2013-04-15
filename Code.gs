function checkMessage() {
  var check = GmailApp.getUserLabelByName("grandma");
  var potential = check.getThreads();
  for (var i=0;i< potential.length; i++){
    if(GmailMessage.isUnread() = true){
      GmailAttachment.getBytes();
    }
    else
      break;
  }
 
};
