const startButtonEvent = document.getElementById('startButton'),
    stopButtonEvent = document.getElementById('stopButton'),
    carStatusEvent = document.getElementById('carStatus'),
    accelerateButtonEvent = document.getElementById('accelerateButton'),
    decelerateButtonEvent = document.getElementById('decelerateButton'),
    addNewButtonEvent = document.getElementById('addCar');


let addCarObjectClone = '';
let storingDiv = [];
let duplicateObjects = [];
class Car {
    constructor() {
        this.speed = 0;
        this.carStatus = "stopped";
    }

    startCar() {
        this.carStatus = "Running";

    }
    stopCar() {
        this.carStatus = 'Stopped';
    }
    acceleration() {
        this.speed = this.speed + 10;
        this.carStatus = `Status:Running with speed ${this.speed}kmph`;
    }
    deceleration() {
        if (this.speed > 0) {
            this.speed = this.speed - 10;
            this.carStatus = `Status:Running with speed ${this.speed} kmph`;
        }
    }
}

startButtonEvent.onclick = event => {
    accelerateButtonEvent.disabled = false;
    stopButtonEvent.style.display = 'inline';
    startButtonEvent.style.display = 'none';
    carObject.startCar();
    carStatusEvent.innerHTML = `Status:${carObject.carStatus}`;
    uiFunction('start')

}
stopButtonEvent.onclick = event => {
    accelerateButtonEvent.disabled = true;
    decelerateButtonEvent.disabled = true;
    stopButtonEvent.style.display = 'none';
    startButtonEvent.style.display = 'inline';
    carObject.stopCar();
    carStatusEvent.innerHTML = `Status:${carObject.carStatus}`;
    uiFunction('stop');
}
accelerateButtonEvent.onclick = event => {
    decelerateButtonEvent.disabled = false;
    carObject.acceleration();
    carStatusEvent.innerHTML = `Status:${carObject.carStatus}`;
    uiFunction('acceleration');
}
decelerateButtonEvent.onclick = event => {
    carObject.deceleration();
    if (carObject.speed === 0) {
        carStatusEvent.innerHTML = `Status:Running`;
    }
    else {
        carStatusEvent.innerHTML = `Status:${carObject.carStatus}`;
    }
    uiFunction('decelaration');
}

function uiFunction(state) {
    if (state == 'start') {
        accelerateButtonEvent.style.color = '#33cccc';
        accelerateButtonEvent.style.border = '2px solid #33cccc';
        accelerateButtonEvent.style.background = 'white';
    }
    else if (state == 'stop') {
        accelerateButtonEvent.style.color = '#adebeb';
        accelerateButtonEvent.style.border = '1px solid #adebeb';
        accelerateButtonEvent.style.background = 'white';
        decelerateButtonEvent.style.color = '#ff9999';
        decelerateButtonEvent.style.border = '2px solid #ff9999';
        decelerateButtonEvent.style.background = 'white';
    }
    else if (state == 'acceleration') {
        accelerateButtonEvent.style.background = 'dodgerblue';
        accelerateButtonEvent.style.color = 'white';
        decelerateButtonEvent.style.color = 'red';
        decelerateButtonEvent.style.border = '2px solid red';
        decelerateButtonEvent.style.background = 'white';
    }
    else if (state == 'decelaration') {
        decelerateButtonEvent.style.color = 'white';
        decelerateButtonEvent.style.background = 'red';
    }
}
let carObject = new Car();

addNewButtonEvent.onclick = (event) => {
    let carElement = document.getElementById('carClass');
    addCarObjectClone = carElement.cloneNode(true);
    addCarObjectClone.style.display = 'block';
    document.body.appendChild(addCarObjectClone);
    storingDiv.push(addCarObjectClone);
    let carObject2 = new Car();
    duplicateObjects.push(carObject2);
    storingDiv.forEach((eachDiv, index) => {
        eachDiv.children[0].children[0].onclick = () => {
            eachDiv.children[2].children[0].disabled = false;
            eachDiv.children[0].children[1].style.display = 'inline';
            eachDiv.children[0].children[0].style.display = 'none';
            carObject.startCar();
            eachDiv.children[1].innerHTML = `Status:${carObject.carStatus}`;
            uiFunction('start')
        }
        eachDiv.children[0].children[1].onclick = event => {
            eachDiv.children[2].children[0].disabled = true;
            eachDiv.children[2].children[1].disabled = true;
            eachDiv.children[0].children[1].style.display = 'none';
            eachDiv.children[0].children[0].style.display = 'inline';
            carObject.stopCar();
            eachDiv.children[1].innerHTML = `Status:${carObject.carStatus}`;
            uiFunction('stop');
        }
        eachDiv.children[2].children[0].onclick = event => {
            eachDiv.children[2].children[1].disabled = false;
            duplicateObjects[index].acceleration();
            eachDiv.children[1].innerHTML = `Status:${duplicateObjects[index].carStatus}`;
            uiFunction('acceleration');
        }
        eachDiv.children[2].children[1].onclick = event => {
            duplicateObjects[index].deceleration();
            if (duplicateObjects[index].speed === 0) {
                eachDiv.children[1].innerHTML = `Status:Running`;
            }
            else {
                eachDiv.children[1].innerHTML = `Status:${duplicateObjects[index].carStatus}`;
            }
            uiFunction('decelaration');
        }
    })
};
