// Determine which scene comes next
function determineNextScene(outcome, currentScene) {
    const sceneTransitions = {
        'scene1': 'scene2',
        'scene2': 'scene3',
        'scene3': 'scene4',
        'scene4_negotiate': 'scene5_negotiate',
        'scene4_combat': 'scene5_combat',
        'scene5_negotiate': 'scene6_hush',
        'scene5_combat': 'scene6_hush',
        'scene6_hush': 'scene7_end',
        'end_tavern': 'complete',
        'end_immediate': 'complete',
        'end_explore': 'complete'
    };

    if (currentScene === 'scene4') {
        if (outcome === 'negotiation_attempt') {
            return 'scene5_negotiate';
        } else if (outcome === 'general_aggressive') {
            return 'scene5_combat';
        } else if (outcome === 'illusion_escape') {
            return 'scene5_negotiate';
        }
    }

    if (sceneTransitions[outcome] === 'complete') {
        window.location.href = 'thank-you.html';
        return currentScene;
    }

    return sceneTransitions[currentScene] || 'scene7_end';
}// Game state
const gameState = {
    currentScene: 'scene1',
    hope: 2,
    fear: 0,
    choices: [],
    dialogueHistory: [],
    needsDiceRoll: false,
    diceRollOutcome: null
};

// Scene data
const scenes = {
    scene1: {
        title: "Entering the Sablewood",
        narrative: "Your carriage rolls deeper into the ancient forest of the Sablewood. The trees tower hundreds of feet above you, their trunks wider than houses, their bark bearing the scars of countless centuries. The canopy is so thick that afternoon light filters through in scattered beams, painting the forest floor in patches of gold and shadow. Your companions fall silent, awed by the sheer scale of this place. Even the horse sounds muffled beneath the weight of all this age and wood.",
        diceRoll: false,
        choices: [
            {
                text: "These trees... I recognize the architectural patterns in their bark.",
                label: "Loreborne Knowledge",
                marlowe: true,
                outcome: "arcane_knowledge"
            },
            {
                text: "Stay alert. Something about this place feels wrong. Keep your eyes open.",
                label: "General - Caution",
                marlowe: false,
                outcome: "general_caution"
            },
            {
                text: "Remarkable. Have you ever seen anything so magnificent? We should take a moment to appreciate this.",
                label: "General - Wonder",
                marlowe: false,
                outcome: "general_wonder"
            }
        ]
    },
    scene2: {
        title: "The Overturned Merchant Cart",
        narrative: "As your carriage rounds a sharp corner, your driver pulls hard on the reins. A merchant's cart lies overturned across the path, its cargo scattered like abandoned treasures. A dead merchant, or what remains of one, lies beside the wreckage. And standing over the corpse, feeding on the remains, is a creature unlike any you've seen: a strixwolf. It has the body of a great wolf, the face and wings of an enormous owl, and eyes that seem far too intelligent. When it notices your approach, it straightens, studying you with predatory interest. Two smaller shapes move behind it: pups, you realize. A mother protecting her young.",
        diceRoll: true,
        diceDescription: "Roll the dice to see if Marlowe can sense the strixwolf's intentions with her Arcane Sense.",
        choices: [
            {
                text: "I can sense its emotions. It's protective, that's a mother with young. We should back away slowly and show respect.",
                label: "Sorcerer - Arcane Sense",
                marlowe: true,
                outcome: "arcane_respect"
            },
            {
                text: "Stay calm. Sudden movements will provoke it. Let's try talking it down.",
                label: "General - Diplomatic",
                marlowe: false,
                outcome: "general_diplomatic"
            },
            {
                text: "Weapons ready. We eliminate the threat and move on.",
                label: "General - Combat Ready",
                marlowe: false,
                outcome: "general_combat"
            }
        ]
    },
    scene3: {
        title: "Searching the Cart",
        narrative: "The strixwolf, whether through respect or simple satiation, allows you to pass. You take a moment to investigate the wreckage. The merchant's body is still warm. Personal effects are scattered everywhere, and you notice a distinctive seal on a leather pouch beside the corpse.",
        diceRoll: false,
        choices: [
            {
                text: "That seal on the merchant's pouch... it's from the Refuge. They were transporting goods from the walled city. This is important.",
                label: "Loreborne - Politics",
                marlowe: true,
                outcome: "refuge_knowledge"
            },
            {
                text: "Check for valuables. Supplies are valuable in a place like this.",
                label: "General - Practical",
                marlowe: false,
                outcome: "general_practical"
            },
            {
                text: "Don't touch anything yet. We need to understand what happened here first.",
                label: "General - Caution",
                marlowe: false,
                outcome: "general_careful"
            }
        ]
    },
    scene4: {
        title: "We're Being Watched",
        narrative: "As you examine the wreckage, one of your companions whispers an urgent warning. You're being watched. There's movement in the brambles on either side of the path, too organized, too deliberate to be natural. The shimmer of polished stone catches your eye. Armor? But made of stone? A voice calls out from the brush: The package. Hand it over, and you'll live. Through the foliage, you catch glimpses of armed figures moving into position. Thistlefolk, you realize. And you're surrounded.",
        diceRoll: true,
        diceDescription: "Roll the dice to determine the outcome of your next action.",
        choices: [
            {
                text: "I can mask our presence with a minor illusion. It will buy us time to escape.",
                label: "Sorcerer - Minor Illusion",
                marlowe: true,
                outcome: "illusion_escape"
            },
            {
                text: "Let them come. We're more than ready for whatever's out there.",
                label: "General - Aggressive",
                marlowe: false,
                outcome: "general_aggressive"
            },
            {
                text: "We should talk to them first. Maybe we can negotiate without bloodshed.",
                label: "General - Diplomatic",
                marlowe: false,
                outcome: "negotiation_attempt"
            }
        ]
    },
    scene5_negotiate: {
        title: "Negotiation with the Thistlefolk",
        narrative: "A figure emerges from the brambles. They're smaller than you expected, barely reaching your chest, but their bearing is confident. Their armor catches the dappled light. Behind them, a dozen more Thistlefolk emerge from hiding, weapons drawn but not raised. Their leader speaks: I am Yikyik. We know you carry something valuable. The Whitefire Arcanist pays well for certain acquisitions. Hand over the crate and you walk free.",
        diceRoll: false,
        choices: [
            {
                text: "I speak for King Emeris himself. This package is under royal protection. You'll let us pass, or face the consequences of obstructing the Crown.",
                label: "Royal Mage - Authority",
                marlowe: true,
                outcome: "royal_authority"
            },
            {
                text: "That crate is filled with nothing but old documents. Worthless to anyone. Let us pass and you'll never hear from us.",
                label: "General - Deception",
                marlowe: false,
                outcome: "general_deception"
            },
            {
                text: "We're delivering this to the Whitefire Arcanist in Hush. We mean no harm to your people. Can we not come to an understanding?",
                label: "General - Honesty",
                marlowe: false,
                outcome: "general_honest"
            }
        ]
    },
    scene5_combat: {
        title: "Combat Erupts",
        narrative: "There's no time for words. The Thistlefolk attack, bursting from the brambles in a coordinated assault. Your companions draw weapons, and the clearing erupts into chaos. Stone armor clashes against steel, and the air fills with the sound of conflict.",
        diceRoll: true,
        diceDescription: "Roll the dice to determine the outcome of the battle.",
        choices: [
            {
                text: "Your thorns are nothing compared to the magic I command! You unleash a blast of arcane power.",
                label: "Sorcerer - Magical Offensive",
                marlowe: true,
                outcome: "combat_magical"
            },
            {
                text: "I won't let you harm my companions! You step forward defensively.",
                label: "General - Protective",
                marlowe: false,
                outcome: "combat_protective"
            },
            {
                text: "This is unfortunate. Let's end this quickly. You focus on efficient combat.",
                label: "General - Professional",
                marlowe: false,
                outcome: "combat_professional"
            }
        ]
    },
    scene6_hush: {
        title: "Arrival in Hush",
        narrative: "After the chaos of the Sablewood, Hush is a welcome sight. The village emerges from the forest, nestled into a clearing with four dwarven stone pillars marking its boundaries. Buildings of wood and earth blend seamlessly with the forest around them. Inhabitants move peacefully through the streets, and you can smell fresh bread and something sweet cooking somewhere nearby. A sense of protection settles over you as you cross into the village.",
        diceRoll: false,
        choices: [
            {
                text: "Greetings. We come on behalf of King Emeris with a delivery for the Whitefire Arcanist.",
                label: "General - Formal",
                marlowe: false,
                outcome: "hush_formal"
            },
            {
                text: "What a beautiful place. We're grateful for your hospitality.",
                label: "General - Warm",
                marlowe: false,
                outcome: "hush_warm"
            }
        ]
    },
    scene7_end: {
        title: "What Next?",
        narrative: "A villager approaches you with a warm smile. Welcome to Hush. The Whitefire Arcanist has been expecting visitors from the capital. But first, you must be weary from the road. How would you like to spend your time here?",
        diceRoll: false,
        choices: [
            {
                text: "Let's rest and gather information at the tavern. I want to understand this place better.",
                label: "Gather Information",
                marlowe: true,
                outcome: "end_tavern"
            },
            {
                text: "Take us to the Arcanist immediately. Our business is urgent.",
                label: "Direct Mission",
                marlowe: false,
                outcome: "end_immediate"
            },
            {
                text: "We should explore the village and get to know the people. It's good to make connections.",
                label: "Build Relationships",
                marlowe: false,
                outcome: "end_explore"
            }
        ]
    }
};

