const change = document.getElementById("changeBtn");

function pickColors() {
    let colors = ["red", "green", "blue", 'yellow'];
    let randomColor = colors[Math. floor(Math. random()*colors. length)];
    document.body.style.backgroundColor = randomColor;
}

change.addEventListener("click", function() {
    pickColors();
})