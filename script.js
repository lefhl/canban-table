const tasks = document.querySelectorAll('.item');

const placeholders = document.querySelectorAll('.placeholder');

let currentTask = null;

tasks.forEach(task => {
  task.addEventListener('dragstart', dragstart)
})

tasks.forEach(task => {
  task.addEventListener('dragend', dragend)
})

placeholders.forEach(item => {
  item.addEventListener('dragover', dragover)
  item.addEventListener('dragenter', dragenter)
  item.addEventListener('dragleave', dragleave)
  item.addEventListener('drop', drop)
})


function dragstart(e) {
  currentTask = e.target;
  currentTask.classList.add('hold')
  setTimeout(() => {
    currentTask.classList.add('hide')
  }, 0)
}

function dragend() {
  currentTask.classList.remove('hold')
  currentTask.classList.remove('hide')
  currentTask = null
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  e.target.classList.remove('hovered')
}

function drop(e) {
  /* Фикс баги: если не взять родителя по атрибуту, то
  ** таким образом получается сложить таску внутрь другой таски
  */
  const parent = e.target.closest('[data-parent]')
  console.log(e);
  parent.classList.remove('hovered')
  parent.append(currentTask)
}
