const POP_UP = document.getElementById('popUp')
let tasks = [];

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("tasks") || "[]");
    console.log(tasks)
    render();
});

document.getElementById('addTask').addEventListener('click', () => {
    console.log('Add task button was clicked!');

    POP_UP.style.display = 'block'
})

document.getElementById('newTask').addEventListener('click', () => {
    POP_UP.style.display = 'none'

    let task = {names: names.value, date: date.value};

    names.value = "";
    date.value = "";

    tasks.push(task);

    render();

})

function render() {
    let biblioteka = document.getElementById('storage');
    biblioteka.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {
        let gramata = `
        <div class="task">
            <h3>Names: ${tasks[i].names}</h3>
            <h4>Date: ${tasks[i].date}</h4>
        </div>`;

        biblioteka.innerHTML += task;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks))
}