// when we use setTimeout, setInterval, api fetch call, async, await this turns into asyncronus 
console.log('first');
// setInterval(() => {
//     console.log('third');
// }, 3000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;

    // console.log(seconds++);
    // console.log(++seconds);
    console.log(--seconds);
    if (seconds > -15) {
        clearInterval(timeId);
    }
}, 1000);
console.log('second');
// to close running terminal ctrl c 