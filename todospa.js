<script type = "text/javascript" src = "http://bnmnetp.github.io/CS130/listsavers.js"></script>

window.onload=function() {
        restorelist('alist', doneTask)
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
    doneTask = function() {
         if (this.checked) {
           this.parentNode.classList.add("done");
         } else {
           this.parentNode.classList.remove("done");
         }
         localSave('alist')
       }    
        checkb.type = "checkbox";
        checkb.onclick = doneTask;
        task.appendChild(checkb);
        task.appendChild(taskText);
        ulist.appendChild(task);
        localSave('alist')
      }

  
