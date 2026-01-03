export function insert(){
    let code=``;
    code+=`
    <div class="data">
                <input class="enter" placeholder="Enter the task">
                <div class="buttons">
                    <button class="b b1">Cancel</button>
                    <button class="b b2">Add Task</button>
                </div>
            </div>
            `
            document.querySelector('.taskInsertion').innerHTML=code;
}