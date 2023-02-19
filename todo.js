const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input[type='text']");
const todoList = document.querySelector(".todo-list");
//e.preventDefault: Stopping form from being refresed

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<span>${newTodoText}</span>
  <div class="todo-buttons">
    <button class="btn-todo done">Done</button>
    <button class="btn-todo remove">Remove</button>
  </div>`;
  newLi.innerHTML = newLiInnerHTML;
  console.log(newLi);
  todoInput.value = "";
  todoList.append(newLi);
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
  
  if (e.target.classList.contains("remove")) {
    const removeLi = e.target.parentNode.parentNode;
    removeLi.remove();
  }
});
