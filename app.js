

function dragStart(event){
    event.dataTransfer.setData('elem',event.target.id)
}
function dropHandler(event){
    let getData = document.getElementById(event.dataTransfer.getData('elem'))
    event.target.append(getData)
}
function dropOver(event) {
    event.preventDefault()
}
let addTodoBtn = document.querySelector('.addtodo')
let maintodo = document.querySelector('.main-todo')
let input = document.querySelector('.input input')
let a = 1

addTodoBtn.addEventListener('click',addTodo)


function addTodo() {
    a +=1
    if (input.value) {
        let value = `
        <div draggable="true" ondragstart="dragStart(event)" class="todo" id="item${a}">
            <p>${input.value}</p>
            <button class="remove">remove</button>
        </div>
        `        
        maintodo.insertAdjacentHTML('beforeend',value)
        let removeTodoBtn = document.querySelectorAll('.remove')   
        input.value = ''  
        removeTodoBtn.forEach((item)=>{
            item.addEventListener('click',(event=>{
                event.target.parentElement.remove()              
            }))

        })
    }else{
        alert('fil input')        
    }
}
function removeTodo(event) {
    event.target.parentElement.remove()
}