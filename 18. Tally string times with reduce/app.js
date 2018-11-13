const timeNodes = [...document.querySelectorAll('[data-time]')];
const seconds = timeNodes
    .map(node => node.dataset.time) //getting the time
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); //splitting and converting to nums and secs
        return (mins*60) + secs;
    })
    .reduce((total, vidSecs) => total + vidSecs); // total number of seconds


    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);