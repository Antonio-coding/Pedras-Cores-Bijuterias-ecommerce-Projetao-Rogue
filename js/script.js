const imgs = document.getElementsByClassName("carroseul-item");
const img = document.querySelectorAll(".carroseul-item img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1);