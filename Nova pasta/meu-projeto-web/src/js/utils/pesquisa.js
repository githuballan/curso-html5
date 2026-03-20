// This file contains functions related to search functionality. 
// It exports functions that handle search input, filtering, and displaying results.

export function handleSearchInput(inputElement, resultsContainer) {
    inputElement.addEventListener('input', () => {
        const query = inputElement.value.toLowerCase();
        filterResults(query, resultsContainer);
    });
}

function filterResults(query, resultsContainer) {
    const items = resultsContainer.querySelectorAll('.result-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

export function displayResults(results, resultsContainer) {
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const item = document.createElement('div');
        item.classList.add('result-item');
        item.textContent = result;
        resultsContainer.appendChild(item);
    });
}