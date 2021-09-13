let tasksArr = [];
window.createTask = function createTask(event){
    const myTasks = document.getElementById('myTasks')
    tasksArr.push(event.target.value)
    myTasks.innerHTML += `<div class='p-4 '>${event.target.value}</div>`
    
}

export function TaskPage() {
    let myTEMP = `
    <section class='p-4 bg-info'>
        <input onblur='createTask(event)' class='px-4 c-H5-bg-c1 fM0-size-a w-100 H5-create-new-task c-H5-c2
            placeholder="Create New Task"'>
    </section>

    <seciton id='myTasks d-felx '>
    `

    for(let [index,task] of tasksArr.entries()){
    myTEMP += ` 
            <div class = "H5-myTask d-flex align-items-center bg-dark c-H5-c2 w-100 ">
            <input type="checkbox" class="i-H5-size-a mx-4">
            </div>
    ` 
    }

    myTEMP += ` 
            </section>
            `
    return myTEMP
}