const fetchTask = async () => {
    const response = await fetch('ATPLC-Training-Daily_Tasks/Json/Tasks.json');
    const tasks = await response.json();
    return tasks;
}


const setTasks = (fetchedTasks) => {
    const taskContainer = document.querySelector('.task-container');
    fetchedTasks.forEach(task => {
        taskContainer.innerHTML += `
        <a href=${task.task_link} class="task" target="_blank">
        <div class="task-heading">
        <div class="task-no">${task.task_no}</div>
        <div class="task-name">${task.task_title}</div>
        </div>
        <div class="task-description">
        ${task.tasks.map((el) => `<p>${el}</p>`).join('')}
        </div >
        </a >
        `
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    const tasks = await fetchTask();
    setTasks(tasks);
})
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (scrollY >= 50)
        nav.classList.add('active')
    else nav.classList.remove('active')
})

let a = 6;
console.log(a + 5);

