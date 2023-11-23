import { main } from ".";
import todoList from './check.png';
const { parse, differenceInDays } = require('date-fns');

const header = document.querySelector('.header');
const headerSticker = new Image();
headerSticker.classList.add('header-sticker');
headerSticker.src = todoList;
header.appendChild(headerSticker);