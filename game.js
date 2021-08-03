import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'

let lastRender = 0;
const gameBoard = document.querySelector(".game-board");


function main(currentTime){
  window.requestAnimationFrame(main);
  const gap = (currentTime - lastRender) / 1000;

  if(gap < 1 / SNAKE_SPEED) return;


  console.log("RENDER");
  lastRender = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update(){
  updateSnake();
  updateFood();
}

function draw(){
  drawSnake(gameBoard);
  drawFood(gameBoard);
}