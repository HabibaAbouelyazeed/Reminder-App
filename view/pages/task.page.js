import { App } from '../app.js'

let tasksArr = []

window.createTask = function createTask(event){
    const myTasks = document.getElementById('myTasks')
    tasksArr.push(event.target.value)
    App()
}


window.toggleMenu = function toggleMenu(event){
    let toolbar = event.target.parentElement
    toolbar.style.right = '-481px'
}

export function TaskPage() {
    let myTEMP = `
    <section class='p-4 H5-create-new-task d-flex align-items-center'>
        <i class='i-H5-newTask i-H5-size-a uM0-image-contain mr-4'></i>    
        <input onblur='createTask(event)' class='f-H5-Arial f-H5-32 c-H5-c1-v2 h-100' placeholder='Create New Task...'>
        <i class='i-H5-categories i-H5-size-a uM0-image-contain mx-4'></i>
        <i class='i-H5-moreOptions-grey i-H5-size-a uM0-image-contain ml-auto'></i>     
    </section>

    <seciton id='myTasks'>
    `

    for(let task of tasksArr){
    myTEMP += ` 
            <div class = 'H5-myTask d-flex align-items-center c-H5-c1 w-100 my-4 f-H5-Arial f-H5-32 position-relative overflow-hidden'>
                <input type='checkbox' class='i-H5-size-a mx-4'>
                ${task}
                <i class='i-H5-categories-blue i-H5-size-a uM0-image-contain mx-4'></i>  

                <div class='d-flex align-items-center h-100 ml-auto position-absolute H5-tools-bar'>
                    <div onclick='toggleMenu(event)' class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-moreOptions-white i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>

                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>

                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-reminders i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>

                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-pin i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>
                        
                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-colorbin i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>
                        
                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-archive i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>

                    <div class='c-H5-bg-c1 d-flex align-items-center h-100'>
                        <i class='i-H5-trashbin i-H5-size-a uM0-image-contain mx-4'></i>
                    </div>
                   
                    
                    
                    
                    
                    
                    
                
                </div>
            </div> 
    ` 
    }

    myTEMP += ` 
            </section>
            `
    return myTEMP
}