'use strict';

let array = ['white', 'black', 'red', 'blue'];
const changeColor = (color) => {
  const svgElm = document.querySelector('.t-shirt');
  array.forEach((color) => {
    svgElm.classList.remove(color);
  });
  svgElm.classList.add(color);
};

const btnList = () => {
  array.forEach((color) => {
    const btnElm = document.querySelector(`.btn__${color}`);
    btnElm.addEventListener('click', () => changeColor(color));
  });
};

btnList();
