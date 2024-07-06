//gmail


const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-8._%+-]+@gmail \.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}



// //move Block

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;


const moveBlock = () => {
    if (positionX < 450) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock);
    }
};

moveBlock();







