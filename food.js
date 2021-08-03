import { getRandomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";

let food = {x:10, y:1};
const EXPANSION_RATE = 1;



export function update(){
    if(onSnake(food)){
        expandSnake(EXPANSION_RATE);
        food = randomFood();
    }
}
export function draw(gameBoard){
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);

}

function randomFood(){
    let newFoodPosition = getRandomGridPosition();
    if(onSnake(newFoodPosition)){
        newFoodPosition = getRandomGridPosition();
    }
    console.log(food.x, food.y);
}