// Initialize the scene
function initializeScene() {
    displayScene(gameState.currentScene);
}

// Display a scene
function displayScene(sceneKey) {
    const scene = scenes[sceneKey];
    document.getElementById('sceneTitle').textContent = scene.title;
    document.getElementById('narrativeText').textContent = scene.narrative;

    const diceSection = document.getElementById('diceRollSection');
    if (scene.diceRoll) {
        diceSection.style.display = 'block';
        document.getElementById('rollOutcome').style.display = 'none';
        document.getElementById('hopeDieResult').textContent = '-';
        document.getElementById('fearDieResult').textContent = '-';
        document.getElementById('rollButton').disabled = false;
        document.getElementById('rollButton').textContent = 'Roll the Dice';
    } else {
        diceSection.style.display = 'none';
    }

    const choicesContainer = document.getElementById('dialogueChoices');
    choicesContainer.innerHTML = '';

    scene.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = `dialogue-choice ${choice.marlowe ? 'marlowe-specific' : ''}`;
        
        if (choice.marlowe) {
            choiceDiv.innerHTML += '<div class="marlowe-badge">Marlowe</div>';
        }

        choiceDiv.innerHTML += `
            <div class="choice-text">${choice.text}</div>
            <div class="choice-label">${choice.label}</div>
        `;

        choiceDiv.addEventListener('click', () => handleChoice(choice.outcome, sceneKey));
        choicesContainer.appendChild(choiceDiv);
    });
}

