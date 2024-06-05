
function ajouterTache() {
    const task = document.getElementById("task");
    const taskList = document.getElementById("tasklist");
    const tasklistDone = document.getElementById("tasklistDone");
 
   

    if (task.value) {
        const listItem = document.createElement('li');
        listItem.innerHTML=task.value;
        taskList.appendChild(listItem);
      
       
        $(listItem).on('swiperight',function(e){
            $(this).toggleClass('line-through').delay(400).fadeOut('slow',()=>{
                tasklistDone.appendChild(this);
                $(this).removeClass('line-through').show();

            });
          
            
        });
        $(listItem).on('swipeleft',function(e){
            $(this).hide('slow',function(){
                $(this).remove();
        })
    });
    $(taskList).listview('refresh');
    $(tasklistDone).listview('refresh');
    task.select();
  

}

task.value = ''; 


}
function reinitialiserListe() {
    const taskList = document.getElementById('tasklist');
    const task = document.getElementById('task');
    task.value = '';
    taskList.innerHTML='';
    task.focus();
}


    
   
    




