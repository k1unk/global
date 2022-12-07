let url = 'https://baconipsum.com/api/?type=lucky';
fetch(url).then(response => response.json().then(e => {
    document.getElementById("description").innerText = e.toString().substring(0, 200)
}));

document.addEventListener("DOMContentLoaded", function () {
    moveFlags(3000, 'flag-1', -20, 215)
    moveFlags(3400, 'flag-2', 85, 390)
    moveFlags(3800, 'flag-3', 320, 400)
    moveFlags(4200, 'flag-5', 320, 10)
    moveFlags(4600, 'flag-6', 80, -5)
    setTimeout(function () {
        moveCircle();
    }, 5000)
});


let moveFlags = (time, id, x, y) => {
    setTimeout(function () {
        moveFlag(id, x, y);
    }, time)
}
let moveFlag = (id, x, y) => {
    let div = document.getElementById(id);
    div.style.top = `${x}px`;
    div.style.left = `${y}px`;
    setTimeout(function () {
        div.style.transition = "transform 1.7s linear"
    }, 400)
}

let moveCircle = () => {
    let angle = 0;
    let timer = setInterval(function () {
        angle += 60;
        document.getElementById("circle-for-flags").style.transform = 'rotate(' + angle + 'deg)'
        document.getElementById("flag-1").style.transform = 'rotate(-' + angle + 'deg)'
        document.getElementById("flag-2").style.transform = 'rotate(-' + angle + 'deg)'
        document.getElementById("flag-3").style.transform = 'rotate(-' + angle + 'deg)'
        document.getElementById("flag-4").style.transform = 'rotate(-' + angle + 'deg)'
        document.getElementById("flag-5").style.transform = 'rotate(-' + angle + 'deg)'
        document.getElementById("flag-6").style.transform = 'rotate(-' + angle + 'deg)'
    }, 1700);
}

document.getElementById("search-button").addEventListener("click", () => {
    let value = document.getElementById("search-input").value
    if (value.length > 3 && value.length < 13) alert(`Your value is ${value}`)
    else alert(`Your value's length should be more then 3 and less then 13 symbols`)
});

let menuIsActive = false;
document.getElementById("burger").addEventListener("click", () => {
    if (!menuIsActive) {
        menuIsActive = true;
        document.getElementById("menu").style.top = '0'
        document.body.style.overflow = "hidden"
        document.getElementById("burger").classList.add("active")
    } else {
        menuIsActive = false;
        document.getElementById("menu").style.top = '-100%'
        document.body.style.overflow = "visible"
        document.getElementById("burger").classList.remove("active")
    }
})
