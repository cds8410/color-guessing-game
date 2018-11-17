const rgbButtons = document.querySelectorAll('.button_rgb');
const hexButtons = document.querySelectorAll('.button_hex');

const easyButtons = document.querySelectorAll('.button_easy');
const hardButtons = document.querySelectorAll('.button_hard');

const lightButtons = document.querySelectorAll('.button_light');
const darkButtons = document.querySelectorAll('.button_dark');

const mobileButton = document.getElementById('mobile_button');
const mobileShadow = document.querySelector('.menu_mobile_shadow');
const mobileMenu = document.getElementById('mobile_menu');

let mode = 'rgb';
let difficulty = 'easy';
let theme = 'light';

//add menu button listeners for desktop and mobile buttons at the same time
{
    rgbButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (mode != 'rgb') {
                mode = 'rgb';
                changeState(rgbButtons, hexButtons);
            }
        });
    });

    hexButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (mode != 'hex') {
                mode = 'hex';
                changeState(hexButtons, rgbButtons);
            }
        });
    });

    easyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (difficulty != 'easy') {
                difficulty = 'easy';
                changeState(easyButtons, hardButtons);
            }
        });
    });

    hardButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (difficulty != 'hard') {
                difficulty = 'hard';
                changeState(hardButtons, easyButtons);
            }
        });
    });

    lightButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (theme != 'light') {
                theme = 'light';
                changeState(lightButtons, darkButtons);
            }
        });
    });

    darkButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (theme != 'dark') {
                theme = 'dark';
                changeState(darkButtons, lightButtons);
            }
        });
    });
}

//mobile button listener
mobileButton.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('is_hidden');
    mobileShadow.classList.toggle('is_hidden');
});

//function set up to toggle between different opposing states
function changeState(buttons1, buttons2) {

    //first button check
    toggleButtons(buttons1);
    //check
    buttons1.forEach((button) => {
        if (!button.classList.contains('button_clicked')) {
            toggleButton(button);
        }
    });

    //second button change
    toggleButtons(buttons2);
    //check
    buttons2.forEach((button) => {
        if (!button.classList.contains('button_unclicked')) {
            toggleButton(button);
        }
    });

    //change both buttons in the desktop and mobile menu at the same time
    function toggleButtons(buttonArrayInput) {
        buttonArrayInput.forEach((buttonInput) => {
            toggleButton(buttonInput);
        });
    }

    //change the state of a single button
    function toggleButton(buttonInput) {
        buttonInput.classList.toggle('button_clicked');
        buttonInput.classList.toggle('button_unclicked');
    }

}