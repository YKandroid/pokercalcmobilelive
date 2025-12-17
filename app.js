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
        noGamesInHistory: 'No games in history',
        captureSnapshot: 'Capture Snapshot'
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
        finalChips: 'צ׳יפים סופיים',
        winners: 'מנצחים',
        losers: 'מפסידים',
        paysTo: 'משלם ל-',
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
        noGamesInHistory: 'אין משחקים בהיסטוריה',
        captureSnapshot: 'צלם תמונה'
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
        displayErrorMessage('Failed to load data. Please refresh the page or check your browser settings.');
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
                    updatePlayerSelect();
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

// Helper function to format date as DD/MM/YY HH:MM
function getDefaultGameName() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Function to reset game name input to default
function resetGameNameToDefault() {
    const newGameNameInput = document.getElementById('newGameName');
    if (newGameNameInput) {
        newGameNameInput.value = getDefaultGameName();
        newGameNameInput.focus();
    }
}

// Game management
function startNewGame() {
    const newGameNameInput = document.getElementById('newGameName');
    const newGameName = newGameNameInput ? newGameNameInput.value.trim() : '';
    
    // Use default name if empty
    const gameName = newGameName || getDefaultGameName();
    
    // Validate game name (should not be empty after using default)
    if (!gameName) {
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
        name: gameName,
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
                <button class="btn" onclick="saveGameToExcel('${game.date}')" style="background-color: #28a745;">
                    <i class="fas fa-file-excel"></i> Save to Excel
                </button>
                <button class="btn" onclick="deleteGameFromHistory('${game.date}')" style="background-color: #dc3545;">Delete</button>
            </div>
        `;
        list.appendChild(div);
    });

    // Add game statistics section
    const statsDiv = document.createElement('div');
    statsDiv.style.marginTop = '30px';
    statsDiv.innerHTML = `
        <h3>Game Statistics</h3>
        <div style="display: flex; gap: 10px; margin-bottom: 15px;">
            <div class="input-group">
                <label for="playerFilter">Filter by Player:</label>
                <select id="playerFilter" onchange="updateGameStatistics()" style="width: 200px;">
                    <option value="">All Players</option>
                </select>
            </div>
            <div style="display: flex; gap: 10px; align-items: flex-end;">
                <button class="btn" onclick="exportGameStats()" style="background-color: #28a745;">
                    <i class="fas fa-file-excel"></i> Export Stats
                </button>
                <button class="btn" onclick="document.getElementById('importStatsFile').click()" style="background-color: #17a2b8;">
                    <i class="fas fa-file-import"></i> Import Stats
                </button>
                <input type="file" id="importStatsFile" accept=".xlsx,.xls" style="display: none;" onchange="importGameStats(event)">
            </div>
        </div>
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px; border: 1px solid var(--text-color);">
                <thead>
                    <tr style="background-color: var(--button-background); color: white;">
                        <th style="padding: 10px; text-align: left; border: 1px solid var(--text-color);">Player Name</th>
                        <th style="padding: 10px; text-align: left; border: 1px solid var(--text-color);">Game Name</th>
                        <th style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">Game Score</th>
                        <th style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">Total Investment</th>
                        <th style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">Total Win</th>
                        <th style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">Balance</th>
                    </tr>
                </thead>
                <tbody id="gameStatsTableBody">
                </tbody>
            </table>
        </div>
    `;
    list.appendChild(statsDiv);

    // Update player filter dropdown
    updatePlayerFilter();
    // Calculate and display statistics
    updateGameStatistics();
}

function updatePlayerFilter() {
    const playerFilter = document.getElementById('playerFilter');
    const uniquePlayers = new Set();
    
    // Collect all unique players from game history
    gameHistory.forEach(game => {
        game.players.forEach(player => {
            uniquePlayers.add(player.playerId);
        });
    });
    
    // Sort players by name
    const sortedPlayers = Array.from(uniquePlayers)
        .map(playerId => {
            const player = players.find(p => p.id === playerId);
            return { id: playerId, name: player ? player.name : 'Unknown Player' };
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    
    // Update dropdown options
    playerFilter.innerHTML = '<option value="">All Players</option>';
    sortedPlayers.forEach(player => {
        const option = document.createElement('option');
        option.value = player.id;
        option.textContent = player.name;
        playerFilter.appendChild(option);
    });
}

function updateGameStatistics() {
    const tableBody = document.getElementById('gameStatsTableBody');
    const playerFilter = document.getElementById('playerFilter');
    const selectedPlayerId = playerFilter.value;
    
    tableBody.innerHTML = '';

    // Create a map to store player statistics
    const playerStats = new Map();

    // Process each game in history
    gameHistory.forEach(game => {
        game.players.forEach(player => {
            // Skip if player filter is active and this isn't the selected player
            if (selectedPlayerId && player.playerId !== selectedPlayerId) {
                return;
            }

            const totalInvestment = player.buyIn + player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
            const gameScore = player.finalChips - totalInvestment;
            
            if (!playerStats.has(player.playerId)) {
                playerStats.set(player.playerId, {
                    name: player.name,
                    games: [],
                    totalGames: 0,
                    totalWins: 0,
                    totalLosses: 0,
                    totalInvestment: 0,
                    totalBalance: 0
                });
            }
            
            const stats = playerStats.get(player.playerId);
            stats.games.push({
                gameName: game.name,
                gameScore: gameScore,
                totalInvestment: totalInvestment,
                totalWin: Math.max(0, gameScore),
                balance: gameScore
            });
            
            // Update cumulative stats
            stats.totalGames++;
            if (gameScore > 0) stats.totalWins++;
            else if (gameScore < 0) stats.totalLosses++;
            stats.totalInvestment += totalInvestment;
            stats.totalBalance += gameScore;
        });
    });

    // Sort players by name
    const sortedPlayers = Array.from(playerStats.values()).sort((a, b) => a.name.localeCompare(b.name));

    // Add rows to the table
    sortedPlayers.forEach(player => {
        player.games.forEach(game => {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid var(--text-color)';
            row.innerHTML = `
                <td style="padding: 10px; border: 1px solid var(--text-color);">${player.name}</td>
                <td style="padding: 10px; border: 1px solid var(--text-color);">${game.gameName}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color); color: ${game.gameScore >= 0 ? '#28a745' : '#dc3545'}">₪${game.gameScore.toFixed(2)}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">₪${game.totalInvestment.toFixed(2)}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color); color: #28a745">₪${game.totalWin.toFixed(2)}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color); color: ${game.balance >= 0 ? '#28a745' : '#dc3545'}">₪${game.balance.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });

        // Add summary row for the player if filtered
        if (selectedPlayerId) {
            const summaryRow = document.createElement('tr');
            summaryRow.style.borderTop = '2px solid var(--text-color)';
            summaryRow.style.fontWeight = 'bold';
            summaryRow.innerHTML = `
                <td style="padding: 10px; border: 1px solid var(--text-color);" colspan="2">${player.name} - Summary</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">${player.totalWins}W / ${player.totalLosses}L</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color);">₪${player.totalInvestment.toFixed(2)}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color); color: #28a745">₪${player.games.reduce((sum, g) => sum + g.totalWin, 0).toFixed(2)}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid var(--text-color); color: ${player.totalBalance >= 0 ? '#28a745' : '#dc3545'}">₪${player.totalBalance.toFixed(2)}</td>
            `;
            tableBody.appendChild(summaryRow);
        }
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

        // Helper function to round amounts according to the rules
        function roundAmount(amount) {
            const lastDigit = Math.floor(amount) % 10;  // Get last digit
            const baseTen = Math.floor(amount / 10) * 10;  // Get the base amount (tens)
            
            // If last digit is 0-2, round down to nearest 0
            if (lastDigit <= 2) {
                return baseTen;
            }
            // If last digit is 3-7, round to nearest 5
            else if (lastDigit <= 7) {
                return baseTen + 5;
            }
            // If last digit is 8-9, round up to next 0
            else {
                return baseTen + 10;
            }
        }

        // Process each loser
        for (const loser of losers) {
            const loserName = loser.name;
            let remainingLoss = roundAmount(remainingLosses.get(loserName));  // Round the initial loss
            
            // Skip if no loss to settle
            if (remainingLoss <= 0.01) continue;

            // Sort winners by amount to maximize larger transactions
            const availableWinners = [...winners]
                .filter(w => remainingWins.get(w.name) > 0.01)
                .sort((a, b) => remainingWins.get(b.name) - remainingWins.get(a.name));
            
            // Try to settle with as few transactions as possible
            for (const winner of availableWinners) {
                const winnerName = winner.name;
                let remainingWin = roundAmount(remainingWins.get(winnerName));  // Round the remaining win
                
                // Skip if winner has no remaining win
                if (remainingWin <= 0.01) continue;

                // Calculate the amount to transfer (minimum of remaining loss and remaining win)
                let amount = Math.min(remainingLoss, remainingWin);
                
                // Apply rounding rules to ensure amount ends in 0 or 5
                amount = roundAmount(amount);
                
                if (amount > 0) {
                    settlements.push({
                        from: loserName,
                        to: winnerName,
                        amount: amount
                    });
                    
                    // Update remaining amounts - make sure to round these as well
                    remainingLoss = roundAmount(remainingLoss - amount);
                    remainingWin = roundAmount(remainingWin - amount);
                    remainingLosses.set(loserName, remainingLoss);
                    remainingWins.set(winnerName, remainingWin);
                    
                    // If loser's loss is fully settled (or close enough), move to next loser
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
                    <div style="display: flex; gap: 10px;">
                        <button class="btn" onclick="copySettlementInstructions()" style="background-color: #6c757d;">
                            <i class="fas fa-copy"></i> ${translations[currentLanguage].copySettlement}
                        </button>
                        <button class="btn" onclick="captureSettlementSnapshot()" style="background-color: #28a745;">
                            <i class="fas fa-camera"></i> ${translations[currentLanguage].captureSnapshot}
                        </button>
                    </div>
                </div>
                ${settlements.length === 0 
                    ? `<p style="text-align: center; color: #666; padding: 15px; background-color: #f8f9fa; border-radius: 6px;">${translations[currentLanguage].noSettlements}</p>`
                    : settlements.map(s => `
                        <div class="settlement-item" style="background-color: white; padding: 12px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <span class="from-name" style="font-weight: bold; color: #c62828;">${s.from}</span> 
                            ${translations[currentLanguage].paysTo} 
                            <span class="to-name" style="font-weight: bold; color: #2e7d32;">${s.to}</span>: 
                            <span class="amount" style="font-weight: bold; color: #333;">₪${s.amount}</span>
                        </div>
                    `).join('')}
            </div>
        `;

        console.log('Settlement calculation completed successfully');
    } catch (error) {
        console.error('Error in calculateSettlement:', error);
        showTab('settlement');
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div class="error" style="color: red; padding: 15px; background-color: #ffebee; border-radius: 6px;">
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
                updatePlayerSelect();
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

// Get current view preference (table or cards)
function getGamePlayersView() {
    return localStorage.getItem('gamePlayersView') || 'table';
}

// Generate a consistent color for a player based on their ID
function getPlayerColor(playerId, index) {
    // Use predefined distinct colors for better visibility
    const colors = [
        '#FF6B6B', // Red
        '#4ECDC4', // Teal
        '#45B7D1', // Blue
        '#FFA07A', // Light Salmon
        '#98D8C8', // Mint
        '#F7DC6F', // Yellow
        '#BB8FCE', // Purple
        '#85C1E2', // Sky Blue
        '#F8B739', // Orange
        '#52BE80', // Green
        '#EC7063', // Coral
        '#5DADE2', // Light Blue
        '#F1948A', // Pink
        '#82E0AA', // Light Green
        '#F4D03F', // Gold
        '#AF7AC5', // Lavender
        '#58D68D', // Emerald
        '#EB984E', // Burnt Orange
        '#E74C3C', // Bright Red
        '#3498DB', // Bright Blue
        '#2ECC71', // Bright Green
        '#9B59B6', // Bright Purple
        '#1ABC9C', // Turquoise
        '#F39C12', // Bright Orange
        '#E67E22', // Dark Orange
        '#16A085', // Dark Turquoise
        '#27AE60', // Dark Green
        '#2980B9', // Dark Blue
        '#8E44AD', // Dark Purple
        '#C0392B'  // Dark Red
    ];
    
    // Use player ID to generate a consistent hash, or fall back to index
    if (playerId) {
        // Simple hash function for consistent color assignment
        let hash = 0;
        for (let i = 0; i < playerId.length; i++) {
            hash = ((hash << 5) - hash) + playerId.charCodeAt(i);
            hash = hash & hash; // Convert to 32-bit integer
        }
        return colors[Math.abs(hash) % colors.length];
    }
    
    // Fallback to index-based color
    return colors[index % colors.length];
}

// Toggle between table and card view
function toggleGamePlayersView() {
    const currentView = getGamePlayersView();
    const newView = currentView === 'table' ? 'cards' : 'table';
    localStorage.setItem('gamePlayersView', newView);
    updateGamePlayersList();
}

function updateGamePlayersList() {
    const list = document.getElementById('gamePlayersList');
    const viewType = getGamePlayersView();
    
    // Add view toggle button
    const toggleButtonHtml = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <span style="font-weight: bold;">View:</span>
            <button class="btn" onclick="toggleGamePlayersView()" style="background-color: #6c757d;">
                <i class="fas fa-${viewType === 'table' ? 'th-large' : 'list'}"></i> 
                ${viewType === 'table' ? 'Cards' : 'Table'} View
            </button>
        </div>
    `;
    
    list.innerHTML = toggleButtonHtml;
    
    // Sort players alphabetically
    const sortedPlayers = [...currentGame.players].sort((a, b) => a.name.localeCompare(b.name));
    
    if (sortedPlayers.length === 0) {
        list.innerHTML += '<p style="text-align: center; color: #666; padding: 20px;">No players in game yet.</p>';
    } else {
        if (viewType === 'cards') {
            // Card view
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'game-players-cards';
            cardsContainer.style.display = 'grid';
            cardsContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
            cardsContainer.style.gap = '15px';
            cardsContainer.style.marginBottom = '20px';
            
            sortedPlayers.forEach((player, index) => {
                const totalBuyIn = player.buyIn + player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
                const playerColor = getPlayerColor(player.playerId, index);
                const card = document.createElement('div');
                card.className = 'player-card';
                card.style.cssText = `
                    background-color: var(--background-color);
                    border: 2px solid var(--text-color);
                    border-radius: 12px;
                    padding: 15px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                `;
                card.onmouseenter = function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                };
                card.onmouseleave = function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                };
                
                card.innerHTML = `
                    <div style="margin-bottom: 12px;">
                        <div style="font-size: 1.1em; font-weight: bold; margin-bottom: 8px;">
                            <span style="color: ${playerColor}; font-size: 1.2em;">#${index + 1}</span> 
                            <span style="color: ${playerColor};">${player.name}</span>
                        </div>
                        <div style="font-size: 0.95em; color: var(--text-color); line-height: 1.6;">
                            <div style="margin-bottom: 4px;">
                                <strong>Buy-in:</strong> ₪${player.buyIn.toFixed(2)}
                            </div>
                            ${player.rebuys.length > 0 ? `
                                <div style="margin-bottom: 4px;">
                                    <strong>Rebuys:</strong> ₪${player.rebuys.map(r => r.toFixed(2)).join(' + ₪')}
                                </div>
                            ` : ''}
                            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--text-color);">
                                <strong style="font-size: 1.1em; color: var(--button-background);">Total:</strong> 
                                <span style="font-size: 1.2em; font-weight: bold; color: var(--button-background);">₪${totalBuyIn.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 12px;">
                        <button class="btn" onclick="editGamePlayer('${player.playerId}')" style="width: 100%; font-size: 0.9em; padding: 8px;">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn" onclick="quickRebuy('${player.playerId}', ${player.buyIn})" style="background-color: #28a745; width: 100%; font-size: 0.9em; padding: 8px;">
                            <i class="fas fa-plus-circle"></i> Quick Rebuy (₪${player.buyIn.toFixed(2)})
                        </button>
                        <button class="btn" onclick="addRebuy('${player.playerId}')" style="width: 100%; font-size: 0.9em; padding: 8px;">
                            <i class="fas fa-coins"></i> Custom Rebuy
                        </button>
                        <button class="btn" onclick="removePlayerFromGame('${player.playerId}')" style="background-color: #dc3545; width: 100%; font-size: 0.9em; padding: 8px;">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });
            
            list.appendChild(cardsContainer);
        } else {
            // Table/List view (original)
            sortedPlayers.forEach((player, index) => {
                const totalBuyIn = player.buyIn + player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
                const playerColor = getPlayerColor(player.playerId, index);
                const div = document.createElement('div');
                div.className = 'player-item';
                div.innerHTML = `
                    <div>
                        <strong>
                            <span style="color: ${playerColor}; font-size: 1.1em;">${index + 1}.</span> 
                            <span style="color: ${playerColor};">${player.name}</span>
                        </strong><br>
                        Buy-in: ₪${player.buyIn.toFixed(2)}
                        ${player.rebuys.length ? ` + Rebuys: ₪${player.rebuys.map(r => r.toFixed(2)).join(' + ₪')}` : ''}
                        = Total: ₪${totalBuyIn.toFixed(2)}
                    </div>
                    <div>
                        <button class="btn" onclick="editGamePlayer('${player.playerId}')">Edit</button>
                        <button class="btn" onclick="quickRebuy('${player.playerId}', ${player.buyIn})" style="background-color: #28a745;">Quick Rebuy (₪${player.buyIn.toFixed(2)})</button>
                        <button class="btn" onclick="addRebuy('${player.playerId}')">Custom Rebuy</button>
                        <button class="btn" onclick="removePlayerFromGame('${player.playerId}')" style="background-color: #dc3545;">Remove</button>
                    </div>
                `;
                list.appendChild(div);
            });
        }
    }

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
                        <span style="font-weight: bold; color: #007bff;">${player.name}</span> ${translations[currentLanguage].finalChips}:
                    </label>
                    <input type="number" 
                           value="${player.finalChips !== undefined && player.finalChips !== null ? player.finalChips : ''}" 
                           onchange="updateFinalChips('${player.playerId}', this.value)"
                           placeholder="${translations[currentLanguage].finalChips}"
                           style="width: 100px;">
                    <div style="color: #666; font-size: 0.9em;">
                        (${translations[currentLanguage].buyIn}: ₪${player.buyIn.toFixed(2)}${totalRebuys > 0 ? ` + ${translations[currentLanguage].rebuys}: ₪${totalRebuys.toFixed(2)}` : ''} = ${translations[currentLanguage].total}: ₪${totalBuyIn.toFixed(2)})
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
    let totalChips = 0;
    
    currentGame.players.forEach(player => {
        totalBuyIn += player.buyIn;
        totalRebuys += player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
        if (player.finalChips !== undefined && player.finalChips !== null) {
            totalChips += player.finalChips;
        }
    });
    
    const total = totalBuyIn + totalRebuys;
    
    // Get the current chip value from localStorage or default to 1
    const chipValue = parseFloat(localStorage.getItem('chipValue')) || 1;
    
    summaryDiv.innerHTML = `
        <h3>Game Summary</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
                <strong>Total Buy-ins:</strong> ₪${totalBuyIn.toFixed(2)}<br>
                <strong>Total Rebuys:</strong> ₪${totalRebuys.toFixed(2)}<br>
                <strong>Total in Play:</strong> ₪${total.toFixed(2)}<br>
                <strong>Total Chips:</strong> ${totalChips.toFixed(0)} chips (₪${(totalChips * chipValue).toFixed(2)})
            </div>
            <div>
                <strong>Number of Players:</strong> ${currentGame.players.length}<br>
                <strong>Average Buy-in:</strong> ₪${(totalBuyIn / currentGame.players.length).toFixed(2)}<br>
                <strong>Average Rebuys:</strong> ₪${(totalRebuys / currentGame.players.length).toFixed(2)}
            </div>
        </div>
        <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 4px;">
            <strong>Chip Value Converter:</strong><br>
            <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                <input type="number" 
                       id="chipValueInput" 
                       value="${chipValue}" 
                       min="0.01" 
                       step="0.01" 
                       style="width: 80px;"
                       onchange="updateChipValue(this.value)">
                <span>₪ per chip</span>
            </div>
        </div>
    `;
}

// Add new function to handle chip value updates
function updateChipValue(value) {
    const chipValue = parseFloat(value);
    if (!isNaN(chipValue) && chipValue > 0) {
        localStorage.setItem('chipValue', chipValue);
        updateSettlementSummary();
    }
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
        // Build the text to copy
        let textToCopy = '';

        // Add winners section if exists
        const winners = document.querySelectorAll('.winner-summary');
        if (winners && winners.length > 0) {
            textToCopy += `${translations[currentLanguage].winners}:\n`;
            winners.forEach(winner => {
                const text = winner.textContent.replace(/\s+/g, ' ').trim();
                if (text) textToCopy += text + '\n';
            });
            textToCopy += '\n';
        }

        // Add losers section if exists
        const losers = document.querySelectorAll('.loser-summary');
        if (losers && losers.length > 0) {
            textToCopy += `${translations[currentLanguage].losers}:\n`;
            losers.forEach(loser => {
                const text = loser.textContent.replace(/\s+/g, ' ').trim();
                if (text) textToCopy += text + '\n';
            });
            textToCopy += '\n';
        }

        // Add settlements section
        const settlements = document.querySelectorAll('.settlement-item');
        if (settlements && settlements.length > 0) {
            textToCopy += `${translations[currentLanguage].settlement}:\n`;
            settlements.forEach(settlement => {
                const from = settlement.querySelector('.from-name')?.textContent?.trim() || '';
                const to = settlement.querySelector('.to-name')?.textContent?.trim() || '';
                const amount = settlement.querySelector('.amount')?.textContent?.trim() || '';
                if (from && to && amount) {
                    textToCopy += `${from} ${translations[currentLanguage].paysTo} ${to}: ${amount}\n`;
                }
            });
        } else {
            textToCopy += translations[currentLanguage].noSettlements;
        }

        // Use the Clipboard API if available
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert('Settlement instructions copied to clipboard!');
                })
                .catch(err => {
                    console.error('Clipboard API failed:', err);
                    fallbackCopyTextToClipboard(textToCopy);
                });
        } else {
            fallbackCopyTextToClipboard(textToCopy);
        }

        // Fallback copy method
        function fallbackCopyTextToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                document.execCommand('copy');
                textArea.remove();
                alert('Settlement instructions copied to clipboard!');
            } catch (err) {
                console.error('Fallback copy failed:', err);
                textArea.remove();
                alert('Failed to copy instructions. Please try again.');
            }
        }
    } catch (error) {
        console.error('Error in copySettlementInstructions:', error);
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

        // Helper function to round amounts according to the rules
        function roundAmount(amount) {
            const lastDigit = Math.floor(amount) % 10;  // Get last digit
            const baseAmount = Math.floor(amount / 10) * 10;  // Get the base amount (tens)
            
            if (lastDigit >= 5) {
                return baseAmount + 10;  // Round up to next ten
            } else {
                return baseAmount;  // Round down to current ten
            }
        }

        // Process each loser
        for (const loser of losers) {
            const loserName = loser.name;
            let remainingLoss = roundAmount(remainingLosses.get(loserName));  // Round the initial loss
            
            // Skip if no loss to settle
            if (remainingLoss <= 0.01) continue;

            // Sort winners by amount to maximize larger transactions
            const availableWinners = [...winners]
                .filter(w => remainingWins.get(w.name) > 0.01)
                .sort((a, b) => remainingWins.get(b.name) - remainingWins.get(a.name));
            
            // Try to settle with as few transactions as possible
            for (const winner of availableWinners) {
                const winnerName = winner.name;
                let remainingWin = roundAmount(remainingWins.get(winnerName));  // Round the remaining win
                
                // Skip if winner has no remaining win
                if (remainingWin <= 0.01) continue;

                // Calculate the amount to transfer (minimum of remaining loss and remaining win)
                let amount = Math.min(remainingLoss, remainingWin);
                
                // Apply rounding rules to ensure amount ends in 0 or 5
                amount = roundAmount(amount);
                
                if (amount > 0) {
                    settlements.push({
                        from: loserName,
                        to: winnerName,
                        amount: amount
                    });
                    
                    // Update remaining amounts - make sure to round these as well
                    remainingLoss = roundAmount(remainingLoss - amount);
                    remainingWin = roundAmount(remainingWin - amount);
                    remainingLosses.set(loserName, remainingLoss);
                    remainingWins.set(winnerName, remainingWin);
                    
                    // If loser's loss is fully settled (or close enough), move to next loser
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
                    <div style="display: flex; gap: 10px;">
                        <button class="btn" onclick="copySettlementInstructions()" style="background-color: #6c757d;">
                            <i class="fas fa-copy"></i> ${translations[currentLanguage].copySettlement}
                        </button>
                        <button class="btn" onclick="captureSettlementSnapshot()" style="background-color: #28a745;">
                            <i class="fas fa-camera"></i> ${translations[currentLanguage].captureSnapshot}
                        </button>
                    </div>
                </div>
                ${settlements.length === 0 
                    ? `<p style="text-align: center; color: #666; padding: 15px; background-color: #f8f9fa; border-radius: 6px;">${translations[currentLanguage].noSettlements}</p>`
                    : settlements.map(s => `
                        <div class="settlement-item" style="background-color: white; padding: 12px; margin-bottom: 10px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            <span class="from-name" style="font-weight: bold; color: #c62828;">${s.from}</span> 
                            ${translations[currentLanguage].paysTo} 
                            <span class="to-name" style="font-weight: bold; color: #2e7d32;">${s.to}</span>: 
                            <span class="amount" style="font-weight: bold; color: #333;">₪${s.amount}</span>
                        </div>
                    `).join('')}
            </div>
        `;

        console.log('Settlement calculation completed successfully');
    } catch (error) {
        console.error('Error in calculateSettlement:', error);
        showTab('settlement');
        const container = document.getElementById('settlementResults');
        container.innerHTML = `
            <div class="error" style="color: red; padding: 15px; background-color: #ffebee; border-radius: 6px;">
                <strong>Error:</strong> ${error.message}<br>
                Please check your data and try again.
            </div>
        `;
    }
}

// Add to translations
translations.en.captureSnapshot = 'Capture Snapshot';
translations.he.captureSnapshot = 'צלם תמונה';

// Make sure all functions are properly exposed to the global scope
window.initializeApp = initializeApp;
window.loadData = loadData;
window.saveData = saveData;
window.showTab = showTab;
window.addPlayer = addPlayer;
window.removePlayer = removePlayer;
window.startNewGame = startNewGame;
window.resetGameNameToDefault = resetGameNameToDefault;
window.toggleGamePlayersView = toggleGamePlayersView;
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

function saveTextColorPreference(color) {
    localStorage.setItem('textColor', color);
}

function loadTextColorPreference() {
    const savedColor = localStorage.getItem('textColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--text-color', savedColor);
        textColorPicker.value = savedColor; // Update the color picker
    }
}

function displayErrorMessage(message) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error';
    errorContainer.textContent = message;

    // Clear previous error messages
    const existingError = document.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }

    // Append the new error message to the container
    document.querySelector('.container').insertBefore(errorContainer, document.querySelector('.tab-buttons'));
}

