'use strict';

window.addEventListener('DOMContentLoaded', () => {
    scroll();
});

const scroll = () => {
    const description = document.getElementById('description');
    const image = document.getElementById('image');
    const blocks = document.querySelectorAll('.block');

    function show() {
        if (window.scrollY > 250) {
            blocks.forEach(block => {
                block.classList.add('show');
            });
        }
        if (window.scrollY > 750) {
            description.classList.add('show');
            image.classList.add('show');
        }
    };

    window.addEventListener('scroll', show);
};
