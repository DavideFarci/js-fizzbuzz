const eleRow = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
    console.log(i)
    eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2">${i}</div>`

    if (i % 3 === 0) {
        eleRow.innerHTML = eleRow.innerHTML + `<div class="col-1 d-flex align-items-center justify-content-center g-2">"Fizz"</div>`;
    }
}