function checkMessage() {
  //gets the label name that you want to look for.  In this case, everything has a label.  
  //This is probably not necessary as every email will likely have an attachment but in case
  //things change and I need to do something else at some point I wanted to keep this.
  var check = GmailApp.getUserLabelByName("grandma");
  //Get the threads with the label
  var potential = check.getThreads();
  //If the message is unread, get the attahcment otherwise leave the loop.
  for (var i=0;i< potential.length; i++){
    if(potential[i].isUnread() = true){
      //get the attachment
      var newPic = potential[i].getBytes();
      //add attachment to folder
      var addPic = newPic.addToFolder("grandma");
      //marks the email as read so it doesnt get added twice.
      potential[i].markRead();
    }
    else
      //I believe this will increment i and begin the loop again.  Need to double check.
      continue;
  }
 
};

