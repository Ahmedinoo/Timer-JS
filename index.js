const values = {
    stopStartByReset: false,
    time: {
        seconds:0,
        minutes:0
    }
}
const timer = ms => new Promise(res => setTimeout(res, ms));
const delay = async () => {
    if (values.stopStartByReset) return;
    for(let n = 59; n>0; n--){
        while(values.time.seconds > 0) {
            document.getElementById("time").textContent = `${values.time.minutes} : ${values.time.seconds}`
            values.time.seconds--;
            await timer(1000)
        }
        values.time.minutes--;
        document.getElementById("time").textContent = `${values.time.minutes} : ${values.time.seconds}`
        await timer(1000)
        values.time.seconds = 59;
        n=59;
    }
}
const start = () => {
    document.getElementById("start").disabled = true;
    document.getElementById("time").textContent = `60:00`
    values.time.seconds = 59;
    values.time.minutes = 59;
    delay();
}
const reset = () => {
    values.time.seconds = 59;
    values.time.minutes = 59;
    values.stopStartByReset = true;
    delay();
}
const stop = () => {
    document.getElementById("start").disabled = false;
    document.getElementById("time").textContent = `${values.time.minutes} : ${values.time.seconds}`
    values.stopStartByReset = true;
}
