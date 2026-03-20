// This file handles keyboard shortcuts and other related functionalities.
// It exports functions that define and manage keyboard shortcuts for the application.

export function initializeShortcuts() {
    document.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    switch (event.key) {
        case 'a':
            // Action for 'a' key
            console.log('Shortcut for A triggered');
            break;
        case 'b':
            // Action for 'b' key
            console.log('Shortcut for B triggered');
            break;
        // Add more shortcuts as needed
        default:
            break;
    }
}

export function addShortcut(key, action) {
    // Function to add a new shortcut dynamically
    document.addEventListener('keydown', (event) => {
        if (event.key === key) {
            action();
        }
    });
}