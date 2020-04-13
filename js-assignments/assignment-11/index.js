let startButtonEvent = document.getElementById('startButton');
let stopButtonEvent = document.getElementById('stopButton');
let carStatusEvent = document.getElementById('carStatus');
let accelerateButtonEvent = document.getElementById('accelerateButton');
let decelerateButtonEvent = document.getElementById('decelerateButton');



class Car {
    constructor() {
        this.speed = 10;
    }
    startButtonFunction() {
        return startButtonAction(this.speed);
    }
    stopButtonFunction() {
        return stopButtonAction();
    }
}

function startButtonAction(speed) {
    startButtonEvent.onclick = event => {
        stopButtonEvent.style.display = 'flex';
        startButtonEvent.style.display = 'none';
        carStatusEvent.innerHTML = 'Status:Running';
        accelerateButtonEvent.style.background = 'dodgerblue';
        accelerateButtonAction(speed);
        decelerateButtonAction(speed);
    };
}

function stopButtonAction() {
    stopButtonEvent.onclick = event => {
        startButtonEvent.style.display = 'flex';
        stopButtonEvent.style.display = 'none';
        carStatusEvent.innerHTML = 'Status:Stopped';
        accelerateButtonEvent.style.background = 'grey';

    };
}

function accelerateButtonAction(speed) {
    accelerateButtonEvent.onclick = event => {
        speed = speed + 10;
        console.log(speed);
        accelerateButtonEvent.style.boxShadow = "2px 2px 2px 2px lightgrey";
        decelerateButtonEvent.style.backgroundColor = 'dodgerblue';
        carStatusEvent.innerHTML = `Status:Running with speed ${speed}kmph`;

    }
}

function decelerateButtonAction(speed) {
    decelerateButtonEvent.onclick = event => {
        speed = speed - 10;

        decelerateButtonEvent.style.boxShadow = "2px 2px 2px lightgrey";
        accelerateButtonEvent.style.border = 'none';
        if (speed === 10) {
            console.log(speed);
            stopButtonAction();
            carStatusEvent.innerHTML = 'Status:Running';
            decelerateButtonEvent.style.background = 'grey';
            decelerateButtonEvent.style.border = 'none';
        }
        else {
            carStatusEvent.innerHTML = `Status:Running with speed ${speed}kmph`;
        }
    }
}




let carObject = new Car();
carObject.startButtonFunction();
carObject.stopButtonFunction();
