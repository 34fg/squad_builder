// Utility for squad stats
export function getSquadStats(players) {
  // Average age
  const avgAge = players.length
    ? (players.reduce((sum, p) => sum + (p.age || 0), 0) / players.length).toFixed(1)
    : '-';
  
  // Country stats
  const countryCounts = {};
  players.forEach(p => {
    // Use first country if multiple
    const mainCountry = (p.nationality || '').split(/[/ ]/)[0];
    countryCounts[mainCountry] = (countryCounts[mainCountry] || 0) + 1;
  });

  const countryList = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]);
  const numCountries = countryList.length;

  return { avgAge, countryList, numCountries };
}
