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




// Event listener to add task
document.querySelector('.b2').addEventListener('click',()=>{
document.querySelector('.data').classList.remove('d')
// To store input value
let v=document.querySelector('.enter');
let val=v.value;
list.push(val)
console.log(list)
all()
})
}
all()

