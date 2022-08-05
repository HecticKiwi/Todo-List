// import Project from './Project';
import Todo from './Todo';
import Project from './Project';
import * as storage from './LocalStorage';

export default class UI {
  static #addTodoEvent(todo) {
    todo.addEventListener('click', () => {
      todo.querySelector('.details').classList.toggle('hidden');
    });
  }

  static #addModalCloseEvents() {
    const dialogs = document.querySelectorAll('.modal');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });
  }

  static #addNewProjectEvent() {
    const newProjectEl = document.querySelector('.new-project');
    newProjectEl.addEventListener('click', () => {
      document.querySelector('.project-form').reset();
      document.querySelector('.project.modal').showModal();
    });
  }

  constructor() {
    this.projects = storage.readProjects();
    [this.currProject] = this.projects;
    this.currTodoID = null;
  }

  setupPage() {
    this.#populateProjectsHTML();
    this.#populateTodosHTML(this.currProject);
    this.#addEventListeners();
  }

  #populateProjectsHTML() {
    document.querySelector('.projects').innerHTML = '';
    this.projects.forEach((project) => {
      this.#addProjectEl(project);
    });
  }

  #addProjectEl(project) {
    const frag = document.createRange().createContextualFragment(`
      <li class="project">
        <span class="todo-count">${project.todos.length}</span>
        <span class="name">${project.name}</span>
      </li>
    `);
    if (document.querySelector('.projects').childElementCount !== 0) {
      const deleteEl = document.createRange().createContextualFragment('<img class="delete" src="../../dist/images/delete-bin-line.svg">');
      frag.querySelector('.project').appendChild(deleteEl);
      this.addProjectDeleteEvent(frag.querySelector('.delete'));
    }
    frag.querySelector('.project').addEventListener('click', () => {
      this.currProject = project;
      this.#populateTodosHTML(this.currProject);
    });
    document.querySelector('.projects').appendChild(frag);
  }

  #populateTodosHTML(project) {
    document.querySelector('.projects-header').innerHTML = project.name;
    document.querySelector('.todos').innerHTML = '';
    for (let i = 0; i < project.todos.length; i++) {
      this.addTodoEl(project.todos[i], i);
    }
  }

  #addEventListeners() {
    this.#addTodoButtonEvent();
    UI.#addModalCloseEvents();
    this.#addTodoModalSubmitEvent();
    UI.#addNewProjectEvent();
    this.#addProjectModalSubmitEvent();
  }

  #addCheckboxEvent(checkbox, todo) {
    checkbox.addEventListener('click', (e) => {
      e.stopPropagation();
      checkbox.classList.toggle('checked');
      todo.completed = !todo.completed;
      storage.writeProjects(this.projects);
    });
  }

  #addTodoButtonEvent() {
    const newTodo = document.querySelector('.new-todo-button');
    newTodo.addEventListener('click', () => {
      document.querySelector('.todo-form').reset();
      document.querySelector('.add-text').innerText = 'New Todo';
      this.currTodoID = this.currProject.todos.length;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  #addProjectModalSubmitEvent() {
    document.querySelector('.project-form').addEventListener('submit', () => {
      const name = document.querySelector('#name').value;
      const project = new Project(name);
      this.#addProjectEl(project);
      this.projects.push(project);
      storage.writeProjects(this.projects);
    });
  }

  #addTodoModalSubmitEvent() {
    const todoForm = document.querySelector('.todo-form');
    todoForm.addEventListener('submit', () => {
      const title = document.querySelector('#title').value;
      const details = document.querySelector('#description').value;
      const dueDate = document.querySelector('#due-date').value;
      const priority = document.querySelector('input[name="priority"]:checked').value;
      const todo = new Todo(title, details, dueDate, priority);
      this.addTodoEl(todo, this.currTodoID);
    });
  }

  addTodoEl(todo, i) {
    const {
      title, description, dueDate, priority, completed,
    } = todo;

    const frag = document.createRange().createContextualFragment(`
      <li class="todo ${priority}-priority">
        <div class="summary">
          <div class="checkbox${completed ? ' checked' : ''}"></div>
          <span class="title">${title}</span>
          <span class="due-date">${dueDate}</span>
          <img class="edit" src="../../dist/images/edit-box-line.svg">
          <img class="delete" src="../../dist/images/delete-bin-line.svg">
        </div>
        <p class="details hidden">${description}</p>
      </li>
    `);

    this.#addCheckboxEvent(frag.querySelector('.checkbox'), todo);
    this.addEditEvent(frag.querySelector('.edit'), todo);
    this.addTodoDeleteEvent(frag.querySelector('.delete'), todo);
    UI.#addTodoEvent(frag.querySelector('.todo'));

    const todosEl = document.querySelector('.todos');
    const todoEls = document.querySelector('.todos').children;

    if (i === todoEls.length) {
      todosEl.append(frag);
    } else {
      todosEl.replaceChild(frag, todoEls[i]);
    }

    this.currProject.todos[i] = todo;
    storage.writeProjects(this.projects);
  }

  addEditEvent(editEl, todo) {
    editEl.addEventListener('click', (e) => {
      e.stopPropagation();
      this.currTodoID = this.currProject.todos.indexOf(todo);
      document.querySelector('.form-header').innerHTML = 'Edit Todo';
      document.querySelector('#title').value = this.currProject.todos[this.currTodoID].title;
      document.querySelector('#description').value = this.currProject.todos[this.currTodoID].description;
      document.querySelector('#due-date').value = this.currProject.todos[this.currTodoID].dueDate;
      document.querySelector(`#${this.currProject.todos[this.currTodoID].priority}`).checked = true;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectDeleteEvent(deleteEl, project) {
    deleteEl.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteEl.parentNode.remove();
      const index = this.projects.indexOf(project);
      this.projects.splice(index, 1);
      storage.writeProjects(this.projects);
      this.#populateTodosHTML(this.projects[0]);
    });
  }

  addTodoDeleteEvent(deleteEl, todo) {
    deleteEl.addEventListener('click', () => {
      const index = this.currProject.todos.indexOf(todo);
      this.currProject.todos.splice(index, 1);
      deleteEl.parentNode.parentNode.remove();
      storage.writeProjects(this.projects);
    });
  }
}
