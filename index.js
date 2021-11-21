const date = new Date();

const runCode = () => {
    doWork(getTime)
}

const getTime = () => {
    setTimeout(() => {
        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        console.log(time)
    }, 3000);
    
}

const doWork = (callback, time) => {
    console.log("start")
    callback(time)
    console.log("end")
}