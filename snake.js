import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5; //n blocks per second
const snakeBody = [
    {x:11, y:11}
]
let newSegments = 0;


export function update(){
    const inputDirection = getInputDirection();
    addSegments();

    if(snakeBody[0].x == 22 || snakeBody[0].y == 22 || snakeBody[0].x == 0 || snakeBody[0].y == 0){
        alert("Game lost. Please reload");
        window.location.reload();
    }

    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]};
        
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    gameBoard.innerHTML = "";
    snakeBody.forEach(snakeBod => {
        let snakeDiv = document.createElement("div");
        snakeDiv.style.gridRowStart = snakeBod.y;
        snakeDiv.style.gridColumnStart = snakeBod.x;
        snakeDiv.classList.add("snake");
        gameBoard.appendChild(snakeDiv);
    })
}


export function expandSnake(EXPANSION_RATE){
    newSegments += EXPANSION_RATE;
}

export function onSnake(foodPosition){
    return snakeBody.some(segment => {
        return segment.x === foodPosition.x && segment.y === foodPosition.y
    })
}

function addSegments(){
    for(let i = 0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0;
}