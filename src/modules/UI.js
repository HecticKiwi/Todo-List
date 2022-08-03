// import Project from './Project';
import Todo from './Todo';
import * as storage from './LocalStorage';

export default class UI {
  constructor() {
    this.currTodoID = null;
    this.projects = storage.readProjects();
    [this.currProject] = this.projects;
  }

  setupPage() {
    this.populateProjectsHTML();
    this.populateTodosHTML(this.currProject);
    this.addEventListeners();
  }

  populateProjectsHTML() {
    const projectsEl = document.querySelector('.projects');

    this.projects.forEach((project) => {
      const projectEl = UI.createElement('li', '', 'project');
      projectEl.appendChild(UI.createElement('span', project.todos.length, 'todo-count'));
      projectEl.appendChild(UI.createElement('span', project.name, 'name'));
      projectEl.addEventListener('click', () => {
        // Deselect other projects
        projectEl.classList.add('selected');
        this.currProject = project;
        document.querySelector('.projects-header').innerHTML = project.name;
      });
      projectsEl.append(projectEl);
    });
  }

  populateTodosHTML(project) {
    document.querySelector('.todos').innerHTML = '';
    for (let i = 0; i < project.todos.length; i += 1) {
      this.addTodoEl(project.todos[i], i);
    }
  }

  addEventListeners() {
    this.addTodoButtonEvent();
    UI.addModalCloseEvent();
    this.addModalSubmitEvent();
  }

  addCheckboxEvent(checkbox) {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');

      const index = UI.getTodoIndex(checkbox);
      this.currProject.todos[index].completed = !this.currProject.todos[index].completed;
      storage.writeProjects(this.projects);
    });
  }

  static addTodoEvent(todo) {
    todo.addEventListener('click', (e) => {
      const { target } = e;
      if (target === todo || target.classList.contains('summary') || target.classList.contains('title') || target.classList.contains('due-date') || target.classList.contains('details')) {
        todo.classList.toggle('expanded');
        todo.querySelector('.details').classList.toggle('hidden');
      }
    });
  }

  addTodoButtonEvent() {
    const newTodo = document.querySelector('.new-todo-button');
    newTodo.addEventListener('click', () => {
      document.querySelector('.todo-form').reset();
      document.querySelector('.add-text').innerText = 'New todo';
      this.currTodoID = this.currProject.todos.length;
      document.querySelector('.new-todo-modal').showModal();
    });
  }

  static addModalCloseEvent() {
    const dialog = document.querySelector('.new-todo-modal');
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });
  }

  addModalSubmitEvent() {
    const todoForm = document.querySelector('.todo-form');
    todoForm.addEventListener('submit', () => {
      const title = document.querySelector('#title').value;
      const details = document.querySelector('#description').value;
      const dueDate = document.querySelector('#due-date').value;
      const priority = document.querySelector('input[name="priority"]:checked').value;
      const todo = new Todo(title, details, dueDate, priority);
      storage.writeProjects(this.projects);
      console.log(this.currTodoID);
      this.addTodoEl(todo, this.currTodoID);
    });
  }

  addTodoEl(todo, i) {
    const {
      title, description, dueDate, priority, completed,
    } = todo;

    // Create todo DOM element
    const todoEl = UI.createElement('li', '', 'todo');
    todoEl.className += ` ${priority}-priority`;
    const summaryEl = UI.createElement('div', '', 'summary');
    const checkboxEl = UI.createElement('div', '', 'checkbox');
    if (completed) {
      checkboxEl.classList.add('checked');
    }
    const titleEl = UI.createElement('span', title, 'title');
    const dueDateEl = UI.createElement('span', dueDate, 'due-date');
    const editEl = UI.createElement('img', '', 'edit');
    editEl.src = '../../dist/images/edit-box-line.svg';
    const deleteEl = UI.createElement('img', '', 'delete');
    deleteEl.src = '../../dist/images/delete-bin-line.svg';
    summaryEl.append(checkboxEl, titleEl, dueDateEl, editEl, deleteEl);
    todoEl.appendChild(summaryEl);
    const detailsEl = UI.createElement('p', description, 'details hidden');

    const todosEl = document.querySelector('.todos');
    const todoEls = document.querySelector('.todos').children;
    // console.log(i);
    // console.log(todoEls[i]);
    if (i === todoEls.length) {
      todosEl.append(todoEl);
    } else {
      todosEl.replaceChild(todoEl, todoEls[i]);
    }

    this.currProject.todos[i] = todo;
    storage.writeProjects(this.projects);

    todoEl.appendChild(detailsEl);

    this.addCheckboxEvent(checkboxEl);
    this.addEditEvent(editEl);
    this.addDeleteEvent(deleteEl);
    UI.addTodoEvent(todoEl);
  }

  addEditEvent(editEl) {
    editEl.addEventListener('click', () => {
      this.currTodoID = UI.getTodoIndex(editEl);
      document.querySelector('.form-header').innerHTML = 'Edit Todo';
      document.querySelector('#title').value = this.currProject.todos[this.currTodoID].title;
      document.querySelector('#description').value = this.currProject.todos[this.currTodoID].description;
      document.querySelector('#due-date').value = this.currProject.todos[this.currTodoID].dueDate;
      document.querySelector(`#${this.currProject.todos[this.currTodoID].priority}`).checked = true;
      document.querySelector('.new-todo-modal').showModal();
    });
  }

  addDeleteEvent(deleteEl) {
    deleteEl.addEventListener('click', () => {
      const index = UI.getTodoIndex(deleteEl);
      this.currProject.todos.splice(index, 1);
      deleteEl.parentNode.parentNode.remove();
      storage.writeProjects(this.projects);
    });
  }

  static createElement(tag, text, className = '') {
    const el = document.createElement(tag);
    el.innerText = text;
    el.className = className;
    return el;
  }

  static getTodoIndex(clickedEl) {
    const liEl = clickedEl.parentNode.parentNode;
    const todosEl = document.querySelector('.todos');
    const index = Array.prototype.indexOf.call(todosEl.children, liEl);
    return index;
  }
}
