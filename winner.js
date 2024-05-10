String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function fillWinner(winnerIndex) {
    let winner = data.records.filter(it => it.i === winnerIndex)[0];
    console.log(winner)
    let divs = document.querySelectorAll('.winner-phone');
    divs.forEach(function (div) {
        let toPersianNumberWholeNumber1 = toPersianNumberWholeNumber(winner.u)+"";
        console.log(toPersianNumberWholeNumber1)
        div.innerHTML = toPersianNumberWholeNumber1.replaceAt(4, "****");
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