const videoContents = document.querySelectorAll('.thumbnail');

videoContents.forEach((element) => {
    element.addEventListener('mouseover', function () {
        element.style.transform = 'scale(0.95)';
        element.style.transition = 'transform 0.3s';
        element.style.background = 'rgba(0, 0, 0, 0.15)';
    });

    element.addEventListener('mouseout', function () {
        element.style.transform = 'scale(1)';
        element.style.background = 'transparent';
    });
});

const menuToggleButton = document.getElementById('menu_toggle_button');
const rightMenuGroup = document.getElementById('right_menu_group');

menuToggleButton.addEventListener('click', function () {
    rightMenuGroup.classList.toggle('show_menu');
});

const menuButton = document.getElementById('menu_toggle_button');
const side_menu = document.getElementById('side_menu');

menuButton.addEventListener('click', () => {
    if (side_menu.style.right === '-400px'){
        side_menu.style.right = '0';
    }
    else {
        side_menu.style.right = '-400px';
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
        side_menu.style.right = '-300px';
    }
});
