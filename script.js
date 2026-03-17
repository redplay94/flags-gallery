const COUNTRIES = [
  // Africa
  { name: 'Algeria', code: 'dz', area: 2381741, continent: 'Africa', dominant_colors: { white: 50, green: 50 }, symbols: ['crescent', 'star'] },
  { name: 'Angola', code: 'ao', area: 1246700, continent: 'Africa', dominant_colors: { red: 50, black: 50 }, symbols: ['star', 'weapon'] },
  { name: 'Benin', code: 'bj', area: 112622, continent: 'Africa', dominant_colors: { green: 33, yellow: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Botswana', code: 'bw', area: 581730, continent: 'Africa', dominant_colors: { blue: 60, white: 25, black: 15 }, symbols: ['stripes'] },
  { name: 'Burkina Faso', code: 'bf', area: 274222, continent: 'Africa', dominant_colors: { red: 50, green: 50, yellow: 5 }, symbols: ['star'] },
  { name: 'Burundi', code: 'bi', area: 27834, continent: 'Africa', dominant_colors: { red: 40, white: 20, green: 40 }, symbols: ['star', 'cross'] },
  { name: 'Cameroon', code: 'cm', area: 475442, continent: 'Africa', dominant_colors: { green: 33, red: 33, yellow: 33 }, symbols: ['star', 'tricolor'] },
  { name: 'Cape Verde', code: 'cv', area: 4033, continent: 'Africa', dominant_colors: { blue: 60, white: 20, red: 10, yellow: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Central African Republic', code: 'cf', area: 622984, continent: 'Africa', dominant_colors: { blue: 20, white: 20, green: 20, yellow: 25, red: 15 }, symbols: ['star', 'stripes'] },
  { name: 'Chad', code: 'td', area: 1284000, continent: 'Africa', dominant_colors: { blue: 33, yellow: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Comoros', code: 'km', area: 1861, continent: 'Africa', dominant_colors: { green: 50, yellow: 15, white: 10, red: 10, blue: 15 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Congo', code: 'cg', area: 342000, continent: 'Africa', dominant_colors: { green: 40, yellow: 20, red: 40 }, symbols: ['tricolor'] },
  { name: 'DR Congo', code: 'cd', area: 2344858, continent: 'Africa', dominant_colors: { blue: 70, red: 20, yellow: 5, white: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Djibouti', code: 'dj', area: 23200, continent: 'Africa', dominant_colors: { blue: 40, green: 40, white: 15, red: 5 }, symbols: ['star'] },
  { name: 'Egypt', code: 'eg', area: 1002450, continent: 'Africa', dominant_colors: { red: 33, white: 33, black: 33 }, symbols: ['eagle', 'stripes', 'shield'] },
  { name: 'Equatorial Guinea', code: 'gq', area: 28051, continent: 'Africa', dominant_colors: { green: 33, white: 33, red: 33, blue: 5 }, symbols: ['tree', 'stripes', 'shield'] },
  { name: 'Eritrea', code: 'er', area: 117600, continent: 'Africa', dominant_colors: { green: 33, red: 50, blue: 17, yellow: 5 }, symbols: ['tree'] },
  { name: 'Eswatini', code: 'sz', area: 17364, continent: 'Africa', dominant_colors: { blue: 30, yellow: 20, red: 30, black: 15, white: 5 }, symbols: ['shield', 'weapon'] },
  { name: 'Ethiopia', code: 'et', area: 1104300, continent: 'Africa', dominant_colors: { green: 33, yellow: 33, red: 33, blue: 5 }, symbols: ['star', 'tricolor'] },
  { name: 'Gabon', code: 'ga', area: 267668, continent: 'Africa', dominant_colors: { green: 33, yellow: 33, blue: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Gambia', code: 'gm', area: 11295, continent: 'Africa', dominant_colors: { red: 33, blue: 20, green: 33, white: 14 }, symbols: ['stripes'] },
  { name: 'Ghana', code: 'gh', area: 238533, continent: 'Africa', dominant_colors: { red: 33, yellow: 33, green: 33, black: 5 }, symbols: ['star'] },
  { name: 'Guinea', code: 'gn', area: 245857, continent: 'Africa', dominant_colors: { red: 33, yellow: 33, green: 33 }, symbols: ['tricolor'] },
  { name: 'Guinea-Bissau', code: 'gw', area: 36125, continent: 'Africa', dominant_colors: { red: 25, yellow: 37, green: 37, black: 5 }, symbols: ['star'] },
  { name: 'Ivory Coast', code: 'ci', area: 322463, continent: 'Africa', dominant_colors: { orange: 33, white: 33, green: 33 }, symbols: ['tricolor'] },
  { name: 'Kenya', code: 'ke', area: 580367, continent: 'Africa', dominant_colors: { black: 33, red: 20, green: 33, white: 14 }, symbols: ['shield', 'weapon', 'stripes'] },
  { name: 'Lesotho', code: 'ls', area: 30355, continent: 'Africa', dominant_colors: { blue: 33, white: 33, green: 33, black: 5 }, symbols: ['stripes'] },
  { name: 'Liberia', code: 'lr', area: 111369, continent: 'Africa', dominant_colors: { red: 55, white: 30, blue: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Libya', code: 'ly', area: 1759541, continent: 'Africa', dominant_colors: { red: 25, black: 50, green: 25 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Madagascar', code: 'mg', area: 587041, continent: 'Africa', dominant_colors: { white: 33, red: 33, green: 33 }, symbols: ['tricolor'] },
  { name: 'Malawi', code: 'mw', area: 118484, continent: 'Africa', dominant_colors: { black: 33, red: 33, green: 33 }, symbols: ['sun', 'stripes'] },
  { name: 'Mali', code: 'ml', area: 1240192, continent: 'Africa', dominant_colors: { green: 33, yellow: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Mauritania', code: 'mr', area: 1030700, continent: 'Africa', dominant_colors: { green: 80, yellow: 10, red: 10 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Mauritius', code: 'mu', area: 2040, continent: 'Africa', dominant_colors: { red: 25, blue: 25, yellow: 25, green: 25 }, symbols: ['stripes'] },
  { name: 'Morocco', code: 'ma', area: 446550, continent: 'Africa', dominant_colors: { red: 95, green: 5 }, symbols: ['star'] },
  { name: 'Mozambique', code: 'mz', area: 801590, continent: 'Africa', dominant_colors: { green: 40, white: 10, black: 15, red: 25, yellow: 5 }, symbols: ['star', 'weapon', 'tree'] },
  { name: 'Namibia', code: 'na', area: 824292, continent: 'Africa', dominant_colors: { blue: 33, red: 33, green: 33, yellow: 5 }, symbols: ['sun', 'stripes'] },
  { name: 'Niger', code: 'ne', area: 1267000, continent: 'Africa', dominant_colors: { orange: 33, white: 33, green: 33 }, symbols: ['stripes'] },
  { name: 'Nigeria', code: 'ng', area: 923768, continent: 'Africa', dominant_colors: { green: 67, white: 33 }, symbols: ['stripes', 'tricolor'] },
  { name: 'Rwanda', code: 'rw', area: 26338, continent: 'Africa', dominant_colors: { blue: 50, yellow: 25, green: 25 }, symbols: ['sun', 'stripes'] },
  { name: 'S\u00e3o Tom\u00e9 and Pr\u00edncipe', code: 'st', area: 964, continent: 'Africa', dominant_colors: { green: 40, yellow: 40, red: 20, black: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Senegal', code: 'sn', area: 196722, continent: 'Africa', dominant_colors: { green: 33, yellow: 33, red: 33 }, symbols: ['star', 'tricolor'] },
  { name: 'Seychelles', code: 'sc', area: 455, continent: 'Africa', dominant_colors: { blue: 25, yellow: 20, red: 20, white: 15, green: 20 }, symbols: ['stripes'] },
  { name: 'Sierra Leone', code: 'sl', area: 71740, continent: 'Africa', dominant_colors: { green: 33, white: 33, blue: 33 }, symbols: ['stripes'] },
  { name: 'Somalia', code: 'so', area: 637657, continent: 'Africa', dominant_colors: { blue: 95, white: 5 }, symbols: ['star'] },
  { name: 'South Africa', code: 'za', area: 1219090, continent: 'Africa', dominant_colors: { green: 25, red: 25, blue: 25, black: 10, yellow: 10, white: 5 }, symbols: ['stripes'] },
  { name: 'South Sudan', code: 'ss', area: 619745, continent: 'Africa', dominant_colors: { black: 25, red: 30, green: 25, blue: 15, yellow: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Sudan', code: 'sd', area: 1861484, continent: 'Africa', dominant_colors: { red: 33, white: 33, black: 33, green: 10 }, symbols: ['stripes'] },
  { name: 'Tanzania', code: 'tz', area: 945087, continent: 'Africa', dominant_colors: { green: 40, blue: 40, black: 20, yellow: 5 }, symbols: ['stripes'] },
  { name: 'Togo', code: 'tg', area: 56785, continent: 'Africa', dominant_colors: { green: 50, yellow: 30, red: 15, white: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Tunisia', code: 'tn', area: 163610, continent: 'Africa', dominant_colors: { red: 80, white: 20 }, symbols: ['crescent', 'star'] },
  { name: 'Uganda', code: 'ug', area: 241038, continent: 'Africa', dominant_colors: { black: 33, yellow: 33, red: 33 }, symbols: ['bird', 'stripes'] },
  { name: 'Western Sahara', code: 'eh', area: 266000, continent: 'Africa', dominant_colors: { black: 33, white: 33, green: 33, red: 5 }, symbols: ['crescent', 'stripes'] },
  { name: 'Zambia', code: 'zm', area: 752618, continent: 'Africa', dominant_colors: { green: 75, red: 10, black: 10, yellow: 5 }, symbols: ['eagle', 'stripes'] },
  { name: 'Zimbabwe', code: 'zw', area: 390757, continent: 'Africa', dominant_colors: { green: 40, yellow: 20, red: 20, black: 10, white: 5 }, symbols: ['bird', 'star', 'stripes'] },

  // Asia
  { name: 'Afghanistan', code: 'af', area: 652230, continent: 'Asia', dominant_colors: { black: 25, red: 25, green: 25, white: 15 }, symbols: ['shield', 'stripes'] },
  { name: 'Armenia', code: 'am', area: 29743, continent: 'Asia', dominant_colors: { red: 33, blue: 33, orange: 33 }, symbols: ['tricolor'] },
  { name: 'Azerbaijan', code: 'az', area: 86600, continent: 'Asia', dominant_colors: { blue: 33, red: 33, green: 33 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Bahrain', code: 'bh', area: 765, continent: 'Asia', dominant_colors: { red: 75, white: 25 }, symbols: [] },
  { name: 'Bangladesh', code: 'bd', area: 147570, continent: 'Asia', dominant_colors: { green: 75, red: 25 }, symbols: [] },
  { name: 'Bhutan', code: 'bt', area: 38394, continent: 'Asia', dominant_colors: { orange: 50, red: 50, white: 5 }, symbols: ['dragon'] },
  { name: 'Brunei', code: 'bn', area: 5765, continent: 'Asia', dominant_colors: { yellow: 50, white: 20, black: 20, red: 10 }, symbols: ['crescent', 'shield', 'weapon', 'stripes'] },
  { name: 'Cambodia', code: 'kh', area: 181035, continent: 'Asia', dominant_colors: { blue: 40, red: 40, white: 20 }, symbols: ['shield'] },
  { name: 'China', code: 'cn', area: 9596960, continent: 'Asia', dominant_colors: { red: 90, yellow: 10 }, symbols: ['star'] },
  { name: 'Cyprus', code: 'cy', area: 9251, continent: 'Asia', dominant_colors: { white: 70, orange: 20, green: 10 }, symbols: ['tree', 'shield'] },
  { name: 'Georgia', code: 'ge', area: 69700, continent: 'Asia', dominant_colors: { white: 70, red: 30 }, symbols: ['cross'] },
  { name: 'Hong Kong', code: 'hk', area: 1104, continent: 'Asia', dominant_colors: { red: 80, white: 20 }, symbols: ['tree'] },
  { name: 'India', code: 'in', area: 3287263, continent: 'Asia', dominant_colors: { orange: 33, white: 33, green: 33, blue: 5 }, symbols: ['sun', 'stripes'] },
  { name: 'Indonesia', code: 'id', area: 1904569, continent: 'Asia', dominant_colors: { red: 50, white: 50 }, symbols: ['stripes'] },
  { name: 'Iran', code: 'ir', area: 1648195, continent: 'Asia', dominant_colors: { green: 33, white: 33, red: 33 }, symbols: ['stripes'] },
  { name: 'Iraq', code: 'iq', area: 438317, continent: 'Asia', dominant_colors: { red: 33, white: 33, black: 33, green: 5 }, symbols: ['stripes'] },
  { name: 'Israel', code: 'il', area: 20770, continent: 'Asia', dominant_colors: { white: 75, blue: 25 }, symbols: ['star', 'stripes'] },
  { name: 'Japan', code: 'jp', area: 377930, continent: 'Asia', dominant_colors: { white: 80, red: 20 }, symbols: ['sun'] },
  { name: 'Jordan', code: 'jo', area: 89342, continent: 'Asia', dominant_colors: { black: 33, white: 33, green: 33, red: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Kazakhstan', code: 'kz', area: 2724900, continent: 'Asia', dominant_colors: { blue: 85, yellow: 15 }, symbols: ['sun', 'eagle'] },
  { name: 'Kuwait', code: 'kw', area: 17818, continent: 'Asia', dominant_colors: { green: 33, white: 33, red: 33, black: 10 }, symbols: ['stripes'] },
  { name: 'Kyrgyzstan', code: 'kg', area: 199951, continent: 'Asia', dominant_colors: { red: 85, yellow: 15 }, symbols: ['sun'] },
  { name: 'Laos', code: 'la', area: 236800, continent: 'Asia', dominant_colors: { red: 40, blue: 40, white: 20 }, symbols: ['stripes'] },
  { name: 'Lebanon', code: 'lb', area: 10452, continent: 'Asia', dominant_colors: { red: 40, white: 40, green: 20 }, symbols: ['tree', 'stripes'] },
  { name: 'Macau', code: 'mo', area: 33, continent: 'Asia', dominant_colors: { green: 80, white: 20 }, symbols: ['star', 'tree'] },
  { name: 'Malaysia', code: 'my', area: 329847, continent: 'Asia', dominant_colors: { red: 35, white: 35, blue: 20, yellow: 10 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Maldives', code: 'mv', area: 298, continent: 'Asia', dominant_colors: { red: 40, green: 45, white: 15 }, symbols: ['crescent'] },
  { name: 'Mongolia', code: 'mn', area: 1564116, continent: 'Asia', dominant_colors: { red: 50, blue: 33, yellow: 10 }, symbols: ['sun', 'moon', 'stripes'] },
  { name: 'Myanmar', code: 'mm', area: 676578, continent: 'Asia', dominant_colors: { yellow: 33, green: 33, red: 33, white: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Nepal', code: 'np', area: 147181, continent: 'Asia', dominant_colors: { red: 75, blue: 15, white: 10 }, symbols: ['moon', 'sun'] },
  { name: 'North Korea', code: 'kp', area: 120538, continent: 'Asia', dominant_colors: { blue: 40, white: 20, red: 40 }, symbols: ['star', 'stripes'] },
  { name: 'Oman', code: 'om', area: 309500, continent: 'Asia', dominant_colors: { red: 50, white: 33, green: 17 }, symbols: ['weapon', 'stripes'] },
  { name: 'Pakistan', code: 'pk', area: 881913, continent: 'Asia', dominant_colors: { green: 75, white: 25 }, symbols: ['crescent', 'star'] },
  { name: 'Palestine', code: 'ps', area: 6220, continent: 'Asia', dominant_colors: { black: 25, white: 25, green: 25, red: 25 }, symbols: ['stripes'] },
  { name: 'Philippines', code: 'ph', area: 300000, continent: 'Asia', dominant_colors: { blue: 33, red: 33, white: 20, yellow: 10 }, symbols: ['sun', 'star', 'stripes'] },
  { name: 'Qatar', code: 'qa', area: 11586, continent: 'Asia', dominant_colors: { red: 75, white: 25 }, symbols: [] },
  { name: 'Saudi Arabia', code: 'sa', area: 2149690, continent: 'Asia', dominant_colors: { green: 85, white: 15 }, symbols: ['weapon'] },
  { name: 'Singapore', code: 'sg', area: 728, continent: 'Asia', dominant_colors: { red: 50, white: 50 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'South Korea', code: 'kr', area: 100210, continent: 'Asia', dominant_colors: { white: 75, red: 10, blue: 10, black: 5 }, symbols: ['sun'] },
  { name: 'Sri Lanka', code: 'lk', area: 65610, continent: 'Asia', dominant_colors: { red: 60, yellow: 20, green: 10, orange: 10 }, symbols: ['lion', 'stripes', 'weapon'] },
  { name: 'Syria', code: 'sy', area: 185180, continent: 'Asia', dominant_colors: { red: 33, white: 33, black: 33, green: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Taiwan', code: 'tw', area: 36193, continent: 'Asia', dominant_colors: { red: 75, blue: 20, white: 5 }, symbols: ['sun', 'star'] },
  { name: 'Tajikistan', code: 'tj', area: 143100, continent: 'Asia', dominant_colors: { red: 33, white: 33, green: 33 }, symbols: ['star', 'crown', 'stripes'] },
  { name: 'Thailand', code: 'th', area: 513120, continent: 'Asia', dominant_colors: { red: 40, white: 20, blue: 40 }, symbols: ['stripes'] },
  { name: 'Timor-Leste', code: 'tl', area: 14874, continent: 'Asia', dominant_colors: { red: 65, black: 20, yellow: 10, white: 5 }, symbols: ['star'] },
  { name: 'Turkey', code: 'tr', area: 783562, continent: 'Asia', dominant_colors: { red: 85, white: 15 }, symbols: ['crescent', 'star'] },
  { name: 'Turkmenistan', code: 'tm', area: 488100, continent: 'Asia', dominant_colors: { green: 80, red: 15, white: 5 }, symbols: ['crescent', 'star'] },
  { name: 'United Arab Emirates', code: 'ae', area: 83600, continent: 'Asia', dominant_colors: { red: 25, green: 33, white: 25, black: 17 }, symbols: ['stripes'] },
  { name: 'Uzbekistan', code: 'uz', area: 447400, continent: 'Asia', dominant_colors: { blue: 33, white: 33, green: 33 }, symbols: ['crescent', 'star', 'stripes'] },
  { name: 'Vietnam', code: 'vn', area: 331212, continent: 'Asia', dominant_colors: { red: 90, yellow: 10 }, symbols: ['star'] },
  { name: 'Yemen', code: 'ye', area: 527968, continent: 'Asia', dominant_colors: { red: 33, white: 33, black: 33 }, symbols: ['stripes'] },

  // Europe
  { name: 'Albania', code: 'al', area: 28748, continent: 'Europe', dominant_colors: { red: 70, black: 30 }, symbols: ['eagle'] },
  { name: 'Andorra', code: 'ad', area: 468, continent: 'Europe', dominant_colors: { blue: 33, yellow: 33, red: 33 }, symbols: ['shield', 'tricolor'] },
  { name: 'Austria', code: 'at', area: 83871, continent: 'Europe', dominant_colors: { red: 67, white: 33 }, symbols: ['stripes'] },
  { name: 'Belarus', code: 'by', area: 207600, continent: 'Europe', dominant_colors: { red: 60, green: 30, white: 10 }, symbols: ['stripes'] },
  { name: 'Belgium', code: 'be', area: 30528, continent: 'Europe', dominant_colors: { black: 33, yellow: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Bosnia and Herzegovina', code: 'ba', area: 51197, continent: 'Europe', dominant_colors: { blue: 60, yellow: 30, white: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Bulgaria', code: 'bg', area: 110879, continent: 'Europe', dominant_colors: { white: 33, green: 33, red: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Croatia', code: 'hr', area: 56594, continent: 'Europe', dominant_colors: { red: 33, white: 33, blue: 33 }, symbols: ['shield', 'tricolor', 'stripes'] },
  { name: 'Czechia', code: 'cz', area: 78866, continent: 'Europe', dominant_colors: { white: 33, red: 33, blue: 33 }, symbols: ['tricolor'] },
  { name: 'Denmark', code: 'dk', area: 42924, continent: 'Europe', dominant_colors: { red: 75, white: 25 }, symbols: ['cross'] },
  { name: 'Estonia', code: 'ee', area: 45228, continent: 'Europe', dominant_colors: { blue: 33, black: 33, white: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Faroe Islands', code: 'fo', area: 1399, continent: 'Europe', dominant_colors: { white: 60, red: 20, blue: 20 }, symbols: ['cross'] },
  { name: 'Finland', code: 'fi', area: 338145, continent: 'Europe', dominant_colors: { white: 75, blue: 25 }, symbols: ['cross'] },
  { name: 'France', code: 'fr', area: 551695, continent: 'Europe', dominant_colors: { blue: 33, white: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Germany', code: 'de', area: 357114, continent: 'Europe', dominant_colors: { black: 33, red: 33, yellow: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Gibraltar', code: 'gi', area: 7, continent: 'Europe', dominant_colors: { white: 67, red: 33 }, symbols: ['shield', 'stripes'] },
  { name: 'Greece', code: 'gr', area: 131957, continent: 'Europe', dominant_colors: { blue: 60, white: 40 }, symbols: ['cross', 'stripes'] },
  { name: 'Guernsey', code: 'gg', area: 78, continent: 'Europe', dominant_colors: { white: 60, red: 30, yellow: 10 }, symbols: ['cross'] },
  { name: 'Hungary', code: 'hu', area: 93028, continent: 'Europe', dominant_colors: { red: 33, white: 33, green: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Iceland', code: 'is', area: 103000, continent: 'Europe', dominant_colors: { blue: 65, white: 15, red: 20 }, symbols: ['cross'] },
  { name: 'Ireland', code: 'ie', area: 70273, continent: 'Europe', dominant_colors: { green: 33, white: 33, orange: 33 }, symbols: ['tricolor'] },
  { name: 'Isle of Man', code: 'im', area: 572, continent: 'Europe', dominant_colors: { red: 80, white: 20 }, symbols: ['crown'] },
  { name: 'Italy', code: 'it', area: 301340, continent: 'Europe', dominant_colors: { green: 33, white: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Jersey', code: 'je', area: 116, continent: 'Europe', dominant_colors: { white: 70, red: 25, yellow: 5 }, symbols: ['cross', 'crown'] },
  { name: 'Kosovo', code: 'xk', area: 10908, continent: 'Europe', dominant_colors: { blue: 75, yellow: 20, white: 5 }, symbols: ['star'] },
  { name: 'Latvia', code: 'lv', area: 64589, continent: 'Europe', dominant_colors: { red: 67, white: 33 }, symbols: ['stripes'] },
  { name: 'Liechtenstein', code: 'li', area: 160, continent: 'Europe', dominant_colors: { blue: 50, red: 50, yellow: 5 }, symbols: ['crown', 'stripes'] },
  { name: 'Lithuania', code: 'lt', area: 65300, continent: 'Europe', dominant_colors: { yellow: 33, green: 33, red: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Luxembourg', code: 'lu', area: 2586, continent: 'Europe', dominant_colors: { red: 33, white: 33, blue: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Malta', code: 'mt', area: 316, continent: 'Europe', dominant_colors: { white: 50, red: 50 }, symbols: ['cross', 'shield'] },
  { name: 'Moldova', code: 'md', area: 33846, continent: 'Europe', dominant_colors: { blue: 33, yellow: 33, red: 33 }, symbols: ['eagle', 'shield', 'tricolor'] },
  { name: 'Monaco', code: 'mc', area: 2, continent: 'Europe', dominant_colors: { red: 50, white: 50 }, symbols: ['stripes'] },
  { name: 'Montenegro', code: 'me', area: 13812, continent: 'Europe', dominant_colors: { red: 80, yellow: 15, white: 5 }, symbols: ['eagle', 'shield', 'crown'] },
  { name: 'Netherlands', code: 'nl', area: 41543, continent: 'Europe', dominant_colors: { red: 33, white: 33, blue: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'North Macedonia', code: 'mk', area: 25713, continent: 'Europe', dominant_colors: { red: 80, yellow: 20 }, symbols: ['sun'] },
  { name: 'Norway', code: 'no', area: 323802, continent: 'Europe', dominant_colors: { red: 70, white: 15, blue: 15 }, symbols: ['cross'] },
  { name: 'Poland', code: 'pl', area: 312696, continent: 'Europe', dominant_colors: { white: 50, red: 50 }, symbols: ['stripes'] },
  { name: 'Portugal', code: 'pt', area: 92212, continent: 'Europe', dominant_colors: { green: 40, red: 60 }, symbols: ['shield', 'stripes'] },
  { name: 'Romania', code: 'ro', area: 238397, continent: 'Europe', dominant_colors: { blue: 33, yellow: 33, red: 33 }, symbols: ['tricolor'] },
  { name: 'Russia', code: 'ru', area: 17098242, continent: 'Europe', dominant_colors: { white: 33, blue: 33, red: 33 }, symbols: ['tricolor', 'stripes'] },
  { name: 'San Marino', code: 'sm', area: 61, continent: 'Europe', dominant_colors: { blue: 50, white: 50 }, symbols: ['shield', 'crown', 'stripes'] },
  { name: 'Serbia', code: 'rs', area: 77474, continent: 'Europe', dominant_colors: { red: 33, blue: 33, white: 33 }, symbols: ['eagle', 'shield', 'tricolor', 'cross'] },
  { name: 'Slovakia', code: 'sk', area: 49035, continent: 'Europe', dominant_colors: { white: 33, blue: 33, red: 33 }, symbols: ['cross', 'shield', 'stripes'] },
  { name: 'Slovenia', code: 'si', area: 20273, continent: 'Europe', dominant_colors: { white: 33, blue: 33, red: 33 }, symbols: ['shield', 'star', 'stripes'] },
  { name: 'Spain', code: 'es', area: 505990, continent: 'Europe', dominant_colors: { red: 50, yellow: 33 }, symbols: ['shield', 'crown', 'stripes'] },
  { name: 'Sweden', code: 'se', area: 450295, continent: 'Europe', dominant_colors: { blue: 75, yellow: 25 }, symbols: ['cross'] },
  { name: 'Switzerland', code: 'ch', area: 41285, continent: 'Europe', dominant_colors: { red: 80, white: 20 }, symbols: ['cross'] },
  { name: 'Ukraine', code: 'ua', area: 603550, continent: 'Europe', dominant_colors: { blue: 50, yellow: 50 }, symbols: ['stripes'] },
  { name: 'United Kingdom', code: 'gb', area: 242495, continent: 'Europe', dominant_colors: { blue: 40, red: 30, white: 30 }, symbols: ['cross'] },
  { name: 'Vatican City', code: 'va', area: 0.44, continent: 'Europe', dominant_colors: { yellow: 50, white: 50 }, symbols: ['shield', 'crown', 'cross'] },

  // North America
  { name: 'Antigua and Barbuda', code: 'ag', area: 443, continent: 'North America', dominant_colors: { black: 30, blue: 25, white: 15, red: 20, yellow: 10 }, symbols: ['sun'] },
  { name: 'Aruba', code: 'aw', area: 180, continent: 'North America', dominant_colors: { blue: 80, yellow: 10, red: 5, white: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Bahamas', code: 'bs', area: 13943, continent: 'North America', dominant_colors: { black: 20, blue: 50, yellow: 30 }, symbols: ['stripes'] },
  { name: 'Barbados', code: 'bb', area: 430, continent: 'North America', dominant_colors: { blue: 66, yellow: 33, black: 5 }, symbols: ['weapon'] },
  { name: 'Belize', code: 'bz', area: 22966, continent: 'North America', dominant_colors: { blue: 60, red: 20, white: 10, green: 5 }, symbols: ['shield', 'tree', 'stripes'] },
  { name: 'Bermuda', code: 'bm', area: 54, continent: 'North America', dominant_colors: { red: 60, blue: 20, white: 15, yellow: 5 }, symbols: ['lion', 'shield', 'cross'] },
  { name: 'Canada', code: 'ca', area: 9984670, continent: 'North America', dominant_colors: { red: 50, white: 50 }, symbols: ['tree', 'stripes'] },
  { name: 'Cayman Islands', code: 'ky', area: 264, continent: 'North America', dominant_colors: { blue: 60, red: 15, white: 15, green: 5 }, symbols: ['shield', 'fish', 'cross'] },
  { name: 'Costa Rica', code: 'cr', area: 51100, continent: 'North America', dominant_colors: { blue: 40, white: 30, red: 30 }, symbols: ['shield', 'stripes'] },
  { name: 'Cuba', code: 'cu', area: 109884, continent: 'North America', dominant_colors: { blue: 40, white: 35, red: 25 }, symbols: ['star', 'stripes'] },
  { name: 'Cura\u00e7ao', code: 'cw', area: 444, continent: 'North America', dominant_colors: { blue: 85, yellow: 5, white: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Dominica', code: 'dm', area: 751, continent: 'North America', dominant_colors: { green: 60, red: 15, yellow: 10, black: 10, white: 5 }, symbols: ['bird', 'cross', 'star'] },
  { name: 'Dominican Republic', code: 'do', area: 48671, continent: 'North America', dominant_colors: { blue: 40, red: 40, white: 20 }, symbols: ['cross', 'shield', 'stripes'] },
  { name: 'El Salvador', code: 'sv', area: 21041, continent: 'North America', dominant_colors: { blue: 60, white: 40 }, symbols: ['shield', 'stripes'] },
  { name: 'Greenland', code: 'gl', area: 2166086, continent: 'North America', dominant_colors: { white: 60, red: 40 }, symbols: [] },
  { name: 'Grenada', code: 'gd', area: 344, continent: 'North America', dominant_colors: { red: 40, yellow: 30, green: 30 }, symbols: ['star', 'tree', 'stripes'] },
  { name: 'Guatemala', code: 'gt', area: 108889, continent: 'North America', dominant_colors: { blue: 50, white: 33, green: 5 }, symbols: ['bird', 'shield', 'weapon', 'stripes'] },
  { name: 'Haiti', code: 'ht', area: 27750, continent: 'North America', dominant_colors: { blue: 50, red: 50 }, symbols: ['shield', 'tree', 'weapon', 'stripes'] },
  { name: 'Honduras', code: 'hn', area: 112492, continent: 'North America', dominant_colors: { blue: 60, white: 40 }, symbols: ['star', 'stripes'] },
  { name: 'Jamaica', code: 'jm', area: 10991, continent: 'North America', dominant_colors: { yellow: 33, black: 33, green: 33 }, symbols: ['cross'] },
  { name: 'Mexico', code: 'mx', area: 1964375, continent: 'North America', dominant_colors: { green: 33, white: 33, red: 33 }, symbols: ['eagle', 'snake', 'tricolor'] },
  { name: 'Nicaragua', code: 'ni', area: 130370, continent: 'North America', dominant_colors: { blue: 60, white: 40 }, symbols: ['shield', 'stripes'] },
  { name: 'Panama', code: 'pa', area: 75417, continent: 'North America', dominant_colors: { red: 25, white: 50, blue: 25 }, symbols: ['star'] },
  { name: 'Puerto Rico', code: 'pr', area: 9104, continent: 'North America', dominant_colors: { red: 40, white: 35, blue: 20 }, symbols: ['star', 'stripes'] },
  { name: 'Saint Kitts and Nevis', code: 'kn', area: 261, continent: 'North America', dominant_colors: { green: 30, yellow: 20, black: 20, red: 20, white: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Saint Lucia', code: 'lc', area: 616, continent: 'North America', dominant_colors: { blue: 70, black: 15, white: 5, yellow: 10 }, symbols: ['stripes'] },
  { name: 'Saint Vincent and the Grenadines', code: 'vc', area: 389, continent: 'North America', dominant_colors: { blue: 33, yellow: 33, green: 33 }, symbols: ['tricolor'] },
  { name: 'Trinidad and Tobago', code: 'tt', area: 5130, continent: 'North America', dominant_colors: { red: 65, white: 15, black: 20 }, symbols: ['stripes'] },
  { name: 'United States', code: 'us', area: 9833517, continent: 'North America', dominant_colors: { red: 40, white: 30, blue: 25 }, symbols: ['star', 'stripes'] },

  // South America
  { name: 'Argentina', code: 'ar', area: 2780400, continent: 'South America', dominant_colors: { blue: 60, white: 40 }, symbols: ['sun', 'stripes'] },
  { name: 'Bolivia', code: 'bo', area: 1098581, continent: 'South America', dominant_colors: { red: 33, yellow: 33, green: 33 }, symbols: ['shield', 'tricolor', 'stripes'] },
  { name: 'Brazil', code: 'br', area: 8515767, continent: 'South America', dominant_colors: { green: 55, yellow: 25, blue: 15, white: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Chile', code: 'cl', area: 756102, continent: 'South America', dominant_colors: { red: 40, white: 40, blue: 20 }, symbols: ['star', 'stripes'] },
  { name: 'Colombia', code: 'co', area: 1141748, continent: 'South America', dominant_colors: { yellow: 50, blue: 25, red: 25 }, symbols: ['tricolor', 'stripes'] },
  { name: 'Ecuador', code: 'ec', area: 256369, continent: 'South America', dominant_colors: { yellow: 50, blue: 25, red: 25 }, symbols: ['eagle', 'shield', 'stripes'] },
  { name: 'Guyana', code: 'gy', area: 214969, continent: 'South America', dominant_colors: { green: 50, white: 15, black: 10, red: 15, yellow: 10 }, symbols: ['stripes'] },
  { name: 'Paraguay', code: 'py', area: 406752, continent: 'South America', dominant_colors: { red: 33, white: 33, blue: 33 }, symbols: ['lion', 'star', 'shield', 'tricolor', 'stripes'] },
  { name: 'Peru', code: 'pe', area: 1285216, continent: 'South America', dominant_colors: { red: 67, white: 33 }, symbols: ['shield', 'stripes'] },
  { name: 'Suriname', code: 'sr', area: 163820, continent: 'South America', dominant_colors: { green: 50, white: 20, red: 30, yellow: 5 }, symbols: ['star', 'stripes'] },
  { name: 'Uruguay', code: 'uy', area: 176215, continent: 'South America', dominant_colors: { white: 55, blue: 40, yellow: 5 }, symbols: ['sun', 'stripes'] },
  { name: 'Venezuela', code: 've', area: 912050, continent: 'South America', dominant_colors: { yellow: 33, blue: 33, red: 33 }, symbols: ['star', 'horse', 'weapon', 'shield', 'tricolor', 'stripes'] },

  // Oceania
  { name: 'Australia', code: 'au', area: 7692024, continent: 'Oceania', dominant_colors: { blue: 60, red: 15, white: 20 }, symbols: ['star', 'cross'] },
  { name: 'Cook Islands', code: 'ck', area: 236, continent: 'Oceania', dominant_colors: { blue: 70, red: 10, white: 20 }, symbols: ['star', 'cross'] },
  { name: 'Fiji', code: 'fj', area: 18274, continent: 'Oceania', dominant_colors: { blue: 60, red: 15, white: 20 }, symbols: ['lion', 'shield', 'cross', 'bird'] },
  { name: 'French Polynesia', code: 'pf', area: 4167, continent: 'Oceania', dominant_colors: { red: 50, white: 30, blue: 20 }, symbols: ['stripes'] },
  { name: 'Kiribati', code: 'ki', area: 811, continent: 'Oceania', dominant_colors: { red: 50, blue: 40, yellow: 10 }, symbols: ['sun', 'bird', 'stripes'] },
  { name: 'Marshall Islands', code: 'mh', area: 181, continent: 'Oceania', dominant_colors: { blue: 70, white: 10, orange: 15, yellow: 5 }, symbols: ['sun', 'star'] },
  { name: 'Micronesia', code: 'fm', area: 702, continent: 'Oceania', dominant_colors: { blue: 90, white: 10 }, symbols: ['star'] },
  { name: 'Nauru', code: 'nr', area: 21, continent: 'Oceania', dominant_colors: { blue: 80, yellow: 10, white: 10 }, symbols: ['star', 'stripes'] },
  { name: 'New Caledonia', code: 'nc', area: 18575, continent: 'Oceania', dominant_colors: { blue: 33, red: 33, green: 33, yellow: 5 }, symbols: ['sun'] },
  { name: 'New Zealand', code: 'nz', area: 268838, continent: 'Oceania', dominant_colors: { blue: 65, red: 20, white: 15 }, symbols: ['star', 'cross'] },
  { name: 'Niue', code: 'nu', area: 260, continent: 'Oceania', dominant_colors: { yellow: 60, blue: 25, red: 5, white: 10 }, symbols: ['star', 'cross'] },
  { name: 'Palau', code: 'pw', area: 459, continent: 'Oceania', dominant_colors: { blue: 80, yellow: 20 }, symbols: [] },
  { name: 'Papua New Guinea', code: 'pg', area: 462840, continent: 'Oceania', dominant_colors: { red: 40, black: 40, yellow: 15, white: 5 }, symbols: ['bird', 'star'] },
  { name: 'Samoa', code: 'ws', area: 2842, continent: 'Oceania', dominant_colors: { red: 70, blue: 20, white: 10 }, symbols: ['star'] },
  { name: 'Solomon Islands', code: 'sb', area: 28896, continent: 'Oceania', dominant_colors: { blue: 40, green: 40, yellow: 10, white: 10 }, symbols: ['star', 'stripes'] },
  { name: 'Tonga', code: 'to', area: 747, continent: 'Oceania', dominant_colors: { red: 80, white: 20 }, symbols: ['cross'] },
  { name: 'Tuvalu', code: 'tv', area: 26, continent: 'Oceania', dominant_colors: { blue: 70, red: 10, white: 10, yellow: 10 }, symbols: ['star', 'cross'] },
  { name: 'Vanuatu', code: 'vu', area: 12189, continent: 'Oceania', dominant_colors: { red: 40, green: 40, black: 15, yellow: 5 }, symbols: ['stripes'] },
];

COUNTRIES.sort((a, b) => b.area - a.area);
const MAX_AREA = COUNTRIES[0].area;

/* ── Population data (approximate, in persons) ──────────────── */
const POPULATION = {
  // Africa
  dz:45400000, ao:34500000, bj:12500000, bw:2600000,  bf:22000000,
  bi:12600000, cm:27200000, cv:560000,   cf:5500000,  td:17400000,
  km:870000,   cg:5800000,  cd:99000000, dj:1100000,  eg:104000000,
  gq:1500000,  er:3500000,  sz:1200000,  et:123000000, ga:2300000,
  gm:2600000,  gh:32000000, gn:13500000, gw:2000000,  ci:27500000,
  ke:54000000, ls:2200000,  lr:5200000,  ly:7100000,  mg:28800000,
  mw:20300000, ml:22400000, mr:4700000,  mu:1300000,  ma:37500000,
  mz:32500000, na:2600000,  ne:25000000, ng:218000000, rw:13800000,
  st:220000,   sn:17700000, sc:100000,   sl:8400000,  so:17100000,
  za:60000000, ss:11000000, sd:45700000, tz:63000000, tg:8500000,
  tn:12000000, ug:48000000, eh:600000,   zm:19500000, zw:15900000,
  // Asia
  af:41000000,   am:3000000,    az:10100000,  bh:1500000,   bd:167000000,
  bt:780000,     bn:440000,     kh:17000000,  cn:1412000000, cy:1200000,
  ge:4000000,    hk:7500000,    in:1420000000, id:277000000, ir:87000000,
  iq:42000000,   il:9200000,    jp:125000000, jo:10300000,  kz:19000000,
  kw:4300000,    kg:6700000,    la:7400000,   lb:5500000,   mo:660000,
  my:33000000,   mv:520000,     mn:3400000,   mm:54400000,  np:29700000,
  kp:25900000,   om:4500000,    pk:231000000, ps:5200000,   ph:114000000,
  qa:2700000,    sa:35000000,   sg:5700000,   kr:51700000,  lk:22200000,
  sy:21300000,   tw:23400000,   tj:9700000,   th:71600000,  tl:1300000,
  tr:85000000,   tm:6100000,    ae:9900000,   uz:35000000,  vn:98000000,
  ye:34000000,
  // Europe
  al:2800000,  ad:80000,    at:9100000,  by:9400000,  be:11600000,
  ba:3200000,  bg:6500000,  hr:3900000,  cz:10900000, dk:5900000,
  ee:1300000,  fo:55000,    fi:5500000,  fr:68000000, de:84000000,
  gi:33000,    gr:10700000, gg:67000,    hu:9700000,  is:370000,
  ie:5200000,  im:85000,    it:59000000, je:103000,   xk:1800000,
  lv:1800000,  li:39000,    lt:2800000,  lu:650000,   mt:520000,
  md:2600000,  mc:36000,    me:620000,   nl:17700000, mk:2100000,
  no:5400000,  pl:37700000, pt:10300000, ro:19000000, ru:144000000,
  sm:34000,    rs:6800000,  sk:5500000,  si:2100000,  es:47700000,
  se:10500000, ch:8700000,  ua:43000000, gb:67700000, va:800,
  // North America
  ag:93000,    aw:107000,    bs:400000,   bb:281000,   bz:400000,
  bm:63000,    ca:38200000,  ky:70000,    cr:5100000,  cu:11300000,
  cw:152000,   dm:72000,     do:11000000, sv:6500000,  gl:56000,
  gd:113000,   gt:17600000,  ht:11500000, hn:10300000, jm:3000000,
  mx:130000000, ni:6700000,  pa:4400000,  pr:3200000,  kn:53000,
  lc:180000,   vc:110000,    tt:1400000,  us:331000000,
  // South America
  ar:46000000, bo:12200000, br:215000000, cl:19600000, co:51500000,
  ec:18000000, gy:800000,   py:7400000,  pe:32000000,  sr:620000,
  uy:3500000,  ve:28300000,
  // Oceania
  au:26000000, ck:17000,  fj:930000,  pf:280000, ki:120000,
  mh:42000,    fm:115000, nr:10000,   nc:270000, nz:5100000,
  nu:1600,     pw:18000,  pg:9800000, ws:220000, sb:720000,
  to:100000,   tv:11000,  vu:320000,
};
/* ── Capital cities ─────────────────────────────────────────── */
const CAPITAL = {
  // Africa
  dz:'Algiers',      ao:'Luanda',         bj:'Porto-Novo',    bw:'Gaborone',      bf:'Ouagadougou',
  bi:'Gitega',       cm:'Yaoundé',        cv:'Praia',         cf:'Bangui',        td:"N'Djamena",
  km:'Moroni',       cg:'Brazzaville',    cd:'Kinshasa',      dj:'Djibouti',      eg:'Cairo',
  gq:'Malabo',       er:'Asmara',         sz:'Mbabane',       et:'Addis Ababa',   ga:'Libreville',
  gm:'Banjul',       gh:'Accra',          gn:'Conakry',       gw:'Bissau',        ci:'Yamoussoukro',
  ke:'Nairobi',      ls:'Maseru',         lr:'Monrovia',      ly:'Tripoli',       mg:'Antananarivo',
  mw:'Lilongwe',     ml:'Bamako',         mr:'Nouakchott',    mu:'Port Louis',    ma:'Rabat',
  mz:'Maputo',       na:'Windhoek',       ne:'Niamey',        ng:'Abuja',         rw:'Kigali',
  st:'São Tomé',     sn:'Dakar',          sc:'Victoria',      sl:'Freetown',      so:'Mogadishu',
  za:'Pretoria',     ss:'Juba',           sd:'Khartoum',      tz:'Dodoma',        tg:'Lomé',
  tn:'Tunis',        ug:'Kampala',        eh:'El Aaiún',      zm:'Lusaka',        zw:'Harare',
  // Asia
  af:'Kabul',        am:'Yerevan',        az:'Baku',          bh:'Manama',        bd:'Dhaka',
  bt:'Thimphu',      bn:'Bandar Seri Begawan', kh:'Phnom Penh', cn:'Beijing',     cy:'Nicosia',
  ge:'Tbilisi',      hk:'Hong Kong',      in:'New Delhi',     id:'Jakarta',       ir:'Tehran',
  iq:'Baghdad',      il:'Jerusalem',      jp:'Tokyo',         jo:'Amman',         kz:'Astana',
  kw:'Kuwait City',  kg:'Bishkek',        la:'Vientiane',     lb:'Beirut',        mo:'Macau',
  my:'Kuala Lumpur', mv:'Malé',           mn:'Ulaanbaatar',   mm:'Naypyidaw',     np:'Kathmandu',
  kp:'Pyongyang',    om:'Muscat',         pk:'Islamabad',     ps:'Ramallah',      ph:'Manila',
  qa:'Doha',         sa:'Riyadh',         sg:'Singapore',     kr:'Seoul',         lk:'Sri Jayawardenepura Kotte',
  sy:'Damascus',     tw:'Taipei',         tj:'Dushanbe',      th:'Bangkok',       tl:'Dili',
  tr:'Ankara',       tm:'Ashgabat',       ae:'Abu Dhabi',     uz:'Tashkent',      vn:'Hanoi',
  ye:"Sana'a",
  // Europe
  al:'Tirana',       ad:'Andorra la Vella', at:'Vienna',      by:'Minsk',         be:'Brussels',
  ba:'Sarajevo',     bg:'Sofia',          hr:'Zagreb',        cz:'Prague',        dk:'Copenhagen',
  ee:'Tallinn',      fo:'Tórshavn',       fi:'Helsinki',      fr:'Paris',         de:'Berlin',
  gi:'Gibraltar',    gr:'Athens',         gg:'St. Peter Port', hu:'Budapest',     is:'Reykjavík',
  ie:'Dublin',       im:'Douglas',        it:'Rome',          je:'Saint Helier',  xk:'Pristina',
  lv:'Riga',         li:'Vaduz',          lt:'Vilnius',       lu:'Luxembourg',    mt:'Valletta',
  md:'Chișinău',     mc:'Monaco',         me:'Podgorica',     nl:'Amsterdam',     mk:'Skopje',
  no:'Oslo',         pl:'Warsaw',         pt:'Lisbon',        ro:'Bucharest',     ru:'Moscow',
  sm:'San Marino',   rs:'Belgrade',       sk:'Bratislava',    si:'Ljubljana',     es:'Madrid',
  se:'Stockholm',    ch:'Bern',           ua:'Kyiv',          gb:'London',        va:'Vatican City',
  // North America
  ag:"Saint John's", aw:'Oranjestad',     bs:'Nassau',        bb:'Bridgetown',    bz:'Belmopan',
  bm:'Hamilton',     ca:'Ottawa',         ky:'George Town',   cr:'San José',      cu:'Havana',
  cw:'Willemstad',   dm:'Roseau',         do:'Santo Domingo', sv:'San Salvador',  gl:'Nuuk',
  gd:"St. George's", gt:'Guatemala City', ht:'Port-au-Prince', hn:'Tegucigalpa',  jm:'Kingston',
  mx:'Mexico City',  ni:'Managua',        pa:'Panama City',   pr:'San Juan',      kn:'Basseterre',
  lc:'Castries',     vc:'Kingstown',      tt:'Port of Spain', us:'Washington, D.C.',
  // South America
  ar:'Buenos Aires', bo:'Sucre',          br:'Brasília',      cl:'Santiago',      co:'Bogotá',
  ec:'Quito',        gy:'Georgetown',     py:'Asunción',      pe:'Lima',          sr:'Paramaribo',
  uy:'Montevideo',   ve:'Caracas',
  // Oceania
  au:'Canberra',     ck:'Avarua',         fj:'Suva',          pf:'Papeete',       ki:'South Tarawa',
  mh:'Majuro',       fm:'Palikir',        nr:'Yaren',         nc:'Nouméa',        nz:'Wellington',
  nu:'Alofi',        pw:'Ngerulmud',      pg:'Port Moresby',  ws:'Apia',          sb:'Honiara',
  to:"Nuku'alofa",   tv:'Funafuti',       vu:'Port Vila',
};

/* ── Currency codes ─────────────────────────────────────────── */
const CURRENCY = {
  // Africa
  dz:'DZD', ao:'AOA', bj:'XOF', bw:'BWP', bf:'XOF', bi:'BIF', cm:'XAF', cv:'CVE', cf:'XAF',
  td:'XAF', km:'KMF', cg:'XAF', cd:'CDF', dj:'DJF', eg:'EGP', gq:'XAF', er:'ERN', sz:'SZL',
  et:'ETB', ga:'XAF', gm:'GMD', gh:'GHS', gn:'GNF', gw:'XOF', ci:'XOF', ke:'KES', ls:'LSL',
  lr:'LRD', ly:'LYD', mg:'MGA', mw:'MWK', ml:'XOF', mr:'MRU', mu:'MUR', ma:'MAD', mz:'MZN',
  na:'NAD', ne:'XOF', ng:'NGN', rw:'RWF', st:'STN', sn:'XOF', sc:'SCR', sl:'SLL', so:'SOS',
  za:'ZAR', ss:'SSP', sd:'SDG', tz:'TZS', tg:'XOF', tn:'TND', ug:'UGX', eh:'MAD', zm:'ZMW',
  zw:'ZiG',
  // Asia
  af:'AFN', am:'AMD', az:'AZN', bh:'BHD', bd:'BDT', bt:'BTN', bn:'BND', kh:'KHR', cn:'CNY',
  cy:'EUR', ge:'GEL', hk:'HKD', in:'INR', id:'IDR', ir:'IRR', iq:'IQD', il:'ILS', jp:'JPY',
  jo:'JOD', kz:'KZT', kw:'KWD', kg:'KGS', la:'LAK', lb:'LBP', mo:'MOP', my:'MYR', mv:'MVR',
  mn:'MNT', mm:'MMK', np:'NPR', kp:'KPW', om:'OMR', pk:'PKR', ps:'ILS', ph:'PHP', qa:'QAR',
  sa:'SAR', sg:'SGD', kr:'KRW', lk:'LKR', sy:'SYP', tw:'TWD', tj:'TJS', th:'THB', tl:'USD',
  tr:'TRY', tm:'TMT', ae:'AED', uz:'UZS', vn:'VND', ye:'YER',
  // Europe
  al:'ALL', ad:'EUR', at:'EUR', by:'BYN', be:'EUR', ba:'BAM', bg:'BGN', hr:'EUR', cz:'CZK',
  dk:'DKK', ee:'EUR', fo:'DKK', fi:'EUR', fr:'EUR', de:'EUR', gi:'GBP', gr:'EUR', gg:'GBP',
  hu:'HUF', is:'ISK', ie:'EUR', im:'GBP', it:'EUR', je:'GBP', xk:'EUR', lv:'EUR', li:'CHF',
  lt:'EUR', lu:'EUR', mt:'EUR', md:'MDL', mc:'EUR', me:'EUR', nl:'EUR', mk:'MKD', no:'NOK',
  pl:'PLN', pt:'EUR', ro:'RON', ru:'RUB', sm:'EUR', rs:'RSD', sk:'EUR', si:'EUR', es:'EUR',
  se:'SEK', ch:'CHF', ua:'UAH', gb:'GBP', va:'EUR',
  // North America
  ag:'XCD', aw:'AWG', bs:'BSD', bb:'BBD', bz:'BZD', bm:'BMD', ca:'CAD', ky:'KYD', cr:'CRC',
  cu:'CUP', cw:'ANG', dm:'XCD', do:'DOP', sv:'USD', gl:'DKK', gd:'XCD', gt:'GTQ', ht:'HTG',
  hn:'HNL', jm:'JMD', mx:'MXN', ni:'NIO', pa:'PAB', pr:'USD', kn:'XCD', lc:'XCD', vc:'XCD',
  tt:'TTD', us:'USD',
  // South America
  ar:'ARS', bo:'BOB', br:'BRL', cl:'CLP', co:'COP', ec:'USD', gy:'GYD', py:'PYG', pe:'PEN',
  sr:'SRD', uy:'UYU', ve:'VES',
  // Oceania
  au:'AUD', ck:'NZD', fj:'FJD', pf:'XPF', ki:'AUD', mh:'USD', fm:'USD', nr:'AUD', nc:'XPF',
  nz:'NZD', nu:'NZD', pw:'USD', pg:'PGK', ws:'WST', sb:'SBD', to:'TOP', tv:'AUD', vu:'VUV',
};

COUNTRIES.forEach(c => {
  c.population = POPULATION[c.code] ?? null;
  c.capital    = CAPITAL[c.code]    ?? null;
  c.currency   = CURRENCY[c.code]   ?? null;
});

let sortOrder = 'name-asc';

function sortCountries(arr) {
  const copy = [...arr];
  switch (sortOrder) {
    case 'name-asc':
      copy.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'pop-desc':
      copy.sort((a, b) => {
        if (a.population == null && b.population == null) return 0;
        if (a.population == null) return 1;
        if (b.population == null) return -1;
        return b.population - a.population;
      });
      break;
    case 'pop-asc':
      copy.sort((a, b) => {
        if (a.population == null && b.population == null) return 0;
        if (a.population == null) return 1;
        if (b.population == null) return -1;
        return a.population - b.population;
      });
      break;
    case 'area-desc':
      copy.sort((a, b) => {
        if (a.area == null && b.area == null) return 0;
        if (a.area == null) return 1;
        if (b.area == null) return -1;
        return b.area - a.area;
      });
      break;
    case 'area-asc':
      copy.sort((a, b) => {
        if (a.area == null && b.area == null) return 0;
        if (a.area == null) return 1;
        if (b.area == null) return -1;
        return a.area - b.area;
      });
      break;
  }
  return copy;
}

function formatArea(n) {
  if (n < 1) return n.toFixed(2);
  return n.toLocaleString('en-US');
}

function formatPop(n) {
  if (n == null) return '—';
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(1).replace(/\.0$/, '')     + 'M';
  if (n >= 1_000)         return Math.round(n / 1_000)                              + 'K';
  return n.toLocaleString('en-US');
}

function flagUrl(code) {
  return `https://flagcdn.com/w640/${code}.png`;
}

const SEP       = '<span class="row-sep">&#x25A0;</span>';
const SEP_GROUP = '<span class="row-sep row-sep--group">&#x25A0;</span>';

function createRow(country, rank) {
  const row = document.createElement('div');
  row.className = 'country-row';
  row.dataset.name = country.name.toLowerCase();
  row.dataset.code = country.code.toLowerCase();
  const isFav = favs.has(country.code);
  row.innerHTML = `
    <div class="row-rank">
      <button class="fav-btn${isFav ? ' fav--active' : ''}" data-code="${country.code}" aria-label="${isFav ? 'Unfavorite' : 'Favorite'}">${isFav ? '&#x2665;' : '&#x2661;'}</button>
      <span class="row-rank-num">${rank}</span>
    </div>
    <img class="row-flag" src="${flagUrl(country.code)}" alt="Flag of ${country.name}" loading="lazy" decoding="async" width="320" height="200">
    <div class="row-info">
      <div class="row-primary">
        <span class="row-name">${country.name}</span>
        ${SEP}
        <span class="row-capital">${country.capital || '—'}</span>
      </div>
      ${SEP_GROUP}
      <div class="row-secondary">
        <span class="row-pop">${formatPop(country.population)}</span>
        ${SEP}
        <span class="row-area">${formatArea(country.area)}<span class="row-area-unit"> km\u00B2</span></span>
        ${SEP}
        <span class="row-currency">${country.currency || '—'}</span>
      </div>
    </div>
  `;
  return row;
}

const filterState = {
  query: '',
  colors: {},   // { red: 25 } means red > 25%
  symbols: [],  // ['star', 'eagle'] — OR logic
};

const FAVS_KEY = 'flags-favs';
const favs = new Set(JSON.parse(localStorage.getItem(FAVS_KEY) || '[]'));

const COLOR_DEFS = [
  { key: 'red',    label: 'Red',    hex: '#c0392b' },
  { key: 'blue',   label: 'Blue',   hex: '#2980b9' },
  { key: 'green',  label: 'Green',  hex: '#27ae60' },
  { key: 'white',  label: 'White',  hex: '#ecf0f1', dark: true },
  { key: 'black',  label: 'Black',  hex: '#2c3e50' },
  { key: 'yellow', label: 'Yellow', hex: '#f39c12' },
  { key: 'orange', label: 'Orange', hex: '#e67e22' },
];

const SYMBOL_DEFS = [
  { key: 'eagle',    label: 'Eagle' },
  { key: 'lion',     label: 'Lion' },
  { key: 'dragon',   label: 'Dragon' },
  { key: 'snake',    label: 'Snake' },
  { key: 'horse',    label: 'Horse' },
  { key: 'bird',     label: 'Bird' },
  { key: 'fish',     label: 'Fish' },
  { key: 'lizard',   label: 'Lizard' },
  { key: 'star',     label: 'Star(s)' },
  { key: 'crescent', label: 'Crescent' },
  { key: 'cross',    label: 'Cross' },
  { key: 'sun',      label: 'Sun' },
  { key: 'moon',     label: 'Moon' },
  { key: 'shield',   label: 'Shield/CoA' },
  { key: 'weapon',   label: 'Weapon(s)' },
  { key: 'crown',    label: 'Crown' },
  { key: 'tree',     label: 'Tree/Plant' },
  { key: 'stripes',  label: 'Stripes' },
  { key: 'tricolor', label: 'Tricolor' },
];

const THRESHOLD_STEPS = [0, 25, 50, 75];
const THRESHOLD_LABELS = ['Any', '>25%', '>50%', '>75%'];

function matchesFilters(country) {
  // Text search
  if (filterState.query) {
    const q = filterState.query.toLowerCase();
    if (!country.name.toLowerCase().includes(q) && !country.code.includes(q)) return false;
  }
  // Color filters — AND logic: every active color must exceed threshold
  for (const [color, threshold] of Object.entries(filterState.colors)) {
    if (!threshold) continue;
    const pct = (country.dominant_colors && country.dominant_colors[color]) || 0;
    if (pct <= threshold) return false;
  }
  // Symbol filters — OR logic: at least one selected symbol must be present
  if (filterState.symbols.length > 0) {
    const syms = country.symbols || [];
    if (!filterState.symbols.some(s => syms.includes(s))) return false;
  }
  return true;
}

function activeFilterCount() {
  const colorCount = Object.values(filterState.colors).filter(v => v > 0).length;
  return colorCount + filterState.symbols.length;
}

const CONTINENT_META = {
  'Africa':        { slug: 'africa'        },
  'Asia':          { slug: 'asia'          },
  'Europe':        { slug: 'europe'        },
  'North America': { slug: 'north-america' },
  'South America': { slug: 'south-america' },
  'Oceania':       { slug: 'oceania', label: 'Australia & Oceania' },
};
const CONTINENT_ORDER = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];

function buildFilterUI(onUpdate) {
  // Insert toggle button into header
  const headerInner = document.querySelector('.header-inner');

  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'filter-toggle';
  toggleBtn.className = 'filter-toggle';
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/>
    </svg>
    Filters
    <span id="filter-badge" class="filter-badge hidden">0</span>
  `;
  headerInner.appendChild(toggleBtn);

  // Filter panel (inserted after header)
  const header = document.querySelector('.site-header');
  const panel = document.createElement('div');
  panel.id = 'filter-panel';
  panel.className = 'filter-panel';
  panel.setAttribute('aria-hidden', 'true');

  // Color row
  const colorRow = document.createElement('div');
  colorRow.className = 'filter-row';
  colorRow.innerHTML = `<span class="filter-section-label">Color</span>`;
  const colorBtns = document.createElement('div');
  colorBtns.className = 'color-btn-group';

  COLOR_DEFS.forEach(({ key, label, hex, dark }) => {
    const wrap = document.createElement('div');
    wrap.className = 'color-btn-wrap';
    const btn = document.createElement('button');
    btn.className = 'color-btn';
    btn.dataset.color = key;
    btn.dataset.step = '0';
    btn.title = label;
    btn.innerHTML = `
      <span class="color-dot" style="background:${hex};${dark ? 'border:1px solid rgba(255,255,255,0.2);' : ''}"></span>
      <span class="color-btn-label">${label}</span>
      <span class="color-threshold-label">Any</span>
    `;
    btn.addEventListener('click', () => {
      const cur = parseInt(btn.dataset.step, 10);
      const next = (cur + 1) % THRESHOLD_STEPS.length;
      btn.dataset.step = next;
      const threshold = THRESHOLD_STEPS[next];
      if (threshold === 0) {
        delete filterState.colors[key];
      } else {
        filterState.colors[key] = threshold;
      }
      btn.querySelector('.color-threshold-label').textContent = THRESHOLD_LABELS[next];
      btn.classList.toggle('active', next > 0);
      updateBadge();
      renderChips(chipsBar, onUpdate);
      onUpdate();
    });
    wrap.appendChild(btn);
    colorBtns.appendChild(wrap);
  });
  colorRow.appendChild(colorBtns);

  // Symbol row
  const symbolRow = document.createElement('div');
  symbolRow.className = 'filter-row filter-row--symbols';
  symbolRow.innerHTML = `<span class="filter-section-label">Symbols &amp; Animals</span>`;
  const symbolTags = document.createElement('div');
  symbolTags.className = 'symbol-tag-group';

  SYMBOL_DEFS.forEach(({ key, label }) => {
    const tag = document.createElement('button');
    tag.className = 'symbol-tag';
    tag.dataset.symbol = key;
    tag.textContent = label;
    tag.addEventListener('click', () => {
      const idx = filterState.symbols.indexOf(key);
      if (idx === -1) {
        filterState.symbols.push(key);
        tag.classList.add('active');
      } else {
        filterState.symbols.splice(idx, 1);
        tag.classList.remove('active');
      }
      updateBadge();
      renderChips(chipsBar, onUpdate);
      onUpdate();
    });
    symbolTags.appendChild(tag);
  });
  symbolRow.appendChild(symbolTags);

  const panelInner = document.createElement('div');
  panelInner.className = 'filter-panel-inner';
  panelInner.appendChild(colorRow);
  panelInner.appendChild(symbolRow);
  panel.appendChild(panelInner);
  header.insertAdjacentElement('afterend', panel);

  // Chips bar (inserted before count-label)
  const chipsBar = document.createElement('div');
  chipsBar.id = 'active-chips';
  chipsBar.className = 'active-chips';
  const countLabel = document.getElementById('count-label');
  if (countLabel && countLabel.parentNode) {
    countLabel.parentNode.insertBefore(chipsBar, countLabel);
  }

  // Toggle panel open/close
  let panelOpen = false;
  toggleBtn.addEventListener('click', () => {
    panelOpen = !panelOpen;
    panel.classList.toggle('open', panelOpen);
    toggleBtn.setAttribute('aria-expanded', String(panelOpen));
    panel.setAttribute('aria-hidden', String(!panelOpen));
  });

  function updateBadge() {
    const count = activeFilterCount();
    const badge = document.getElementById('filter-badge');
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  }

  // Expose resetAllFilters for use in chip clear-all
  window._resetAllFilters = function() {
    filterState.colors = {};
    filterState.symbols = [];
    // Reset color buttons
    panel.querySelectorAll('.color-btn').forEach(btn => {
      btn.dataset.step = '0';
      btn.classList.remove('active');
      btn.querySelector('.color-threshold-label').textContent = 'Any';
    });
    // Reset symbol tags
    panel.querySelectorAll('.symbol-tag').forEach(tag => tag.classList.remove('active'));
    updateBadge();
    renderChips(chipsBar, onUpdate);
    onUpdate();
  };

  return { updateBadge, chipsBar };
}

function renderChips(chipsBar, onUpdate) {
  chipsBar.innerHTML = '';
  const chips = [];

  // Color chips
  COLOR_DEFS.forEach(({ key, label }) => {
    const threshold = filterState.colors[key];
    if (threshold) {
      chips.push({ label: `${label} >${threshold}%`, onRemove: () => {
        delete filterState.colors[key];
        // reset the color button
        const btn = document.querySelector(`.color-btn[data-color="${key}"]`);
        if (btn) {
          btn.dataset.step = '0';
          btn.classList.remove('active');
          btn.querySelector('.color-threshold-label').textContent = 'Any';
        }
        const badge = document.getElementById('filter-badge');
        if (badge) {
          const count = activeFilterCount();
          badge.textContent = count;
          badge.classList.toggle('hidden', count === 0);
        }
        renderChips(chipsBar, onUpdate);
        onUpdate();
      }});
    }
  });

  // Symbol chips
  filterState.symbols.forEach(sym => {
    const def = SYMBOL_DEFS.find(d => d.key === sym);
    const label = def ? def.label : sym;
    chips.push({ label, onRemove: () => {
      const idx = filterState.symbols.indexOf(sym);
      if (idx !== -1) filterState.symbols.splice(idx, 1);
      const tag = document.querySelector(`.symbol-tag[data-symbol="${sym}"]`);
      if (tag) tag.classList.remove('active');
      const badge = document.getElementById('filter-badge');
      if (badge) {
        const count = activeFilterCount();
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
      }
      renderChips(chipsBar, onUpdate);
      onUpdate();
    }});
  });

  if (chips.length === 0) return;

  chips.forEach(({ label, onRemove }) => {
    const chip = document.createElement('span');
    chip.className = 'filter-chip';
    chip.innerHTML = `${label}<button class="chip-remove" aria-label="Remove filter">\u00d7</button>`;
    chip.querySelector('.chip-remove').addEventListener('click', onRemove);
    chipsBar.appendChild(chip);
  });

  const clearAll = document.createElement('button');
  clearAll.className = 'clear-all-btn';
  clearAll.textContent = 'Clear all';
  clearAll.addEventListener('click', () => {
    if (window._resetAllFilters) window._resetAllFilters();
  });
  chipsBar.appendChild(clearAll);
}

/* ── Continent SVG silhouettes ────────────────────────────────── */
const CONTINENT_SVGS = {
  /* Pyramids — three triangles + ground bar */
  'Africa':        '<svg viewBox="0 0 120 72" fill="none"><path d="M60,5 L98,60 L22,60 Z M17,27 L36,60 L2,60 Z M103,27 L118,60 L84,60 Z M0,60 L120,60 L120,68 L0,68 Z"/></svg>',
  /* Torii gate — kasagi beam with upturned ends, shimaki blocks, pillars, nuki crossbeam */
  'Asia':          '<svg viewBox="0 0 100 110" fill="none"><path d="M4,28 Q6,16 22,20 L78,20 Q94,16 96,28 L96,36 Q94,24 78,28 L22,28 Q6,24 4,36 Z M18,28 L34,28 L34,40 L18,40 Z M66,28 L82,28 L82,40 L66,40 Z M20,40 L32,40 L32,106 L20,106 Z M68,40 L80,40 L80,106 L68,106 Z M14,62 L86,62 L86,70 L14,70 Z"/></svg>',
  /* Eiffel Tower — antenna, two tapered sections, two platforms, four splayed legs */
  'Europe':        '<svg viewBox="0 0 80 124" fill="none"><path d="M38,2 L42,2 L44,20 L36,20 Z M33,20 L47,20 L52,44 L28,44 Z M22,44 L58,44 L58,51 L22,51 Z M28,51 L52,51 L56,68 L24,68 Z M16,68 L64,68 L64,75 L16,75 Z M16,75 L4,120 L14,120 L22,75 Z M26,75 L22,120 L30,120 L32,75 Z M48,75 L50,120 L58,120 L54,75 Z M58,75 L66,120 L76,120 L64,75 Z"/></svg>',
  /* Statue of Liberty — torch + arm, crown spikes, head, robe, tablet arm, pedestal */
  'North America': '<svg viewBox="0 0 80 122" fill="none"><path d="M58,2 Q63,0 66,5 Q66,12 62,15 Q57,12 56,6 Q57,1 58,2 Z M56,15 L60,15 L52,36 L48,36 Z M22,38 L52,38 L52,44 L22,44 Z M23,38 L25,30 L27,38 Z M27,38 L29,29 L31,38 Z M31,38 L33,28 L35,38 Z M35,38 L37,29 L39,38 Z M39,38 L41,30 L43,38 Z M43,38 L45,31 L47,38 Z M22,44 Q20,56 30,60 Q38,64 46,60 Q54,56 52,44 Z M32,60 L42,60 L44,66 L30,66 Z M22,66 L52,66 L58,110 L16,110 Z M22,76 L8,72 L6,80 L8,84 L20,84 Z M14,110 L60,110 L62,118 L12,118 Z"/></svg>',
  /* Christ the Redeemer — head, narrow body, outstretched arms, stepped pedestal */
  'South America': '<svg viewBox="0 0 120 106" fill="none"><path d="M55,5 Q60,1 65,5 Q70,9 65,14 Q60,18 55,14 Q50,10 55,5 Z M57,14 L63,14 L65,78 L55,78 Z M2,36 L118,36 L118,44 L2,44 Z M48,78 L72,78 L74,86 L46,86 Z M42,86 L78,86 L82,94 L38,94 Z M34,94 L86,94 L90,102 L30,102 Z"/></svg>',
  /* Sydney Opera House — five shell/sail arches decreasing in height left→right,
     sitting on a three-tier granite podium platform */
  'Oceania':       '<svg viewBox="0 0 130 100" fill="none"><path d="M16,73 Q14,44 32,20 Q50,44 50,73 Z M46,73 Q46,50 58,32 Q70,50 70,73 Z M64,73 Q64,52 74,36 Q84,52 86,73 Z M82,73 Q82,62 91,50 Q100,62 102,73 Z M98,73 Q98,66 106,58 Q114,66 116,73 Z M6,73 L120,73 L120,79 L6,79 Z M12,79 L114,79 L114,85 L12,85 Z M18,85 L108,85 L108,92 L18,92 Z"/></svg>',
};

function buildCarouselHTML() {
  const cards = CONTINENT_ORDER.map(buildCardHTML).join('');
  return `
    <div class="cs-wrap">
      <button class="cs-arrow cs-arrow--prev" aria-label="Previous">&#8592;</button>
      <div class="cs-track">${cards}</div>
      <button class="cs-arrow cs-arrow--next" aria-label="Next">&#8594;</button>
    </div>
    <div class="cs-panel" id="cs-panel"></div>`;
}

function buildCardHTML(continent) {
  const meta  = CONTINENT_META[continent];
  const count = COUNTRIES.filter(c => c.continent === continent).length;
  return `
    <button class="cs-card" data-continent="${continent}" data-slug="${meta.slug}">
      <div class="cs-card-svg">${CONTINENT_SVGS[continent]}</div>
      <span class="cs-card-name">${meta.label || continent}</span>
      <span class="cs-card-count">${count} countries</span>
    </button>`;
}

function buildPanelContent(continent) {
  const meta    = CONTINENT_META[continent];
  const entries = COUNTRIES.filter(c => c.continent === continent);
  const top10   = sortCountries(entries).slice(0, 10);
  const rows = top10.map((country, i) => {
    const isFav = favs.has(country.code);
    return `
    <div class="country-row cs-panel-row" data-name="${country.name.toLowerCase()}" data-code="${country.code}">
      <div class="row-rank">
        <button class="fav-btn${isFav ? ' fav--active' : ''}" data-code="${country.code}" aria-label="${isFav ? 'Unfavorite' : 'Favorite'}">${isFav ? '&#x2665;' : '&#x2661;'}</button>
        <span class="row-rank-num">${i + 1}</span>
      </div>
      <img class="row-flag" src="${flagUrl(country.code)}" alt="Flag of ${country.name}" loading="lazy" decoding="async" width="320" height="200">
      <div class="row-info">
        <div class="row-primary">
          <span class="row-name">${country.name}</span>
          ${SEP}
          <span class="row-capital">${country.capital || '—'}</span>
        </div>
        ${SEP_GROUP}
        <div class="row-secondary">
          <span class="row-pop">${formatPop(country.population)}</span>
          ${SEP}
          <span class="row-area">${formatArea(country.area)}<span class="row-area-unit"> km\u00B2</span></span>
          ${SEP}
          <span class="row-currency">${country.currency || '—'}</span>
        </div>
      </div>
    </div>`;
  }).join('');
  return `
    <div class="cs-panel-inner">
      <div class="cs-panel-header">
        <h2 class="cs-panel-title">${CONTINENT_META[continent].label || continent}</h2>
        <a href="${meta.slug}.html" class="cs-panel-see-all">See all ${entries.length} &#8594;</a>
      </div>
      <div class="cs-panel-list">${rows}</div>
    </div>`;
}

function initHomePage() {
  const container  = document.getElementById('continents');
  const searchEl   = document.getElementById('search');
  const clearBtn   = document.getElementById('clear-btn');
  const countLabel = document.getElementById('count-label');

  countLabel.textContent = `${COUNTRIES.length} nations across 6 continents`;
  container.innerHTML = buildCarouselHTML();

  const track   = container.querySelector('.cs-track');
  const btnPrev = container.querySelector('.cs-arrow--prev');
  const btnNext = container.querySelector('.cs-arrow--next');
  const panel   = document.getElementById('cs-panel');
  const cards   = [...track.querySelectorAll('.cs-card')];
  let activeContinent = null;

  /* ── Padding so first/last cards can scroll to center ── */
  function updatePadding() {
    const pad = Math.max(0, track.clientWidth / 2 - cards[0].offsetWidth / 2);
    track.style.paddingLeft  = `${pad}px`;
    track.style.paddingRight = `${pad}px`;
  }

  /* ── Card index whose center is closest to the track center ── */
  function getActiveIdx() {
    const trackMid = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - trackMid);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }

  /* ── Apply spotlight classes + arrow visibility ── */
  function updateSpotlight() {
    const ai = getActiveIdx();
    const newContinent = cards[ai].dataset.continent;

    if (activeContinent !== null && newContinent !== activeContinent) {
      if (panel.classList.contains('cs-panel--open')) {
        switchPanel(newContinent);
      }
    }
    activeContinent = newContinent;

    cards.forEach((card, i) => {
      const d = Math.abs(i - ai);
      card.classList.toggle('cs-card--active', d === 0);
      card.classList.toggle('cs-card--d1',     d === 1);
      card.classList.toggle('cs-card--d2',     d === 2);
    });

    btnPrev.classList.toggle('hidden', ai === 0);
    btnNext.classList.toggle('hidden', ai === cards.length - 1);
  }

  /* ── Smooth-scroll a card to the center of the track ── */
  function scrollToCard(idx) {
    const trackMid = track.getBoundingClientRect().left + track.clientWidth / 2;
    const r        = cards[idx].getBoundingClientRect();
    const delta    = (r.left + r.width / 2) - trackMid;
    track.scrollBy({ left: delta, behavior: 'smooth' });
  }

  /* ── Scroll listener (rAF-throttled) ── */
  let raf = null;
  track.addEventListener('scroll', () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateSpotlight);
  }, { passive: true });

  /* ── Mouse drag ── */
  let isDragging    = false;
  let dragStartX    = 0;
  let dragScrollLeft= 0;
  let dragDistance  = 0;

  track.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    isDragging     = true;
    dragStartX     = e.pageX - track.offsetLeft;
    dragScrollLeft = track.scrollLeft;
    dragDistance   = 0;
    track.classList.add('is-dragging');
  });

  track.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.pageX - track.offsetLeft - dragStartX;
    dragDistance = Math.abs(dx);
    track.scrollLeft = dragScrollLeft - dx;
  });

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');
    if (dragDistance > 5) {
      // Suppress the next click so a drag doesn't open the panel
      track.addEventListener('click', e => e.stopPropagation(), { capture: true, once: true });
      // Snap to nearest card
      scrollToCard(getActiveIdx());
    }
  }

  track.addEventListener('mouseup',    endDrag);
  track.addEventListener('mouseleave', endDrag);

  /* ── Arrow navigation: one card at a time ── */
  btnPrev.addEventListener('click', () => { const i = getActiveIdx(); if (i > 0) scrollToCard(i - 1); });
  btnNext.addEventListener('click', () => { const i = getActiveIdx(); if (i < cards.length - 1) scrollToCard(i + 1); });

  /* ── Card click: center if not active; toggle panel if already active ── */
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (i !== getActiveIdx()) { scrollToCard(i); return; }
      panel.classList.contains('cs-panel--open') ? closePanel() : openPanel(card.dataset.continent);
    });
  });

  /* ── Panel helpers ── */
  function openPanel(continent) {
    panel.innerHTML = buildPanelContent(continent);
    panel.classList.add('cs-panel--open');
    panel.querySelectorAll('.cs-panel-row').forEach((row, i) => {
      setTimeout(() => row.classList.add('visible'), 40 + i * 40);
    });
  }

  function closePanel() {
    panel.classList.remove('cs-panel--open');
    setTimeout(() => { if (!panel.classList.contains('cs-panel--open')) panel.innerHTML = ''; }, 420);
  }

  function switchPanel(continent) {
    const inner = panel.querySelector('.cs-panel-inner');
    if (!inner) { openPanel(continent); return; }
    // Quickly fade out the current content
    inner.style.transition = 'opacity .14s ease';
    inner.style.opacity = '0';
    setTimeout(() => {
      // Swap content — panel still has cs-panel--open, so the new
      // .cs-panel-inner will transition from opacity:0 → 1 via existing CSS
      panel.innerHTML = buildPanelContent(continent);
      panel.querySelectorAll('.cs-panel-row').forEach((row, i) => {
        setTimeout(() => row.classList.add('visible'), 20 + i * 35);
      });
    }, 150);
  }

  /* ── Search filters panel rows ── */
  function applySearch(q) {
    if (!activeContinent) return;
    panel.querySelectorAll('.cs-panel-row').forEach(row => {
      const match = !q || row.dataset.name.includes(q) || row.dataset.code.includes(q);
      row.style.display = match ? '' : 'none';
    });
  }

  searchEl.addEventListener('input', () => {
    const val = searchEl.value;
    clearBtn.classList.toggle('visible', val.length > 0);
    applySearch(val.trim().toLowerCase());
  });

  clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    clearBtn.classList.remove('visible');
    applySearch('');
  });

  /* ── Sort ── */
  const sortEl = document.getElementById('sort-select');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      sortOrder = sortEl.value;
      if (panel.classList.contains('cs-panel--open') && activeContinent) {
        openPanel(activeContinent);
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchEl) {
      e.preventDefault();
      searchEl.focus();
      searchEl.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchEl) searchEl.blur();
  });

  /* ── Animated hero flag row ── */
  (function initHeroFlags() {
    const row = document.getElementById('hero-flag-row');
    if (!row) return;

    const codes = COUNTRIES.map(c => c.code);

    function pick(exclude) {
      const pool = codes.filter(c => !exclude.includes(c));
      return pool[Math.floor(Math.random() * pool.length)];
    }

    // Pick 6 unique starting flags
    const current = [];
    for (let i = 0; i < 6; i++) {
      current.push(pick(current));
    }

    // Build img elements
    const imgs = current.map(code => {
      const img = document.createElement('img');
      img.src = `https://flagcdn.com/w80/${code}.png`;
      img.width = 32;
      img.height = 20;
      img.alt = '';
      img.decoding = 'async';
      row.appendChild(img);
      return img;
    });

    // Every 2s, swap one random position
    setInterval(() => {
      const pos = Math.floor(Math.random() * 6);
      const next = pick(current);
      const img = imgs[pos];
      img.style.opacity = '0';
      setTimeout(() => {
        current[pos] = next;
        img.src = `https://flagcdn.com/w80/${next}.png`;
        img.style.opacity = '1';
      }, 250);
    }, 2000);
  })();

  /* ── Init: set padding, center first card, run spotlight ── */
  requestAnimationFrame(() => {
    updatePadding();
    scrollToCard(0);
    updateSpotlight();
  });

  window.addEventListener('resize', () => {
    updatePadding();
    scrollToCard(getActiveIdx());
  });
}

function initContinentPage() {
  const mainEl     = document.getElementById('continent-page');
  const continent  = mainEl.dataset.continent;
  const listEl     = document.getElementById('country-list');
  const searchEl   = document.getElementById('search');
  const clearBtn   = document.getElementById('clear-btn');
  const countLabel = document.getElementById('count-label');
  const emptyState = document.getElementById('empty-state');
  const emptyQuery = document.getElementById('empty-query');

  const entries = COUNTRIES.filter(c => c.continent === continent);

  function applyFilters() {
    const rows = listEl.querySelectorAll('.country-row');
    let visible = 0;
    rows.forEach(row => {
      const code = row.dataset.code;
      const country = entries.find(c => c.code === code);
      const show = country ? matchesFilters(country) : false;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    const hasFilters = filterState.query || activeFilterCount() > 0;
    countLabel.textContent = hasFilters
      ? `${visible} of ${entries.length} entries`
      : `${entries.length} entries`;
    const noResults = visible === 0 && hasFilters;
    emptyState.classList.toggle('hidden', !noResults);
    listEl.classList.toggle('hidden', noResults);
    if (emptyQuery) emptyQuery.textContent = `your filters`;
  }

  function renderList(animate) {
    listEl.innerHTML = '';
    const sorted = sortCountries(entries);
    sorted.forEach((country, i) => {
      const row = createRow(country, i + 1);
      if (!animate) row.classList.add('visible');
      listEl.appendChild(row);
      if (animate) setTimeout(() => row.classList.add('visible'), Math.min(60 + i * 25, 800));
    });
    applyFilters();
  }

  renderList(true);

  buildFilterUI(applyFilters);

  searchEl.addEventListener('input', () => {
    const val = searchEl.value;
    clearBtn.classList.toggle('visible', val.length > 0);
    filterState.query = val.trim();
    applyFilters();
  });

  clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    clearBtn.classList.remove('visible');
    filterState.query = '';
    applyFilters();
  });

  const sortEl = document.getElementById('sort-select');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      sortOrder = sortEl.value;
      renderList(false);
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchEl) {
      e.preventDefault();
      searchEl.focus();
      searchEl.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchEl) searchEl.blur();
  });
}

function initMashup() {
  const header  = document.querySelector('.site-header');
  const navBtn  = document.getElementById('mashup-nav-btn');
  if (!navBtn || !header) return;

  const SUGGESTIONS = [
    ['fr', 'it'], ['jp', 'bd'], ['ua', 'se'], ['id', 'pl'], ['de', 'be'],
    ['ng', 'in'], ['th', 'nl'], ['co', 'ro'], ['no', 'is'], ['cl', 'cz'],
  ];

  /* ── Build panel DOM ── */
  const panel = document.createElement('div');
  panel.id = 'mashup-panel';
  panel.className = 'mashup-panel';
  panel.setAttribute('aria-hidden', 'true');

  const inner = document.createElement('div');
  inner.className = 'mashup-panel-inner';
  panel.appendChild(inner);

  // Header row
  const head = document.createElement('div');
  head.className = 'mashup-panel-head';
  head.innerHTML = `<span class="mashup-panel-title">Flags Mashup</span>
    <button class="mashup-close" aria-label="Close">&#x2715;</button>`;
  inner.appendChild(head);

  // Country slot factory
  function createSlot(labelText) {
    const slot = document.createElement('div');
    slot.className = 'mashup-slot';

    const lbl = document.createElement('label');
    lbl.className = 'mashup-slot-label';
    lbl.textContent = labelText;

    const wrap = document.createElement('div');
    wrap.className = 'mashup-search-wrap';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'mashup-input';
    input.placeholder = 'Search country\u2026';
    input.autocomplete = 'off';
    input.spellcheck = false;

    // Dropdown appended to body so it escapes overflow:hidden
    const dropdown = document.createElement('div');
    dropdown.className = 'mashup-dropdown';
    document.body.appendChild(dropdown);

    const selected = document.createElement('div');
    selected.className = 'mashup-selected';

    wrap.appendChild(input);
    slot.appendChild(lbl);
    slot.appendChild(wrap);
    slot.appendChild(selected);

    return { slot, input, dropdown, selected };
  }

  const slot1 = createSlot('Country 1');
  const slot2 = createSlot('Country 2');

  // Inputs row: [slot1] [+] [slot2]
  const inputsRow = document.createElement('div');
  inputsRow.className = 'mashup-inputs-row';
  const divider = document.createElement('div');
  divider.className = 'mashup-inputs-divider';
  divider.textContent = '+';
  inputsRow.appendChild(slot1.slot);
  inputsRow.appendChild(divider);
  inputsRow.appendChild(slot2.slot);
  inner.appendChild(inputsRow);

  // Generate button
  const genRow = document.createElement('div');
  genRow.className = 'mashup-generate-row';
  const genBtn = document.createElement('button');
  genBtn.className = 'mashup-generate-btn';
  genBtn.textContent = 'Generate Mashup';
  genBtn.disabled = true;
  genRow.appendChild(genBtn);
  inner.appendChild(genRow);

  // Result area (hidden until generated)
  const resultWrap = document.createElement('div');
  resultWrap.className = 'mashup-result-wrap hidden';
  const canvas = document.createElement('canvas');
  canvas.id = 'mashup-canvas';
  canvas.width = 480;
  canvas.height = 300;

  const resultFooter = document.createElement('div');
  resultFooter.className = 'mashup-result-footer';
  const resultLabel = document.createElement('p');
  resultLabel.className = 'mashup-result-label';
  const regenBtn = document.createElement('button');
  regenBtn.className = 'mashup-regen-btn';
  regenBtn.type = 'button';
  regenBtn.innerHTML = '&#x21bb; Regenerate';
  resultFooter.appendChild(resultLabel);
  resultFooter.appendChild(regenBtn);

  const resultPatternLabel = document.createElement('p');
  resultPatternLabel.className = 'mashup-pattern-label';

  resultWrap.appendChild(canvas);
  resultWrap.appendChild(resultFooter);
  resultWrap.appendChild(resultPatternLabel);
  inner.appendChild(resultWrap);

  // Suggestions section
  const suggSection = document.createElement('div');
  suggSection.className = 'mashup-suggestions';
  const suggHeading = document.createElement('h3');
  suggHeading.className = 'mashup-suggestions-heading';
  suggHeading.textContent = 'Suggested Combinations';
  const suggGrid = document.createElement('div');
  suggGrid.className = 'mashup-suggestions-grid';
  suggSection.appendChild(suggHeading);
  suggSection.appendChild(suggGrid);
  inner.appendChild(suggSection);

  // Insert panel right after header
  header.insertAdjacentElement('afterend', panel);

  /* ── State ── */
  let sel1 = null;
  let sel2 = null;
  let openTimer = null;

  function findByCode(code) { return COUNTRIES.find(c => c.code === code); }

  function updateGenBtn() { genBtn.disabled = !(sel1 && sel2); }

  function showSelected(selectedEl, country) {
    if (!country) { selectedEl.innerHTML = ''; return; }
    selectedEl.innerHTML = `
      <img src="https://flagcdn.com/w80/${country.code}.png"
           alt="Flag of ${country.name}" class="mashup-selected-flag" />
      <span class="mashup-selected-name">${country.name}</span>`;
  }

  /* ── Dropdown helpers ── */
  function positionDropdown(dropdown, input) {
    const r = input.getBoundingClientRect();
    dropdown.style.top    = (r.bottom + 4) + 'px';
    dropdown.style.left   = r.left + 'px';
    dropdown.style.width  = r.width + 'px';
  }

  function buildDropdown(dropdown, input, query, onSelect) {
    dropdown.innerHTML = '';
    if (!query) { dropdown.classList.remove('open'); return; }
    const q = query.toLowerCase();
    const hits = COUNTRIES.filter(c =>
      c.name.toLowerCase().includes(q) || c.code.includes(q)
    ).slice(0, 8);
    if (!hits.length) { dropdown.classList.remove('open'); return; }
    hits.forEach(country => {
      const item = document.createElement('button');
      item.className = 'mashup-dropdown-item';
      item.type = 'button';
      item.innerHTML = `
        <img src="https://flagcdn.com/w40/${country.code}.png"
             alt="" class="mashup-dropdown-flag" />
        <span>${country.name}</span>`;
      item.addEventListener('mousedown', e => {
        e.preventDefault();
        onSelect(country);
        dropdown.classList.remove('open');
      });
      dropdown.appendChild(item);
    });
    positionDropdown(dropdown, input);
    dropdown.classList.add('open');
  }

  /* ── Wire a slot ── */
  function wireSlot(slotObj, setSel) {
    const { input, dropdown, selected } = slotObj;

    function onSelect(country) {
      setSel(country);
      input.value = country.name;
      showSelected(selected, country);
      dropdown.classList.remove('open');
      updateGenBtn();
    }

    input.addEventListener('input', () => {
      setSel(null);
      showSelected(selected, null);
      updateGenBtn();
      buildDropdown(dropdown, input, input.value.trim(), onSelect);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) {
        buildDropdown(dropdown, input, input.value.trim(), onSelect);
      }
    });

    input.addEventListener('blur', () => {
      setTimeout(() => dropdown.classList.remove('open'), 160);
    });

    // Reposition dropdown on scroll/resize
    window.addEventListener('scroll', () => positionDropdown(dropdown, input), { passive: true });
    window.addEventListener('resize', () => positionDropdown(dropdown, input), { passive: true });
  }

  wireSlot(slot1, c => { sel1 = c; });
  wireSlot(slot2, c => { sel2 = c; });

  /* ── Color system ── */
  const NAMED_RGB = {
    red:    [212,  31,  42],
    white:  [255, 255, 255],
    blue:   [  0,  68, 168],
    green:  [  0, 122,  60],
    yellow: [255, 213,   0],
    black:  [ 21,  21,  21],
    orange: [255, 107,   0],
  };

  function countryPalette(country) {
    const dc = country.dominant_colors || {};
    const result = Object.entries(dc)
      .filter(([name]) => NAMED_RGB[name])
      .sort(([, a], [, b]) => b - a)
      .map(([name]) => NAMED_RGB[name]);
    return result.length ? result : [NAMED_RGB.red];
  }

  function colorDist([r1, g1, b1], [r2, g2, b2]) {
    return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
  }

  function buildPalette(c1, c2) {
    const p1 = countryPalette(c1);
    const p2 = countryPalette(c2);
    const merged = [...p1];
    for (const c of p2) {
      if (!merged.some(m => colorDist(m, c) < 65)) merged.push(c);
      if (merged.length >= 6) break;
    }
    // Relax threshold if we still need more colors
    if (merged.length < 4) {
      for (const c of p2) {
        if (merged.length >= 4) break;
        if (!merged.some(m => colorDist(m, c) < 20)) merged.push(c);
      }
    }
    // Final fallback padding
    for (const d of [NAMED_RGB.white, NAMED_RGB.black, NAMED_RGB.blue, NAMED_RGB.red]) {
      if (merged.length >= 4) break;
      merged.push(d);
    }
    return merged;
  }

  function toCss([r, g, b]) { return `rgb(${r},${g},${b})`; }
  function pget(p, i) { return p[i % p.length]; }

  /* ── Pattern renderers ── */
  function patHStripes(ctx, W, H, p) {
    const n = p.length >= 4 ? 4 : 3;
    const h = H / n;
    for (let i = 0; i < n; i++) {
      ctx.fillStyle = toCss(pget(p, i));
      ctx.fillRect(0, Math.round(i * h), W, Math.ceil(h) + 1);
    }
  }

  function patVStripes(ctx, W, H, p) {
    const n = p.length >= 4 ? 4 : 3;
    const w = W / n;
    for (let i = 0; i < n; i++) {
      ctx.fillStyle = toCss(pget(p, i));
      ctx.fillRect(Math.round(i * w), 0, Math.ceil(w) + 1, H);
    }
  }

  function patNordicCross(ctx, W, H, p) {
    const vx  = Math.round(W * 0.32);
    const arm = Math.round(Math.min(W, H) * 0.085);
    const hy  = Math.round(H / 2);
    // Left panels
    ctx.fillStyle = toCss(pget(p, 0));
    ctx.fillRect(0, 0, vx - arm, hy - arm);
    ctx.fillRect(0, hy + arm, vx - arm, H);
    // Right panels
    ctx.fillStyle = toCss(pget(p, 2));
    ctx.fillRect(vx + arm, 0, W, hy - arm);
    ctx.fillRect(vx + arm, hy + arm, W, H);
    // Cross arms (drawn last so they sit on top of panel joins)
    ctx.fillStyle = toCss(pget(p, 1));
    ctx.fillRect(0,        hy - arm, W,       arm * 2); // horizontal
    ctx.fillRect(vx - arm, 0,        arm * 2, H);       // vertical
  }

  function patDiagonal(ctx, W, H, p) {
    ctx.fillStyle = toCss(pget(p, 0));
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(W, 0); ctx.lineTo(0, H);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = toCss(pget(p, 1));
    ctx.beginPath();
    ctx.moveTo(W, 0); ctx.lineTo(W, H); ctx.lineTo(0, H);
    ctx.closePath(); ctx.fill();
  }

  function patCircle(ctx, W, H, p) {
    ctx.fillStyle = toCss(pget(p, 0));
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = toCss(pget(p, 1));
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, H * 0.28, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawStar(ctx, cx, cy, pts, outer, inner) {
    ctx.beginPath();
    for (let i = 0; i < pts * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (i * Math.PI / pts) - Math.PI / 2;
      i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
              : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    }
    ctx.closePath(); ctx.fill();
  }

  function patTribandEmblem(ctx, W, H, p) {
    const bw = W / 3;
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = toCss(pget(p, i));
      ctx.fillRect(Math.round(i * bw), 0, Math.ceil(bw) + 1, H);
    }
    const r = H * 0.19;
    ctx.fillStyle = toCss(pget(p, 3));
    const pick = Math.floor(Math.random() * 3);
    if (pick === 0) {
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
      ctx.fill();
    } else if (pick === 1) {
      ctx.save();
      ctx.translate(W / 2, H / 2); ctx.rotate(Math.PI / 4);
      const s = r * 1.45;
      ctx.fillRect(-s / 2, -s / 2, s, s);
      ctx.restore();
    } else {
      drawStar(ctx, W / 2, H / 2, 5, r, r * 0.42);
    }
  }

  function patQuartered(ctx, W, H, p) {
    const hw = Math.round(W / 2), hh = Math.round(H / 2);
    ctx.fillStyle = toCss(pget(p, 0)); ctx.fillRect(0,  0,  hw,      hh);
    ctx.fillStyle = toCss(pget(p, 1)); ctx.fillRect(hw, 0,  W - hw,  hh);
    ctx.fillStyle = toCss(pget(p, 2)); ctx.fillRect(0,  hh, hw,      H - hh);
    ctx.fillStyle = toCss(pget(p, 3)); ctx.fillRect(hw, hh, W - hw,  H - hh);
  }

  const PATTERNS = [
    { name: 'Horizontal Stripes',  fn: patHStripes },
    { name: 'Vertical Stripes',    fn: patVStripes },
    { name: 'Nordic Cross',        fn: patNordicCross },
    { name: 'Diagonal Split',      fn: patDiagonal },
    { name: 'Center Circle',       fn: patCircle },
    { name: 'Triband with Emblem', fn: patTribandEmblem },
    { name: 'Quartered',           fn: patQuartered },
  ];

  /* ── Generate ── */
  function generateMashup(country1, country2) {
    const palette = buildPalette(country1, country2);
    const W = 480, H = 300;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    const pat = PATTERNS[Math.floor(Math.random() * PATTERNS.length)];
    pat.fn(ctx, W, H, palette);

    resultWrap.classList.remove('hidden');
    void resultWrap.offsetWidth; // retrigger fade-in animation
    resultLabel.textContent = `${country1.name} \u00d7 ${country2.name}`;
    resultPatternLabel.textContent = `${pat.name} style`;
  }

  genBtn.addEventListener('click', () => {
    if (!sel1 || !sel2) return;
    resultWrap.classList.add('hidden');
    setTimeout(() => generateMashup(sel1, sel2), 16);
  });

  regenBtn.addEventListener('click', () => {
    if (!sel1 || !sel2) return;
    resultWrap.classList.add('hidden');
    setTimeout(() => generateMashup(sel1, sel2), 16);
  });

  /* ── Build suggestion cards ── */
  SUGGESTIONS.forEach(([code1, code2]) => {
    const c1 = findByCode(code1);
    const c2 = findByCode(code2);
    if (!c1 || !c2) return;

    const card = document.createElement('button');
    card.className = 'mashup-suggestion-card';
    card.type = 'button';
    card.innerHTML = `
      <div class="mashup-sugg-flags">
        <img src="https://flagcdn.com/w40/${code1}.png" alt="${c1.name}" class="mashup-sugg-flag" />
        <span class="mashup-sugg-plus">+</span>
        <img src="https://flagcdn.com/w40/${code2}.png" alt="${c2.name}" class="mashup-sugg-flag" />
      </div>
      <span class="mashup-sugg-label">${c1.name} + ${c2.name}</span>`;
    card.addEventListener('click', () => {
      sel1 = c1; sel2 = c2;
      slot1.input.value = c1.name;
      slot2.input.value = c2.name;
      showSelected(slot1.selected, c1);
      showSelected(slot2.selected, c2);
      updateGenBtn();
      resultWrap.classList.add('hidden');
      setTimeout(() => generateMashup(c1, c2), 16);
    });
    suggGrid.appendChild(card);
  });

  /* ── Panel open/close ── */
  let isOpen = false;

  function openMashup() {
    isOpen = true;
    panel.classList.add('open');
    navBtn.classList.add('active');
    navBtn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    clearTimeout(openTimer);
    openTimer = setTimeout(() => panel.classList.add('open-complete'), 380);
  }

  function closeMashup() {
    isOpen = false;
    panel.classList.remove('open', 'open-complete');
    navBtn.classList.remove('active');
    navBtn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    clearTimeout(openTimer);
  }

  navBtn.addEventListener('click', () => isOpen ? closeMashup() : openMashup());
  head.querySelector('.mashup-close').addEventListener('click', closeMashup);
}

/* ═══════════════════════════════════════════════════════════════
   ADVANCED SEARCH  (home page only)
   Uses existing dominant_colors + symbols data — no extra network
   requests needed. Filters stack: text AND colors AND symbols.
═══════════════════════════════════════════════════════════════ */
function initAdvancedSearch() {
  const header      = document.querySelector('.site-header');
  const headerInner = document.querySelector('.header-inner');
  const searchEl    = document.getElementById('search');
  const clearBtn    = document.getElementById('clear-btn');
  const mainInner   = document.querySelector('#home-page .main-inner');
  if (!header || !headerInner) return;

  /* ── Colour definitions (keys match dominant_colors) ── */
  const ADV_COLORS = [
    { key: 'red',    label: 'Red',    hex: '#d4202a' },
    { key: 'blue',   label: 'Blue',   hex: '#0055b3' },
    { key: 'green',  label: 'Green',  hex: '#007a3c' },
    { key: 'white',  label: 'White',  hex: '#e8e8ee', dark: true },
    { key: 'black',  label: 'Black',  hex: '#1a1a1a' },
    { key: 'yellow', label: 'Yellow', hex: '#ffd500' },
    { key: 'orange', label: 'Orange', hex: '#ff6600' },
  ];

  /* ── Symbol groups (keys match existing symbols arrays) ── */
  const ADV_SYM_GROUPS = [
    { group: 'Celestial', items: [
      { key: 'star',     label: 'Star'     },
      { key: 'crescent', label: 'Crescent' },
      { key: 'sun',      label: 'Sun'      },
      { key: 'moon',     label: 'Moon'     },
    ]},
    { group: 'Animals', items: [
      { key: 'eagle',  label: 'Eagle'  },
      { key: 'lion',   label: 'Lion'   },
      { key: 'bird',   label: 'Bird'   },
      { key: 'dragon', label: 'Dragon' },
      { key: 'fish',   label: 'Fish'   },
      { key: 'lizard', label: 'Lizard' },
      { key: 'snake',  label: 'Snake'  },
      { key: 'horse',  label: 'Horse'  },
    ]},
    { group: 'Emblems', items: [
      { key: 'cross',  label: 'Cross'       },
      { key: 'shield', label: 'Shield / CoA' },
      { key: 'crown',  label: 'Crown'       },
      { key: 'weapon', label: 'Weapon'      },
      { key: 'tree',   label: 'Tree / Plant' },
    ]},
    { group: 'Patterns', items: [
      { key: 'stripes',  label: 'Stripes'  },
      { key: 'tricolor', label: 'Tricolor' },
    ]},
  ];
  /* Flat label lookup for chips */
  const SYM_LABEL = {};
  ADV_SYM_GROUPS.forEach(g => g.items.forEach(i => { SYM_LABEL[i.key] = i.label; }));

  /* ── Local filter state ── */
  const st = { colors: {}, symbols: [] };
  let isOpen = false, openTimer = null;

  /* ── DOM references for reset ── */
  const colorCtrl = {}; // key → { swatch, thrWrap }
  const symBtns   = {}; // key → button element

  /* ═══════════════════ BUILD PANEL DOM ═══════════════════ */
  const panel  = document.createElement('div');
  panel.id     = 'adv-panel';
  panel.className = 'adv-panel';
  panel.setAttribute('aria-hidden', 'true');

  const pInner = document.createElement('div');
  pInner.className = 'adv-panel-inner';
  panel.appendChild(pInner);

  /* Panel head — title + clear-all */
  const pHead = document.createElement('div');
  pHead.className = 'adv-panel-head';
  pHead.innerHTML = `<span class="adv-panel-title">Advanced Filters</span>`;
  const clearAllBtn = document.createElement('button');
  clearAllBtn.className = 'adv-clear-all';
  clearAllBtn.textContent = 'Clear all';
  pHead.appendChild(clearAllBtn);
  pInner.appendChild(pHead);

  /* Active chips bar */
  const chipsBar = document.createElement('div');
  chipsBar.className = 'adv-chips';
  pInner.appendChild(chipsBar);

  /* ── Color section ── */
  const colorSec = document.createElement('div');
  colorSec.className = 'adv-section';
  colorSec.innerHTML = `<div class="adv-section-heading">Flag Colors</div>`;
  const swatchRow = document.createElement('div');
  swatchRow.className = 'adv-swatch-row';

  ADV_COLORS.forEach(({ key, label, hex, dark }) => {
    const wrap   = document.createElement('div');
    wrap.className = 'adv-swatch-wrap';

    const swatch = document.createElement('button');
    swatch.className = 'adv-swatch' + (dark ? ' adv-swatch--dark' : '');
    swatch.style.setProperty('--sc', hex);
    swatch.title = label;
    swatch.setAttribute('aria-label', label);

    const thrWrap = document.createElement('div');
    thrWrap.className = 'adv-thr-wrap hidden';

    [25, 50, 75].forEach(pct => {
      const b = document.createElement('button');
      b.className  = 'adv-thr-btn';
      b.dataset.pct = pct;
      b.textContent = `>${pct}%`;
      b.addEventListener('click', () => {
        st.colors[key] = pct;
        thrWrap.querySelectorAll('.adv-thr-btn').forEach(x =>
          x.classList.toggle('active', +x.dataset.pct === pct));
        onChange();
      });
      thrWrap.appendChild(b);
    });

    swatch.addEventListener('click', () => {
      if (swatch.classList.contains('active')) {
        swatch.classList.remove('active');
        thrWrap.classList.add('hidden');
        delete st.colors[key];
      } else {
        swatch.classList.add('active');
        thrWrap.classList.remove('hidden');
        st.colors[key] = 25;
        thrWrap.querySelector('[data-pct="25"]').classList.add('active');
        thrWrap.querySelectorAll('[data-pct="50"],[data-pct="75"]').forEach(b => b.classList.remove('active'));
      }
      onChange();
    });

    colorCtrl[key] = { swatch, thrWrap };
    wrap.appendChild(swatch);
    wrap.appendChild(thrWrap);
    swatchRow.appendChild(wrap);
  });

  colorSec.appendChild(swatchRow);
  pInner.appendChild(colorSec);

  /* ── Symbol section ── */
  const symSec = document.createElement('div');
  symSec.className = 'adv-section';
  symSec.innerHTML = `<div class="adv-section-heading">Flag Symbols</div>`;
  const symGrid = document.createElement('div');
  symGrid.className = 'adv-sym-grid';

  ADV_SYM_GROUPS.forEach(({ group, items }) => {
    const grp = document.createElement('div');
    grp.className = 'adv-sym-group';
    grp.innerHTML = `<span class="adv-sym-group-label">${group}</span>`;
    const tags = document.createElement('div');
    tags.className = 'adv-sym-tags';
    items.forEach(({ key, label }) => {
      const tag = document.createElement('button');
      tag.className   = 'adv-sym-tag';
      tag.textContent = label;
      tag.addEventListener('click', () => {
        const i = st.symbols.indexOf(key);
        if (i === -1) { st.symbols.push(key); tag.classList.add('active'); }
        else          { st.symbols.splice(i, 1); tag.classList.remove('active'); }
        onChange();
      });
      symBtns[key] = tag;
      tags.appendChild(tag);
    });
    grp.appendChild(tags);
    symGrid.appendChild(grp);
  });

  symSec.appendChild(symGrid);
  pInner.appendChild(symSec);

  /* Match count line */
  const matchCount = document.createElement('p');
  matchCount.className = 'adv-match-count hidden';
  pInner.appendChild(matchCount);

  /* Insert panel immediately after header */
  header.insertAdjacentElement('afterend', panel);

  /* ═══════════════════ RESULTS SECTION ═══════════════════ */
  const resSec = document.createElement('div');
  resSec.id        = 'adv-results';
  resSec.className = 'adv-results hidden';
  if (mainInner) mainInner.parentNode.insertBefore(resSec, mainInner);

  /* ═══════════════════ TOGGLE BUTTON ═══════════════════ */
  const advBtn = document.createElement('button');
  advBtn.id        = 'adv-toggle';
  advBtn.className = 'adv-toggle';
  advBtn.setAttribute('aria-expanded', 'false');
  advBtn.innerHTML = `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.3" stroke-linecap="round">
      <line x1="3"  y1="6"  x2="21" y2="6"/>
      <line x1="7"  y1="12" x2="17" y2="12"/>
      <line x1="10" y1="18" x2="14" y2="18"/>
    </svg>
    Filters
    <span class="adv-badge hidden">0</span>`;
  headerInner.appendChild(advBtn);

  /* ═══════════════════ HELPERS ═══════════════════ */
  function updateBadge() {
    const n  = Object.keys(st.colors).length + st.symbols.length;
    const el = advBtn.querySelector('.adv-badge');
    if (el) { el.textContent = n; el.classList.toggle('hidden', n === 0); }
    advBtn.classList.toggle('adv-toggle--has-filters', n > 0);
  }

  function hasAnyFilter() {
    const q = searchEl ? searchEl.value.trim() : '';
    return !!(q || Object.keys(st.colors).length || st.symbols.length);
  }

  function matchesAdv(c) {
    const q = searchEl ? searchEl.value.trim().toLowerCase() : '';
    if (q && !c.name.toLowerCase().includes(q) && !c.code.includes(q)) return false;
    for (const [col, thr] of Object.entries(st.colors)) {
      const pct = (c.dominant_colors && c.dominant_colors[col]) || 0;
      if (pct <= thr) return false;
    }
    if (st.symbols.length) {
      if (!st.symbols.some(s => (c.symbols || []).includes(s))) return false;
    }
    return true;
  }

  /* ── Render chips ── */
  function renderChips() {
    chipsBar.innerHTML = '';
    const chips = [];

    ADV_COLORS.forEach(({ key, label, hex }) => {
      if (!st.colors[key]) return;
      chips.push({ label: `${label} >${st.colors[key]}%`, hex,
        remove() {
          delete st.colors[key];
          colorCtrl[key].swatch.classList.remove('active');
          colorCtrl[key].thrWrap.classList.add('hidden');
          colorCtrl[key].thrWrap.querySelectorAll('.adv-thr-btn').forEach(b => b.classList.remove('active'));
          onChange();
        },
      });
    });

    st.symbols.forEach(sym => {
      chips.push({ label: SYM_LABEL[sym] || sym,
        remove() {
          const i = st.symbols.indexOf(sym);
          if (i !== -1) st.symbols.splice(i, 1);
          if (symBtns[sym]) symBtns[sym].classList.remove('active');
          onChange();
        },
      });
    });

    chips.forEach(({ label, hex, remove }) => {
      const chip = document.createElement('span');
      chip.className = 'adv-chip';
      chip.innerHTML =
        (hex ? `<span class="adv-chip-dot" style="background:${hex}"></span>` : '') +
        `${label}<button class="adv-chip-x" aria-label="Remove filter">&#xd7;</button>`;
      chip.querySelector('.adv-chip-x').addEventListener('click', remove);
      chipsBar.appendChild(chip);
    });
  }

  /* ── Render results ── */
  function renderResults() {
    if (!hasAnyFilter()) {
      resSec.classList.add('hidden');
      matchCount.classList.add('hidden');
      if (mainInner) mainInner.classList.remove('adv-hidden');
      return;
    }

    const hits = COUNTRIES.filter(matchesAdv);
    matchCount.textContent = `${hits.length} ${hits.length === 1 ? 'country' : 'countries'} match`;
    matchCount.classList.remove('hidden');

    resSec.innerHTML = '';
    if (!hits.length) {
      resSec.innerHTML = `
        <div class="adv-no-results">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p>No countries match these filters.</p>
        </div>`;
    } else {
      const list = document.createElement('div');
      list.className = 'adv-results-list';
      hits.forEach((c, i) => {
        const row = createRow(c, i + 1);
        row.classList.add('visible');
        const meta = CONTINENT_META[c.continent];
        if (meta) {
          row.style.cursor = 'pointer';
          row.title = `Go to ${c.continent}`;
          row.addEventListener('click', () => { window.location.href = `${meta.slug}.html`; });
        }
        list.appendChild(row);
      });
      resSec.appendChild(list);
    }
    resSec.classList.remove('hidden');
    if (mainInner) mainInner.classList.add('adv-hidden');
  }

  /* ── Combined update ── */
  function onChange() {
    updateBadge();
    renderChips();
    renderResults();
  }

  /* ═══════════════════ CLEAR ALL ═══════════════════ */
  clearAllBtn.addEventListener('click', () => {
    [...Object.keys(st.colors)].forEach(k => {
      delete st.colors[k];
      colorCtrl[k].swatch.classList.remove('active');
      colorCtrl[k].thrWrap.classList.add('hidden');
      colorCtrl[k].thrWrap.querySelectorAll('.adv-thr-btn').forEach(b => b.classList.remove('active'));
    });
    [...st.symbols].forEach(sym => { if (symBtns[sym]) symBtns[sym].classList.remove('active'); });
    st.symbols.length = 0;
    if (searchEl) {
      searchEl.value = '';
      if (clearBtn) clearBtn.classList.remove('visible');
    }
    onChange();
  });

  /* ═══════════════════ SEARCH INTEGRATION ═══════════════════ */
  /* Only drive global results when the panel is open OR
     colour/symbol filters are active — otherwise the existing
     carousel search keeps working untouched.                   */
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      if (isOpen || Object.keys(st.colors).length || st.symbols.length) {
        renderResults();
        updateBadge();
      }
    });
  }
  /* Clear-btn sets value programmatically (no input event) */
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (isOpen || Object.keys(st.colors).length || st.symbols.length) {
        renderResults();
      }
    });
  }

  /* ═══════════════════ PANEL OPEN / CLOSE ═══════════════════ */
  function openAdv() {
    isOpen = true;
    panel.classList.add('open');
    advBtn.setAttribute('aria-expanded', 'true');
    advBtn.classList.add('adv-toggle--open');
    panel.setAttribute('aria-hidden', 'false');
    clearTimeout(openTimer);
    openTimer = setTimeout(() => panel.classList.add('open-complete'), 380);
    updateBadge();
    if (hasAnyFilter()) renderResults();
  }

  function closeAdv() {
    isOpen = false;
    panel.classList.remove('open', 'open-complete');
    advBtn.setAttribute('aria-expanded', 'false');
    advBtn.classList.remove('adv-toggle--open');
    panel.setAttribute('aria-hidden', 'true');
    clearTimeout(openTimer);
    updateBadge();
    /* If only text was driving results, collapse them on close */
    if (!Object.keys(st.colors).length && !st.symbols.length) renderResults();
  }

  advBtn.addEventListener('click', () => isOpen ? closeAdv() : openAdv());
}

/* ── Toast notification for favourites ──────────────────────── */
(function () {
  const t = document.createElement('div');
  t.id = 'fav-toast';
  t.className = 'fav-toast';
  document.body.appendChild(t);
})();

let _toastTimer = null;
function showFavToast(msg) {
  const toast = document.getElementById('fav-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('fav-toast--hide');
  toast.classList.add('fav-toast--show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => {
    toast.classList.remove('fav-toast--show');
    toast.classList.add('fav-toast--hide');
  }, 2000);
}

/* ── Favourite heart toggle (event delegation) ──────────────── */
document.addEventListener('click', e => {
  const btn = e.target.closest('.fav-btn');
  if (!btn) return;
  e.stopPropagation();

  /* Require login */
  let user = null;
  try { user = JSON.parse(localStorage.getItem('flags-user')); } catch { user = null; }
  if (!user) {
    if (window.AuthSystem && window.AuthSystem.openModal) {
      window.AuthSystem.openModal('Log in to save your favorite flags \u2661');
    }
    return;
  }

  const code    = btn.dataset.code;
  const active  = favs.has(code);
  const country = COUNTRIES.find(c => c.code === code);
  const name    = country ? country.name : code.toUpperCase();

  if (active) {
    favs.delete(code);
    showFavToast(`Removed from Favorite Flags \u2014 ${name}`);
  } else {
    favs.add(code);
    // Bounce animation: remove class, force reflow, re-add
    btn.classList.remove('fav--bounce');
    void btn.offsetWidth;
    btn.classList.add('fav--bounce');
    showFavToast(`Added to Favorite Flags \u2764\uFE0F \u2014 ${name}`);
  }

  localStorage.setItem(FAVS_KEY, JSON.stringify([...favs]));

  // Update every visible button for this country (panel + list may both show it)
  document.querySelectorAll(`.fav-btn[data-code="${code}"]`).forEach(b => {
    const nowActive = favs.has(code);
    b.innerHTML   = nowActive ? '&#x2665;' : '&#x2661;';
    b.setAttribute('aria-label', nowActive ? 'Unfavorite' : 'Favorite');
    b.classList.toggle('fav--active', nowActive);
  });

  // Notify profile page (or any listener) that favourites changed
  document.dispatchEvent(new CustomEvent('favs-changed', { detail: { code, active: favs.has(code) } }));
});

/* ═══════════════════════════════════════════════════════════════
   FEELING LUCKY  — random flag + obscurity score modal
═══════════════════════════════════════════════════════════════ */
function initLucky() {
  const btn      = document.getElementById('lucky-btn');
  const overlay  = document.getElementById('lucky-overlay');
  const closeBtn = document.getElementById('lucky-close');
  const genBtn   = document.getElementById('lucky-generate');
  const result   = document.getElementById('lucky-result');
  if (!btn || !overlay) return;

  /* ── Obscurity scores by ISO-2 code ── */
  const LUCKY_SCORES = {
    /* Tier 1 — 1-8%: Everyone knows this one! */
    us:2, gb:3, fr:4, de:5, jp:6, it:5, ca:3, br:4, es:5, au:7, cn:4, ru:6,
    /* Tier 2 — 10-20%: Pretty well known */
    mx:11, kr:13, in:14, tr:15, se:17, no:16, ar:12, eg:14, za:16, gr:13,
    nl:15, pt:17, ch:12, pl:14, il:18, sa:16, ie:15, dk:13, fi:18, be:14,
    at:16, nz:19, co:13, ua:17,
    /* Tier 3 — 25-38%: You might recognize this */
    th:26, id:28, vn:30, cl:27, pe:32, ph:29, pk:31, my:28, cz:27, ro:33,
    hu:30, hr:31, rs:35, ma:29, ng:34, ke:33, cu:28, jm:35, sg:26, ae:32,
    qa:36, is:27,
    /* Tier 4 — 40-55%: Getting tricky... */
    bo:42, py:46, uy:44, ec:43, pa:48, cr:45, gt:47, lk:44, bd:46, np:45,
    mm:50, kh:48, la:51, mn:51, ir:43, iq:47, jo:44, lb:46, tn:48, dz:45,
    et:49, gh:44, tz:47, cm:50, zw:46, mz:52, mg:50, ly:48, kz:52, uz:54,
    az:50, ge:47, am:49, mk:53, md:51, ba:48, me:52, al:46, lv:48, lt:49,
    ee:47, lu:44, mt:50, cy:47, bh:52, kw:50, om:53,
    /* Tier 5 — 60-75%: Now we're in deep */
    sr:61, gy:63, bz:65, hn:62, sv:64, ni:66, bt:67, bn:63, tl:70, tm:68,
    tj:70, kg:69, mu:64, na:66, bw:65, zm:67, mw:69, rw:65, bi:68, bj:64,
    tg:66, sn:63, ml:68, ne:70, bf:71, gn:69, sl:68, lr:67, ga:65, cg:69,
    cd:71, er:73, dj:73, so:72, ss:74, cf:73, td:70, gq:74, ao:67, ls:69,
    sz:71, km:72, cv:65, pg:68, fj:66, ws:70,
    /* Tier 6 — 78-88%: Flag expert territory */
    st:79, gw:81, mr:80, gm:78, sc:82, mv:80, ag:83, bb:79, dm:84, gd:82,
    vc:83, tt:81, bs:80, kn:85, sb:84, vu:86, to:82, ki:87, fm:85, pw:83,
    tv:88, nr:87, aw:79, cw:81, bm:83, ky:82, gi:80, je:81, gg:82, im:83,
    fo:84, gl:81, pf:82, nc:83, ck:85, xk:79, eh:82, ps:80,
    /* Tier 7 — 90-99%: Virtually nobody knows this! */
    nu:92, mh:95, lc:90, ad:91, li:93, sm:91, mc:92, tk:96, ms:93, ai:91,
    vg:92, tc:93, sx:94, bl:95, wf:96, pn:99, nf:97, cx:98, cc:98, gs:99,
    bv:99, hm:99,
  };

  function getScore(code) {
    return LUCKY_SCORES[code] !== undefined ? LUCKY_SCORES[code] : 55;
  }

  function getRingColor(score) {
    if (score <= 20) return '#22c55e';
    if (score <= 40) return '#84cc16';
    if (score <= 60) return '#f59e0b';
    if (score <= 80) return '#f97316';
    return '#ef4444';
  }

  function getTierDesc(score) {
    if (score <= 8)  return 'Everyone knows this one! 🌟';
    if (score <= 20) return 'Pretty well known 👍';
    if (score <= 38) return 'You might recognize this 🤔';
    if (score <= 55) return 'Getting tricky... 🧐';
    if (score <= 75) return "Now we're in deep 🤓";
    if (score <= 88) return 'Flag expert territory 🏆';
    return 'Virtually nobody knows this! 🔬';
  }

  function spawnSparkles(container) {
    const colors = ['#6c63ff','#22c55e','#f59e0b','#ef4444','#3b82f6','#ec4899','#a78bfa'];
    for (let i = 0; i < 22; i++) {
      const s  = document.createElement('div');
      const sz = 5 + Math.random() * 8;
      const angle = Math.random() * 2 * Math.PI;
      const dist  = 60 + Math.random() * 140;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const dur = 0.7 + Math.random() * 0.6;
      s.className = 'lucky-sparkle';
      s.style.cssText = [
        `width:${sz}px`, `height:${sz}px`,
        `background:${colors[i % colors.length]}`,
        `left:50%`, `top:40%`,
        `margin-left:${-sz/2}px`, `margin-top:${-sz/2}px`,
        `--dx:${dx.toFixed(1)}px`, `--dy:${dy.toFixed(1)}px`,
        `--dur:${dur.toFixed(2)}s`,
        `animation-delay:${(Math.random()*0.15).toFixed(2)}s`
      ].join(';');
      container.appendChild(s);
      setTimeout(() => s.remove(), (dur + 0.3) * 1000);
    }
  }

  function openModal() {
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    /* Reset for next open */
    setTimeout(() => {
      result.classList.remove('revealed');
      result.innerHTML = '';
      genBtn.textContent = 'Generate';
    }, 280);
  }

  function generate() {
    const country = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)];
    const score   = getScore(country.code);
    const color   = getRingColor(score);
    const desc    = getTierDesc(score);
    const circ    = 339.29;
    const offset  = circ * (1 - score / 100);

    result.classList.remove('revealed');
    result.innerHTML = `
      <div class="lucky-flag-wrap">
        <img src="https://flagcdn.com/w640/${country.code}.png"
             alt="Flag of ${country.name}" class="lucky-flag-img" />
      </div>
      <div class="lucky-country-name">${country.name}</div>
      <div class="lucky-continent-name">${country.continent}</div>
      <div class="lucky-ring-wrap">
        <svg class="lucky-ring" viewBox="0 0 120 120">
          <circle class="lucky-ring-bg" cx="60" cy="60" r="54"/>
          <circle class="lucky-ring-fill" cx="60" cy="60" r="54"
                  stroke="${color}" style="stroke-dashoffset:${circ}"/>
        </svg>
        <div class="lucky-ring-pct">0%</div>
      </div>
      <div class="lucky-score-label">Obscurity Score</div>
      <div class="lucky-score-desc">${desc}</div>`;

    /* Trigger reveal */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        result.classList.add('revealed');
        /* Animate ring fill */
        const fill    = result.querySelector('.lucky-ring-fill');
        const pctEl   = result.querySelector('.lucky-ring-pct');
        if (fill) {
          requestAnimationFrame(() => { fill.style.strokeDashoffset = offset; });
        }
        /* Count-up number */
        let start = null;
        const duration = 1500;
        function countUp(ts) {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          if (pctEl) pctEl.textContent = Math.round(eased * score) + '%';
          if (progress < 1) requestAnimationFrame(countUp);
        }
        requestAnimationFrame(countUp);
        /* Sparkles */
        spawnSparkles(result);
      });
    });

    genBtn.textContent = 'Try Again';
  }

  btn.addEventListener('click', openModal);
  genBtn.addEventListener('click', generate);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
}

if (document.getElementById('home-page')) {
  initHomePage();
  initMashup();
  initAdvancedSearch();
  initLucky();
} else if (document.getElementById('continent-page')) {
  initContinentPage();
}

/* ── Hamburger mobile nav ─────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-btn');
  const mainNav   = document.getElementById('main-nav');
  const overlay   = document.getElementById('mobile-nav-overlay');
  if (!hamburger || !mainNav) return;

  function openNav() {
    hamburger.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    hamburger.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    mainNav.classList.contains('open') ? closeNav() : openNav();
  });
  if (overlay) overlay.addEventListener('click', closeNav);

  /* Close when a nav link is followed */
  mainNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  /* Close mashup drawer when Mashup button clicked */
  const mashupBtn = document.getElementById('mashup-nav-btn');
  if (mashupBtn) mashupBtn.addEventListener('click', closeNav);

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) closeNav();
  });
});

/* ── Theme toggle ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    html.classList.add('theme-transitioning');
    if (next === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
    setTimeout(function () { html.classList.remove('theme-transitioning'); }, 450);
  });
});

/* ── Country detail modal ─────────────────────────────────────── */
(function () {
  'use strict';

  let overlayEl = null;

  function injectModal() {
    if (document.getElementById('cd-overlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
<div id="cd-overlay" class="cd-overlay" aria-hidden="true" role="dialog" aria-modal="true">
  <div class="cd-modal">
    <button class="cd-close" id="cd-close" aria-label="Close">&times;</button>
    <div class="cd-flag-wrap">
      <img class="cd-flag-img" id="cd-flag-img" src="" alt="" loading="lazy" />
    </div>
    <div class="cd-name" id="cd-name"></div>
    <div class="cd-continent" id="cd-continent"></div>
    <div class="cd-stats" id="cd-stats"></div>
  </div>
</div>`);
    overlayEl = document.getElementById('cd-overlay');
    document.getElementById('cd-close').addEventListener('click', closeCountryModal);
    overlayEl.addEventListener('click', function (e) {
      if (e.target === overlayEl) closeCountryModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlayEl && overlayEl.classList.contains('cd-overlay--visible')) {
        closeCountryModal();
      }
    });
  }

  function openCountryModal(country) {
    injectModal();
    const overlay = document.getElementById('cd-overlay');
    document.getElementById('cd-flag-img').src = flagUrl(country.code);
    document.getElementById('cd-flag-img').alt = 'Flag of ' + country.name;
    document.getElementById('cd-name').textContent = country.name;
    document.getElementById('cd-continent').textContent = country.continent;

    const stats = [];
    if (country.capital)    stats.push({ label: 'Capital',    value: country.capital });
    if (country.population) stats.push({ label: 'Population', value: formatPop(country.population) });
    if (country.area)       stats.push({ label: 'Area',       value: formatArea(country.area) + ' km²' });
    if (country.currency)   stats.push({ label: 'Currency',   value: country.currency });

    document.getElementById('cd-stats').innerHTML = stats.map(s =>
      `<div class="cd-stat"><div class="cd-stat-label">${s.label}</div><div class="cd-stat-value">${s.value}</div></div>`
    ).join('');

    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('cd-overlay--visible');
    document.body.style.overflow = 'hidden';
  }

  function closeCountryModal() {
    const overlay = document.getElementById('cd-overlay');
    if (!overlay) return;
    overlay.classList.remove('cd-overlay--visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.openCountryModal = openCountryModal;
})();

/* ── Search autocomplete ──────────────────────────────────────── */
(function () {
  'use strict';

  function initAutocomplete(searchEl, acEl) {
    if (!searchEl || !acEl) return;

    let activeIdx = -1;

    function getMatches(q) {
      if (!q || q.length < 3) return [];
      const lower = q.toLowerCase();
      return COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(lower) ||
        c.code.toLowerCase().includes(lower)
      ).slice(0, 8);
    }

    function renderDropdown(matches, q) {
      activeIdx = -1;
      if (matches.length === 0) {
        acEl.classList.remove('visible');
        acEl.innerHTML = '';
        return;
      }
      acEl.innerHTML = matches.map((c, i) => `
        <div class="search-ac-item" role="option" tabindex="-1" data-idx="${i}" data-code="${c.code}">
          <img class="search-ac-flag" src="${flagUrl(c.code)}" alt="" loading="lazy" />
          <span class="search-ac-name">${c.name}</span>
          <span class="search-ac-continent">${c.continent}</span>
        </div>
      `).join('');
      acEl.classList.add('visible');

      acEl.querySelectorAll('.search-ac-item').forEach(function (item) {
        item.addEventListener('mousedown', function (e) {
          e.preventDefault(); // don't blur search
          const idx = parseInt(item.dataset.idx, 10);
          openMatch(matches[idx]);
        });
      });
    }

    function openMatch(country) {
      acEl.classList.remove('visible');
      acEl.innerHTML = '';
      searchEl.value = '';
      const clearBtn = searchEl.parentElement && searchEl.parentElement.querySelector('.clear-btn');
      if (clearBtn) clearBtn.classList.remove('visible');
      if (typeof window.openCountryModal === 'function') {
        window.openCountryModal(country);
      }
    }

    function hideDropdown() {
      acEl.classList.remove('visible');
      acEl.innerHTML = '';
      activeIdx = -1;
    }

    searchEl.addEventListener('input', function () {
      const val = searchEl.value.trim();
      const matches = getMatches(val);
      renderDropdown(matches, val);
    });

    searchEl.addEventListener('keydown', function (e) {
      const items = acEl.querySelectorAll('.search-ac-item');
      if (!acEl.classList.contains('visible') || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, items.length - 1);
        items.forEach((el, i) => el.classList.toggle('focused', i === activeIdx));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        items.forEach((el, i) => el.classList.toggle('focused', i === activeIdx));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const val = searchEl.value.trim();
        const matches = getMatches(val);
        if (matches.length === 0) return;
        const idx = activeIdx >= 0 ? activeIdx : 0;
        openMatch(matches[idx]);
      } else if (e.key === 'Escape') {
        hideDropdown();
      }
    });

    searchEl.addEventListener('blur', function () {
      // Delay so mousedown on item fires first
      setTimeout(hideDropdown, 150);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Try to init on all search inputs on page
    const searchEls = document.querySelectorAll('#search');
    searchEls.forEach(function (searchEl) {
      const wrap = searchEl.parentElement;
      let acEl = wrap && wrap.querySelector('.search-autocomplete');
      if (!acEl) {
        // inject if not present (continent pages)
        acEl = document.createElement('div');
        acEl.className = 'search-autocomplete';
        acEl.setAttribute('role', 'listbox');
        acEl.setAttribute('aria-label', 'Country suggestions');
        wrap.appendChild(acEl);
      }
      initAutocomplete(searchEl, acEl);
    });
  });
})();
