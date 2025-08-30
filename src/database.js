// Football Squad Builder Database
// Contains all player data, team data, league data, and constants

// --- Imports ---
import { TRAINING_STATUS, POSITIONS } from './constants.js';
import { fenerbahcePlayers } from './data/fenerbahce.js';
import { galatasarayPlayers } from './data/galatasaray.js';
import { besiktasPlayers } from './data/besiktas.js';
import { trabzonsporPlayers } from './data/trabzonspor.js';
import { basaksehirPlayers } from './data/basaksehir.js';
import { antalyasporPlayers } from './data/antalyaspor.js';
import { goztepePlayers } from './data/goztepe.js';
import { eyupsporPlayers } from './data/eyupspor.js';
import { konyasporPlayers } from './data/konyaspor.js';
import { kocaelisporPlayers } from './data/kocaelispor.js';
import { alanyasporPlayers } from './data/alanyaspor.js';
import { gaziantepfkPlayers } from './data/gaziantepfk.js';
import { samsunsporPlayers } from './data/samsunspor.js';
import { kayserisporPlayers } from './data/kayserispor.js';
import { genclerbirligiPlayers } from './data/genclerbirligi.js';
import { kasimpasaPlayers } from './data/kasimpasa.js';
import { rizesporPlayers } from './data/rizespor.js';
import { fatihkaragumrukPlayers } from './data/fatihkaragumruk.js';

// --- Re-export Constants ---
export { TRAINING_STATUS, POSITIONS };

// --- League Data ---
export const leagues = [
  { id: 'ucl', name: 'UEFA Champions League' },
  { id: 'uel', name: 'UEFA Europa League' },
  { id: 'uecl', name: 'UEFA Europa Conference League' },
  { id: 'superlig', name: 'Turkish Super League' },
];

// --- Team Data ---
export const teams = [
  // European Competition Teams
  { id: 'fenerbahce', name: 'Fenerbahçe', leagueId: 'uel' },
  { id: 'galatasaray', name: 'Galatasaray', leagueId: 'ucl' },
  { id: 'besiktas', name: 'Beşiktaş', leagueId: 'uel' },
  { id: 'samsunspor', name: 'Samsunspor', leagueId: 'uecl' },
  
  // Turkish Super League 2025/26 Season (18 teams)
  { id: 'trabzonspor', name: 'Trabzonspor', leagueId: 'superlig' },
  { id: 'basaksehir', name: 'İstanbul Başakşehir FK', leagueId: 'superlig' },
  { id: 'antalyaspor', name: 'Antalyaspor', leagueId: 'superlig' },
  { id: 'goztepe', name: 'Göztepe', leagueId: 'superlig' },
  { id: 'eyupspor', name: 'Eyüpspor', leagueId: 'superlig' },
  { id: 'konyaspor', name: 'Konyaspor', leagueId: 'superlig' },
  { id: 'kocaelispor', name: 'Kocaelispor', leagueId: 'superlig' },
  { id: 'alanyaspor', name: 'Alanyaspor', leagueId: 'superlig' },
  { id: 'gaziantepfk', name: 'Gaziantep FK', leagueId: 'superlig' },
  { id: 'kayserispor', name: 'Kayserispor', leagueId: 'superlig' },
  { id: 'genclerbirligi', name: 'Gençlerbirliği', leagueId: 'superlig' },
  { id: 'kasimpasa', name: 'Kasımpaşa', leagueId: 'superlig' },
  { id: 'rizespor', name: 'Çaykur Rizespor', leagueId: 'superlig' },
  { id: 'fatihkaragumruk', name: 'Fatih Karagümrük', leagueId: 'superlig' },
];

// --- Player Database ---
// Combine all team players into one array
export const players = [
  ...fenerbahcePlayers,
  ...galatasarayPlayers,
  ...besiktasPlayers,
  ...trabzonsporPlayers,
  ...basaksehirPlayers,
  ...antalyasporPlayers,
  ...goztepePlayers,
  ...eyupsporPlayers,
  ...konyasporPlayers,
  ...kocaelisporPlayers,
  ...alanyasporPlayers,
  ...gaziantepfkPlayers,
  ...samsunsporPlayers,
  ...kayserisporPlayers,
  ...genclerbirligiPlayers,
  ...kasimpasaPlayers,
  ...rizesporPlayers,
  ...fatihkaragumrukPlayers,
];

// Helper functions for easy data access
export const getPlayersByTeam = (teamId) => {
  return players.filter(player => player.teamId === teamId);
};

export const getTeamsByLeague = (leagueId) => {
  return teams.filter(team => team.leagueId === leagueId);
};

export const getPlayerById = (playerId) => {
  return players.find(player => player.id === playerId);
};

export const getTeamById = (teamId) => {
  return teams.find(team => team.id === teamId);
};
