String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function maskPhoneNumber(phoneNumber) {
    return toPersianNumberWholeNumber(phoneNumber).replaceAt(4, "****");
}


function fillWinner(winnerIndex) {
    winner = data.records.filter(it => it.i === winnerIndex)[0];
    console.log(winner)
    let divs = document.querySelectorAll('.winner-phone');
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll('.winner-name');
    divs.forEach(function (div) {
        div.innerHTML = winner.n;
    });
    divs = document.querySelectorAll('.winner-chance');
    divs.forEach(function (div) {
        div.innerHTML = toPersianNumberWholeNumber(winner.p) + ' شانس';
    });
}

let iphoneIndex = 1;
let ps5Index = 1;


function iphone() {
    let phoneClassName = '.winner-item-phone-iphone-' + iphoneIndex;
    let nameClassName = '.winner-item-name-iphone-' + iphoneIndex;
    divs = document.querySelectorAll(phoneClassName);
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll(nameClassName);
    divs.forEach(function (div) {
        div.innerHTML = winner.n;
    });
    hideDiv('iphone')
    hideDiv('ps5')
    hideDiv('winner')
    if (iphoneIndex === 5) {
        //Todo disable button - change color
    }
    if (iphoneIndex === 5 && ps5Index === 5) {
        showDiv('end')
    } else {
        showDiv('spinner')
        showDiv('next')
    }
    iphoneIndex += 1;
}

function ps5() {
    let phoneClassName = '.winner-item-phone-ps5-' + ps5Index;
    let nameClassName = '.winner-item-name-ps5-' + ps5Index;
    divs = document.querySelectorAll(phoneClassName);
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll(nameClassName);
    divs.forEach(function (div) {
        div.innerHTML = winner.n;
    });
    hideDiv('iphone')
    hideDiv('ps5')
    if (ps5Index === 5) {
        //Todo disable button - change color
    }
    if (iphoneIndex === 5 && ps5Index === 5) {
        showDiv('end')
    } else {
        showDiv('next')
    }
    ps5Index += 1;
}