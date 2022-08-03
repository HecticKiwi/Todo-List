import Project from './Project';
// import Todo from './Todo';

export function readProjects() {
  let projects = [];
  if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects = projects.map(({ name, todos }) => new Project(name, todos));
  } else {
    projects.push(new Project('Default'));
    writeProjects(projects);
  }
  return projects;
}

export function writeProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
  localStorage.setItem('test', 'asdf');
}
