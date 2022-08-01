export default function addEventListeners() {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => checkbox.classList.toggle('checked'));
  });

  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    todo.addEventListener('click', () => {
      todo.classList.toggle('expanded');
    });
  });

  const newTodo = document.querySelector('.add');
  newTodo.addEventListener('click', () => {
    document.querySelector('.new-todo').showModal();
  });

  const dialog = document.querySelector('.new-todo');
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
}
