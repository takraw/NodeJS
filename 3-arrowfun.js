const tasks={
    tasks:[{
        text: 'wash the clothes',
        completes: true
    },
    {
        text: 'clean the table',
        completed: false
    },
    {
        text: 'study the book',
        completed: false
    }],
    getTaskstodo(){
        return this.tasks.filter((task)=>task.completed === false)
    }
}
console.log(tasks.getTaskstodo ());















// const fn=()=>{
//     let a=90
//     console.log(a);
// }
// fn()    
// console.log(a);