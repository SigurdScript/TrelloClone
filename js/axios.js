const formTask = document.getElementById('formTask')

const API_URL =
    'https://my-json-server.typicode.com/sigurdScript/TrelloClone/tasks'

axios
    .get(API_URL)
    .then((resp) => fillTasks(resp.data))
    .catch((e) => console.log(e))

function createCard(d) {
    let newTask = document.createElement('article')

    newTask.classList.add('task')
    let taskTitle = document.createElement('h3')
    taskTitle.innerText = d.title

    let taskPerson = document.createElement('p')
    taskPerson.innerHTML = `<span>Responsable:</span> ${d.person}`

    let taskDeadline = document.createElement('p')
    taskDeadline.innerHTML = `<span>Plazo:</span> ${unixToDate(d.deadline)}`

    newTask.appendChild(taskTitle)
    newTask.appendChild(taskPerson)
    newTask.appendChild(taskDeadline)

    let columnToDo = document.getElementById('todoTasks')
    let columnInProgress = document.getElementById('inProgressTasks')
    let columnDone = document.getElementById('doneTasks')

    if (d.state === 'to-do') {
        columnToDo.appendChild(newTask)
    }
    if (d.state === 'in-progress') {
        columnInProgress.appendChild(newTask)
    }
    if (d.state === 'done') {
        columnDone.appendChild(newTask)
    }
}

function fillTasks(data) {
    data.map((d) => {
        createCard(d)
    })
}

formTask.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.getElementById('titleTask').value
    const selectDeadLine = document.getElementById('deadlineTask').value
    const personTask = document.getElementById('personTask').value

    axios
        .post(API_URL, {
            title,
            person: personTask,
            state: 'to-do',
            deadline: 1591370128,
            created: 1591370128,
        })
        .then((resp) => {
            createCard(resp.data)
        })
})
