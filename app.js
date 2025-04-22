// Data structure
let players = [];
let currentGame = {
    isActive: false,
    players: [],
    name: '',
    date: new Date().toISOString()
};
let gameHistory = [];

// Language support
let currentLanguage = 'en';
const translations = {
    en: {
        appTitle: 'Poker Cash Game Calculator',
        playersTab: 'Players',
        gameTab: 'Game',
        gameManagementTab: 'Game Management',
        settlementTab: 'Settlement',
        historyTab: 'Game History',
        playerManagement: 'Player Management',
        playerName: 'Player Name:',
        addPlayer: 'Add Player',
        clearData: 'Clear App Data',
        currentGame: 'Current Game',
        gameName: 'Game Name:',
        startGame: 'Start New Game',
        saveGame: 'Save Game to History',
        calculateSettlement: 'Calculate Settlement',
        playersInGame: 'Players in Game',
        addPlayers: 'Add Players to Game:',
        addToGame: 'Add to Game',
        settlement: 'Settlement',
        submitChips: 'Submit Final Chips',
        gameHistory: 'Game History',
        copyInstructions: 'Copy Instructions',
        languageToggle: 'עברית',
        buyIn: 'Buy-in',
        rebuys: 'Rebuys',
        total: 'Total',
        finalChips: 'Final Chips',
        winners: 'Winners',
        losers: 'Losers',
        paysTo: 'pays to',
        noSettlements: 'No settlements needed - all players are even.',
        copySettlement: 'Copy Settlement',
        exportPlayers: 'Export Players',
        importPlayers: 'Import Players',
        exportSuccess: 'Players data exported successfully!',
        importSuccess: 'Players data imported successfully!',
        importError: 'Error importing players data. Please check the file format.',
        fileFormatError: 'Invalid file format. Please use CSV or Excel files.',
        gameNameRequired: 'Please enter a game name',
        confirmNewGame: 'Are you sure you want to start a new game? The current game will be saved to history.',
        newGameStarted: 'New game started successfully!',
        clearGame: 'Clear Current Game',
        confirmClearGame: 'Are you sure you want to clear the current game? This action cannot be undone.',
        gameCleared: 'Current game has been cleared successfully.',
        noActiveGame: 'There is no active game to clear.',
        players: 'Players',
        totalInPlay: 'Total in Play',
        gameManagement: 'Game Management',
        newGameName: 'New Game Name:',
        noActiveGameDisplay: 'No active game',
        gameSummary: 'Game Summary',
        totalWins: 'Total Wins',
        totalLosses: 'Total Losses',
        winnersList: 'Winners List',
        losersList: 'Losers List',
        individualDetails: 'Individual Details',
        paymentInstructions: 'Payment Instructions',
        copyButton: 'Copy',
        gameStats: 'Game Statistics',
        averageBuyIn: 'Average Buy-in',
        averageRebuys: 'Average Rebuys',
        totalPlayers: 'Total Players',
        gameDetails: 'Game Details',
        playerStats: 'Player Statistics',
        gameControls: 'Game Controls',
        historyControls: 'History Controls',
        loadGame: 'Load Game',
        deleteGame: 'Delete Game',
        noGamesInHistory: 'No games in history'
    },
    he: {
        appTitle: 'מחשבון משחק פוקר מזומן',
        playersTab: 'שחקנים',
        gameTab: 'משחק',
        gameManagementTab: 'ניהול משחק',
        settlementTab: 'הסדר תשלומים',
        historyTab: 'היסטוריית משחקים',
        playerManagement: 'ניהול שחקנים',
        playerName: 'שם שחקן:',
        addPlayer: 'הוסף שחקן',
        clearData: 'נקה נתונים',
        currentGame: 'משחק נוכחי',
        gameName: 'שם המשחק:',
        startGame: 'התחל משחק חדש',
        saveGame: 'שמור משחק להיסטוריה',
        calculateSettlement: 'חשב הסדר תשלומים',
        playersInGame: 'שחקנים במשחק',
        addPlayers: 'הוסף שחקנים למשחק:',
        addToGame: 'הוסף למשחק',
        settlement: 'הסדר תשלומים',
        submitChips: 'שלח צ\'יפים סופיים',
        gameHistory: 'היסטוריית משחקים',
        copyInstructions: 'העתק הוראות',
        languageToggle: 'English',
        buyIn: 'רכישה ראשונית',
        rebuys: 'רכישות נוספות',
        total: 'סה"כ',
        finalChips: 'צ\'יפים סופיים',
        winners: 'מנצחים',
        losers: 'מפסידים',
        paysTo: 'משלם ל',
        noSettlements: 'אין צורך בהסדר תשלומים - כל השחקנים מאוזנים.',
        copySettlement: 'העתק הסדר תשלומים',
        exportPlayers: 'ייצא שחקנים',
        importPlayers: 'ייבא שחקנים',
        exportSuccess: 'נתוני השחקנים יוצאו בהצלחה!',
        importSuccess: 'נתוני השחקנים יובאו בהצלחה!',
        importError: 'שגיאה בייבוא נתוני השחקנים. אנא בדוק את פורמט הקובץ.',
        fileFormatError: 'פורמט קובץ לא תקין. אנא השתמש בקבצי CSV או Excel.',
        gameNameRequired: 'אנא הזן שם למשחק',
        confirmNewGame: 'האם אתה בטוח שברצונך להתחיל משחק חדש? המשחק הנוכחי יישמר בהיסטוריה.',
        newGameStarted: 'משחק חדש התחיל בהצלחה!',
        clearGame: 'נקה משחק נוכחי',
        confirmClearGame: 'האם אתה בטוח שברצונך לנקות את המשחק הנוכחי? פעולה זו אינה ניתנת לביטול.',
        gameCleared: 'המשחק הנוכחי נוקה בהצלחה.',
        noActiveGame: 'אין משחק פעיל שניתן לנקות.',
        players: 'שחקנים',
        totalInPlay: 'סה"כ במשחק',
        gameManagement: 'ניהול משחק',
        newGameName: 'שם משחק חדש:',
        noActiveGameDisplay: 'אין משחק פעיל',
        gameSummary: 'סיכום משחק',
        totalWins: 'סה"כ זכיות',
        totalLosses: 'סה"כ הפסדים',
        winnersList: 'רשימת מנצחים',
        losersList: 'רשימת מפסידים',
        individualDetails: 'פרטים אישיים',
        paymentInstructions: 'הוראות תשלום',
        copyButton: 'העתק',
        gameStats: 'סטטיסטיקות משחק',
        averageBuyIn: 'רכישה ראשונית ממוצעת',
        averageRebuys: 'רכישות נוספות ממוצעות',
        totalPlayers: 'סה"כ שחקנים',
        gameDetails: 'פרטי משחק',
        playerStats: 'סטטיסטיקות שחקן',
        gameControls: 'פקדי משחק',
        historyControls: 'פקדי היסטוריה',
        loadGame: 'טען משחק',
        deleteGame: 'מחק משחק',
        noGamesInHistory: 'אין משחקים בהיסטוריה'
    }
};

