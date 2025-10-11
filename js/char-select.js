// Character data
const characters = {
    marlowe: {
        name: "Marlowe Fairwind",
        class: "Sorcerer",
        subclass: "Primal Origin",
        image: "images/portrait-marlowe.png",
        domains: "Arcana (Innate/Instinctual Magic) & Midnight (Shadows/Secrecy)",
        heritage: "Loreborne (Academic/Political) Elf",
        loadout: [
            "Dualstaff (Far range, 1d6+3 magic damage)",
            "Leather Armor",
            "Minor Stamina Potion (clear 1d4 stress)",
            "Gold: 1 handful"
        ],
        abilities: [
            "Experience - Royal Mage: Spend a Hope and add +2 when acting in your official magical capacity or using royal authority",
            "Experience - Not On My Watch: Spend a Hope and add +2 when protecting allies or preventing harm through magic or quick action",
            "Community (Loreborne) - Well-Read: You have advantage on rolls that involve the history, culture, or politics of a prominent person or place",
            "Ancestry (Elf) - Quick Reactions: Mark a Stress to gain advantage on a a reaction roll",
            "Ancestry (Elf) - Celestial Trance: During a rest, you can drop into a trance to choose an additional downtime move",
            "Class (Sorcerer) - Arcane Sense: Sense magical presences within Close range",
            "Class (Sorcerer) - Minor Illusion: Create visual illusions within Close range",
            "Class (Sorcerer) - Channel Raw Power: Once per long rest, enhance spells or gain Hope",
            "Subclass (Primal Origin) - Manipulate Magic: Your primal origin allows you to modify the essence of magic itself",
            "Spell (Arcana) - Unleash Chaos: Make a Spellcast roll (Instinct, Far range); spend tokens to deal that many d10s of magic damage",
            "Spell (Midnight) - Rain of Blades: Spend a Hope to make a Spellcast roll and strike all targets within Very Close range for 1d8+2 magic damage (extra 1d8 vs Vulnerable targets)",
            "Hope - Volatile Magic: Spend 3 Hope to reroll damage dice on magic attacks"
        ]
    },
    barnacle: {
        name: "Barnacle",
        class: "Rogue",
        subclass: "Nightwalker",
        image: "images/portrait-barnacle.png",
        domains: "Midnight (Shadows/Secrecy) & Grace (Charisma)",
        heritage: "Underborne (Subterranean) Ribbet (Frog Person)",
        loadout: [
            "Dagger (Melee range, 1d8+1 physical damage)",
            "Gambeson Armor",
            "Minor Stamina Potion (clear 1d4 stress)",
            "Gold: 1 handful"
        ],
        abilities: [
            "Experience - They don't see me coming!: Spend a Hope and add +2 when surprising, sneaking, or ambushing a target",
            "Experience - Strike a deal: Spend a Hope and add +2 when negotiating, bribing, or manipulating others in social interactions",
            "Community (Underborne) - Low-Light Living: When you're in an area with low light or heavy shadow, you have advantage on rolls to hide, investigate, or perceive details within that area",
            "Ancestry (Ribbet) - Amphibious: You can breathe and move naturally underwater",
            "Ancestry (Ribbet) - Long Tongue: You can use your long tongue to grab onto things within Close range; mark a Stress to use your tongue as a Finesse Close weapon that deals d12 physical damage using your Proficiency",
            "Class (Rogue) - Cloaked: Remain unseen when stationary",
            "Class (Rogue) - Sneak Attack: Add d6s to damage when Cloaked or ally nearby",
            "Subclass (Nightwalker) - Shadow Stepper: Mark Stress to move between shadows",
            "Ability (Midnight) - Pick and Pull: Advantage on locks, traps, and theft",
            "Ability (Grace) - Inspirational Words: Your speech is imbued with power",
            "Hope - Rogue's Dodge: Spend 3 Hope to gain +2 to your Evasion until the next time an attack succeeds against you (otherwise, this bonus lasts until your next rest)"
        ]
    },
    garrick: {
        name: "Garrick Reed",
        class: "Warrior",
        subclass: "Call of the Brave",
        image: "images/portrait-garrick.png",
        domains: "Blade (Weapon Mastery) & Bone (Tactics/the Body)",
        heritage: "Highborne (Upper Class) Human",
        loadout: [
            "Longsword (Melee range, 1d8+3 physical damage)",
            "Leather Armor",
            "Minor Health Potion (clear 1d4 Hit Points)",
            "Gold: 1 handful"
        ],
        abilities: [
            "Experience - Affable: Spend a Hope and add +2 when using charm, diplomacy, or disarming tension through friendliness",
            "Experience - Hit Them Hard: Spend a Hope and add +2 when making a decisive melee strike or a bold physical move",
            "Community (Highborne) - Privilege: You have advantage on rolls to consort with nobles, negotiate prices, or leverage your reputation to get what you want",
            "Ancestry (Human) - High Stamina: Gain an additional Stress slot at character creation",
            "Ancestry (Human) - Adaptability: When you fail a roll that utilized one of your Experiences, you can mark a Stress to reroll",
            "Class (Warrior) - Attack of Opportunity: React when enemies leave Melee range",
            "Class (Warrior) - Combat Training: Ignore burden on weapons, bonus damage",
            "Subclass (Call of the Brave) - Courage: Gain Hope when failing with Fear",
            "Subclass (Call of the Brave) - Battle Ritual: Once per long rest, clear 2 Stress and gain 2 Hope",
            "Ability (Blade) - Not Good Enough: When you roll your damage dice, you can reroll any 1s or 2s",
            "Ability (Bone) - I See It Coming: When you're targeted by an attack made from beyond Melee range, you can mark a Stress to roll a d4 and gain a bonus to your Evasion equal to the result against the attack",
            "Hope - No Mercy: Spend 3 Hope to to gain +1 bonus to your attack rolls until your next rest"
        ]
    },
    khari: {
        name: "Khari Nix",
        class: "Guardian",
        subclass: "Stalwart",
        image: "images/portrait-khari.png",
        domains: "Valor (Protection) & Blade (Weapon Mastery)",
        heritage: "Ridgeborne (Mountains) Giant",
        loadout: [
            "Battleaxe (Very Close range, 1d10+3 physical damage)",
            "Chainmail Armor",
            "Minor Health Potion (clear 1d4 Hit Points)",
            "Gold: 1 handful"
        ],
        abilities: [
            "Experience - I've got your back: Spend a Hope and add +2 when defending, shielding, or supporting an ally",
            "Experience - Not afraid of anything: Spend a Hope and add +2 when resisting fear or intimidation",
            "Community (Ridgeborne) - Steady: You have advantage on rolls to traverse dangerous cliffs and ledges, navigate harsh environments, and use your survival knowledge",
            "Ancestry (Giant) - Endurance: Gain an additional Hit Point slot at character creation",
            "Ancestry (Giant) - Reach: Treat any weapon, ability, spell, or other feature that has a Melee range as though it has a Very Close range instead",
            "Class (Guardian) - Unstoppable: Once per long rest, reduce physical damage severity",
            "Subclass (Stalwart) - Unwavering: +1 permanent bonus to damage thresholds",
            "Subclass (Stalwart) - Iron Will: Mark extra Armor Slot when taking damage",
            "Ability (Blade) - Whirlwind: When you make a successful attack against a target within Very Close range, you can spend a Hope to use the attack against all other targets within Very Close range. All additional adversaries you succeed against with this ability take half damage",
            "I Am Your Shield: When an ally within Very Close range would take damage, you can mark a Stress to stand in the way and make yourself the target of the attack instead. When you take damage from this attack, you can mark any number of Armor Slots",
            "Hope - Frontline Tank: Spend 3 Hope to clear 2 Armor Slots"
        ]
    },
    varian: {
        name: "Varian Soto",
        class: "Ranger",
        subclass: "Wayfinder",
        image: "images/portrait-varian.png",
        domains: "Bone (Tactics/the Body) & Sage (Natural World)",
        heritage: "Wildborne (Forest) Katari (Feline Person)",
        loadout: [
            "Shortbow (Far range, 1d6+3 physical damage)",
            "Leather Armor",
            "Minor Stamina Potion (clear 1d4 stress)",
            "Gold: 1 handful"
        ],
        abilities: [
            "Experience - Deadly Aim: Spend a Hope and add +2 when making a ranged attack with focus or precision",
            "Experience - Nature's Friend: Spend a Hope and add +2 when navigating, tracking, or surviving in natural environments",
            "Community (Wildborne) - Lightfoot: Your movement is naturally; you have advantage on rolls to move without being heard",
            "Ancestry (Katari) - Feline Instinct: When you make an Agility Roll, you can spend 2 Hope to reroll your Hope Die",
            "Ancestry (Katari) - Retracting Claws: Make an Agility Roll to scratch a target within Melee; On a success, they become temporarily Vulnerable",
            "Class (Ranger) - Ranger's Focus: Spend Hope to mark a target and gain benefits",
            "Subclass (Wayfinder) - Ruthless Predator: Mark Stress for +1 Proficiency bonus",
            "Subclass (Wayfinder) - Path Forward: Find the shortest route to known destinations",
            "Ability (Bone) - Untouchable: Gain a bonus to your Evasion equal to half your Agility",
            "Spell (Sage) - Vicious Entangle: Make a Spellcast Roll against a target within Far range, and, on a success, roots and vines reach out from the ground, dealing 1d8+1 physical damage and temporarily Restraining the target",
            "Hope - Hold Them Off: Spend 3 Hope to attack two additional targets"
        ]
    }
};

