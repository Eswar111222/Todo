// function to save the task
// empty array to store all task


let TaskList=[];

function SaveTask(){
    debugger;
    // getting the  user input values form input box
    let TaskName=document.getElementById('input_val').value;
    if(TaskName.trim()!==''){

    let TaskData={
        //taskdata to generate new id each time the user adds  new data
        taskId:TaskList.lenght+1,
        taskName:TaskName,
    }   
    TaskList.push(TaskData); 
    document.getElementById('input_val').value = ""; 
    DynammicRendering()
}}
// function for rendering or function for showing the list dynamically
// function dynamic rendering
function DynammicRendering(){
    debugger;
    document.querySelector('.Task_list').innerHTML=''
    for(i=0;i<TaskList.length;i++){
        const dynamicLis=document.createElement('li');
        dynamicLis.classList.add('task');
        const myPara=document.createElement('p');
        myPara.innerHTML=TaskList[i].taskName;
        //appending the paragraph to li
        dynamicLis.appendChild(myPara);
        //apppending the li to ul list
        document.querySelector('.Task_list').appendChild(dynamicLis);
        // creating the div element to add edit delete and list items
        const DivEle=document.createElement('div');
        DivEle.classList.add('curd');
        // to add icons like edit delete
        // 1.EditIcon
        const EditIcon=document.createElement('i');
        EditIcon.classList.add('bi');
        EditIcon.classList.add('bi-arrow-up-left')
       
        EditIcon.addEventListener('click', EditTask) 
      EditIcon.taskId=TaskList[i].taskId

    
        // 2.delete is Secure Context
        const DeleteIcon=document.createElement('i');
        DeleteIcon.classList.add('bi','bi-x-lg');
        DeleteIcon.addEventListener('click',DeleteTask) 
        DeleteIcon.taskId=TaskList[i].taskId

        DivEle.appendChild(DeleteIcon)
        DivEle.appendChild(EditIcon)
        dynamicLis.appendChild(DivEle)
      
    }
}

//function to edit the task
function EditTask(e){
    
    let edi=TaskList.find((d)=> d.taskId == e.target.taskId)
    document.getElementById('input_val').value=edi.taskName;
}

//function  to delete the task
function DeleteTask(e){
    console.log(e.target)
    console.log(e.target.taskId)
    var index=TaskList.findIndex((d)=>d.taskId == e.target.taskId)
    TaskList.splice(index,1)
    // localStorage.setItem('taskName',JSON.stringify(TaskList))
    DynammicRendering()

}

// function to remove all the data from the ui

function removeAll(){
    TaskList.splice(0);
    localStorage.removeItem('taslName')
    DynammicRendering()

}