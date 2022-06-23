const change = document.getElementById("changeBtn");
const h1 = document.getElementById("color");

function pickColors() {
    let colors = ["Red", "Green", "Blue", "Yellow", "Pink", "Brown", "Black", "Orange", "Purple" ];
    let randomColor = colors[Math. floor(Math. random()*colors. length)];
    document.body.style.backgroundColor = randomColor;
    return randomColor
}

change.addEventListener("click", function() {
    pickColors()
    h1.textContent = "Background Color: " + pickColors();
})

