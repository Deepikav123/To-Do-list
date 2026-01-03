
export let list = [{
    name: "Cook",
    date: "31/02/26",
    id: 'dwnenjdenjnrdj'
},
{
    name: "Clean",
    date: "31/02/26",
    id: 'ehdnehjnde'
}
]
export function Task() {

    let tasks = ``;
    list.forEach((e => {
        tasks += `
     <div class="task">
                <div class="left">

                    <div class="taskName">
                        <input type="checkbox" class="check">
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

    // Edit button
    document.querySelectorAll('.tb1').forEach((ele) => {
        let id = ele.dataset.eid;
        ele.addEventListener('click', () => {
            document.querySelector('.data').classList.add('d');
            let v = document.querySelector('.enter');
            let match;
            list.forEach((e) => {
                if (id == e.id) {
                    match = e.name
                }
            })
            v.value = match
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



    function filter(deleteId) {
        let newList = []
        list.forEach((ele) => {
            if (ele.id != deleteId) {
                newList.push(ele)
            }
        })
        list = newList;
        console.log(list)
        Task()
    }


}


