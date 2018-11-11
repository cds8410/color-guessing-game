const rgb = document.getElementById('game_mode_rgb');
const hex = document.getElementById('game_mode_hex');

const easy = document.getElementById('game_difficulty_easy');
const hard = document.getElementById('game_difficulty_hard');

const light = document.getElementById('game_theme_light');
const dark = document.getElementById('game_theme_dark');

let mode = 'rgb';
let difficulty = 'easy';
let theme = 'light';

function twoButtonToggle(btn1, btn2) {
    btn1.classList.toggle('button_unclicked');
    btn1.classList.toggle('button_clicked');
    btn2.classList.toggle('button_unclicked');
    btn2.classList.toggle('button_clicked');
}

rgb.addEventListener('click', () => {
    mode = 'rgb';
    if (rgb.classList.contains('button_unclicked')) {
        console.log(1);
        twoButtonToggle(rgb, hex);
    }
});

hex.addEventListener('click', () => {
    mode = 'hex';
    if (hex.classList.contains('button_unclicked')) {
        twoButtonToggle(rgb, hex);
    }
});

easy.addEventListener('click', () => {
    difficulty = 'easy';
    if (easy.classList.contains('button_unclicked')) {
        twoButtonToggle(easy, hard);
    }
});
hard.addEventListener('click', () => {
    difficulty = 'hard';
    if (hard.classList.contains('button_unclicked')) {
        twoButtonToggle(easy, hard);
    }
});

light.addEventListener('click', () => {
    theme = 'light';
    if (light.classList.contains('button_unclicked')) {
        twoButtonToggle(light, dark);
    }
});
dark.addEventListener('click', () => {
    theme = 'dark';
    if (dark.classList.contains('button_unclicked')) {
        twoButtonToggle(light, dark);
    }
});