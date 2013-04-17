function checkMessage() {
  //gets the label name that you want to look for.  In this case, everything has a label.  
  //This is probably not necessary as every email will likely have an attachment but in case
  //things change and I need to do something else at some point I wanted to keep this.
  
  var label = GmailApp.getUserLabelByName("grandma");
  
  //naming the folder
  var folder = DocsList.getFolder('grandma');
  //Get the threads with the label
  
  
  //var newMsg = threads.getMessages();
  
 
  var threads = label.getThreads();
  for (var i=0;i< threads.length; i++){
    
    if(threads[i].isUnread() === true){
      
      
      var newMsg = threads[i].getMessages();
      var newAtch = newMsg[i].getAttachments();
     
      var getPic = newAtch[i].copyBlob();
      var file = folder.createFile(getPic);
      threads[i].markRead();
    }
    else
      //I believe this will increment i and begin the loop again.  Need to double check.
      break;
  }
 
};

