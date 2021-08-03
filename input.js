const inputDirection = {x:1, y:0};
let lastInputDirection = { x:0, y:0};

export function getInputDirection(){
    return inputDirection;
}

window.addEventListener('keydown', navigateSnake)

function navigateSnake(e){
    if(e.key == "ArrowUp") {
        if(lastInputDirection.y != 0) return;
        inputDirection.x = 0;
        inputDirection.y = -1;
    }
    if(e.key == "ArrowDown") {
        if(lastInputDirection.y != 0) return;
        inputDirection.x = 0;
        inputDirection.y = 1;
    }
    if(e.key == "ArrowLeft") {
        if(lastInputDirection.x != 0) return;
        inputDirection.x = -1;
        inputDirection.y = 0;
    }
    if(e.key == "ArrowRight") {
        if(lastInputDirection.x != 0) return;
        inputDirection.x = 1;
        inputDirection.y = 0;
    }
    lastInputDirection = inputDirection;
}