// Initialize the app
function initializeApp() {
    try {
        loadData();
        updateUI();
        showTab('gameManagement');
    } catch (error) {
        console.error('Error initializing app:', error);
        alert('Error initializing the application. Please refresh the page.');
    }
}

// Load data from localStorage on startup
function loadData() {
    try {
        const savedPlayers = localStorage.getItem('pokerPlayers');
        const savedGame = localStorage.getItem('currentGame');
        const savedHistory = localStorage.getItem('gameHistory');
        const savedLanguage = localStorage.getItem('currentLanguage');
        
        if (savedPlayers) {
            players = JSON.parse(savedPlayers);
        }
        if (savedGame) {
            currentGame = JSON.parse(savedGame);
        }
        if (savedHistory) {
            gameHistory = JSON.parse(savedHistory);
        }
        if (savedLanguage) {
            currentLanguage = savedLanguage;
            document.body.dir = currentLanguage === 'he' ? 'rtl' : 'ltr';
        }
        
        updateUI();
    } catch (error) {
        console.error('Error loading data:', error);
        // Reset to default values if there's an error
        players = [];
        currentGame = {
            isActive: false,
            players: [],
            name: '',
            date: new Date().toISOString()
        };
        gameHistory = [];
    }
}

// Save data to localStorage
function saveData() {
    try {
        localStorage.setItem('pokerPlayers', JSON.stringify(players));
        localStorage.setItem('currentGame', JSON.stringify(currentGame));
        localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
        localStorage.setItem('currentLanguage', currentLanguage);
    } catch (error) {
        console.error('Error saving data:', error);
        alert('Error saving data. Please try again.');
    }
}

// Tab management
function showTab(tabName) {
    try {
        // Hide all tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab
        const selectedTab = document.getElementById(tabName + 'Tab');
        if (selectedTab) {
            selectedTab.classList.add('active');
            
            // Only update UI for the active tab
            switch(tabName) {
                case 'players':
                    updatePlayersList();
                    updatePlayerSelect();
                    break;
                case 'game':
                    updateGamePlayersList();
                    updateGameNameDisplay();
                    break;
                case 'gameManagement':
                    updateGameManagement();
                    break;
                case 'settlement':
                    updateChipCountInputs();
                    updateSettlementSummary();
                    break;
                case 'history':
                    updateGameHistoryList();
                    break;
            }
        }
    } catch (error) {
        console.error('Error switching tabs:', error);
    }
}

// Player management
function addPlayer() {
    const nameInput = document.getElementById('playerName');
    const name = nameInput.value.trim();
    
    if (name) {
        const player = {
            id: Date.now().toString(),
            name: name
        };
        
        players.push(player);
        nameInput.value = '';
        saveData();
        updateUI();
    }
}

function removePlayer(playerId) {
    players = players.filter(p => p.id !== playerId);
    saveData();
    updateUI();
}

// Game management
function startNewGame() {
    const newGameName = document.getElementById('newGameName').value.trim();
    
    // Validate game name
    if (!newGameName) {
        alert(translations[currentLanguage].gameNameRequired);
        return;
    }

    // Check if there's an active game
    if (currentGame.isActive && currentGame.players.length > 0) {
        // Show confirmation dialog with game details
        const confirmMessage = `${translations[currentLanguage].confirmNewGame}\n\n` +
            `${translations[currentLanguage].currentGame}: ${currentGame.name}\n` +
            `${translations[currentLanguage].players}: ${currentGame.players.length}\n` +
            `${translations[currentLanguage].totalInPlay}: ₪${(currentGame.players.reduce((sum, p) => sum + p.buyIn, 0) + 
                currentGame.players.reduce((sum, p) => sum + p.rebuys.reduce((s, r) => s + r, 0), 0)).toFixed(2)}`;

        if (!confirm(confirmMessage)) {
            return;
        }

        // Save current game to history
        saveCurrentGameToHistory();
    }

    // Create a completely new game object
    currentGame = {
        isActive: true,
        players: [],
        name: newGameName,
        date: new Date().toISOString()
    };
    
    // Save the new game state
    saveData();
    
    // Force UI update for the game management tab
    updateGameManagement();
    
    // Switch to the game tab
    showTab('game');

    // Show success message
    alert(translations[currentLanguage].newGameStarted);
}

function saveCurrentGameToHistory() {
    if (currentGame.isActive && currentGame.players.length > 0) {
        // Create a deep copy of the current game
        const gameToSave = JSON.parse(JSON.stringify(currentGame));
        gameToSave.isActive = false;
        gameHistory.push(gameToSave);
        saveData();
    }
}

function loadGameFromHistory(gameId) {
    try {
        const game = gameHistory.find(g => g.date === gameId);
        if (game) {
            if (confirm('This will replace your current game. Are you sure?')) {
                // Create a deep copy of the game
                currentGame = JSON.parse(JSON.stringify(game));
                currentGame.isActive = true;
                document.getElementById('gameName').value = currentGame.name;
                saveData();
                updateUI();
                showTab('game');
            }
        }
    } catch (error) {
        console.error('Error loading game from history:', error);
        alert('Error loading game. Please try again.');
    }
}

function deleteGameFromHistory(gameId) {
    if (confirm('Are you sure you want to delete this game from history?')) {
        gameHistory = gameHistory.filter(g => g.date !== gameId);
        saveData();
        updateUI();
    }
}

