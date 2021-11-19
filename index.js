let num = 1.2345678923456789234567823456798632576879878675645346576879809234567876543234567898765432345678

const runCode = () => {
    generate()
}

const generate = () => {
    getRandomNumberAfterDelay((result) => console.log("result: " + result), err => console.log("error: " + err))
}

const getRandomNumberAfterDelay = (succsessCallBack, errorCallBack) => {
    setTimeout(() => {
        try {
            const randomNumber = Math.floor(Math.random() * 200)
            let newNum = num.toFixed(randomNumber)
            succsessCallBack(newNum)
        } catch (err) {
            errorCallBack(err)
        }
    }, 0);
}