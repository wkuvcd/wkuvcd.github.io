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
