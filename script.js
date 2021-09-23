let image = document.getElementById("easter-egg");

function rotateMe(event){
    rngNum = Math.floor(Math.random() * 361)
    event.target.style.transform = `rotate(${rngNum}deg)`;
}
function returnMe(event){
    event.target.style.transform = `rotate(0deg)`;
}

image.addEventListener('mouseover', rotateMe);
image.addEventListener('mouseout', returnMe);