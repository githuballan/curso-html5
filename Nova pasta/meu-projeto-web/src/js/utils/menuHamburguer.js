// This file manages the behavior of the hamburger menu.

export function toggleMenu(menuElement) {
    menuElement.classList.toggle('change');
    const shortcutsList = document.getElementById('shortcuts_list');//ID do menu que deseja mostrar ou ocultar
    if (shortcutsList) {
        shortcutsList.style.display = shortcutsList.style.display === 'block' ? 'none' : 'block';
    }
}

export function initHamburgerMenu(menuButton, menuElement) {
    menuButton.addEventListener('click', () => toggleMenu(menuElement));
}