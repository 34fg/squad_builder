export const DUMMY_FIXTURES = {
  fenerbahce: [
    { date: '2025-09-12', home: true, opponent: 'Atalanta', competition: 'UEFA Europa League' },
    { date: '2025-09-28', home: false, opponent: 'Rangers', competition: 'UEFA Europa League' },
    { date: '2025-10-10', home: true, opponent: 'Sparta Prague', competition: 'UEFA Europa League' },
    { date: '2025-10-24', home: false, opponent: 'Atalanta', competition: 'UEFA Europa League' },
    { date: '2025-11-07', home: true, opponent: 'Rangers', competition: 'UEFA Europa League' },
    { date: '2025-11-28', home: false, opponent: 'Sparta Prague', competition: 'UEFA Europa League' }
  ],
  galatasaray: [
    { date: '2025-09-10', home: true, opponent: 'Bayern Munich', competition: 'UEFA Champions League' },
    { date: '2025-09-24', home: false, opponent: 'Manchester United', competition: 'UEFA Champions League' },
    { date: '2025-10-08', home: true, opponent: 'Copenhagen', competition: 'UEFA Champions League' },
    { date: '2025-10-22', home: false, opponent: 'Bayern Munich', competition: 'UEFA Champions League' },
    { date: '2025-11-05', home: true, opponent: 'Manchester United', competition: 'UEFA Champions League' },
    { date: '2025-11-26', home: false, opponent: 'Copenhagen', competition: 'UEFA Champions League' }
  ],
  samsunspor: [
    { date: '2025-09-14', home: true, opponent: 'Fiorentina', competition: 'UEFA Conference League' },
    { date: '2025-09-26', home: false, opponent: 'Fenerbahce', competition: 'UEFA Conference League' },
    { date: '2025-10-12', home: true, opponent: 'Club Brugge', competition: 'UEFA Conference League' },
    { date: '2025-10-26', home: false, opponent: 'Fiorentina', competition: 'UEFA Conference League' },
    { date: '2025-11-09', home: true, opponent: 'Fenerbahce', competition: 'UEFA Conference League' },
    { date: '2025-11-30', home: false, opponent: 'Club Brugge', competition: 'UEFA Conference League' }
  ]
};

export const isEuropeanTeam = (teamId, leagueId) => {
  return ['ucl', 'uel', 'uecl'].includes(leagueId);
};