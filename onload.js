'use strict';

//priority - 1

document.onload = () => {
  setInterval(() => {
    let refreshElements = [];
    for (let i = 0; i < elements.length; i++) {
      elements[i].move();
      elements[i].draw();
      if (elements[i].removed = false) {
        refreshElements.push(elements[i]);
      }
    }
    elements = refreshElements;
  });
};