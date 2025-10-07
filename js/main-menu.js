// Game state object to track player progress
const gameState = {
    currentPage: 'menu',
    character: null,
    hope: 2,
    fear: 0,
    choices: []
};

// Popup functionality
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

// Event listeners for main menu buttons
document.getElementById('startBtn').addEventListener('click', () => {
    console.log('Starting adventure...');
    window.location.href = 'sablewood.html';
});

document.getElementById('aboutBtn').addEventListener('click', () => {
    openPopup('aboutPopup');
});

document.getElementById('creditsBtn').addEventListener('click', () => {
    openPopup('creditsPopup');
});

// Close button functionality for all popups
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        const popupId = e.target.getAttribute('data-popup');
        closePopup(popupId);
    });
});

// Close popup when clicking outside the popup content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = 'none';
    }
});

// Escape key to close popups
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
    }
});

// Save game state to memory (would be localStorage in a normal environment)
function saveGameState() {
    console.log('Game state saved:', gameState);
}

// Load game state from memory
function loadGameState() {
    console.log('Game state loaded:', gameState);
    return gameState;
}

// Initialize the game
function init() {
    console.log('Daggerheart CYOA initialized');
    loadGameState();
}

// Run initialization when page loads
init();