// Handle choice selection
function handleChoice(outcome, currentScene) {
    const scene = scenes[currentScene];
    const choice = scene.choices.find(c => c.outcome === outcome);
    
    addMessageToHistory(choice.text, 'marlowe');
    
    gameState.choices.push(outcome);
    gameState.currentScene = currentScene;

    // Check if this leads to the completion page
    if (currentScene === 'scene7_end' && (outcome === 'end_tavern' || outcome === 'end_immediate' || outcome === 'end_explore')) {
        setTimeout(() => {
            window.location.href = 'thank-you.html';
        }, 500);
        return;
    }

    const nextScene = determineNextScene(outcome, currentScene);
    
    setTimeout(() => {
        displayScene(nextScene);
    }, 300);
}

// Determine which scene comes next
function determineNextScene(outcome, currentScene) {
    const sceneTransitions = {
        'scene1': 'scene2',
        'scene2': 'scene3',
        'scene3': 'scene4',
        'scene4_negotiate': 'scene5_negotiate',
        'scene4_combat': 'scene5_combat',
        'scene5_negotiate': 'scene6_hush',
        'scene5_combat': 'scene6_hush',
        'scene6_hush': 'scene7_end'
    };

    if (currentScene === 'scene4') {
        if (outcome === 'negotiation_attempt') {
            return 'scene5_negotiate';
        } else if (outcome === 'general_aggressive') {
            return 'scene5_combat';
        } else if (outcome === 'illusion_escape') {
            return 'scene5_negotiate';
        }
    }

    return sceneTransitions[currentScene] || 'scene7_end';
}

