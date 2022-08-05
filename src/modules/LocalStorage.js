import Project from './Project';
import Todo from './Todo';

export function readProjects() {
  let projects = [];
  if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects = projects.map(({ name, todos }) => new Project(name, todos));
  } else {
    const defaultProject = new Project('Default');
    defaultProject.addTodo(new Todo('Learn about webpack', 'Especially look into configuration and loaders... tricky stuff.', '2022-08-20', 'low'));
    defaultProject.addTodo(new Todo("Check out michalosman's project submissions on The Odin Project", 'His projects are consistently top-loved. I could learn a thing or two from his source code.', '2022-09-10', 'medium'));
    defaultProject.addTodo(new Todo('Contribute to an open source project', 'I bet this would look good an a resume.', '2023-02-30', 'high'));
    projects.push(defaultProject);
    writeProjects(projects);
  }
  return projects;
}

export function writeProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('test', 'asdf');
}
