function clear() {
    document.getElementById("blurrable").style.filter = "";
    const form = document.getElementById("contact");
    form.style.visibility = "hidden";
    
}
function contact(){
    var form = document.getElementById("contact");
    form.style.visibility = "visible";
    form.style.animation = "opacitty 1s forwards";
    document.getElementById("blurrable").style.filter = "blur(6px)";
    form.style.filter = "none";

    console.log(form);
}

function revert(){
    var form = document.getElementById("contact");
    form.style.visibility = "hidden";
    form.style.animation = "opacitty 1s reverse";
    document.getElementById("blurrable").style.filter = "none";
    form.style.filter = "none";
}

function App(){
    var app = document.getElementById("center");
    app.style.visibility = "visible";
    app.style.animation = "opacitty 1s forwards";
    app.style.filter = "none";
    document.getElementsByClassName("main")[0].style.visibility = "hidden";
    document.getElementById("particles-js").style.visibility = "hidden";

    console.log(form);
}