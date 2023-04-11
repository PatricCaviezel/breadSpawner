let createImageField = (image) => {
    let div = document.createElement('div');
    div.classList.add('imageField');
    let text = document.createElement('p');
    text.innerHTML = image.charAt(0).toUpperCase() + image.slice(1);
    let img = document.createElement('img');
    img.setAttribute('src', `../images/${image}.png`);
    img.setAttribute('id', image);
    img.setAttribute('class', 'img-fluid');
    div.appendChild(text);
    div.appendChild(img);
    return div;
}
let items = document.getElementById('items');
let images = ["blue", "bread", "dora", "evil", "golden", "LSD", "red", "swiss"];

for (let i = 0; i < images.length; i++) {
    let image = createImageField(images[i]);
    items.appendChild(image);
}