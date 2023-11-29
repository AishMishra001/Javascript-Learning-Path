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
  for(let i = 0 ; i<Todolist.length ; i++){
    const todoObject = Todolist[i];
    // const name = todoObject.name;
    const{name,dueDate} = todoObject ; // This is called destructioning a work same as the above code 
    // const dueDate = todoObject.dueDate;
    // const{dueDate} = todoObject ; 

    const html =
    `<div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    Todolist.splice(${i},1);
    renderTodolist();
    " class="delete-button">Delete</button>
    `;
    todolistHtml = todolistHtml + html ; 
  }
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
