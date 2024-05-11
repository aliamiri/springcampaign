function convertInputToPersianNumerals(input) {
    console.log(input)
    input.innerHTML = input.innerHTML.replace(/\d/g, function (digit) {
        return persianNumbers[digit];
    });
}

function limitToOneDigit(element) {
    if (element.innerText.length > 1) {
        element.innerText = element.innerText.charAt(0); // Keep only the first character
    }
}

function jumpToNext(element) {
    if (element.textContent.length === 1 && element.nextElementSibling && element.nextElementSibling.classList.contains('chance-number-input')) {
        element.nextElementSibling.focus();
    }
}

function convertPersianNumeralsToEnglish(persianNumerals) {
    const persianToEnglish = {
        '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
        '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
    };
    return persianNumerals.join('').split('').map(num => persianToEnglish[num] || num).join('');
}

function confirm() {
    let results = [];
    let chanceNumbers = document.querySelectorAll('.chance-number-input');
    chanceNumbers.forEach(function (div) {
        results.push(div.textContent);
    });
    //results could be used
    fixedNumber = convertPersianNumeralsToEnglish(results);
    console.log("initial number is : " + fixedNumber);
    hideDiv('input');
    showDiv('winner');
    hideDiv('confirm');
    showDiv('iphone');
    showDiv('ps5');
    currentIndex = Number(fixedNumber);
    fillWinner(Number(fixedNumber));
}

window.onload = function () {
    document.querySelector('.first-number').focus();
};