function updateGameHistoryList() {
    const list = document.getElementById('gameHistoryList');
    list.innerHTML = '';
    
    if (gameHistory.length === 0) {
        list.innerHTML = '<p>No games in history</p>';
        return;
    }
    
    // Sort games by date (newest first)
    const sortedHistory = [...gameHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedHistory.forEach(game => {
        const div = document.createElement('div');
        div.className = 'game-history-item';
        
        const date = new Date(game.date).toLocaleString();
        const totalPlayers = game.players.length;
        const totalBuyIn = game.players.reduce((sum, player) => {
            return sum + player.buyIn + player.rebuys.reduce((s, r) => s + r, 0);
        }, 0);
        
        div.innerHTML = `
            <div>
                <strong>${game.name}</strong><br>
                <small>${date}</small><br>
                Players: ${totalPlayers} | Total Buy-in: ₪${totalBuyIn}
            </div>
            <div class="game-actions">
                <button class="btn" onclick="loadGameFromHistory('${game.date}')">Load</button>
                <button class="btn" onclick="deleteGameFromHistory('${game.date}')" style="background-color: #dc3545;">Delete</button>
            </div>
        `;
        list.appendChild(div);
    });
}

function addPlayerToGame() {
    const select = document.getElementById('playerSelect');
    const buyInInput = document.getElementById('buyInAmount');
    const buyIn = parseFloat(buyInInput.value);
    
    if (!isNaN(buyIn) && buyIn > 0) {
        // Get all selected players
        const selectedPlayers = Array.from(select.selectedOptions).map(option => option.value);
        
        selectedPlayers.forEach(playerId => {
            const player = players.find(p => p.id === playerId);
            if (player && !currentGame.players.some(p => p.playerId === playerId)) {
                currentGame.players.push({
                    playerId: playerId,
                    name: player.name,
                    buyIn: buyIn,
                    rebuys: [],
                    finalChips: 0
                });
            }
        });
        
        buyInInput.value = '';
        saveData();
        updateUI();
    }
}

function addRebuy(playerId) {
    const player = currentGame.players.find(p => p.playerId === playerId);
    if (player) {
        const amount = parseFloat(prompt(`${player.name} - Enter rebuy amount:`));
        if (!isNaN(amount) && amount > 0) {
            player.rebuys.push(amount);
            saveData();
            updateUI();
        }
    }
}

function updateFinalChips(playerId, chips) {
    const player = currentGame.players.find(p => p.playerId === playerId);
    if (player) {
        // Allow zero values by checking if chips is not empty string
        player.finalChips = chips === '' ? null : parseFloat(chips);
        saveData();
        updateUI();
    }
}

// Make sure the function is properly exposed to the global scope
window.calculateSettlement = function() {
    try {
        console.log('Starting settlement calculation...');
        
        // Validate current game state
        if (!currentGame || !currentGame.players || currentGame.players.length === 0) {
            throw new Error('No active game or players found');
        }

        // Initialize totals
        let totalBuyIn = 0;
        let totalRebuys = 0;
        let totalFinalChips = 0;
        let totalInPlay = 0;
        
        // Calculate totals and player results
        const playerResults = currentGame.players.map(player => {
            if (!player || typeof player.buyIn !== 'number' || !Array.isArray(player.rebuys)) {
                throw new Error('Invalid player data structure');
            }

            const playerBuyIn = player.buyIn;
            const playerRebuys = player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
            const totalInvestment = playerBuyIn + playerRebuys;
            
            totalBuyIn += playerBuyIn;
            totalRebuys += playerRebuys;
            totalFinalChips += player.finalChips;
            totalInPlay += totalInvestment;
            
            // Calculate total win/loss: final chips minus total investment
            const totalWinLoss = player.finalChips - totalInvestment;
            console.log(`Player ${player.name}: Final Chips (${player.finalChips}) - Total Investment (${totalInvestment}) = ${totalWinLoss}`);
            
            return {
                playerId: player.playerId,
                name: player.name,
                totalWinLoss: totalWinLoss,
                totalInvestment: totalInvestment,
                finalChips: player.finalChips,
                buyIn: playerBuyIn,
                rebuys: playerRebuys
            };
        });

        // Separate winners and losers
        const winners = playerResults.filter(p => p.totalWinLoss > 0).sort((a, b) => b.totalWinLoss - a.totalWinLoss);
        const losers = playerResults.filter(p => p.totalWinLoss < 0).sort((a, b) => a.totalWinLoss - b.totalWinLoss);

        // Log the results for debugging
        console.log('Winners:', winners);
        console.log('Losers:', losers);

        // Calculate settlements
        const settlements = [];
        const remainingLosses = new Map(losers.map(l => [l.name, Math.abs(l.finalChips - (l.buyIn + l.rebuys))]));
        const remainingWins = new Map(winners.map(w => [w.name, w.finalChips - (w.buyIn + w.rebuys)]));

        // Process each loser
        for (const loser of losers) {
            const loserName = loser.name;
            let remainingLoss = remainingLosses.get(loserName);
            
            // Skip if no loss to settle
            if (remainingLoss <= 0.01) continue;

            // Find winners who still need to be paid
            const availableWinners = winners.filter(w => remainingWins.get(w.name) > 0.01);
            
            // Process each winner until loser's loss is fully settled
            for (const winner of availableWinners) {
                const winnerName = winner.name;
                const remainingWin = remainingWins.get(winnerName);
                
                // Skip if winner has no remaining win
                if (remainingWin <= 0.01) continue;

                // Calculate the amount to transfer (minimum of remaining loss and remaining win)
                const amount = Math.min(remainingLoss, remainingWin);
                
                if (amount > 0) {
                    settlements.push({
                        from: loserName,
                        to: winnerName,
                        amount: Math.round(amount * 100) / 100
                    });
                    
                    // Update remaining amounts
                    remainingLoss -= amount;
                    remainingLosses.set(loserName, remainingLoss);
                    remainingWins.set(winnerName, remainingWin - amount);
                    
                    // If loser's loss is fully settled, move to next loser
                    if (remainingLoss <= 0.01) break;
                }
            }
        }

        // Log the settlement details for verification
        console.log('Settlement Details:');
        console.log('Initial Losses:', Object.fromEntries(remainingLosses));
        console.log('Initial Wins:', Object.fromEntries(remainingWins));
        console.log('Settlements:', settlements);

        // Calculate total wins and losses
        const totalWins = winners.reduce((sum, p) => sum + p.totalWinLoss, 0);
        const totalLosses = losers.reduce((sum, p) => sum + Math.abs(p.totalWinLoss), 0);

        // Sort winners and losers alphabetically
        const sortedWinners = [...winners].sort((a, b) => a.name.localeCompare(b.name));
        const sortedLosers = [...losers].sort((a, b) => a.name.localeCompare(b.name));

        // Display game summary and settlements
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div style="margin-bottom: 20px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border: 1px solid #bbdefb;">
                        <h3 style="color: #1565c0; margin-bottom: 15px; text-align: center;">
                            <i class="fas fa-gamepad" style="margin-right: 8px;"></i>${translations[currentLanguage].currentGame}
                        </h3>
                        <div style="background-color: white; padding: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="font-weight: bold; color: #1565c0; margin-bottom: 10px;">
                                ${currentGame.name}
                            </div>
                            <div style="font-size: 0.9em; color: #666;">
                                <div>${translations[currentLanguage].players}: ${currentGame.players.length}</div>
                                <div>${translations[currentLanguage].buyIn}: ₪${totalBuyIn.toFixed(2)}</div>
                                <div>${translations[currentLanguage].rebuys}: ₪${totalRebuys.toFixed(2)}</div>
                                <div>${translations[currentLanguage].totalInPlay}: ₪${totalInPlay.toFixed(2)}</div>
                                <div>${translations[currentLanguage].finalChips}: ₪${totalFinalChips.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; border: 1px solid #c8e6c9;">
                        <h3 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">
                            <i class="fas fa-chart-pie" style="margin-right: 8px;"></i>Game Summary
                        </h3>
                        <div style="background-color: white; padding: 12px; margin-bottom: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                                <div style="text-align: center;">
                                    <div style="font-size: 1.2em; color: #2e7d32; margin-bottom: 5px;">
                                        Total Wins
                                    </div>
                                    <div style="font-size: 1.5em; font-weight: bold; color: #2e7d32;">
                                        ₪${winners.reduce((sum, p) => sum + (p.finalChips - (p.buyIn + p.rebuys)), 0).toFixed(2)}
                                    </div>
                                    <div style="font-size: 0.9em; color: #666;">
                                        ${winners.length} Winners
                                    </div>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-size: 1.2em; color: #c62828; margin-bottom: 5px;">
                                        Total Losses
                                    </div>
                                    <div style="font-size: 1.5em; font-weight: bold; color: #c62828;">
                                        ₪${losers.reduce((sum, p) => sum + Math.abs(p.finalChips - (p.buyIn + p.rebuys)), 0).toFixed(2)}
                                    </div>
                                    <div style="font-size: 0.9em; color: #666;">
                                        ${losers.length} Losers
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                            <div>
                                <h4 style="color: #2e7d32; margin-bottom: 10px; text-align: center;">
                                    <i class="fas fa-trophy" style="margin-right: 8px;"></i>${translations[currentLanguage].winners}
                                </h4>
                                ${sortedWinners.map(p => `
                                    <div style="background-color: white; padding: 12px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                        <div style="font-weight: bold; color: #2e7d32; margin-bottom: 5px;">
                                            ${p.name}
                                        </div>
                                        <div style="font-size: 1.2em; color: #2e7d32; margin-bottom: 5px;">
                                            +₪${(p.finalChips - (p.buyIn + p.rebuys)).toFixed(2)}
                                        </div>
                                        <div style="font-size: 0.9em; color: #666;">
                                            <div>${translations[currentLanguage].buyIn}: ₪${p.buyIn.toFixed(2)}</div>
                                            <div>${translations[currentLanguage].rebuys}: ₪${p.rebuys.toFixed(2)}</div>
                                            <div>${translations[currentLanguage].finalChips}: ₪${p.finalChips.toFixed(2)}</div>
                                            <div style="font-weight: bold; color: #2e7d32;">Total Win: ₪${(p.finalChips - (p.buyIn + p.rebuys)).toFixed(2)}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div>
                                <h4 style="color: #c62828; margin-bottom: 10px; text-align: center;">
                                    <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>${translations[currentLanguage].losers}
                                </h4>
                                ${sortedLosers.map(p => `
                                    <div style="background-color: white; padding: 12px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                        <div style="font-weight: bold; color: #c62828; margin-bottom: 5px;">
                                            ${p.name}
                                        </div>
                                        <div style="font-size: 1.2em; color: #c62828; margin-bottom: 5px;">
                                            -₪${Math.abs(p.finalChips - (p.buyIn + p.rebuys)).toFixed(2)}
                                        </div>
                                        <div style="font-size: 0.9em; color: #666;">
                                            <div>${translations[currentLanguage].buyIn}: ₪${p.buyIn.toFixed(2)}</div>
                                            <div>${translations[currentLanguage].rebuys}: ₪${p.rebuys.toFixed(2)}</div>
                                            <div>${translations[currentLanguage].finalChips}: ₪${p.finalChips.toFixed(2)}</div>
                                            <div style="font-weight: bold; color: #c62828;">Total Loss: ₪${Math.abs(p.finalChips - (p.buyIn + p.rebuys)).toFixed(2)}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="color: #333;">${translations[currentLanguage].settlement}</h3>
                    <button class="btn" onclick="copySettlementInstructions()" style="background-color: #6c757d;">
                        <i class="fas fa-copy"></i> ${translations[currentLanguage].copySettlement}
                    </button>
                </div>
                ${settlements.length === 0 
                    ? `<p style="text-align: center; color: #666; padding: 15px; background-color: #f8f9fa; border-radius: 6px;">${translations[currentLanguage].noSettlements}</p>`
                    : settlements.map(s => `
                        <div class="settlement-item" style="background-color: white; padding: 12px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <span style="font-weight: bold; color: #c62828;">${s.from}</span> 
                            ${translations[currentLanguage].paysTo} 
                            <span style="font-weight: bold; color: #2e7d32;">${s.to}</span>: 
                            <span style="font-weight: bold; color: #333;">₪${s.amount}</span>
                        </div>
                    `).join('')
                }
            </div>
        `;

        console.log('Settlement calculation completed successfully');
    } catch (error) {
        console.error('Error in calculateSettlement:', error);
        showTab('settlement');
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div class="error" style="color: red; padding: 10px; background-color: #ffebee; border-radius: 4px;">
                <strong>Error:</strong> ${error.message}<br>
                Please check your data and try again.
            </div>
        `;
    }
};

function resetChipCounts() {
    // Reset all final chip counts to 0
    currentGame.players.forEach(player => {
        player.finalChips = 0;
    });
    saveData();
    updateUI();
    // Clear any error messages
    document.getElementById('settlementResults').innerHTML = '';
    // Scroll to the chip count inputs
    document.getElementById('chipCountInputs').scrollIntoView({ behavior: 'smooth' });
}

// UI updates
function updateUI() {
    try {
        // Get current active tab
        const activeTab = document.querySelector('.tab.active');
        const activeTabId = activeTab ? activeTab.id.replace('Tab', '') : 'gameManagement';
        
        // Only update UI for the active tab
        switch(activeTabId) {
            case 'players':
                updatePlayersList();
                updatePlayerSelect();
                break;
            case 'game':
                updateGamePlayersList();
                updateGameNameDisplay();
                break;
            case 'gameManagement':
                updateGameManagement();
                break;
            case 'settlement':
                updateChipCountInputs();
                updateSettlementSummary();
                break;
            case 'history':
                updateGameHistoryList();
                break;
        }
    } catch (error) {
        console.error('Error updating UI:', error);
    }
}

function updatePlayersList() {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    
    // Sort players alphabetically by name
    const sortedPlayers = [...players].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedPlayers.forEach(player => {
        const div = document.createElement('div');
        div.className = 'player-item';
        div.innerHTML = `
            <span>${player.name}</span>
            <button class="btn" onclick="removePlayer('${player.id}')">Remove</button>
        `;
        list.appendChild(div);
    });
}

function updatePlayerSelect() {
    const select = document.getElementById('playerSelect');
    select.innerHTML = '<option value="">Select Player</option>';
    
    const availablePlayers = players.filter(player => 
        !currentGame.players.some(gp => gp.playerId === player.id)
    );
    
    // Sort available players alphabetically
    const sortedPlayers = [...availablePlayers].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedPlayers.forEach(player => {
        const option = document.createElement('option');
        option.value = player.id;
        option.textContent = player.name;
        select.appendChild(option);
    });
}

function updateGamePlayersList() {
    const list = document.getElementById('gamePlayersList');
    list.innerHTML = '';
    
    // Sort players alphabetically
    const sortedPlayers = [...currentGame.players].sort((a, b) => a.name.localeCompare(b.name));
    
    sortedPlayers.forEach((player, index) => {
        const totalBuyIn = player.buyIn + player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
        const div = document.createElement('div');
        div.className = 'player-item';
        div.innerHTML = `
            <div>
                <strong>${index + 1}. ${player.name}</strong><br>
                Buy-in: ₪${player.buyIn}
                ${player.rebuys.length ? ` + Rebuys: ₪${player.rebuys.join(' + ₪')}` : ''}
                = Total: ₪${totalBuyIn}
            </div>
            <div>
                <button class="btn" onclick="editGamePlayer('${player.playerId}')">Edit</button>
                <button class="btn" onclick="addRebuy('${player.playerId}')">Add Rebuy</button>
                <button class="btn" onclick="removePlayerFromGame('${player.playerId}')" style="background-color: #dc3545;">Remove</button>
            </div>
        `;
        list.appendChild(div);
    });

    // Add save game button at the bottom
    if (currentGame.isActive && currentGame.players.length > 0) {
        const saveButtonDiv = document.createElement('div');
        saveButtonDiv.style.marginTop = '20px';
        saveButtonDiv.style.textAlign = 'center';
        saveButtonDiv.innerHTML = `
            <button class="btn" onclick="saveGameToHistory()" style="background-color: #28a745; color: white; padding: 10px 20px;">
                <i class="fas fa-save" style="margin-right: 8px;"></i>${translations[currentLanguage].saveGame}
            </button>
        `;
        list.appendChild(saveButtonDiv);
    }
}

function updateChipCountInputs() {
    try {
        const container = document.getElementById('chipCountInputs');
        const submitContainer = document.getElementById('submitChipsContainer');
        
        // Only update if the container exists and is visible
        if (!container || container.offsetParent === null) {
            return;
        }
        
        container.innerHTML = '';
        
        // Sort players alphabetically
        const sortedPlayers = [...currentGame.players].sort((a, b) => a.name.localeCompare(b.name));
        
        sortedPlayers.forEach(player => {
            const totalRebuys = player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
            const totalBuyIn = player.buyIn + totalRebuys;
            
            const div = document.createElement('div');
            div.className = 'input-group';
            div.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <label style="min-width: 150px;">
                        <span style="font-weight: bold; color: #007bff;">${player.name}</span> Final Chips:
                    </label>
                    <input type="number" 
                           value="${player.finalChips !== undefined && player.finalChips !== null ? player.finalChips : ''}" 
                           onchange="updateFinalChips('${player.playerId}', this.value)"
                           placeholder="Enter final chips"
                           style="width: 100px;">
                    <div style="color: #666; font-size: 0.9em;">
                        (Buy-in: ₪${player.buyIn.toFixed(2)}${totalRebuys > 0 ? ` + Rebuys: ₪${totalRebuys.toFixed(2)}` : ''} = Total: ₪${totalBuyIn.toFixed(2)})
                    </div>
                </div>
            `;
            container.appendChild(div);
        });

        // Show submit button if at least one player has final chips (including zero)
        const somePlayersHaveChips = currentGame.players.some(player => 
            player.finalChips !== undefined && player.finalChips !== null
        );
        submitContainer.style.display = somePlayersHaveChips ? 'block' : 'none';
    } catch (error) {
        console.error('Error updating chip count inputs:', error);
    }
}

function submitFinalChips() {
    try {
        // Save the data
        saveData();
        
        // Hide the submit button
        document.getElementById('submitChipsContainer').style.display = 'none';
        
        // Calculate and show settlement
        calculateSettlement();
    } catch (error) {
        console.error('Error submitting final chips:', error);
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div class="error" style="color: red; padding: 10px; background-color: #ffebee; border-radius: 4px;">
                <strong>Error:</strong> ${error.message}<br>
                Please check all players have their final chips entered.
            </div>
        `;
    }
}

function displaySettlements(settlements) {
    const container = document.getElementById('settlementResults');
    container.innerHTML = '<h3>Settlement Results:</h3>';
    
    if (settlements.length === 0) {
        container.innerHTML += '<p>No settlements needed - all players are even.</p>';
        return;
    }
    
    settlements.forEach(settlement => {
        const div = document.createElement('div');
        div.className = 'settlement-item';
        div.innerHTML = `${settlement.from} pays ${settlement.to}: ₪${settlement.amount}`;
        container.appendChild(div);
    });
}

function editGamePlayer(playerId) {
    const player = currentGame.players.find(p => p.playerId === playerId);
    if (player) {
        const totalRebuys = player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
        const currentTotal = player.buyIn + totalRebuys;
        
        const newTotal = parseFloat(prompt(`${player.name} - Enter new total amount:`, currentTotal));
        if (!isNaN(newTotal) && newTotal > 0) {
            // Calculate the difference between new total and current total
            const difference = newTotal - currentTotal;
            
            if (difference > 0) {
                // If increasing, add to rebuys
                player.rebuys.push(difference);
            } else if (difference < 0) {
                // If decreasing, adjust buy-in
                player.buyIn = Math.max(0, player.buyIn + difference);
            }
            
            saveData();
            updateUI();
        }
    }
}

function removePlayerFromGame(playerId) {
    if (confirm('Are you sure you want to remove this player from the game?')) {
        currentGame.players = currentGame.players.filter(p => p.playerId !== playerId);
        saveData();
        updateUI();
    }
}

function updateGameNameDisplay() {
    const gameNameDisplay = document.getElementById('gameNameDisplay');
    if (currentGame.isActive && currentGame.name) {
        gameNameDisplay.innerHTML = `<strong>Current Game:</strong> ${currentGame.name}`;
    } else {
        gameNameDisplay.innerHTML = '<em>No active game</em>';
    }
}

function updateSettlementSummary() {
    const summaryDiv = document.getElementById('settlementSummary');
    let totalBuyIn = 0;
    let totalRebuys = 0;
    
    currentGame.players.forEach(player => {
        totalBuyIn += player.buyIn;
        totalRebuys += player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
    });
    
    const total = totalBuyIn + totalRebuys;
    
    summaryDiv.innerHTML = `
        <h3>Game Summary</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
                <strong>Total Buy-ins:</strong> ₪${totalBuyIn.toFixed(2)}<br>
                <strong>Total Rebuys:</strong> ₪${totalRebuys.toFixed(2)}<br>
                <strong>Total in Play:</strong> ₪${total.toFixed(2)}
            </div>
            <div>
                <strong>Number of Players:</strong> ${currentGame.players.length}<br>
                <strong>Average Buy-in:</strong> ₪${(totalBuyIn / currentGame.players.length).toFixed(2)}<br>
                <strong>Average Rebuys:</strong> ₪${(totalRebuys / currentGame.players.length).toFixed(2)}
            </div>
        </div>
    `;
}

function saveGameToHistory() {
    try {
        // Validate current game state
        if (!currentGame || !currentGame.players || currentGame.players.length === 0) {
            alert('No active game to save. Please start a game first.');
            return;
        }

        // Create a copy of the current game
        const gameToSave = {
            ...currentGame,
            isActive: false,
            date: new Date().toISOString()
        };

        // Add to history
        gameHistory.push(gameToSave);
        saveData();

        // Show success message
        alert('Game saved to history successfully!');
        
        // Update UI
        updateGameHistoryList();
    } catch (error) {
        console.error('Error saving game to history:', error);
        alert('Error saving game to history. Please try again.');
    }
}

function clearAppData() {
    if (confirm('Are you sure you want to clear all app data? This will delete all players, games, and history. This action cannot be undone.')) {
        try {
            // Clear localStorage
            localStorage.clear();
            
            // Reset all data structures
            players = [];
            currentGame = {
                isActive: false,
                players: [],
                name: '',
                date: new Date().toISOString()
            };
            gameHistory = [];
            
            // Update UI
            updateUI();
            
            // Show success message
            alert('All app data has been cleared successfully.');
        } catch (error) {
            console.error('Error clearing app data:', error);
            alert('Error clearing app data. Please try again.');
        }
    }
}

// Add this new function at the end of the file
function copySettlementInstructions() {
    try {
        const settlements = document.querySelectorAll('.settlement-item');
        if (settlements.length === 0) {
            alert('No settlements to copy');
            return;
        }

        const textToCopy = Array.from(settlements)
            .map(settlement => settlement.textContent.trim())
            .join('\n');

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Settlement instructions copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy instructions. Please try again.');
            });
    } catch (error) {
        console.error('Error copying settlement instructions:', error);
        alert('Error copying instructions. Please try again.');
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'he' : 'en';
    document.body.dir = currentLanguage === 'he' ? 'rtl' : 'ltr';
    document.getElementById('languageToggle').textContent = translations[currentLanguage].languageToggle;
    updateLanguageUI();
    saveData();
}

function updateLanguageUI() {
    // Update all text elements
    document.title = translations[currentLanguage].appTitle;
    document.querySelector('h1').textContent = translations[currentLanguage].appTitle;
    
    // Update tab buttons
    document.getElementById('playersTabBtn').textContent = translations[currentLanguage].playersTab;
    document.getElementById('gameTabBtn').textContent = translations[currentLanguage].gameTab;
    document.getElementById('gameManagementTabBtn').textContent = translations[currentLanguage].gameManagementTab;
    document.getElementById('settlementTabBtn').textContent = translations[currentLanguage].settlementTab;
    document.getElementById('historyTabBtn').textContent = translations[currentLanguage].historyTab;
    
    // Update language toggle button
    document.getElementById('languageToggle').textContent = translations[currentLanguage].languageToggle;
    
    // Update other UI elements
    document.getElementById('playerManagementTitle').textContent = translations[currentLanguage].playerManagement;
    document.getElementById('playerNameLabel').textContent = translations[currentLanguage].playerName;
    document.getElementById('addPlayerBtn').textContent = translations[currentLanguage].addPlayer;
    document.getElementById('clearDataBtn').textContent = translations[currentLanguage].clearData;
    document.getElementById('currentGameTitle').textContent = translations[currentLanguage].currentGame;
    document.getElementById('gameNameLabel').textContent = translations[currentLanguage].gameName;
    document.getElementById('startGameBtn').textContent = translations[currentLanguage].startGame;
    document.getElementById('saveGameBtn').textContent = translations[currentLanguage].saveGame;
    document.getElementById('calculateSettlementBtn').textContent = translations[currentLanguage].calculateSettlement;
    document.getElementById('playersInGameTitle').textContent = translations[currentLanguage].playersInGame;
    document.getElementById('addPlayersLabel').textContent = translations[currentLanguage].addPlayers;
    document.getElementById('addToGameBtn').textContent = translations[currentLanguage].addToGame;
    document.getElementById('settlementTitle').textContent = translations[currentLanguage].settlement;
    document.getElementById('submitChipsBtn').textContent = translations[currentLanguage].submitChips;
    document.getElementById('gameHistoryTitle').textContent = translations[currentLanguage].gameHistory;
    
    // Update input placeholders
    document.getElementById('playerName').placeholder = translations[currentLanguage].playerName;
    document.getElementById('newGameName').placeholder = translations[currentLanguage].newGameName;
    
    // Update dynamic content
    updateUI();
}

// Export players data to CSV
function exportPlayersData() {
    try {
        // Create CSV content
        const csvContent = [
            ['ID', 'Name'], // Header
            ...players.map(player => [player.id, player.name])
        ].map(row => row.join(',')).join('\n');

        // Create blob and download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', `poker_players_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        alert(translations[currentLanguage].exportSuccess);
    } catch (error) {
        console.error('Error exporting players data:', error);
        alert('Error exporting players data. Please try again.');
    }
}

// Import players data from CSV/Excel
function importPlayersData(event) {
    try {
        const file = event.target.files[0];
        if (!file) return;

        const fileExtension = file.name.split('.').pop().toLowerCase();
        if (!['csv', 'xlsx', 'xls'].includes(fileExtension)) {
            alert(translations[currentLanguage].fileFormatError);
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const content = e.target.result;
                let newPlayers = [];

                if (fileExtension === 'csv') {
                    // Parse CSV content
                    const lines = content.split('\n');
                    const headers = lines[0].split(',').map(h => h.trim());
                    
                    for (let i = 1; i < lines.length; i++) {
                        if (!lines[i].trim()) continue;
                        
                        const values = lines[i].split(',').map(v => v.trim());
                        if (values.length >= 2) {
                            newPlayers.push({
                                id: values[0] || Date.now().toString(),
                                name: values[1]
                            });
                        }
                    }
                } else {
                    // For Excel files, we'll need to use a library like xlsx
                    // This is a placeholder for Excel support
                    alert('Excel file support coming soon. Please use CSV format for now.');
                    return;
                }

                // Merge with existing players, avoiding duplicates
                const existingIds = new Set(players.map(p => p.id));
                newPlayers = newPlayers.filter(p => !existingIds.has(p.id));
                
                if (newPlayers.length > 0) {
                    players = [...players, ...newPlayers];
                    saveData();
                    updateUI();
                    alert(translations[currentLanguage].importSuccess);
                } else {
                    alert('No new players to import.');
                }
            } catch (error) {
                console.error('Error parsing file:', error);
                alert(translations[currentLanguage].importError);
            }
        };

        reader.readAsText(file);
    } catch (error) {
        console.error('Error importing players data:', error);
        alert(translations[currentLanguage].importError);
    } finally {
        // Reset file input
        event.target.value = '';
    }
}

// Add new function to handle proceeding with settlement
function proceedWithSettlement(netPositions) {
    try {
        // Separate winners and losers
        const winners = netPositions.filter(p => p.net > 0).sort((a, b) => b.net - a.net);
        const losers = netPositions.filter(p => p.net < 0).sort((a, b) => a.net - b.net);

        // Generate settlements
        const settlements = [];
        const remainingLosses = new Map(losers.map(l => [l.name, Math.abs(l.finalChips - (l.buyIn + l.rebuys))]));
        const remainingWins = new Map(winners.map(w => [w.name, w.finalChips - (w.buyIn + w.rebuys)]));

        // Process each loser
        for (const loser of losers) {
            const loserName = loser.name;
            let remainingLoss = remainingLosses.get(loserName);
            
            // Skip if no loss to settle
            if (remainingLoss <= 0.01) continue;

            // Find winners who still need to be paid
            const availableWinners = winners.filter(w => remainingWins.get(w.name) > 0.01);
            
            // Process each winner until loser's loss is fully settled
            for (const winner of availableWinners) {
                const winnerName = winner.name;
                const remainingWin = remainingWins.get(winnerName);
                
                // Skip if winner has no remaining win
                if (remainingWin <= 0.01) continue;

                // Calculate the amount to transfer (minimum of remaining loss and remaining win)
                const amount = Math.min(remainingLoss, remainingWin);
                
                if (amount > 0) {
                    settlements.push({
                        from: loserName,
                        to: winnerName,
                        amount: Math.round(amount * 100) / 100
                    });
                    
                    // Update remaining amounts
                    remainingLoss -= amount;
                    remainingLosses.set(loserName, remainingLoss);
                    remainingWins.set(winnerName, remainingWin - amount);
                    
                    // If loser's loss is fully settled, move to next loser
                    if (remainingLoss <= 0.01) break;
                }
            }
        }

        // Log the settlement details for verification
        console.log('Settlement Details:');
        console.log('Initial Losses:', Object.fromEntries(remainingLosses));
        console.log('Initial Wins:', Object.fromEntries(remainingWins));
        console.log('Settlements:', settlements);

        // Display results with summary
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h3>${translations[currentLanguage].gameSummary}</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>
                        <h4>${translations[currentLanguage].winners}</h4>
                        ${winners.map(p => `
                            <div style="margin-bottom: 5px;">
                                ${p.name}: +₪${Math.abs(p.net).toFixed(2)}<br>
                                <small>${translations[currentLanguage].buyIn}: ₪${p.totalInvestment.toFixed(2)}, ${translations[currentLanguage].finalChips}: ₪${p.finalChips.toFixed(2)}</small>
                            </div>
                        `).join('')}
                    </div>
                    <div>
                        <h4>${translations[currentLanguage].losers}</h4>
                        ${losers.map(p => `
                            <div style="margin-bottom: 5px;">
                                ${p.name}: -₪${Math.abs(p.net).toFixed(2)}<br>
                                <small>${translations[currentLanguage].buyIn}: ₪${p.totalInvestment.toFixed(2)}, ${translations[currentLanguage].finalChips}: ₪${p.finalChips.toFixed(2)}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h3>${translations[currentLanguage].settlement}</h3>
                    <button class="btn" onclick="copySettlementInstructions()" style="background-color: #6c757d;">
                        <i class="fas fa-copy"></i> ${translations[currentLanguage].copySettlement}
                    </button>
                </div>
                ${settlements.length === 0 
                    ? `<p>${translations[currentLanguage].noSettlements}</p>`
                    : settlements.map(s => `
                        <div class="settlement-item">
                            <span style="font-weight: bold; color: #dc3545;">${s.from}</span> ${translations[currentLanguage].paysTo} <span style="font-weight: bold; color: #28a745;">${s.to}</span>: ₪${s.amount}
                        </div>
                    `).join('')
                }
            </div>
        `;
    } catch (error) {
        console.error('Error in proceedWithSettlement:', error);
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div class="error" style="color: red; padding: 10px; background-color: #ffebee; border-radius: 4px;">
                <strong>Error:</strong> ${error.message}<br>
                Please try again.
            </div>
        `;
    }
}

// Add new function to update game management tab
function updateGameManagement() {
    const container = document.getElementById('gameManagementContent');
    if (!container) return;

    // Calculate current game totals
    const totalBuyIn = currentGame.players.reduce((sum, p) => sum + p.buyIn, 0);
    const totalRebuys = currentGame.players.reduce((sum, p) => sum + p.rebuys.reduce((s, r) => s + r, 0), 0);
    const totalInPlay = totalBuyIn + totalRebuys;

    // Get the current date for the new game name suggestion
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('he-IL', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\//g, '-');

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1200px; margin: 0 auto;">
            <!-- Current Game Section -->
            <div style="background-color: #e3f2fd; padding: 25px; border-radius: 12px; border: 1px solid #bbdefb; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #1565c0; margin-bottom: 25px; text-align: center; font-size: 1.5em;">
                    <i class="fas fa-gamepad" style="margin-right: 10px;"></i>${translations[currentLanguage].currentGame}
                </h3>
                <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="font-weight: bold; color: #1565c0; margin-bottom: 15px; font-size: 1.2em; text-align: center;">
                        ${currentGame.name || translations[currentLanguage].noActiveGameDisplay}
                    </div>
                    <div style="display: grid; gap: 15px;">
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px;">
                            <div style="font-weight: bold; color: #1565c0; margin-bottom: 5px;">${translations[currentLanguage].players}</div>
                            <div style="font-size: 1.3em; color: #333;">${currentGame.players.length}</div>
                        </div>
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px;">
                            <div style="font-weight: bold; color: #1565c0; margin-bottom: 5px;">${translations[currentLanguage].buyIn}</div>
                            <div style="font-size: 1.3em; color: #333;">₪${totalBuyIn.toFixed(2)}</div>
                        </div>
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 6px;">
                            <div style="font-weight: bold; color: #1565c0; margin-bottom: 5px;">${translations[currentLanguage].rebuys}</div>
                            <div style="font-size: 1.3em; color: #333;">₪${totalRebuys.toFixed(2)}</div>
                        </div>
                        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 6px; border: 1px solid #bbdefb;">
                            <div style="font-weight: bold; color: #1565c0; margin-bottom: 5px;">${translations[currentLanguage].totalInPlay}</div>
                            <div style="font-size: 1.5em; color: #1565c0;">₪${totalInPlay.toFixed(2)}</div>
                        </div>
                        ${currentGame.isActive && currentGame.players.length > 0 ? `
                            <button class="btn" onclick="clearCurrentGame()" 
                                    style="background-color: #dc3545; color: white; padding: 12px; border-radius: 6px; width: 100%; margin-top: 10px;">
                                <i class="fas fa-trash-alt" style="margin-right: 8px;"></i>${translations[currentLanguage].clearGame}
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>

            <!-- New Game Section -->
            <div style="background-color: #e8f5e9; padding: 25px; border-radius: 12px; border: 1px solid #c8e6c9; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h3 style="color: #2e7d32; margin-bottom: 25px; text-align: center; font-size: 1.5em;">
                    <i class="fas fa-plus-circle" style="margin-right: 10px;"></i>${translations[currentLanguage].startGame}
                </h3>
                <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; margin-bottom: 10px; color: #2e7d32; font-weight: bold; font-size: 1.1em;">${translations[currentLanguage].newGameName}</label>
                        <input type="text" id="newGameName" 
                               placeholder="${translations[currentLanguage].newGameName}"
                               style="padding: 12px; border: 2px solid #2e7d32; border-radius: 6px; width: 100%; font-size: 1.2em;"
                               value="Game ${formattedDate}">
                    </div>
                    <button class="btn" onclick="startNewGame()" 
                            style="background-color: #2e7d32; color: white; padding: 15px 30px; font-size: 1.3em; width: 100%; border-radius: 6px; transition: all 0.3s ease;">
                        <i class="fas fa-play" style="margin-right: 10px;"></i>${translations[currentLanguage].startGame}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Add the clearCurrentGame function:
function clearCurrentGame() {
    if (!currentGame.isActive || currentGame.players.length === 0) {
        alert(translations[currentLanguage].noActiveGame);
        return;
    }

    const confirmMessage = `${translations[currentLanguage].confirmClearGame}\n\n` +
        `${translations[currentLanguage].currentGame}: ${currentGame.name}\n` +
        `${translations[currentLanguage].players}: ${currentGame.players.length}\n` +
        `${translations[currentLanguage].totalInPlay}: ₪${(currentGame.players.reduce((sum, p) => sum + p.buyIn, 0) + 
            currentGame.players.reduce((sum, p) => sum + p.rebuys.reduce((s, r) => s + r, 0), 0)).toFixed(2)}`;

    if (!confirm(confirmMessage)) {
        return;
    }

    // Clear current game
    currentGame = {
        isActive: false,
        players: [],
        name: '',
        date: new Date().toISOString()
    };

    // Save the cleared game state
    saveData();
    
    // Update the UI
    updateGameManagement();
    
    // Show success message
    alert(translations[currentLanguage].gameCleared);
}

// Mobile touch handling
let touchStartY = 0;
let pullThreshold = 150;
let isPulling = false;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const pull = touchY - touchStartY;

    // Only allow pull-to-refresh when at top of page
    if (window.scrollY === 0 && pull > 0 && pull < pullThreshold) {
        document.body.classList.add('pulling');
        isPulling = true;
        e.preventDefault();
    }
});

document.addEventListener('touchend', () => {
    if (isPulling) {
        document.body.classList.remove('pulling');
        if (window.scrollY === 0) {
            // Refresh data
            loadData();
            updateUI();
        }
    }
    isPulling = false;
});

// Prevent double-tap zoom on iOS
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (lastTap && (now - lastTap) < DOUBLE_TAP_DELAY) {
        e.preventDefault();
    }
    lastTap = now;
}, false);

// Add fastclick to eliminate 300ms delay
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    updateUI();
});

// Improve input handling on iOS
document.addEventListener('DOMContentLoaded', () => {
    // Fix for iOS input zoom
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => {
        input.style.fontSize = '16px';
    });

    // Prevent zoom on focus
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    }
});

