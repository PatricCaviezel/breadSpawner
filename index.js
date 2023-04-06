let genRandomNumber = () => {
    let top = Math.floor(Math.random() * (document.body.offsetHeight - 30));
    let left = Math.floor(Math.random() * (document.body.offsetWidth - 50));
    return [top, left];
}

let createImage = () => {
    let randomDeg = Math.floor(Math.random() * 360);
    let [top, left] = genRandomNumber();
    let img = document.createElement('img');
    img.style.transform = `rotate(${randomDeg}deg)`;
    img.classList.add("picture");
    img.setAttribute('src', './bread.png');
    document.body.appendChild(img);
    img.style.left = left + "px";
    img.style.top = top + "px";
    counter++;
}

let handleClick = (e) => {
    window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
}

let createGoldenImage = () => {
    let [top, left] = genRandomNumber();
    let img = document.createElement('img');
    img.classList.add("picture");
    img.classList.add("golden");
    img.setAttribute('src', './golden.png');
    img.addEventListener('click', handleClick);
    document.body.appendChild(img);
    img.style.left = left + "px";
    img.style.top = top + "px";
}

let spawn = () => {
    let randomNumber = Math.floor(Math.random() * 500);
    if (randomNumber == 200) {
        createGoldenImage();
    } else {
        createImage();
    }
}