// Roll the dice
function rollDice() {
    const hopeDie = Math.floor(Math.random() * 12) + 1;
    const fearDie = Math.floor(Math.random() * 12) + 1;

    const hopeDieEl = document.getElementById('hopeDieResult');
    const fearDieEl = document.getElementById('fearDieResult');

    hopeDieEl.parentElement.classList.add('rolling');
    fearDieEl.parentElement.classList.add('rolling');

    setTimeout(() => {
        hopeDieEl.textContent = hopeDie;
        fearDieEl.textContent = fearDie;
        hopeDieEl.parentElement.classList.remove('rolling');
        fearDieEl.parentElement.classList.remove('rolling');

        let outcome = '';
        if (hopeDie > fearDie) {
            gameState.hope += 1;
            outcome = `<div class="outcome-title outcome-success">Success with Hope!</div>
                      <div>You rolled ${hopeDie} on Hope and ${fearDie} on Fear. Hope increases to ${gameState.hope}.</div>`;
        } else if (fearDie > hopeDie) {
            gameState.fear += 1;
            outcome = `<div class="outcome-title outcome-failure">Success with Fear!</div>
                      <div>You rolled ${hopeDie} on Hope and ${fearDie} on Fear. Fear increases to ${gameState.fear}.</div>`;
        } else {
            outcome = `<div class="outcome-title">Critical Success!</div>
                      <div>You rolled doubles! (${hopeDie}) Hope increases to ${gameState.hope + 1}.</div>`;
            gameState.hope += 1;
        }

        document.getElementById('rollOutcome').innerHTML = outcome;
        document.getElementById('rollOutcome').style.display = 'block';
        document.getElementById('rollButton').disabled = true;
        document.getElementById('rollButton').textContent = 'Dice Rolled';

        updateStatsDisplay();
    }, 500);
}

// Update stats display
function updateStatsDisplay() {
    document.getElementById('hopeValue').textContent = gameState.hope;
    document.getElementById('fearValue').textContent = gameState.fear;
}

// Add message to dialogue history
function addMessageToHistory(text, type) {
    const message = {
        text: text,
        type: type
    };
    
    gameState.dialogueHistory.push(message);
    displayHistoryMessage(message);
    
    const historyMessages = document.getElementById('historyMessages');
    setTimeout(() => {
        historyMessages.scrollTop = historyMessages.scrollHeight;
    }, 100);
}

// Display a message in the dialogue history
function displayHistoryMessage(message) {
    const historyContainer = document.getElementById('historyMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `history-message ${message.type}`;
    
    let speakerName = '';
    if (message.type === 'marlowe') {
        speakerName = 'Marlowe Fairwind';
    } else if (message.type === 'narrator') {
        speakerName = 'Narrator';
    } else if (message.type === 'action') {
        speakerName = 'Action';
    }
    
    messageDiv.innerHTML = `
        <div class="message-speaker">${speakerName}</div>
        <div class="message-text">${message.text}</div>
    `;
    
    historyContainer.appendChild(messageDiv);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeScene();
    updateStatsDisplay();
    addMessageToHistory("You and your companions enter the Sablewood...", 'action');
    document.getElementById('rollButton').addEventListener('click', rollDice);
});