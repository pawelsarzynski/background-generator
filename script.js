var css = document.querySelector("h3");
var box = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btn = document.getElementById("rand");

function load() {
    console.log("loading");
    css.innerHTML = "<h3>linear-gradient(to right, " + color1.value + ", " + color2.value + ");</h3>"; 
}

window.onload = load;

function setGradient() {
     box.style.backgroundImage = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = box.style.backgroundImage + ";";
    //"Selected colors are: " + color1.value + " and " + color2.value + ".";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", function() {
    var random = "#";
    var random2 = "#";
    for(var i = 0; i <= 5; i++){
        random += Math.floor(Math.random() * 10);
        random2 += Math.floor(Math.random() * 10);
    }
    color1.value = random;
    color2.value = random2;
    setGradient();
});