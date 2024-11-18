document.querySelector('#btn-generate-grid').addEventListener('click', () => {
    const gridSize = parseInt(document.querySelector('#grid-size-input').value);
    const gridContainer = document.querySelector('#grid-container');

    // Clear any existing cells
    gridContainer.innerHTML = '';

    if (isNaN(gridSize) || gridSize <= 0) {
        alert('Please enter a valid number greater than 0');
        return;
    }

    // Calculate cell size based on the grid size and container size
    const cellSize = 100 / gridSize;

    // Generate the grid cells
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        gridContainer.appendChild(cell);
    }
});