const CACHE_NAME = 'poker-calc-v2';  // Increment the version number
const urlsToCache = [
    '/',
    '/index.html',
    '/app.js',
    '/manifest.json',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    // Add skip waiting to force the new service worker to activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Take control of all clients immediately
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Always try the network first
                return fetch(event.request)
                    .then(networkResponse => {
                        // Cache the new version
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, networkResponse.clone());
                        });
                        return networkResponse;
                    })
                    .catch(() => {
                        // Fall back to cache if network fails
                        return response;
                    });
            })
    );
}); 

// ... existing code ...
function updateGameManagement() {
    const container = document.getElementById('gameManagementContent');
    // Preserve existing input if user has typed something, otherwise use default
    const existingInput = document.getElementById('newGameName');
    const currentValue = existingInput && existingInput.value.trim() ? existingInput.value.trim() : '';
    const defaultGameName = getDefaultGameName();
    const inputValue = currentValue || defaultGameName;
    
    container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div class="input-group">
                <label for="newGameName">${translations[currentLanguage].newGameName}</label>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <input type="text" id="newGameName" placeholder="${translations[currentLanguage].newGameName}" value="${inputValue}" style="flex: 1;">
                    <button class="btn" onclick="resetGameNameToDefault()" style="background-color: #6c757d; padding: 8px 12px; min-width: auto;" title="Reset to current date/time">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button class="btn" onclick="startNewGame()" id="startGameBtn">${translations[currentLanguage].startGame}</button>
                <button class="btn" onclick="saveGameToHistory()" style="background-color: #28a745;" id="saveGameBtn">${translations[currentLanguage].saveGame}</button>
            </div>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; border: 1px solid #bbdefb;">
                <h3 style="color: #1565c0; margin-bottom: 15px; text-align: center;">
                    <i class="fas fa-gamepad" style="margin-right: 8px;"></i>${translations[currentLanguage].currentGame}
                </h3>
                <div style="background-color: white; padding: 12px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="font-weight: bold; color: #1565c0; margin-bottom: 10px;">
                        ${currentGame.isActive ? currentGame.name : translations[currentLanguage].noActiveGameDisplay}
                    </div>
                    <div style="font-size: 0.9em; color: #666;">
                        <div>${translations[currentLanguage].players}: ${currentGame.players.length}</div>
                        <div>${translations[currentLanguage].totalInPlay}: ₪${(currentGame.players.reduce((sum, p) => sum + p.buyIn, 0) + 
                            currentGame.players.reduce((sum, p) => sum + p.rebuys.reduce((s, r) => s + r, 0), 0)).toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; border: 1px solid #c8e6c9;">
                <h3 style="color: #2e7d32; margin-bottom: 15px; text-align: center;">
                    <i class="fas fa-chart-pie" style="margin-right: 8px;"></i>${translations[currentLanguage].gameStats}
                </h3>
                <div style="background-color: white; padding: 12px; margin-bottom: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div style="text-align: center;">
                            <div style="font-size: 1.2em; color: #2e7d32; margin-bottom: 5px;">
                                ${translations[currentLanguage].averageBuyIn}
                            </div>
                            <div style="font-size: 1.5em; font-weight: bold; color: #2e7d32;">
                                ₪${(currentGame.players.reduce((sum, p) => sum + p.buyIn, 0) / (currentGame.players.length || 1)).toFixed(2)}
                            </div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 1.2em; color: #2e7d32; margin-bottom: 5px;">
                                ${translations[currentLanguage].averageRebuys}
                            </div>
                            <div style="font-size: 1.5em; font-weight: bold; color: #2e7d32;">
                                ₪${(currentGame.players.reduce((sum, p) => sum + p.rebuys.reduce((s, r) => s + r, 0), 0) / (currentGame.players.length || 1)).toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ... existing code ...

// Add new function for quick rebuy
function quickRebuy(playerId, amount) {
    const player = currentGame.players.find(p => p.playerId === playerId);
    if (player) {
        player.rebuys.push(amount);
        saveData();
        updateUI();
    }
}

function captureSettlementSnapshot() {
    try {
        // Get the settlement results container
        const container = document.getElementById('settlementResults');
        
        // Use html2canvas library to capture the screenshot
        html2canvas(container, {
            scale: 2, // Higher scale for better quality
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            // Convert canvas to blob
            canvas.toBlob(blob => {
                // Create download link
                const link = document.createElement('a');
                link.download = `poker_settlement_${new Date().toISOString().split('T')[0]}.png`;
                link.href = URL.createObjectURL(blob);
                link.click();
                
                // Clean up
                URL.revokeObjectURL(link.href);
            }, 'image/png');
        });
    } catch (error) {
        console.error('Error capturing screenshot:', error);
        alert('Error capturing screenshot. Please try again.');
    }
}

function exportGameStats() {
    try {
        // Get the current player filter
        const playerFilter = document.getElementById('playerFilter');
        const selectedPlayerId = playerFilter.value;
        
        // Create workbook
        const wb = XLSX.utils.book_new();
        
        // Prepare data for export
        const exportData = [];
        const headers = ['Player Name', 'Game Name', 'Game Score', 'Total Investment', 'Total Win', 'Balance'];
        
        // Add headers
        exportData.push(headers);
        
        // Process each game in history
        gameHistory.forEach(game => {
            game.players.forEach(player => {
                // Skip if player filter is active and this isn't the selected player
                if (selectedPlayerId && player.playerId !== selectedPlayerId) {
                    return;
                }

                const totalInvestment = player.buyIn + player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
                const gameScore = player.finalChips - totalInvestment;
                const totalWin = Math.max(0, gameScore);
                
                exportData.push([
                    player.name,
                    game.name,
                    gameScore,
                    totalInvestment,
                    totalWin,
                    gameScore
                ]);
            });
        });

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet(exportData);
        
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Game Statistics');
        
        // Generate file name
        const fileName = selectedPlayerId 
            ? `poker_stats_${players.find(p => p.id === selectedPlayerId).name}_${new Date().toISOString().split('T')[0]}.xlsx`
            : `poker_stats_all_players_${new Date().toISOString().split('T')[0]}.xlsx`;
        
        // Save file
        XLSX.writeFile(wb, fileName);
        
        alert('Game statistics exported successfully!');
    } catch (error) {
        console.error('Error exporting game statistics:', error);
        alert('Error exporting game statistics. Please try again.');
    }
}

function importGameStats(event) {
    try {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                
                // Get the first worksheet
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                
                // Skip header row
                const stats = jsonData.slice(1);
                
                // Process imported data
                stats.forEach(row => {
                    const [playerName, gameName, gameScore, totalInvestment, totalWin, balance] = row;
                    
                    // Find or create player
                    let player = players.find(p => p.name === playerName);
                    if (!player) {
                        player = {
                            id: Date.now().toString(),
                            name: playerName
                        };
                        players.push(player);
                    }
                    
                    // Find or create game
                    let game = gameHistory.find(g => g.name === gameName);
                    if (!game) {
                        game = {
                            name: gameName,
                            date: new Date().toISOString(),
                            isActive: false,
                            players: []
                        };
                        gameHistory.push(game);
                    }
                    
                    // Update player's game data
                    const playerInGame = game.players.find(p => p.playerId === player.id);
                    if (!playerInGame) {
                        game.players.push({
                            playerId: player.id,
                            name: playerName,
                            buyIn: totalInvestment,
                            rebuys: [],
                            finalChips: totalInvestment + gameScore
                        });
                    }
                });
                
                // Save the updated data
                saveData();
                
                // Update the UI
                updateUI();
                
                alert('Game statistics imported successfully!');
            } catch (error) {
                console.error('Error processing imported file:', error);
                alert('Error processing imported file. Please check the file format.');
            }
        };
        
        reader.readAsArrayBuffer(file);
    } catch (error) {
        console.error('Error importing game statistics:', error);
        alert('Error importing game statistics. Please try again.');
    } finally {
        // Reset file input
        event.target.value = '';
    }
}

// ... existing code ...

// Add new function for saving game to Excel
function saveGameToExcel(gameId) {
    try {
        const game = gameHistory.find(g => g.date === gameId);
        if (!game) {
            alert('Game not found');
            return;
        }

        // Create workbook
        const wb = XLSX.utils.book_new();
        
        // Prepare data for export
        const exportData = [
            ['Game Name', game.name],
            ['Date', new Date(game.date).toLocaleString()],
            [''],
            ['Player Name', 'Buy-in', 'Rebuys', 'Total Investment', 'Final Chips', 'Net Result']
        ];

        // Add player data
        game.players.forEach(player => {
            const totalRebuys = player.rebuys.reduce((sum, rebuy) => sum + rebuy, 0);
            const totalInvestment = player.buyIn + totalRebuys;
            const netResult = player.finalChips - totalInvestment;
            
            exportData.push([
                player.name,
                player.buyIn,
                totalRebuys,
                totalInvestment,
                player.finalChips,
                netResult
            ]);
        });

        // Create worksheet
        const ws = XLSX.utils.aoa_to_sheet(exportData);
        
        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, 'Game Details');
        
        // Generate file name
        const fileName = `poker_game_${game.name.replace(/[^a-z0-9]/gi, '_')}_${new Date(game.date).toISOString().split('T')[0]}.xlsx`;
        
        // Save file
        XLSX.writeFile(wb, fileName);
        
        alert('Game saved to Excel successfully!');
    } catch (error) {
        console.error('Error saving game to Excel:', error);
        alert('Error saving game to Excel. Please try again.');
    }
}
// ... existing code ...