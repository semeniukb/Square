function changeSquareColor (min, max) {
    const color = [];
    for(let i = 0; i < 3; i++) {
        color[i] = Math.round(Math.random() * (max - min) + min);
    }
    return `rgb(${color.join(',')})`;
}

console.log(changeSquareColor(0, 256));

document.body.addEventListener('click', () => {
    document.querySelector("#square").style.setProperty('border-color', `${changeSquareColor(0, 256)}`);
  });