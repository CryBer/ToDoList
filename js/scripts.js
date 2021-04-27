const POP_UP = document.getElementById('popUp')

document.getElementById('addTask').addEventListener('click', () => {
    console.log('Add task button was clicked!');

    POP_UP.style.display = 'block'
})

document.getElementById('newTask').addEventListener('click', () => {
    console.log("New task button was clicked!")

    POP_UP.style.display = 'none'

})