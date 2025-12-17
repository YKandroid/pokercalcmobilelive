// Excel Database Generator for Poker Game Calculator
// This script creates the Excel file with all necessary sheets and sample data

const XLSX = require('xlsx');

// Sample data for Players sheet
const playersData = [
    ['PlayerID', 'Name', 'Email', 'Phone', 'DefaultBuyIn', 'TotalGames', 'TotalBuyIns', 'TotalWinnings', 'LastPlayed', 'Status', 'Notes'],
    ['P001', 'John Smith', 'john@email.com', '+1-555-0123', 100, 15, 1500, 250, '2024-01-15', 'Active', 'Prefers cash games'],
    ['P002', 'Sarah Johnson', 'sarah@email.com', '+1-555-0124', 100, 12, 1200, -150, '2024-01-10', 'Active', 'New player'],
    ['P003', 'Mike Davis', 'mike@email.com', '+1-555-0125', 150, 20, 3000, 500, '2024-01-12', 'Active', 'High roller'],
    ['P004', 'Lisa Wilson', 'lisa@email.com', '+1-555-0126', 100, 8, 800, -100, '2024-01-08', 'Inactive', 'On vacation'],
    ['P005', 'Tom Brown', 'tom@email.com', '+1-555-0127', 100, 18, 1800, 300, '2024-01-14', 'Active', 'Regular player']
];

// Sample data for Games sheet
const gamesData = [
    ['GameID', 'GameName', 'StartDate', 'EndDate', 'StartTime', 'EndTime', 'Location', 'BuyInAmount', 'MaxPlayers', 'Status', 'TotalPot', 'Notes'],
    ['G001', 'Friday Night Poker', '2024-01-15', '2024-01-15', '19:00', '23:30', 'Home Game', 100, 8, 'Completed', 800, 'Great game!'],
    ['G002', 'Saturday Tournament', '2024-01-13', '2024-01-13', '14:00', '18:00', 'Community Center', 150, 6, 'Completed', 900, 'Tournament style'],
    ['G003', 'Weekend Cash Game', '2024-01-20', '2024-01-20', '20:00', '02:00', 'Home Game', 100, 10, 'Scheduled', 0, 'Upcoming game']
];

// Sample data for GamePlayers sheet
const gamePlayersData = [
    ['GamePlayerID', 'GameID', 'PlayerID', 'BuyInAmount', 'RebuyAmount', 'FinalChips', 'NetResult', 'JoinTime', 'LeaveTime', 'Status'],
    ['GP001', 'G001', 'P001', 100, 50, 150, 50, '19:00', '23:30', 'Active'],
    ['GP002', 'G001', 'P002', 100, 0, 80, -20, '19:00', '23:00', 'Left'],
    ['GP003', 'G001', 'P003', 150, 100, 200, 50, '19:00', '23:30', 'Active'],
    ['GP004', 'G002', 'P001', 150, 0, 180, 30, '14:00', '18:00', 'Active'],
    ['GP005', 'G002', 'P003', 150, 0, 120, -30, '14:00', '18:00', 'Active']
];

// Sample data for Rebuys sheet
const rebuysData = [
    ['RebuyID', 'GamePlayerID', 'Amount', 'Timestamp', 'Reason'],
    ['R001', 'GP001', 50, '2024-01-15 20:30', 'Low on chips'],
    ['R002', 'GP003', 100, '2024-01-15 21:15', 'All-in and lost'],
    ['R003', 'GP004', 0, '2024-01-13 16:00', 'No rebuy needed']
];

// Sample data for Settlements sheet
const settlementsData = [
    ['SettlementID', 'GameID', 'PlayerID', 'AmountOwed', 'AmountDue', 'NetAmount', 'SettlementDate', 'PaymentMethod', 'Status', 'Notes'],
    ['S001', 'G001', 'P001', 0, 50, 50, '2024-01-16', 'Cash', 'Completed', 'Paid in full'],
    ['S002', 'G001', 'P002', 20, 0, -20, '2024-01-16', 'Cash', 'Completed', 'Paid in full'],
    ['S003', 'G001', 'P003', 0, 50, 50, '2024-01-16', 'Cash', 'Completed', 'Paid in full'],
    ['S004', 'G002', 'P001', 0, 30, 30, '2024-01-14', 'Cash', 'Completed', 'Paid in full'],
    ['S005', 'G002', 'P003', 30, 0, -30, '2024-01-14', 'Cash', 'Completed', 'Paid in full']
];

// Sample data for GameHistory sheet
const gameHistoryData = [
    ['HistoryID', 'GameID', 'Action', 'PlayerID', 'Details', 'Timestamp', 'UserID'],
    ['H001', 'G001', 'Game Started', '', 'Friday Night Poker started', '2024-01-15 19:00', 'Admin'],
    ['H002', 'G001', 'Player Added', 'P001', 'John Smith joined with $100', '2024-01-15 19:00', 'Admin'],
    ['H003', 'G001', 'Player Added', 'P002', 'Sarah Johnson joined with $100', '2024-01-15 19:00', 'Admin'],
    ['H004', 'G001', 'Rebuy', 'P001', 'John Smith rebought for $50', '2024-01-15 20:30', 'Admin'],
    ['H005', 'G001', 'Game Ended', '', 'Game ended with $800 pot', '2024-01-15 23:30', 'Admin']
];

// Create workbook
const workbook = XLSX.utils.book_new();

// Add sheets with data
const playersSheet = XLSX.utils.aoa_to_sheet(playersData);
const gamesSheet = XLSX.utils.aoa_to_sheet(gamesData);
const gamePlayersSheet = XLSX.utils.aoa_to_sheet(gamePlayersData);
const rebuysSheet = XLSX.utils.aoa_to_sheet(rebuysData);
const settlementsSheet = XLSX.utils.aoa_to_sheet(settlementsData);
const gameHistorySheet = XLSX.utils.aoa_to_sheet(gameHistoryData);

// Add sheets to workbook
XLSX.utils.book_append_sheet(workbook, playersSheet, 'Players');
XLSX.utils.book_append_sheet(workbook, gamesSheet, 'Games');
XLSX.utils.book_append_sheet(workbook, gamePlayersSheet, 'GamePlayers');
XLSX.utils.book_append_sheet(workbook, rebuysSheet, 'Rebuys');
XLSX.utils.book_append_sheet(workbook, settlementsSheet, 'Settlements');
XLSX.utils.book_append_sheet(workbook, gameHistorySheet, 'GameHistory');

// Write to file
XLSX.writeFile(workbook, 'poker_database.xlsx');

console.log('Excel database file created successfully: poker_database.xlsx'); 