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