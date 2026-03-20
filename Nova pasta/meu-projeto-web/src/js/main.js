// This is the main entry point for JavaScript functionality.
// Importing specific modules for different functionalities

import { initializeSearch } from './utils/pesquisa.js';
import { setupHamburgerMenu } from './utils/menuHamburguer.js';
import { setupShortcuts } from './utils/shortcuts.js';

// Initialize the functionalities
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    setupHamburgerMenu();
    setupShortcuts();
});