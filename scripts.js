import { randomIntegerFromInterval } from './math.js';
import { colors } from './colors.js';
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
    input: document.querySelector('input[data-action="interval"]'),
};
let intervalId = null;
let delay = 1000;
const renderRandomColor = (colors) => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};
const startColorSwitch = () => {
    intervalId = setInterval(renderRandomColor, delay, colors);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
};
const stopColorSwitch = () => {
    clearInterval(intervalId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
};
refs.stopBtn.disabled = true;
refs.startBtn.addEventListener('click', startColorSwitch);
refs.stopBtn.addEventListener('click', stopColorSwitch);
refs.input.addEventListener('input', (e) => {
    delay = e.target.value * 1000;
})