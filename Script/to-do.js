import { list, Task } from "./List.js"
Task()
export function all() {
    let code = `<div class="data">
                <input class="enter" placeholder="Enter the task">
                <div class="buttons">
                    <button class="b b1">Cancel</button>
                    <button class="b b2">Add Task</button>
                </div>
            </div>`
    document.querySelector('.taskInsertion').innerHTML = code

    // Event listener to + Add Task
    document.querySelector('.addTask').addEventListener('click', () => {
        document.querySelector('.data').classList.add('d')
    })




    // To store input value
    let v = document.querySelector('.enter');

    // To get date
    let d = new Date();
    let dat = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let format = `${dat}/${month}/${year}`

    // Add task button
    document.querySelector('.b2').addEventListener('click', () => {
        document.querySelector('.data').classList.remove('d')
        let val = v.value;
        console.log(val)
        list.push(
            {
                name: val,
                date: format,
                id: crypto.randomUUID(),
                completed:'false'
            }
        )
        console.log(list)
        Task()
        all()
    })

    //  cancel button
    document.querySelector('.b1').addEventListener('click', () => {
        v.value = '';
    })

}
all()

