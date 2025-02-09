const generateBtn = document.getElementById("generteBtn");
generateBtn.addEventListener("click",updateColor)

function getRandomColor(){

    const letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }

    return color;

}


function updateColor(){
    const colorBox = document.getElementById("colorBox");
    const colorText = document.getElementById("colorText");

    const randomColor = getRandomColor();

    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
}

