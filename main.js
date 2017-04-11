'use strict';

let elements = [],
    canvas = document.getElementById('main-canvas'),
    context = canvas.getContext('2d');

function ball (x, y, vector) {
  let gravity = 0,
      param = {
        x: x,
        y: y,
        deleted: false,
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

function changeCannonVect () {
  
};

function shot () {
  
};