// Add mobile swipe between tabs
let touchStartX = 0;
let touchEndX = 0;

const handleSwipe = () => {
    const swipeThreshold = 50;
    const tabs = ['players', 'game', 'settlement', 'history'];
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        const currentTab = document.querySelector('.tab.active').id.replace('Tab', '');
        const currentIndex = tabs.indexOf(currentTab);
        
        if (swipeDistance > 0 && currentIndex > 0) {
            // Swipe right - previous tab
            showTab(tabs[currentIndex - 1]);
        } else if (swipeDistance < 0 && currentIndex < tabs.length - 1) {
            // Swipe left - next tab
            showTab(tabs[currentIndex + 1]);
        }
    }
};

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

// Make sure all functions are properly exposed to the global scope
window.initializeApp = initializeApp;
window.loadData = loadData;
window.saveData = saveData;
window.showTab = showTab;
window.addPlayer = addPlayer;
window.removePlayer = removePlayer;
window.startNewGame = startNewGame;
window.addPlayerToGame = addPlayerToGame;
window.addRebuy = addRebuy;
window.updateFinalChips = updateFinalChips;
window.calculateSettlement = calculateSettlement;
window.resetChipCounts = resetChipCounts;
window.loadGameFromHistory = loadGameFromHistory;
window.deleteGameFromHistory = deleteGameFromHistory;
window.saveGameToHistory = saveGameToHistory;
window.clearAppData = clearAppData;
window.copySettlementInstructions = copySettlementInstructions;
window.toggleLanguage = toggleLanguage;
window.updateLanguageUI = updateLanguageUI;
window.exportPlayersData = exportPlayersData;
window.importPlayersData = importPlayersData;
window.proceedWithSettlement = proceedWithSettlement;
window.clearCurrentGame = clearCurrentGame;

// Initialize the app when the script loads
initializeApp(); 