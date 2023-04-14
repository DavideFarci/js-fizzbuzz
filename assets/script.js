let eleRow = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
        eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2" style="background-color: orange;">FizzBuzz</div>`;
    } else if (i % 3 === 0) {
        eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2" style="background-color: blue;">Fizz</div>`
    } else if (i % 5 === 0) {
        eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2" style="background-color: green;">Buzz</div>`
    } else {
        eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2">${i}</div>`
    }
}