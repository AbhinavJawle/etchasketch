const gridContainer = document.querySelector('#grid-container');

let gridContainerSize = 16;

document.querySelector('#btn-generate-grid').addEventListener('click', () => {
    let gridSize = parseInt(document.querySelector('#grid-size-input').value);
    //const gridContainer = document.querySelector('#grid-container');

    // Clear any existing cells
    gridContainer.innerHTML = '';

    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert('Please enter a valid number greater than 0 and less than 100');
        return;
    }

    gridContainerSize = gridSize;
    generateGrid();
    
});

function generateGrid()
{

    // Calculate cell size based on the grid size and container size
    const cellSize = 100 / gridContainerSize;
    

    // Generate the grid cells
    for (let i = 0; i < gridContainerSize * gridContainerSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${cellSize}%`;
        cell.style.height = `${cellSize}%`;
        gridContainer.appendChild(cell);
    }

    const hoverSquares = document.querySelectorAll(".grid-cell");
    hoverSquares.forEach((hoverSquare) => {
        hoverSquare.addEventListener("mouseenter", () => {
            hoverSquare.style.backgroundColor = getRandomColorWithOpacity();
        });
    });
    
}

function getRandomColorWithOpacity(opacity = 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Ensure the opacity is between 0 and 1
    opacity = Math.max(0, Math.min(opacity, 1));

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}









