'use strict';

let elements = [],
    canvas = document.getElementById('main-canvas'),
    context = canvas.getContext('2d');

function ball (x, y, vector) {
  let gravity = 0,
      param = {
        x: x,
        y: y,
        removed: false,
        move: () => {
          vector.vecY += gravity;
          gravity += 0.1;
          param.x += vector.vecX;
          param.y += vector.vecY;
          if (param.y > canvas.height - 500) {
            param.removed = true;
          }
        },
        draw: () => {
          context.beginPath();
          context.arc(param.x, param.y, 5, 0, Math.PI * 2, true);
          context.fill();
          context.closePath();
        }
      };
  return param;
};

function cannon (x, y) {
  let mouseX = 0,
      mouseY = 0,
      cannonVect = 0,
      param = {
        x: x,
        y: y,
        vect: 0,
        removed: false,
        move: () => {
          vect: = Math.atan2(mouseY - param.y, mouseX - param.x);
        },
      }
};

function changeCannonVect (event) {
  let vect = vector2d(mouseX - param.x, mouseY - param.y);
};

function shot (event) {
  changeCannonVect(event);
  vect.normalize();
  vect.scale(25);
  elements.push(ball(param.x, param.y, vect));
};
