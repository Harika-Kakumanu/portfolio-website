//Write your javascript logic here

const depositId = document.getElementById('deposit'),
    withdrawId = document.getElementById('withDraw'),
    showBalanceId = document.getElementById('showBalance'),
    historyId = document.getElementById('history'),
    displayInputDivId = document.getElementById('displayResult'),
    displayInputId = document.getElementById('displayInputText'),
    submitId = document.getElementById('submitButton'),
    pTagId = document.getElementById('displayPTagText'),
    spanId = document.getElementById('errorDisplay'),
    forSpanId = document.getElementById('forSpan'),
    tableID = document.getElementById('myTable'),
    forTableId = document.getElementById('forTable'),
    forTimerId = document.getElementById('forTimer');

let pattern = /^[0-9]+$/;
let withdrawInputValue = '';
let tableElement = '';
let array = [
    ['Transaction Type', 'Amount in Rs', 'Balance in Rs']
];
let depositInputValue = 0;
let count = 0;

class atm {
    constructor() {
        this.mode = '';
        this.balance = 0;
        this.transactionHistory = '';
    }

    makeDeposit() {
        this.mode = 'DEPOSIT';
        updateUI(this.mode);
        submitFunction(this.mode);

    }

    makeWithdrawal() {
        this.mode = 'WITHDRAW';
        updateUI(this.mode);
        submitFunction(this.mode);
    }
    showBalance() {
        this.mode = 'SHOW_BALANCE';
        pTagId.innerHTML = `Current Balance: Rs:${depositInputValue}`;
        updateUI(this.mode);
    }
}
class transaction {
    constructor() {
        this.transactionType = '';
        this.transactionAmount = '';
        this.balance = '';
    }
}
let atmObject = new atm();
let transactionObject = new transaction();
depositInputValue = atmObject.balance;

depositId.onclick = (event) => {
    setTimer();
    atmObject.makeDeposit();

}

withdrawId.onclick = (event) => {
    atmObject.makeWithdrawal();
}

showBalanceId.onclick = (event) => {

    atmObject.showBalance();
}
historyId.onclick = (event) => {
    atmObject.mode = 'HISTORY';
    tableFunction(array);
    updateUI((atmObject.mode));

};



function submitFunction(modeValue) {
    submitId.onclick = (event) => {
        if (pattern.test(parseInt(displayInputId.value))) {
            if (modeValue === 'DEPOSIT') {
                depositInputValue = parseInt(displayInputId.value);
                array.push(['DEPOSIT', displayInputId.value, depositInputValue]);
                displayInputId.value = "";
                spanId.innerHTML = '';

            }
            else if (modeValue === 'WITHDRAW') {
                withdrawInputValue = parseInt(displayInputId.value);
                if (withdrawInputValue < depositInputValue) {

                    depositInputValue = depositInputValue - withdrawInputValue;

                    array.push(['WITHDRAW', displayInputId.value, depositInputValue]);
                    displayInputId.value = "";
                    spanId.innerHTML = '';
                }
                else {
                    spanId.style.display = 'flex';
                    spanId.innerHTML = ' InSufficient Balance';
                }
            }
        }
        else {
            spanId.style.display = 'flex';
            spanId.innerHTML = 'Please Enter Valid Numbers ';
        }
    }
}

function tableFunction(array) {

    // alert('in table function');
    tableElement = document.createElement('Table');
    tableElement.setAttribute("id", 'myTable');

    forTableId.appendChild(tableElement);
    for (let i = 0; i <= array.length; i++) {
        //alert('in table function in for loop')
        let row1 = tableElement.insertRow(-1);
        let data1 = row1.insertCell(0);
        let data2 = row1.insertCell(1);
        let data3 = row1.insertCell(2);
        data1.innerHTML = array[i][0];
        data2.innerHTML = array[i][1];
        data3.innerHTML = array[i][2];
    }
    forTableId.appendChild(tableElement);
}

let xTimer = '';
let value = 10;


function setTimer() {
    xTimer.setInterval(() => {
        value = value - 1;
        forTimerId.innerHTML = `Time left: ${value}`;
    }, 1000);
}





function updateUI(checkMode) {
    switch (checkMode) {
        case 'DEPOSIT':
            forSpanId.style.display = 'flex';

            depositId.style.background = 'dodgerblue';
            depositId.style.color = 'white';


            withdrawId.style.background = 'white';
            withdrawId.style.color = 'dodgerblue';


            showBalanceId.style.background = 'white';
            showBalanceId.style.color = 'dodgerblue';

            historyId.style.background = 'white';
            historyId.style.color = 'dodgerblue';


            displayInputId.placeholder = 'Deposit Amount';

            pTagId.style.display = 'none';

            forTableId.style.display = 'none';

            break;
        case 'WITHDRAW':
            withdrawId.style.background = 'dodgerblue';
            withdrawId.style.color = 'white';

            depositId.style.background = 'white';
            depositId.style.color = 'dodgerblue';

            showBalanceId.style.background = 'white';
            showBalanceId.style.color = 'dodgerblue';

            historyId.style.background = 'white';
            historyId.style.color = 'dodgerblue';

            forSpanId.style.display = 'flex';
            displayInputId.placeholder = 'Withdraw amount';

            pTagId.style.display = 'none';

            forTableId.style.display = 'none';
            break;
        case 'SHOW_BALANCE':
            pTagId.style.display = 'flex';

            showBalanceId.style.background = "dodgerblue";
            showBalanceId.style.color = 'white';


            depositId.style.background = 'white';
            depositId.style.color = 'dodgerblue';


            withdrawId.style.background = 'white';
            withdrawId.style.color = 'dodgerblue';

            historyId.style.background = 'white';
            historyId.style.color = 'dodgerblue';

            forSpanId.style.display = 'none';

            forTableId.style.display = 'none';

            break;
        case 'HISTORY':
            {

                // if (array.length == 0) {
                //     alert('in if update ui');
                //     pTagId.style.display = 'flex';
                //     pTagId.innerHTML = 'No Transactions';
                // }
                // else {

                // }

                console.log(array);
                historyId.style.background = 'dodgerblue';
                historyId.style.color = 'white';

                depositId.style.background = 'white';
                depositId.style.color = 'dodgerblue';


                withdrawId.style.background = 'white';
                withdrawId.style.color = 'dodgerblue';

                showBalanceId.style.background = 'white';
                showBalanceId.style.color = 'dodgerblue';

                forTableId.style.display = 'flex';

                forSpanId.style.display = 'none';

                displayInputDivId.style.display = 'flex';
                break;
            }

    }
}
