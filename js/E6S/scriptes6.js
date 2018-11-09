const rgb = document.getElementById('game_mode_rgb');
const hex = document.getElementById('game_mode_hex');

const easy = document.getElementById('game_difficulty_easy');
const hard = document.getElementById('game_difficulty_hard');

const light = document.getElementById('game_theme_light');
const dark = document.getElementById('game_theme_dark');

let mode = 'rgb';
let difficulty = 'easy';
let theme = 'light';

rgb.addEventListener('click', ()=>{
    mode = 'rgb';
    rgb.classList.toggle('button_clicked');
    hex.classList.toggle('button_clicked');
});
hex.addEventListener('click', ()=>{
    mode = 'hex';
    rgb.classList.toggle('button_clicked');
    hex.classList.toggle('button_clicked');
});

easy.addEventListener('click', ()=>{
    difficulty = 'easy';
});
hard.addEventListener('click', ()=>{
    difficulty = 'hard';
});

light.addEventListener('click', ()=>{
    theme = 'light';
});
dark.addEventListener('click', ()=>{
    theme = 'dark';
});

function toggleAll(){

}