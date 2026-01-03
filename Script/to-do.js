import { list } from "./List.js"

function all(){
let code=`<div class="data">
                <input class="enter" placeholder="Enter the task">
                <div class="buttons">
                    <button class="b b1">Cancel</button>
                    <button class="b b2">Add Task</button>
                </div>
            </div>`
document.querySelector('.taskInsertion').innerHTML=code

// Event listener to + Add Task
document.querySelector('.addTask').addEventListener('click',()=>{
    document.querySelector('.data').classList.add('d')
})




let v=document.querySelector('.enter');
let val=v.value;
// Event listener to add task
document.querySelector('.b2').addEventListener('click',()=>{
document.querySelector('.data').classList.remove('d')
// To store input value
list.push(val)
console.log(list)
all()
})

// Event listener to cancel button
document.querySelector('.b1').addEventListener('click',()=>{
v.value='';
})

// Tasks
    let tasks=``;
    list.forEach((e=>{
    tasks+=`
     <div class="task">
                <div class="left">

                    <div class="taskName">
                        <input type="checkbox" class="check">
                        <div class="name">${e.name}</div>
                    </div>
                    <div class="date">${e.date}</div>
                </div>
                <div class="taskButtons">
                    <button class="tb tb1">Edit</button>
                    <button class="tb tb2">Delete</button>
                </div>
            </div>
            `
          

            document.querySelector('.listItems').innerHTML=tasks
 }))

}
all()

