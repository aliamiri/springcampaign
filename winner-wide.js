const winnerList = []

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function maskPhoneNumber(phoneNumber) {
    return toPersianNumberWholeNumber(phoneNumber).replaceAt(4, "***");
}


function checkWinner(winnerIndex) {
    winner = data.records.filter(it => it.i === winnerIndex)[0];
    while (winnerList.includes(winner.u)) {
        winnerIndex++;
        winner = data.records.filter(it => it.i === winnerIndex)[0];
    }
    winnerList.push(winner.u);
    return winner;
}

function fillWinner(winnerIndex) {
    winner = checkWinner(winnerIndex);
    let divs = document.querySelectorAll('.winner-phone');
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll('.winner-name');
    divs.forEach(function (div) {
        div.innerHTML = replaceye(winner.n);
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
    let wrapperClassName = '.winner-iphone-' + iphoneIndex;
    divs = document.querySelectorAll(phoneClassName);
    console.log(iphoneIndex);
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll(nameClassName);
    divs.forEach(function (div) {
        div.innerHTML = replaceye(winner.n);
    });
    divs = document.querySelectorAll(wrapperClassName)
    divs.forEach(function (div) {
        div.style.background = '#F2F3F4';
    });
    if (iphoneIndex === 5 && ps5Index === 6) {
        showDiv('end')
    } else {
        showDiv('spinner')
        showDiv('next')
    }
    hideDiv('iphone')
    hideDiv('ps5')
    hideDiv('winner')
    if (iphoneIndex === 5) {
        //Change color
        disableClick('iphone');
    }

    iphoneIndex += 1;
}

function ps5() {
    let phoneClassName = '.winner-item-phone-ps5-' + ps5Index;
    let nameClassName = '.winner-item-name-ps5-' + ps5Index;
    let wrapperClassName = '.winner-ps5-' + ps5Index;
    divs = document.querySelectorAll(phoneClassName);
    divs.forEach(function (div) {
        div.innerHTML = maskPhoneNumber(winner.u);
    });
    divs = document.querySelectorAll(nameClassName);
    divs.forEach(function (div) {
        div.innerHTML = replaceye(winner.n);
    });
    divs = document.querySelectorAll(wrapperClassName)
    divs.forEach(function (div) {
        div.style.background = '#F2F3F4';
    });
    hideDiv('iphone')
    hideDiv('ps5')
    hideDiv('winner')
    if (ps5Index === 5) {
        disableClick('ps5');
    }
    if (iphoneIndex === 6 && ps5Index === 5) {
        showDiv('end')
    } else {
        showDiv('spinner')
        showDiv('next')
    }
    ps5Index += 1;
}


function replaceye(name) {
    return name.replace(/ي/g, 'ی');
}