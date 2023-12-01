let Todolist=[
  {
    name:'Watch youtube',
    dueDate:'2022-12-22'
},
{
  name:'clean dishes',
  dueDate:'2022-12-22'
}];
renderTodolist();
function renderTodolist(){

  let todolistHtml='';
  Todolist.forEach((todoObject,index)=>{
   
    const{name,dueDate} = todoObject ;

    const html =
    `<div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    Todolist.splice(${index},1);
    renderTodolist();
    " class="delete-button">Delete</button>
    `;
    todolistHtml = todolistHtml + html ; 


  })


  document.querySelector('.js-todo-show').innerHTML = todolistHtml; 
  
}




function Todoadd(){
  const nameInputElement = document.querySelector('.js-name-button');
  const name = nameInputElement.value ; 

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value ; 

  Todolist.push({
    // name:name , If the property and the variable name is same we can use a shortcut by using just : name 
    name ,   // shorthand property 
    // dueDate : dueDate 
    dueDate,   // shorthand property 
  });
  
  nameInputElement.value ='';
  renderTodolist();
}
