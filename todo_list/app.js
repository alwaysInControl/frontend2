document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value.length === 0) {
        alert('Please enter your task!')
    } else {
        document.querySelector('.tasks').innerHTML += `
        <div class="task">
            <span class="taskName">
                ${document.querySelector('input').value}
            </span>
            <button class="delete">Delete</button>
        </div>`
        document.querySelector('.newTask input').value = ''
        // delete
        let deleteButton = document.querySelectorAll('.delete')
        for(let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].onclick = function () {
                this.parentNode.remove()
            }
        }
        // toggle
        let tasks = document.querySelectorAll('.taskName')
        for(let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
    }
}
