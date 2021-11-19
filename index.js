const outputField = document.getElementById("output-field")

const runCode = () => {
    doWork(getTime)
}

const getTime = () => {
    const d = new Date();
    return d
}

const doWork = (callback) => {
    console.log("start")
    console.log(callback())
    console.log("end")
}