const boton = document.getElementById('newTasks')
const formElement = document.getElementById('formElement')
const cancelForm = document.getElementById('cancelForm')

boton.addEventListener('click', () => {
    formElement.classList.add('active')
})

cancelForm.addEventListener('click', () => {
    formElement.classList.remove('active')
})
