// Utility for country flag emoji
export function getFlagEmoji(countryName) {
  // Try to extract the first country if multiple (e.g. "Turkish/German")
  const mainCountry = countryName.split(/[\/ ]/)[0];
  const countryMap = {
    Turkish: 'TR', German: 'DE', French: 'FR', English: 'GB', Italian: 'IT', Spanish: 'ES', Portuguese: 'PT', Dutch: 'NL', Belgian: 'BE', Austrian: 'AT', Croatian: 'HR', Serbian: 'RS', Polish: 'PL', Russian: 'RU', Greek: 'GR', Swiss: 'CH', Danish: 'DK', Swedish: 'SE', Norwegian: 'NO', Finnish: 'FI', Ukrainian: 'UA', Bosnian: 'BA', Slovakian: 'SK', Slovenian: 'SI', Hungarian: 'HU', Czech: 'CZ', Romanian: 'RO', Bulgarian: 'BG', Albanian: 'AL', Georgian: 'GE', Armenian: 'AM', Azerbaijani: 'AZ', Moldovan: 'MD', Belarusian: 'BY', Kazakh: 'KZ', Uzbek: 'UZ', Kyrgyz: 'KG', Turkmen: 'TM', Estonian: 'EE', Latvian: 'LV', Lithuanian: 'LT', American: 'US', Canadian: 'CA', Brazilian: 'BR', Argentinian: 'AR', Paraguayan: 'PY', Uruguayan: 'UY', Chilean: 'CL', Colombian: 'CO', Peruvian: 'PE', Mexican: 'MX', Costa: 'CR', Jamaican: 'JM', Nigerian: 'NG', Ghanaian: 'GH', Ivorian: 'CI', Senegalese: 'SN', Algerian: 'DZ', Moroccan: 'MA', Tunisian: 'TN', Egyptian: 'EG', South: 'ZA', Japanese: 'JP', SouthKorean: 'KR', Chinese: 'CN', Australian: 'AU', NewZealander: 'NZ', Cypriot: 'CY', Gabonese: 'GA', Surinamese: 'SR', Malian: 'ML', DR: 'CD', Cape: 'CV', Honduran: 'HN', Macedonian: 'MK', Angolan: 'AO', Congolese: 'CG', Slovak: 'SK', Kosovan: 'XK', Icelandic: 'IS', Qatari: 'QA', Saudi: 'SA', Emirati: 'AE', Kuwaiti: 'KW', Bahraini: 'BH', Omani: 'OM', Palestinian: 'PS', Israeli: 'IL', Syrian: 'SY', Lebanese: 'LB', Jordanian: 'JO', Iraqi: 'IQ', Iranian: 'IR', Afghan: 'AF', Pakistani: 'PK', Indian: 'IN', Bangladeshi: 'BD', Sri: 'LK', Thai: 'TH', Vietnamese: 'VN', Indonesian: 'ID', Malaysian: 'MY', Singaporean: 'SG', Filipino: 'PH', Mongolian: 'MN', Hong: 'HK', Taiwanese: 'TW', North: 'KP', Equatoguinean: 'GQ', BissauGuinean: 'GW'
  };
  let code = countryMap[mainCountry];
  if (!code && mainCountry === 'South') code = 'ZA'; // South African
  if (!code && mainCountry === 'DR') code = 'CD'; // DR Congo
  if (!code && mainCountry === 'Cape') code = 'CV'; // Cape Verdean
  if (!code) return mainCountry; // fallback to name
  // Convert country code to flag emoji
  return String.fromCodePoint(...[...code.toUpperCase()].map(c => 0x1f1e6 + c.charCodeAt(0) - 65));
}
