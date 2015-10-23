window.onload=function() {
        restoreList('alist', doneTask)
      }
doneTask = function() {
         if (this.checked) {
           this.parentNode.classList.add("done");
         } else {
           this.parentNode.classList.remove("done");
         }
         localSave('alist')
       }    
       
makeNewTask = function() {
        var pri, inputText, ulist, string;
      
        ulist = document.querySelector("#alist");
        task = document.createElement("li");
        checkb = document.createElement("input");
        pri = document.querySelector("#priority").value;
        task.className = pri;
        inputText = document.querySelector("#newtask").value;
        taskText = document.createTextNode(inputText);
    
        checkb.type = "checkbox";
        checkb.onclick = doneTask;
        task.appendChild(checkb);
        task.appendChild(taskText);
        ulist.appendChild(task);
        localSave('alist')
      }
  
