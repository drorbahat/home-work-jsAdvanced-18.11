const outputField = document.getElementById("output-field")
const date = new Date();

const runCode = () => {
    doWork(getTime)
}

const getTime = () => {
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log(time)
}

const doWork = (callback, time) => {
    console.log("start")
    callback(time)
    console.log("end")
}