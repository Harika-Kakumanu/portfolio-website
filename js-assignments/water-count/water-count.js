let container1 = document.getElementById('innerGlassContainer1');
let container2 = document.getElementById('innerGlassContainer2');
let allWaterGlasses = document.getElementsByClassName('single-glass');
let previousValue = "";

Object.keys(allWaterGlasses).forEach(function(key) {
    let item = allWaterGlasses[key];
    item.addEventListener('click', function() {
        //console.log(item.style.backgroundColor);
        let bgColor = window.getComputedStyle(item, null).getPropertyValue("background-color");
        if (bgColor === `rgb(255, 255, 255)`) {
            changeBackgroundandText(item.value);
        }
        else {
            checkTheGlassState(item.value, item);
        }

    });
});

// function changeBackgroundandText(presentValue) {
//     for (let i = 0; i < allWaterGlasses.length; i++) {
//         previousValue = allWaterGlasses[i].value;
//         if (parseInt(previousValue) <= parseInt(presentValue)) {
//             allWaterGlasses[i].style.backgroundColor = "dodgerblue";
//             allWaterGlasses[i].style.color = "white";
//             fillTheGlassContainer(presentValue);
//             showRemainingLevelofWater(100 - presentValue);
//         }
//         else {
//             allWaterGlasses[i].style.backgroundColor = "white";
//             allWaterGlasses[i].style.color = "dodgerblue";
//         }
//     }
// }




function changeBackgroundandText(presentValue) {
    for (let i = 0; i < allWaterGlasses.length; i++) {
        previousValue = allWaterGlasses[i].value;

        if (parseInt(previousValue) <= parseInt(presentValue)) {
            allWaterGlasses[i].style.backgroundColor = "dodgerblue";
            allWaterGlasses[i].style.color = "white";
            fillTheGlassContainer(presentValue);
            showRemainingLevelofWater(100 - presentValue);
        }
        else {
            allWaterGlasses[i].style.backgroundColor = "white";
            allWaterGlasses[i].style.color = "dodgerblue";
        }
    }
}


function checkTheGlassState(value1, item) {
    let count = 0;
    for (let i = 0; i < allWaterGlasses.length; i++) {
        let item = allWaterGlasses[i];
        let bgColor = window.getComputedStyle(item, null).getPropertyValue("background-color");
        console.log(bgColor);
        if (value1 < allWaterGlasses[i].value && bgColor !== `rgb(255, 255, 255)`) {
            count++;

            // console.log(item.style.backgroundColor);
            // fillTheGlassContainer(value1);

        }
        if (count === 0) {
            changeBackgroundandText(value1);
        }
        else {
            item.style.backgroundColor="white";
            item.style.color="dodgerblue";
        }
        //console.log(allWaterGlasses[i].value);


    }
}














function fillTheGlassContainer(presentValue) {
    container2.style.height = presentValue + '%';
    container2.innerHTML = presentValue + "%";
}

function showRemainingLevelofWater(displayValue) {
    container1.style.height = displayValue + "%";
    container1.innerHTML = displayValue + "%" + "remained";
    container1.style.backgroundColor = "white";
}





// console.log(allWaterGlasses);

// for (let i = 0; i < allWaterGlasses.length; i++) {
//     allWaterGlasses[i].addEventListener('click', function() {
//         changeBackgroundandText(allWaterGlasses[i].value);
//         checkTheGlassState(allWaterGlasses[i]);
//     });
// }
