const gameState = {
    currPage: 'menu',
    character: null,
    hope: 2,
    fear: 0,
    choices: []
};


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


document.getElementById('startBtn').addEventListener('click', () => {
    console.log('Starting adventure...');
});

document.getElementById('aboutBtn').addEventListener('click', () => {
    openPopup('aboutPopup');
});

document.getElementById('creditsBtn').addEventListener('click', () => {
    openPopup('creditsPopup');
});


document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        const popupId = e.target.getAttribute('data-popup');
        closePopup(popupId);
    });
});


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        e.target.style.display = 'none';
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
    }
});


function saveGameState() {
    console.log('Game state saved:', gameState);
}


function loadGameState() {
    console.log('Game state loaded:', gameState);
    return gameState;
}


function init() {
    console.log('Daggerheart CYOA initialized');
    loadGameState();
}


init();
