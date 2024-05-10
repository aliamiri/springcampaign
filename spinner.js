const doors = document.querySelectorAll(".door");
const stepSize = 8000;
let currentIndex = 0;
let gotoindex = ""

function zeroPad(currentIndex) {
    return String(currentIndex).padStart(6, '0')
}

async function spin() {
    currentIndex += stepSize;
    gotoindex = zeroPad(currentIndex);
    iteration = 0;
    init(false, 1, 2);
    for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = "translateY(0)";
        await new Promise((resolve) => setTimeout(resolve, duration * 100));
    }
}


function createOrderedArrayWithLastNumber(lastNumber) {
    let array = [];
    let firstnumber = (lastNumber + 1) % 10;
    for (let i = 0; i < 10; i++) {
        array.push(toPersianNumeral((i + firstnumber) % 10))
    }
    return array;
}

let iteration = 0;

function init(firstInit = true, groups = 1, duration = 1) {
    for (const door of doors) {
        const boxes = door.querySelector(".boxes");
        const boxesClone = boxes.cloneNode(false);

        const pool = [""];
        if (!firstInit) {
            let numbers = createOrderedArrayWithLastNumber(Number(gotoindex[iteration++]));
            pool.push(...numbers);

            boxesClone.addEventListener(
                "transitionstart",
                function () {
                    this.querySelectorAll(".box").forEach((box) => {
                        box.style.filter = "blur(1px)";
                    });
                },
                {once: true}
            );

            boxesClone.addEventListener(
                "transitionend",
                function () {
                    this.querySelectorAll(".box").forEach((box, index) => {
                        box.style.filter = "blur(0)";
                        if (index > 0) this.removeChild(box);
                    });
                },
                {once: true}
            );
        }

        for (let i = pool.length - 1; i >= 0; i--) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.width = door.clientWidth + "px";
            box.style.height = door.clientHeight + "px";
            box.textContent = pool[i];
            boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${
            door.clientHeight * (pool.length - 1)
        }px)`;
        door.replaceChild(boxesClone, boxes);
    }
}

function getRecordByIndex(index, callback) {
    fetch('shuffled_indexed_records.json')
        .then(response => response.json())
        .then(data => {
            const record = data.find(r => r.INDEX === index);
            if (record) {
                callback(null, record);
            } else {
                callback('Record not found', null);
            }
        })
        .catch(error => {
            callback(error, null);
        });
}

getRecordByIndex(5, (error, record) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Record Information:', record);
    }
});

init();