// Initialize character icons on page load
function initializeCharacterIcons() {
    document.querySelectorAll('.character-card').forEach(card => {
        const characterKey = card.getAttribute('data-character');
        const character = characters[characterKey];
        if (character) {
            const icon = card.querySelector('.character-icon');
            icon.style.backgroundImage = `url(${character.image})`;
            icon.style.backgroundSize = 'cover';
            icon.style.backgroundPosition = 'center';
        }
    });
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', initializeCharacterIcons);

// Open character detail popup
function openCharacterPopup(characterKey) {
    const character = characters[characterKey];
    if (!character) return;

    const popup = document.getElementById('characterPopup');
    const confirmBtn = document.getElementById('confirmBtn');
    const disabledBtn = document.getElementById('disabledBtn');

    document.getElementById('popupName').textContent = character.name;
    document.getElementById('popupClass').textContent = `Class: ${character.class}`;
    document.getElementById('popupSubclass').textContent = `Subclass: ${character.subclass}`;
    document.getElementById('popupHeritage').textContent = character.heritage;
    document.getElementById('popupDomains').textContent = character.domains;

    // Set popup image
    const fullImage = document.querySelector('.popup-full-image');
    fullImage.style.backgroundImage = `url(${character.image})`;
    fullImage.style.backgroundSize = 'cover';
    fullImage.style.backgroundPosition = 'center';

    // Set card image (optional — for main grid icons)
    const cardIcons = document.querySelectorAll(`.character-card[data-character='${characterKey}'] .character-icon`);
    cardIcons.forEach(icon => {
        icon.style.backgroundImage = `url(${character.image})`;
        icon.style.backgroundSize = 'cover';
        icon.style.backgroundPosition = 'center';
    });

    // Populate loadout
    const loadoutList = document.getElementById('popupLoadout');
    loadoutList.innerHTML = '';
    character.loadout.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        loadoutList.appendChild(li);
    });

    // Populate abilities
    const abilitiesList = document.getElementById('popupAbilities');
    abilitiesList.innerHTML = '';
    character.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability;
        abilitiesList.appendChild(li);
    });

    // Show/hide buttons
    if (characterKey === 'marlowe') {
        confirmBtn.style.display = 'inline-block';
        disabledBtn.style.display = 'none';
    } else {
        confirmBtn.style.display = 'none';
        disabledBtn.style.display = 'inline-block';
    }

    popup.style.display = 'block';
}


// Close character popup
function closeCharacterPopup() {
    document.getElementById('characterPopup').style.display = 'none';
}

// Event listeners for character cards
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        const characterKey = card.getAttribute('data-character');
        openCharacterPopup(characterKey);
    });
});

// Close button
document.getElementById('closeCharacter').addEventListener('click', closeCharacterPopup);

// Close when clicking outside
window.addEventListener('click', (e) => {
    const popup = document.getElementById('characterPopup');
    if (e.target === popup) {
        closeCharacterPopup();
    }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCharacterPopup();
    }
});

// Confirm button - navigate to Act 1
document.getElementById('confirmBtn').addEventListener('click', () => {
    console.log('Starting adventure with Marlowe...');
    window.location.href = 'act-1.html';
});