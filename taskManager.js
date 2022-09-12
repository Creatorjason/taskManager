// function TaskRunner(con){

// }

// TaskRunner.prototype.push = function push(task){}


// function exampleSimpleTask(done){
//     setTimeout(done, math.random * 1000)
// }

// var r = new TaskRunner()

// r.push(exampleSimpleTask)

// Write a TaskManaging program manage a set of function calls
// func 1
// func 2 etc
// Designed by Jason.....
const BeginStatusIndicator = (func) =>{
    console.log("")
    console.log("Task running😎...")
    console.log("")
    console.log("💃💃💃")
    
}
const EndStatusIndicator = () =>{
    console.log("Task completed👍")
    console.log("")
}
const Task1 = () =>{
    BeginStatusIndicator()
    console.log("I am task one")
    EndStatusIndicator()
}
const Task2 = () =>{
    BeginStatusIndicator()
    console.log("I am task two")
    EndStatusIndicator()
}
const Task3 = () =>{
    BeginStatusIndicator()
    console.log("I am task three")
    EndStatusIndicator()
}
const Task4 = () =>{
    BeginStatusIndicator()
    console.log("I am task four")
    EndStatusIndicator()
}
const Task5 = () =>{
    BeginStatusIndicator()
    console.log("I am task five")
    EndStatusIndicator()
}
const Task6 = () =>{
    BeginStatusIndicator()
    console.log("I am task six")
    EndStatusIndicator()
}
const Task7 = () =>{
    BeginStatusIndicator()
    console.log("I am task seven")
    EndStatusIndicator()
}
const Task8 = () =>{
    BeginStatusIndicator()
    console.log("I am task eight")
    EndStatusIndicator()
}
const Task9 = () =>{
    BeginStatusIndicator()
    console.log("I am task nine")
    EndStatusIndicator()
}
const Task10 = () =>{
    BeginStatusIndicator()
    console.log("I am task ten")
    EndStatusIndicator()
}
const comparator = (a,b)=>{
    return a - b ;
}
// Globals
let time_arr = new Array()
let other = new Set()
let time_arr_2 = []
let time_index = new Map()
let rr = [] // the items stored in this array, are the time taken for each task to complete, the data is sorted in
// ascending. To make the program more dynamic use the values in this array.  



function TaskManager(array){
    this.array = []
}
TaskManager.prototype.push = function(val){
    this.array.push(val)
}
// TaskManager.prototype.removeTask = function(id){
//     this.array.remove(id)
//     const info = `Task ${id} id done and has been removed`
//     return info
// }
TaskManager.prototype.getTaskStack = function(){
    return this.array.slice()
}
TaskManager.prototype.TaskBody = function(task, index){
    let hold = setTimeout(task,  Math.floor(Math.random() * 50000))
    let time_out  = hold["_idleTimeout"]
    glob_index = index
    //console.log(`index ${index} has a time span of ${time_out}`)
    time_index.set(`${time_out}`, `${index}`)
    //rev_time_index.set(`${index}`, `${time_out}`)
    time_arr.push(hold) 
    for(let i=0; i < time_arr.length; i++){
     other.add(time_arr[i]["_idleTimeout"])
    }
    time_arr_2 = [...other]
    let sorted_time = time_arr_2.sort(comparator)
    for(let i = 0; i<=sorted_time.length; i++){
     output = time_index.get(`${sorted_time[i]}`)
     //inde = rev_time_index.get(`${output}`)
     
     if (output == undefined){
         continue
     }
      rr.push(output)
      //console.log(output)
}
}
// TaskManager.prototype.status = function(){
//     let sliced = (rr.slice((rr.length - other.size),(rr.length)))
//     for(i of sliced){
//         console.log(`Task ${i} is running`)
//     }
// }

let txk = new TaskManager()
txk.push(txk.TaskBody(Task1,0))
txk.push(txk.TaskBody(Task2,1))
txk.push(txk.TaskBody(Task3,2)) 
txk.push(txk.TaskBody(Task4,3))
txk.push(txk.TaskBody(Task5,4))
txk.push(txk.TaskBody(Task6,5))
txk.push(txk.TaskBody(Task7,6))
txk.push(txk.TaskBody(Task8,7))
txk.push(txk.TaskBody(Task9,8))
txk.push(txk.TaskBody(Task10,9))

//let user = txk.getTaskStack()
