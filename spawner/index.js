let genRandomNumber = () => {

    let top = Math.random() * ((document.body.offsetHeight - 50) - 45) + 45;
    let left = Math.floor(Math.random() * (document.body.offsetWidth - 70));
    return [top, left];
}

let moveElement = () => {
    let elem = document.getElementById('golden');
    var maxX = window.innerWidth - elem.offsetWidth;
    var maxY = window.innerHeight - elem.offsetHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    elem.style.left = newX + "px";
    elem.style.top = newY + "px";
}

let createImage = () => {
    let randomDeg = Math.floor(Math.random() * 360);
    let [top, left] = genRandomNumber();
    let img = document.createElement('img');
    img.style.transform = `rotate(${randomDeg}deg)`;
    img.classList.add("picture");
    img.setAttribute('src', '../images/bread.png');
    document.body.appendChild(img);
    img.style.left = left + "px";
    img.style.top = top + "px";
}

let handleClick = (e) => {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
}

let createGoldenImage = () => {
    if (document.getElementById('golden')) {
        document.getElementById('golden').remove();
    }
    let [top, left] = genRandomNumber();
    let img = document.createElement('img');
    img.classList.add("picture");
    img.classList.add("golden");
    img.setAttribute('src', '../images/golden.png');
    img.setAttribute('id', 'golden');
    img.style.left = left + "px";
    img.style.top = top + "px";
    img.addEventListener('click', handleClick);
    img.addEventListener('mouseover', moveElement);
    document.body.appendChild(img);
}

let spawn = () => {
    let randomNumber = Math.floor(Math.random() * 500);
    if (randomNumber == 200) {
        createGoldenImage();
    } else {
        createImage();
    }
}