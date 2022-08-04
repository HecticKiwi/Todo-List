// import Project from './Project';
import Todo from './Todo';
import * as storage from './LocalStorage';
import Project from './Project';

export default class UI {
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

  static addTodoEvent(todo) {
    todo.addEventListener('click', (e) => {
      const { target } = e;
      if (target === todo || target.classList.contains('summary') || target.classList.contains('title') || target.classList.contains('due-date') || target.classList.contains('details')) {
        todo.classList.toggle('expanded');
        todo.querySelector('.details').classList.toggle('hidden');
      }
    });
  }

  static addModalCloseEvents() {
    const dialogs = document.querySelectorAll('.modal');
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
          dialog.close();
        }
      });
    });
  }

  static addNewProjectEvent() {
    const newProjectEl = document.querySelector('.new-project');
    newProjectEl.addEventListener('click', () => {
      document.querySelector('.project-form').reset();
      document.querySelector('.project.modal').showModal();
    });
  }

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
    document.querySelector('.projects').innerHTML = '';
    this.projects.forEach((project) => {
      this.addProjectEl(project);
    });
  }

  addProjectEl(project) {
    const projectEl = UI.createElement('li', '', 'project');
    projectEl.appendChild(UI.createElement('span', project.todos.length, 'todo-count'));
    projectEl.appendChild(UI.createElement('span', project.name, 'name'));
    const deleteEl = UI.createElement('img', '', 'delete');
    deleteEl.src = '../../dist/images/delete-bin-line.svg';
    projectEl.append(deleteEl);
    this.addProjectDeleteEvent(deleteEl);
    projectEl.addEventListener('click', () => {
      this.currProject = project;
      this.populateTodosHTML(this.currProject);
    });
    const projectsEl = document.querySelector('.projects');
    projectsEl.append(projectEl);
  }

  populateTodosHTML(project) {
    document.querySelector('.projects-header').innerHTML = project.name;
    document.querySelector('.todos').innerHTML = '';
    for (let i = 0; i < project.todos.length; i += 1) {
      this.addTodoEl(project.todos[i], i);
    }
  }

  addEventListeners() {
    this.addTodoButtonEvent();
    UI.addModalCloseEvents();
    this.addTodoModalSubmitEvent();
    UI.addNewProjectEvent();
    this.addProjectModalSubmitEvent();
  }

  addCheckboxEvent(checkbox) {
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');

      const index = UI.getTodoIndex(checkbox);
      this.currProject.todos[index].completed = !this.currProject.todos[index].completed;
      storage.writeProjects(this.projects);
    });
  }

  addTodoButtonEvent() {
    const newTodo = document.querySelector('.new-todo-button');
    newTodo.addEventListener('click', () => {
      document.querySelector('.todo-form').reset();
      document.querySelector('.add-text').innerText = 'New Todo';
      this.currTodoID = this.currProject.todos.length;
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectModalSubmitEvent() {
    document.querySelector('.project-form').addEventListener('click', () => {
      const name = document.querySelector('#name').value;
      const project = new Project(name);
      this.addProjectEl(project);
      this.projects.push(project);
      storage.writeProjects(this.projects);
    });
  }

  addTodoModalSubmitEvent() {
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
    this.addTodoDeleteEvent(deleteEl);
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
      document.querySelector('.new-todo.modal').showModal();
    });
  }

  addProjectDeleteEvent(deleteEl) {
    deleteEl.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = Array.prototype.indexOf.call(document.querySelector('.projects').children, deleteEl.parentNode);
      deleteEl.parentNode.remove();
      this.projects.splice(index, 1);
      storage.writeProjects(this.projects);
      this.populateTodosHTML(this.projects[index - 1]);
    });
  }

  addTodoDeleteEvent(deleteEl) {
    deleteEl.addEventListener('click', () => {
      const index = UI.getTodoIndex(deleteEl);
      this.currProject.todos.splice(index, 1);
      deleteEl.parentNode.parentNode.remove();
      storage.writeProjects(this.projects);
    });
  }
}
