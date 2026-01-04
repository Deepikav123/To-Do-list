
export let list = [{
    name: "Cook",
    date: "31/02/26",
    id: 'dwnenjdenjnrdj',
    completed: 0
},
{
    name: "Clean",
    date: "31/02/26",
    id: 'ehdnehjnde',
    completed: 0
}
]
export function Task() {

    let tasks = ``;
    list.forEach((e => {
        tasks += `
     <div class="task">
                <div class="left">

                    <div class="taskName">
                        <input type="checkbox" class="check" ${e.completed ? 'checked' : ''} data-cid=${e.id}>
                        <div class="name">${e.name}</div>
                    </div>
                    <div class="date">${e.date}</div>
                </div>
                <div class="taskButtons">
                    <button class="tb tb1" data-eid="${e.id}">Edit</button>
                    <button class="tb tb2" data-did="${e.id}">Delete</button>
                </div>
            </div>
            `


    }))
 document.querySelector('.listItems').innerHTML = tasks


    // Task status
    let status = `  <div class="heading">
                Tasks completed
            </div>
            <div class="done">
                <div class="score">
                    ${finished()}/${total()}
                </div>
            </div>`

document.querySelector('.status').innerHTML=status

   

    // Edit button
    document.querySelectorAll('.tb1').forEach((ele) => {
        let id = ele.dataset.eid;
        ele.addEventListener('click', () => {
            document.querySelector('.data').classList.add('d');
            let match = matching(id);
            let v = document.querySelector('.enter');
            v.value = match.name;
            filter(id)
        })
    })



    //delete button
    document.querySelectorAll('.tb2').forEach((e) => {
        let id = e.dataset.did;
        e.addEventListener('click', () => {
            filter(id)

        })
    })


    // Checkbox
    document.querySelectorAll('.check').forEach((e) => {
        let id = e.dataset.cid;
        e.addEventListener('click', () => {
            append(id)
        })
    })


    function filter(deleteId) {
        let newList = []
        list.forEach((ele) => {
            if (ele.id != deleteId) {
                newList.push(ele)
            }
        })
        list = newList;
        Task()
    }

    function matching(id) {
        let match;
        list.forEach((e) => {
            if (e.id == id) {
                match = e;
            }
        })
        return match
    }

    function append(id) {

        let n = []
        let same;
        list.forEach((ele) => {
            if (id != ele.id) {
                n.push(ele)
            }
            else {
                ele.completed = 1
                same = ele
            }

        })
        n.push(same)
        list = n;
        console.log(list)
        Task()
    }


    function total() {
        let tot = 0;
        list.forEach((ele) => {
            tot += 1;
        })
        return tot;
    }

    function finished() {
        let fin = 0;
        list.forEach((ele) => {
            if (ele.completed) {
                fin++;
            }
        })
        return fin;
    }
}



