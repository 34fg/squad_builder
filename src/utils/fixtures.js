export const european_fixtures = {

  fenerbahce: [
    { date: '2025-09-24', home: false, opponent: 'Dinamo Zagreb', competition: 'UEFA Europa League' },
    { date: '2025-10-02', home: true, opponent: 'Nice', competition: 'UEFA Europa League' },
    { date: '2025-10-23', home: true, opponent: 'Stuttgart', competition: 'UEFA Europa League' },
    { date: '2025-11-06', home: false, opponent: 'Viktoria Plzeň', competition: 'UEFA Europa League' },
    { date: '2025-11-27', home: true, opponent: 'Ferencváros', competition: 'UEFA Europa League' },
    { date: '2025-12-11', home: false, opponent: 'SK Brann', competition: 'UEFA Europa League' },
    { date: '2026-01-22', home: true, opponent: 'Aston Villa', competition: 'UEFA Europa League' },
    { date: '2026-01-29', home: true, opponent: 'Steaua București', competition: 'UEFA Europa League' },
  ],
  galatasaray: [
    { date: '2025-09-18', home: false, opponent: 'Eintracht Frankfurt', competition: 'UEFA Champions League' },
    { date: '2025-09-30', home: true, opponent: 'Liverpool', competition: 'UEFA Champions League' },
    { date: '2025-10-22', home: true, opponent: 'Bodø/Glimt', competition: 'UEFA Champions League' },
    { date: '2025-11-05', home: false, opponent: 'Ajax', competition: 'UEFA Champions League' },
    { date: '2025-11-25', home: true, opponent: 'Union Saint-Gilloise', competition: 'UEFA Champions League' },
    { date: '2025-12-09', home: false, opponent: 'Monaco', competition: 'UEFA Champions League' },
    { date: '2026-01-21', home: true, opponent: 'Atlético Madrid', competition: 'UEFA Champions League' },
    { date: '2026-01-28', home: false, opponent: 'Manchester City', competition: 'UEFA Champions League' },

  ],
  samsunspor: [
    { date: '2025-10-02', home: false, opponent: 'Legia Warsaw', competition: 'UEFA Conference League' },
    { date: '2025-10-23', home: true, opponent: 'Dynamo Kyiv', competition: 'UEFA Conference League' },
    { date: '2025-11-06', home: true, opponent: 'Hamrun Spartans', competition: 'UEFA Conference League' },
    { date: '2025-11-27', home: false, opponent: 'Breiðablik', competition: 'UEFA Conference League' },
    { date: '2025-12-11', home: true, opponent: 'AEK Athens', competition: 'UEFA Conference League' },
    { date: '2025-12-18', home: false, opponent: 'Mainz', competition: 'UEFA Conference League' },
  ]
};

export const isEuropeanTeam = (teamId, leagueId) => {
  return ['ucl', 'uel', 'uecl'].includes(leagueId);
};