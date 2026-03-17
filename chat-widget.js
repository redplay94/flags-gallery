(function () {
  'use strict';

  /* ── Knowledge base ─────────────────────────────────────────────── */
  var KB = [
    // AFRICA
    { name:'Algeria', aliases:['algerian'], capital:'Algiers', population:44000000, area:2381741, continent:'Africa', colors:['green','white'], symbols:['crescent','star'], currency:'Algerian Dinar (DZD)', languages:['Arabic','Tamazight'] },
    { name:'Angola', aliases:['angolan'], capital:'Luanda', population:35000000, area:1246700, continent:'Africa', colors:['red','black'], symbols:['star','machete'], currency:'Kwanza (AOA)', languages:['Portuguese'] },
    { name:'Benin', aliases:['beninese'], capital:'Porto-Novo', population:13000000, area:112622, continent:'Africa', colors:['green','yellow','red'], symbols:['tricolor'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Botswana', aliases:['motswana','batswana'], capital:'Gaborone', population:2600000, area:581730, continent:'Africa', colors:['blue','white','black'], symbols:['stripes'], currency:'Botswana Pula (BWP)', languages:['English','Setswana'] },
    { name:'Burkina Faso', aliases:['burkinabe'], capital:'Ouagadougou', population:22000000, area:274222, continent:'Africa', colors:['red','green','yellow'], symbols:['star'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Burundi', aliases:['burundian'], capital:'Gitega', population:13000000, area:27834, continent:'Africa', colors:['red','white','green'], symbols:['star','cross'], currency:'Burundian Franc (BIF)', languages:['Kirundi','French','English'] },
    { name:'Cabo Verde', aliases:['cape verde','cape verdean'], capital:'Praia', population:600000, area:4033, continent:'Africa', colors:['blue','white','red','yellow'], symbols:['star','stripes'], currency:'Cape Verdean Escudo (CVE)', languages:['Portuguese'] },
    { name:'Cameroon', aliases:['cameroonian'], capital:'Yaoundé', population:28000000, area:475442, continent:'Africa', colors:['green','red','yellow'], symbols:['star','tricolor'], currency:'Central African CFA Franc (XAF)', languages:['French','English'] },
    { name:'Central African Republic', aliases:['car','central african'], capital:'Bangui', population:5000000, area:622984, continent:'Africa', colors:['blue','white','green','yellow','red'], symbols:['star','stripes'], currency:'Central African CFA Franc (XAF)', languages:['Sango','French'] },
    { name:'Chad', aliases:['chadian'], capital:"N'Djamena", population:17000000, area:1284000, continent:'Africa', colors:['blue','yellow','red'], symbols:['tricolor'], currency:'Central African CFA Franc (XAF)', languages:['Arabic','French'] },
    { name:'Comoros', aliases:['comorian'], capital:'Moroni', population:900000, area:1861, continent:'Africa', colors:['green','yellow','white','red','blue'], symbols:['crescent','star','stripes'], currency:'Comorian Franc (KMF)', languages:['Comorian','Arabic','French'] },
    { name:'Congo', aliases:['republic of the congo','congo republic','congolese'], capital:'Brazzaville', population:6000000, area:342000, continent:'Africa', colors:['green','yellow','red'], symbols:['tricolor'], currency:'Central African CFA Franc (XAF)', languages:['French'] },
    { name:'DR Congo', aliases:['democratic republic of the congo','drc','congo kinshasa','zaire'], capital:'Kinshasa', population:100000000, area:2344858, continent:'Africa', colors:['blue','red','yellow','white'], symbols:['star','stripes'], currency:'Congolese Franc (CDF)', languages:['French'] },
    { name:'Djibouti', aliases:['djiboutian'], capital:'Djibouti City', population:1000000, area:23200, continent:'Africa', colors:['blue','green','white','red'], symbols:['star'], currency:'Djiboutian Franc (DJF)', languages:['Arabic','French'] },
    { name:'Egypt', aliases:['egyptian'], capital:'Cairo', population:105000000, area:1002450, continent:'Africa', colors:['red','white','black'], symbols:['eagle','stripes'], currency:'Egyptian Pound (EGP)', languages:['Arabic'] },
    { name:'Equatorial Guinea', aliases:['equatoguinean'], capital:'Malabo', population:1500000, area:28051, continent:'Africa', colors:['green','white','red','blue'], symbols:['tree','stripes'], currency:'Central African CFA Franc (XAF)', languages:['Spanish','French','Portuguese'] },
    { name:'Eritrea', aliases:['eritrean'], capital:'Asmara', population:3500000, area:117600, continent:'Africa', colors:['green','red','blue','yellow'], symbols:['olive'], currency:'Eritrean Nakfa (ERN)', languages:['Tigrinya','Arabic','English'] },
    { name:'Eswatini', aliases:['swaziland','swazi'], capital:'Mbabane', population:1100000, area:17364, continent:'Africa', colors:['blue','yellow','red','black','white'], symbols:['shield','weapon'], currency:'Swazi Lilangeni (SZL)', languages:['English','siSwati'] },
    { name:'Ethiopia', aliases:['ethiopian'], capital:'Addis Ababa', population:126000000, area:1104300, continent:'Africa', colors:['green','yellow','red','blue'], symbols:['star','tricolor'], currency:'Ethiopian Birr (ETB)', languages:['Amharic'] },
    { name:'Gabon', aliases:['gabonese'], capital:'Libreville', population:2300000, area:267668, continent:'Africa', colors:['green','yellow','blue'], symbols:['tricolor','stripes'], currency:'Central African CFA Franc (XAF)', languages:['French'] },
    { name:'Gambia', aliases:['gambian'], capital:'Banjul', population:2700000, area:11295, continent:'Africa', colors:['red','blue','green','white'], symbols:['stripes'], currency:'Gambian Dalasi (GMD)', languages:['English'] },
    { name:'Ghana', aliases:['ghanaian'], capital:'Accra', population:33000000, area:238533, continent:'Africa', colors:['red','yellow','green','black'], symbols:['star'], currency:'Ghanaian Cedi (GHS)', languages:['English'] },
    { name:'Guinea', aliases:['guinean'], capital:'Conakry', population:13000000, area:245857, continent:'Africa', colors:['red','yellow','green'], symbols:['tricolor'], currency:'Guinean Franc (GNF)', languages:['French'] },
    { name:'Guinea-Bissau', aliases:['guinean bissau'], capital:'Bissau', population:2000000, area:36125, continent:'Africa', colors:['red','yellow','green','black'], symbols:['star'], currency:'West African CFA Franc (XOF)', languages:['Portuguese'] },
    { name:'Ivory Coast', aliases:["cote d'ivoire","côte d'ivoire",'ivorian','ivoire'], capital:'Yamoussoukro', population:28000000, area:322463, continent:'Africa', colors:['orange','white','green'], symbols:['tricolor'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Kenya', aliases:['kenyan'], capital:'Nairobi', population:55000000, area:580367, continent:'Africa', colors:['black','red','green','white'], symbols:['shield','spear','stripes'], currency:'Kenyan Shilling (KES)', languages:['English','Swahili'] },
    { name:'Lesotho', aliases:['basotho'], capital:'Maseru', population:2200000, area:30355, continent:'Africa', colors:['blue','white','green','black'], symbols:['stripes'], currency:'Lesotho Loti (LSL)', languages:['English','Sesotho'] },
    { name:'Liberia', aliases:['liberian'], capital:'Monrovia', population:5300000, area:111369, continent:'Africa', colors:['red','white','blue'], symbols:['star','stripes'], currency:'Liberian Dollar (LRD)', languages:['English'] },
    { name:'Libya', aliases:['libyan'], capital:'Tripoli', population:7000000, area:1759541, continent:'Africa', colors:['red','black','green'], symbols:['crescent','star','stripes'], currency:'Libyan Dinar (LYD)', languages:['Arabic'] },
    { name:'Madagascar', aliases:['malagasy'], capital:'Antananarivo', population:29000000, area:587041, continent:'Africa', colors:['white','red','green'], symbols:['tricolor'], currency:'Malagasy Ariary (MGA)', languages:['Malagasy','French'] },
    { name:'Malawi', aliases:['malawian'], capital:'Lilongwe', population:20000000, area:118484, continent:'Africa', colors:['black','red','green'], symbols:['sun','stripes'], currency:'Malawian Kwacha (MWK)', languages:['English','Chichewa'] },
    { name:'Mali', aliases:['malian'], capital:'Bamako', population:23000000, area:1240192, continent:'Africa', colors:['green','yellow','red'], symbols:['tricolor'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Mauritania', aliases:['mauritanian'], capital:'Nouakchott', population:4500000, area:1030700, continent:'Africa', colors:['green','yellow','red'], symbols:['crescent','star','stripes'], currency:'Mauritanian Ouguiya (MRU)', languages:['Arabic'] },
    { name:'Mauritius', aliases:['mauritian'], capital:'Port Louis', population:1300000, area:2040, continent:'Africa', colors:['red','blue','yellow','green'], symbols:['stripes'], currency:'Mauritian Rupee (MUR)', languages:['English','French'] },
    { name:'Morocco', aliases:['moroccan'], capital:'Rabat', population:37000000, area:446550, continent:'Africa', colors:['red','green'], symbols:['star'], currency:'Moroccan Dirham (MAD)', languages:['Arabic','Tamazight'] },
    { name:'Mozambique', aliases:['mozambican'], capital:'Maputo', population:33000000, area:801590, continent:'Africa', colors:['green','white','black','red','yellow'], symbols:['star','weapon','book'], currency:'Mozambican Metical (MZN)', languages:['Portuguese'] },
    { name:'Namibia', aliases:['namibian'], capital:'Windhoek', population:2600000, area:824292, continent:'Africa', colors:['blue','red','green','yellow'], symbols:['sun','stripes'], currency:'Namibian Dollar (NAD)', languages:['English'] },
    { name:'Niger', aliases:['nigerien'], capital:'Niamey', population:25000000, area:1267000, continent:'Africa', colors:['orange','white','green'], symbols:['circle','stripes'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Nigeria', aliases:['nigerian'], capital:'Abuja', population:218000000, area:923768, continent:'Africa', colors:['green','white'], symbols:['stripes'], currency:'Nigerian Naira (NGN)', languages:['English'] },
    { name:'Rwanda', aliases:['rwandan'], capital:'Kigali', population:14000000, area:26338, continent:'Africa', colors:['blue','yellow','green'], symbols:['sun','stripes'], currency:'Rwandan Franc (RWF)', languages:['Kinyarwanda','English','French'] },
    { name:'São Tomé and Príncipe', aliases:['sao tome','são tomé','saotomean'], capital:'São Tomé', population:200000, area:964, continent:'Africa', colors:['green','yellow','red','black'], symbols:['star','stripes'], currency:'São Tomé and Príncipe Dobra (STN)', languages:['Portuguese'] },
    { name:'Senegal', aliases:['senegalese'], capital:'Dakar', population:17000000, area:196722, continent:'Africa', colors:['green','yellow','red'], symbols:['star','tricolor'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Seychelles', aliases:['seychellois'], capital:'Victoria', population:100000, area:455, continent:'Africa', colors:['blue','yellow','red','white','green'], symbols:['stripes'], currency:'Seychellois Rupee (SCR)', languages:['Seychellois Creole','English','French'] },
    { name:'Sierra Leone', aliases:['sierra leonean'], capital:'Freetown', population:8000000, area:71740, continent:'Africa', colors:['green','white','blue'], symbols:['stripes'], currency:'Sierra Leonean Leone (SLE)', languages:['English'] },
    { name:'Somalia', aliases:['somali'], capital:'Mogadishu', population:17000000, area:637657, continent:'Africa', colors:['blue','white'], symbols:['star'], currency:'Somali Shilling (SOS)', languages:['Somali','Arabic'] },
    { name:'South Africa', aliases:['south african'], capital:'Pretoria', population:60000000, area:1219090, continent:'Africa', colors:['green','red','blue','black','yellow','white'], symbols:['stripes'], currency:'South African Rand (ZAR)', languages:['Zulu','Xhosa','Afrikaans','English','Sotho','Tswana'] },
    { name:'South Sudan', aliases:['south sudanese'], capital:'Juba', population:11000000, area:619745, continent:'Africa', colors:['black','red','green','blue','yellow'], symbols:['star','stripes'], currency:'South Sudanese Pound (SSP)', languages:['English'] },
    { name:'Sudan', aliases:['sudanese'], capital:'Khartoum', population:46000000, area:1861484, continent:'Africa', colors:['red','white','black','green'], symbols:['stripes'], currency:'Sudanese Pound (SDG)', languages:['Arabic','English'] },
    { name:'Tanzania', aliases:['tanzanian'], capital:'Dodoma', population:64000000, area:945087, continent:'Africa', colors:['green','yellow','blue','black'], symbols:['stripes'], currency:'Tanzanian Shilling (TZS)', languages:['Swahili','English'] },
    { name:'Togo', aliases:['togolese'], capital:'Lomé', population:8700000, area:56785, continent:'Africa', colors:['green','yellow','red','white'], symbols:['star','stripes'], currency:'West African CFA Franc (XOF)', languages:['French'] },
    { name:'Tunisia', aliases:['tunisian'], capital:'Tunis', population:12000000, area:163610, continent:'Africa', colors:['red','white'], symbols:['crescent','star'], currency:'Tunisian Dinar (TND)', languages:['Arabic'] },
    { name:'Uganda', aliases:['ugandan'], capital:'Kampala', population:48000000, area:241550, continent:'Africa', colors:['black','yellow','red','white'], symbols:['bird','stripes'], currency:'Ugandan Shilling (UGX)', languages:['English','Swahili'] },
    { name:'Zambia', aliases:['zambian'], capital:'Lusaka', population:20000000, area:752618, continent:'Africa', colors:['green','red','black','orange'], symbols:['eagle','stripes'], currency:'Zambian Kwacha (ZMW)', languages:['English'] },
    { name:'Zimbabwe', aliases:['zimbabwean'], capital:'Harare', population:16000000, area:390757, continent:'Africa', colors:['green','yellow','red','black','white'], symbols:['bird','star','stripes'], currency:'Zimbabwe Gold (ZiG)', languages:['Shona','Ndebele','English'] },

    // ASIA
    { name:'Afghanistan', aliases:['afghan'], capital:'Kabul', population:40000000, area:652230, continent:'Asia', colors:['black','red','green'], symbols:['mosque','stripes'], currency:'Afghan Afghani (AFN)', languages:['Dari','Pashto'] },
    { name:'Armenia', aliases:['armenian'], capital:'Yerevan', population:3000000, area:29743, continent:'Asia', colors:['red','blue','orange'], symbols:['tricolor','stripes'], currency:'Armenian Dram (AMD)', languages:['Armenian'] },
    { name:'Azerbaijan', aliases:['azerbaijani'], capital:'Baku', population:10000000, area:86600, continent:'Asia', colors:['blue','red','green'], symbols:['crescent','star','stripes'], currency:'Azerbaijani Manat (AZN)', languages:['Azerbaijani'] },
    { name:'Bahrain', aliases:['bahraini'], capital:'Manama', population:1700000, area:778, continent:'Asia', colors:['red','white'], symbols:['serrated'], currency:'Bahraini Dinar (BHD)', languages:['Arabic'] },
    { name:'Bangladesh', aliases:['bangladeshi'], capital:'Dhaka', population:167000000, area:147570, continent:'Asia', colors:['green','red'], symbols:['circle'], currency:'Bangladeshi Taka (BDT)', languages:['Bengali'] },
    { name:'Bhutan', aliases:['bhutanese'], capital:'Thimphu', population:800000, area:38394, continent:'Asia', colors:['orange','yellow','red'], symbols:['dragon','stripes'], currency:'Bhutanese Ngultrum (BTN)', languages:['Dzongkha'] },
    { name:'Brunei', aliases:['bruneian'], capital:'Bandar Seri Begawan', population:500000, area:5765, continent:'Asia', colors:['yellow','white','black'], symbols:['crest','stripes'], currency:'Brunei Dollar (BND)', languages:['Malay'] },
    { name:'Cambodia', aliases:['cambodian','khmer'], capital:'Phnom Penh', population:17000000, area:181035, continent:'Asia', colors:['red','blue','white'], symbols:['temple','stripes'], currency:'Cambodian Riel (KHR)', languages:['Khmer'] },
    { name:'China', aliases:['chinese','prc'], capital:'Beijing', population:1400000000, area:9596960, continent:'Asia', colors:['red','yellow'], symbols:['star'], currency:'Chinese Yuan (CNY)', languages:['Mandarin Chinese'] },
    { name:'Cyprus', aliases:['cypriot'], capital:'Nicosia', population:1200000, area:9251, continent:'Asia', colors:['white','green','orange'], symbols:['map','olive'], currency:'Euro (EUR)', languages:['Greek','Turkish'] },
    { name:'Georgia', aliases:['georgian'], capital:'Tbilisi', population:3700000, area:69700, continent:'Asia', colors:['white','red'], symbols:['cross'], currency:'Georgian Lari (GEL)', languages:['Georgian'] },
    { name:'India', aliases:['indian'], capital:'New Delhi', population:1430000000, area:3287263, continent:'Asia', colors:['saffron','white','green','blue'], symbols:['wheel','stripes'], currency:'Indian Rupee (INR)', languages:['Hindi','English'] },
    { name:'Indonesia', aliases:['indonesian'], capital:'Jakarta', population:277000000, area:1904569, continent:'Asia', colors:['red','white'], symbols:['bicolor','stripes'], currency:'Indonesian Rupiah (IDR)', languages:['Indonesian'] },
    { name:'Iran', aliases:['iranian','persian'], capital:'Tehran', population:88000000, area:1648195, continent:'Asia', colors:['green','white','red'], symbols:['emblem','stripes'], currency:'Iranian Rial (IRR)', languages:['Persian'] },
    { name:'Iraq', aliases:['iraqi'], capital:'Baghdad', population:42000000, area:438317, continent:'Asia', colors:['red','white','black','green'], symbols:['eagle','stripes'], currency:'Iraqi Dinar (IQD)', languages:['Arabic','Kurdish'] },
    { name:'Israel', aliases:['israeli'], capital:'Jerusalem', population:9800000, area:20770, continent:'Asia', colors:['blue','white'], symbols:['star of david','stripes'], currency:'Israeli New Shekel (ILS)', languages:['Hebrew','Arabic'] },
    { name:'Japan', aliases:['japanese'], capital:'Tokyo', population:125000000, area:377975, continent:'Asia', colors:['white','red'], symbols:['circle'], currency:'Japanese Yen (JPY)', languages:['Japanese'] },
    { name:'Jordan', aliases:['jordanian'], capital:'Amman', population:10000000, area:89342, continent:'Asia', colors:['black','white','green','red'], symbols:['star','stripes'], currency:'Jordanian Dinar (JOD)', languages:['Arabic'] },
    { name:'Kazakhstan', aliases:['kazakhstani','kazakh'], capital:'Astana', population:19000000, area:2724900, continent:'Asia', colors:['blue','yellow'], symbols:['sun','eagle','stripes'], currency:'Kazakhstani Tenge (KZT)', languages:['Kazakh','Russian'] },
    { name:'Kuwait', aliases:['kuwaiti'], capital:'Kuwait City', population:4300000, area:17818, continent:'Asia', colors:['green','white','red','black'], symbols:['trapezoid','stripes'], currency:'Kuwaiti Dinar (KWD)', languages:['Arabic'] },
    { name:'Kyrgyzstan', aliases:['kyrgyz'], capital:'Bishkek', population:7000000, area:199951, continent:'Asia', colors:['red','yellow'], symbols:['sun'], currency:'Kyrgyzstani Som (KGS)', languages:['Kyrgyz','Russian'] },
    { name:'Laos', aliases:['laotian','lao'], capital:'Vientiane', population:7400000, area:236800, continent:'Asia', colors:['red','blue','white'], symbols:['circle','stripes'], currency:'Lao Kip (LAK)', languages:['Lao'] },
    { name:'Lebanon', aliases:['lebanese'], capital:'Beirut', population:5500000, area:10452, continent:'Asia', colors:['red','white','green'], symbols:['cedar tree','stripes'], currency:'Lebanese Pound (LBP)', languages:['Arabic'] },
    { name:'Malaysia', aliases:['malaysian'], capital:'Kuala Lumpur', population:33000000, area:329847, continent:'Asia', colors:['red','white','blue','yellow'], symbols:['crescent','star','stripes'], currency:'Malaysian Ringgit (MYR)', languages:['Malay'] },
    { name:'Maldives', aliases:['maldivian'], capital:'Malé', population:500000, area:298, continent:'Asia', colors:['green','red','white'], symbols:['crescent'], currency:'Maldivian Rufiyaa (MVR)', languages:['Dhivehi'] },
    { name:'Mongolia', aliases:['mongolian'], capital:'Ulaanbaatar', population:3300000, area:1564116, continent:'Asia', colors:['red','blue'], symbols:['soyombo','stripes'], currency:'Mongolian Tögrög (MNT)', languages:['Mongolian'] },
    { name:'Myanmar', aliases:['burmese','burma'], capital:'Naypyidaw', population:55000000, area:676578, continent:'Asia', colors:['yellow','green','red','white'], symbols:['star','stripes'], currency:'Myanmar Kyat (MMK)', languages:['Burmese'] },
    { name:'Nepal', aliases:['nepali','nepalese'], capital:'Kathmandu', population:30000000, area:147181, continent:'Asia', colors:['red','blue','white'], symbols:['moon','sun'], currency:'Nepalese Rupee (NPR)', languages:['Nepali'] },
    { name:'North Korea', aliases:['dprk','north korean'], capital:'Pyongyang', population:26000000, area:120538, continent:'Asia', colors:['red','blue','white'], symbols:['star','stripes'], currency:'North Korean Won (KPW)', languages:['Korean'] },
    { name:'Oman', aliases:['omani'], capital:'Muscat', population:4500000, area:309500, continent:'Asia', colors:['red','white','green'], symbols:['khanjar','stripes'], currency:'Omani Rial (OMR)', languages:['Arabic'] },
    { name:'Pakistan', aliases:['pakistani'], capital:'Islamabad', population:230000000, area:881913, continent:'Asia', colors:['green','white'], symbols:['crescent','star'], currency:'Pakistani Rupee (PKR)', languages:['Urdu','English'] },
    { name:'Palestine', aliases:['palestinian'], capital:'Ramallah', population:5300000, area:6220, continent:'Asia', colors:['black','white','green','red'], symbols:['stripes'], currency:'Israeli New Shekel (ILS)', languages:['Arabic'] },
    { name:'Philippines', aliases:['filipino','philippine'], capital:'Manila', population:115000000, area:300000, continent:'Asia', colors:['blue','red','white','yellow'], symbols:['sun','star','stripes'], currency:'Philippine Peso (PHP)', languages:['Filipino','English'] },
    { name:'Qatar', aliases:['qatari'], capital:'Doha', population:2900000, area:11581, continent:'Asia', colors:['maroon','white'], symbols:['serrated'], currency:'Qatari Riyal (QAR)', languages:['Arabic'] },
    { name:'Saudi Arabia', aliases:['saudi','saudi arabian'], capital:'Riyadh', population:36000000, area:2149690, continent:'Asia', colors:['green','white'], symbols:['sword','palm tree'], currency:'Saudi Riyal (SAR)', languages:['Arabic'] },
    { name:'Singapore', aliases:['singaporean'], capital:'Singapore', population:6000000, area:728, continent:'Asia', colors:['red','white'], symbols:['crescent','star','stripes'], currency:'Singapore Dollar (SGD)', languages:['English','Malay','Mandarin','Tamil'] },
    { name:'South Korea', aliases:['korea','korean','republic of korea'], capital:'Seoul', population:52000000, area:100210, continent:'Asia', colors:['white','red','blue','black'], symbols:['yin yang','trigram'], currency:'South Korean Won (KRW)', languages:['Korean'] },
    { name:'Sri Lanka', aliases:['sri lankan','ceylon'], capital:'Sri Jayawardenepura Kotte', population:22000000, area:65610, continent:'Asia', colors:['maroon','gold','green','orange'], symbols:['lion','stripes'], currency:'Sri Lankan Rupee (LKR)', languages:['Sinhala','Tamil'] },
    { name:'Syria', aliases:['syrian'], capital:'Damascus', population:22000000, area:185180, continent:'Asia', colors:['red','white','black','green'], symbols:['eagle','stripes'], currency:'Syrian Pound (SYP)', languages:['Arabic'] },
    { name:'Taiwan', aliases:['taiwanese','republic of china','roc'], capital:'Taipei', population:23000000, area:36193, continent:'Asia', colors:['red','blue','white'], symbols:['sun','stripes'], currency:'New Taiwan Dollar (TWD)', languages:['Mandarin Chinese'] },
    { name:'Tajikistan', aliases:['tajik'], capital:'Dushanbe', population:10000000, area:143100, continent:'Asia', colors:['red','white','green'], symbols:['crown','star','stripes'], currency:'Tajikistani Somoni (TJS)', languages:['Tajik'] },
    { name:'Thailand', aliases:['thai'], capital:'Bangkok', population:71000000, area:513120, continent:'Asia', colors:['red','white','blue'], symbols:['stripes'], currency:'Thai Baht (THB)', languages:['Thai'] },
    { name:'Timor-Leste', aliases:['east timor','timorese'], capital:'Dili', population:1300000, area:14874, continent:'Asia', colors:['red','yellow','black','white'], symbols:['star','stripes'], currency:'United States Dollar (USD)', languages:['Tetum','Portuguese'] },
    { name:'Turkey', aliases:['turkish','türkiye'], capital:'Ankara', population:85000000, area:783562, continent:'Asia', colors:['red','white'], symbols:['crescent','star'], currency:'Turkish Lira (TRY)', languages:['Turkish'] },
    { name:'Turkmenistan', aliases:['turkmen'], capital:'Ashgabat', population:6000000, area:488100, continent:'Asia', colors:['green','white','red'], symbols:['carpet','crescent','star'], currency:'Turkmenistani Manat (TMT)', languages:['Turkmen'] },
    { name:'United Arab Emirates', aliases:['uae','emirati'], capital:'Abu Dhabi', population:10000000, area:83600, continent:'Asia', colors:['red','green','white','black'], symbols:['stripes'], currency:'UAE Dirham (AED)', languages:['Arabic'] },
    { name:'Uzbekistan', aliases:['uzbek'], capital:'Tashkent', population:36000000, area:448978, continent:'Asia', colors:['blue','white','green','red'], symbols:['crescent','star','stripes'], currency:'Uzbekistani Sum (UZS)', languages:['Uzbek'] },
    { name:'Vietnam', aliases:['vietnamese','viet nam'], capital:'Hanoi', population:98000000, area:331212, continent:'Asia', colors:['red','yellow'], symbols:['star'], currency:'Vietnamese Đồng (VND)', languages:['Vietnamese'] },
    { name:'Yemen', aliases:['yemeni'], capital:"Sana'a", population:34000000, area:527968, continent:'Asia', colors:['red','white','black'], symbols:['stripes'], currency:'Yemeni Rial (YER)', languages:['Arabic'] },

    // EUROPE
    { name:'Albania', aliases:['albanian'], capital:'Tirana', population:2800000, area:28748, continent:'Europe', colors:['red','black'], symbols:['eagle'], currency:'Albanian Lek (ALL)', languages:['Albanian'] },
    { name:'Andorra', aliases:['andorran'], capital:'Andorra la Vella', population:80000, area:468, continent:'Europe', colors:['blue','yellow','red'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Catalan'] },
    { name:'Austria', aliases:['austrian'], capital:'Vienna', population:9000000, area:83871, continent:'Europe', colors:['red','white'], symbols:['stripes'], currency:'Euro (EUR)', languages:['German'] },
    { name:'Belarus', aliases:['belarusian'], capital:'Minsk', population:9400000, area:207600, continent:'Europe', colors:['red','green','white'], symbols:['ornament','stripes'], currency:'Belarusian Ruble (BYN)', languages:['Belarusian','Russian'] },
    { name:'Belgium', aliases:['belgian'], capital:'Brussels', population:11600000, area:30528, continent:'Europe', colors:['black','yellow','red'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['Dutch','French','German'] },
    { name:'Bosnia and Herzegovina', aliases:['bosnian','herzegovina','bih'], capital:'Sarajevo', population:3200000, area:51197, continent:'Europe', colors:['blue','yellow','white'], symbols:['star','stripes'], currency:'Bosnia-Herzegovina Convertible Mark (BAM)', languages:['Bosnian','Croatian','Serbian'] },
    { name:'Bulgaria', aliases:['bulgarian'], capital:'Sofia', population:6500000, area:110879, continent:'Europe', colors:['white','green','red'], symbols:['tricolor','stripes'], currency:'Bulgarian Lev (BGN)', languages:['Bulgarian'] },
    { name:'Croatia', aliases:['croatian'], capital:'Zagreb', population:3900000, area:56594, continent:'Europe', colors:['red','white','blue'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Croatian'] },
    { name:'Czech Republic', aliases:['czechia','czech','bohemia'], capital:'Prague', population:10900000, area:78866, continent:'Europe', colors:['white','red','blue'], symbols:['stripes'], currency:'Czech Koruna (CZK)', languages:['Czech'] },
    { name:'Denmark', aliases:['danish'], capital:'Copenhagen', population:5900000, area:43094, continent:'Europe', colors:['red','white'], symbols:['cross'], currency:'Danish Krone (DKK)', languages:['Danish'] },
    { name:'Estonia', aliases:['estonian'], capital:'Tallinn', population:1300000, area:45228, continent:'Europe', colors:['blue','black','white'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['Estonian'] },
    { name:'Finland', aliases:['finnish'], capital:'Helsinki', population:5600000, area:338424, continent:'Europe', colors:['white','blue'], symbols:['cross'], currency:'Euro (EUR)', languages:['Finnish','Swedish'] },
    { name:'France', aliases:['french'], capital:'Paris', population:68000000, area:551695, continent:'Europe', colors:['blue','white','red'], symbols:['tricolor'], currency:'Euro (EUR)', languages:['French'] },
    { name:'Germany', aliases:['german','deutschland'], capital:'Berlin', population:84000000, area:357114, continent:'Europe', colors:['black','red','yellow'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['German'] },
    { name:'Greece', aliases:['greek','hellenic'], capital:'Athens', population:10400000, area:131957, continent:'Europe', colors:['blue','white'], symbols:['cross','stripes'], currency:'Euro (EUR)', languages:['Greek'] },
    { name:'Hungary', aliases:['hungarian'], capital:'Budapest', population:9700000, area:93028, continent:'Europe', colors:['red','white','green'], symbols:['tricolor','stripes'], currency:'Hungarian Forint (HUF)', languages:['Hungarian'] },
    { name:'Iceland', aliases:['icelandic'], capital:'Reykjavik', population:370000, area:103000, continent:'Europe', colors:['blue','red','white'], symbols:['cross'], currency:'Icelandic Króna (ISK)', languages:['Icelandic'] },
    { name:'Ireland', aliases:['irish'], capital:'Dublin', population:5200000, area:70273, continent:'Europe', colors:['green','white','orange'], symbols:['tricolor'], currency:'Euro (EUR)', languages:['Irish','English'] },
    { name:'Italy', aliases:['italian'], capital:'Rome', population:59000000, area:301340, continent:'Europe', colors:['green','white','red'], symbols:['tricolor'], currency:'Euro (EUR)', languages:['Italian'] },
    { name:'Kosovo', aliases:['kosovar'], capital:'Pristina', population:1800000, area:10887, continent:'Europe', colors:['blue','yellow','white'], symbols:['map','star'], currency:'Euro (EUR)', languages:['Albanian','Serbian'] },
    { name:'Latvia', aliases:['latvian'], capital:'Riga', population:1800000, area:64589, continent:'Europe', colors:['red','white'], symbols:['stripes'], currency:'Euro (EUR)', languages:['Latvian'] },
    { name:'Liechtenstein', aliases:['liechtensteiner'], capital:'Vaduz', population:40000, area:160, continent:'Europe', colors:['blue','red'], symbols:['crown','stripes'], currency:'Swiss Franc (CHF)', languages:['German'] },
    { name:'Lithuania', aliases:['lithuanian'], capital:'Vilnius', population:2800000, area:65300, continent:'Europe', colors:['yellow','green','red'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['Lithuanian'] },
    { name:'Luxembourg', aliases:['luxembourgish'], capital:'Luxembourg City', population:670000, area:2586, continent:'Europe', colors:['red','white','blue'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['Luxembourgish','French','German'] },
    { name:'Malta', aliases:['maltese'], capital:'Valletta', population:540000, area:316, continent:'Europe', colors:['white','red'], symbols:['cross','stripes'], currency:'Euro (EUR)', languages:['Maltese','English'] },
    { name:'Moldova', aliases:['moldovan'], capital:'Chișinău', population:2600000, area:33846, continent:'Europe', colors:['blue','yellow','red'], symbols:['coat of arms','stripes'], currency:'Moldovan Leu (MDL)', languages:['Romanian'] },
    { name:'Monaco', aliases:['monacan'], capital:'Monaco', population:40000, area:2, continent:'Europe', colors:['red','white'], symbols:['bicolor','stripes'], currency:'Euro (EUR)', languages:['French'] },
    { name:'Montenegro', aliases:['montenegrin'], capital:'Podgorica', population:620000, area:13812, continent:'Europe', colors:['red','yellow','gold'], symbols:['eagle','coat of arms'], currency:'Euro (EUR)', languages:['Montenegrin'] },
    { name:'Netherlands', aliases:['dutch','holland'], capital:'Amsterdam', population:17900000, area:41543, continent:'Europe', colors:['red','white','blue'], symbols:['tricolor','stripes'], currency:'Euro (EUR)', languages:['Dutch'] },
    { name:'North Macedonia', aliases:['macedonian','fyrom'], capital:'Skopje', population:2100000, area:25713, continent:'Europe', colors:['red','yellow'], symbols:['sun'], currency:'Macedonian Denar (MKD)', languages:['Macedonian','Albanian'] },
    { name:'Norway', aliases:['norwegian'], capital:'Oslo', population:5400000, area:385207, continent:'Europe', colors:['red','white','blue'], symbols:['cross'], currency:'Norwegian Krone (NOK)', languages:['Norwegian'] },
    { name:'Poland', aliases:['polish'], capital:'Warsaw', population:38000000, area:312696, continent:'Europe', colors:['white','red'], symbols:['bicolor','stripes'], currency:'Polish Złoty (PLN)', languages:['Polish'] },
    { name:'Portugal', aliases:['portuguese'], capital:'Lisbon', population:10300000, area:92212, continent:'Europe', colors:['green','red','yellow'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Portuguese'] },
    { name:'Romania', aliases:['romanian'], capital:'Bucharest', population:19000000, area:238397, continent:'Europe', colors:['blue','yellow','red'], symbols:['tricolor','stripes'], currency:'Romanian Leu (RON)', languages:['Romanian'] },
    { name:'Russia', aliases:['russian','russian federation'], capital:'Moscow', population:144000000, area:17098242, continent:'Europe', colors:['white','blue','red'], symbols:['tricolor','stripes'], currency:'Russian Ruble (RUB)', languages:['Russian'] },
    { name:'San Marino', aliases:['sammarinese'], capital:'San Marino City', population:34000, area:61, continent:'Europe', colors:['white','blue'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Italian'] },
    { name:'Serbia', aliases:['serbian'], capital:'Belgrade', population:6800000, area:77474, continent:'Europe', colors:['red','blue','white'], symbols:['coat of arms','stripes'], currency:'Serbian Dinar (RSD)', languages:['Serbian'] },
    { name:'Slovakia', aliases:['slovak'], capital:'Bratislava', population:5500000, area:49035, continent:'Europe', colors:['white','blue','red'], symbols:['cross','stripes'], currency:'Euro (EUR)', languages:['Slovak'] },
    { name:'Slovenia', aliases:['slovenian'], capital:'Ljubljana', population:2100000, area:20273, continent:'Europe', colors:['white','blue','red'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Slovene'] },
    { name:'Spain', aliases:['spanish'], capital:'Madrid', population:47400000, area:505994, continent:'Europe', colors:['red','yellow'], symbols:['coat of arms','stripes'], currency:'Euro (EUR)', languages:['Spanish'] },
    { name:'Sweden', aliases:['swedish'], capital:'Stockholm', population:10500000, area:450295, continent:'Europe', colors:['blue','yellow'], symbols:['cross'], currency:'Swedish Krona (SEK)', languages:['Swedish'] },
    { name:'Switzerland', aliases:['swiss'], capital:'Bern', population:8800000, area:41285, continent:'Europe', colors:['red','white'], symbols:['cross'], currency:'Swiss Franc (CHF)', languages:['German','French','Italian','Romansh'] },
    { name:'Ukraine', aliases:['ukrainian'], capital:'Kyiv', population:43000000, area:603550, continent:'Europe', colors:['blue','yellow'], symbols:['bicolor','stripes'], currency:'Ukrainian Hryvnia (UAH)', languages:['Ukrainian'] },
    { name:'United Kingdom', aliases:['uk','britain','british','england','great britain'], capital:'London', population:67000000, area:242495, continent:'Europe', colors:['red','white','blue'], symbols:['cross','union jack'], currency:'British Pound Sterling (GBP)', languages:['English'] },
    { name:'Vatican City', aliases:['holy see','vatican'], capital:'Vatican City', population:800, area:0.44, continent:'Europe', colors:['yellow','white'], symbols:['papal keys','cross'], currency:'Euro (EUR)', languages:['Latin','Italian'] },

    // NORTH AMERICA
    { name:'Antigua and Barbuda', aliases:['antiguan','barbudan'], capital:"St. John's", population:100000, area:442, continent:'North America', colors:['black','blue','white','yellow','red'], symbols:['sun','stripes'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Bahamas', aliases:['bahamian'], capital:'Nassau', population:400000, area:13943, continent:'North America', colors:['blue','yellow','black'], symbols:['triangle','stripes'], currency:'Bahamian Dollar (BSD)', languages:['English'] },
    { name:'Barbados', aliases:['barbadian','bajan'], capital:'Bridgetown', population:300000, area:430, continent:'North America', colors:['blue','yellow','black'], symbols:['trident','stripes'], currency:'Barbadian Dollar (BBD)', languages:['English'] },
    { name:'Belize', aliases:['belizean'], capital:'Belmopan', population:400000, area:22966, continent:'North America', colors:['blue','red','white'], symbols:['coat of arms','stripes'], currency:'Belize Dollar (BZD)', languages:['English'] },
    { name:'Canada', aliases:['canadian'], capital:'Ottawa', population:38000000, area:9984670, continent:'North America', colors:['red','white'], symbols:['maple leaf'], currency:'Canadian Dollar (CAD)', languages:['English','French'] },
    { name:'Costa Rica', aliases:['costa rican'], capital:'San José', population:5200000, area:51100, continent:'North America', colors:['blue','white','red'], symbols:['coat of arms','stripes'], currency:'Costa Rican Colón (CRC)', languages:['Spanish'] },
    { name:'Cuba', aliases:['cuban'], capital:'Havana', population:11000000, area:109884, continent:'North America', colors:['blue','white','red'], symbols:['star','stripes'], currency:'Cuban Peso (CUP)', languages:['Spanish'] },
    { name:'Dominica', aliases:['dominican'], capital:'Roseau', population:70000, area:751, continent:'North America', colors:['green','yellow','black','white','red'], symbols:['parrot','cross','stripes'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Dominican Republic', aliases:['dominican republic'], capital:'Santo Domingo', population:11000000, area:48671, continent:'North America', colors:['blue','red','white'], symbols:['cross','coat of arms'], currency:'Dominican Peso (DOP)', languages:['Spanish'] },
    { name:'El Salvador', aliases:['salvadoran'], capital:'San Salvador', population:6500000, area:21041, continent:'North America', colors:['blue','white'], symbols:['coat of arms','stripes'], currency:'United States Dollar (USD)', languages:['Spanish'] },
    { name:'Grenada', aliases:['grenadian'], capital:"St. George's", population:120000, area:348, continent:'North America', colors:['red','yellow','green'], symbols:['star','nutmeg'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Guatemala', aliases:['guatemalan'], capital:'Guatemala City', population:17000000, area:108889, continent:'North America', colors:['blue','white'], symbols:['quetzal','coat of arms','stripes'], currency:'Guatemalan Quetzal (GTQ)', languages:['Spanish'] },
    { name:'Haiti', aliases:['haitian'], capital:'Port-au-Prince', population:11500000, area:27750, continent:'North America', colors:['blue','red'], symbols:['coat of arms','stripes'], currency:'Haitian Gourde (HTG)', languages:['French','Haitian Creole'] },
    { name:'Honduras', aliases:['honduran'], capital:'Tegucigalpa', population:10000000, area:112492, continent:'North America', colors:['blue','white'], symbols:['star','stripes'], currency:'Honduran Lempira (HNL)', languages:['Spanish'] },
    { name:'Jamaica', aliases:['jamaican'], capital:'Kingston', population:3000000, area:10991, continent:'North America', colors:['black','yellow','green'], symbols:['cross','stripes'], currency:'Jamaican Dollar (JMD)', languages:['English'] },
    { name:'Mexico', aliases:['mexican'], capital:'Mexico City', population:131000000, area:1964375, continent:'North America', colors:['green','white','red'], symbols:['eagle','snake','cactus','stripes'], currency:'Mexican Peso (MXN)', languages:['Spanish'] },
    { name:'Nicaragua', aliases:['nicaraguan'], capital:'Managua', population:6800000, area:130373, continent:'North America', colors:['blue','white'], symbols:['coat of arms','stripes'], currency:'Nicaraguan Córdoba (NIO)', languages:['Spanish'] },
    { name:'Panama', aliases:['panamanian'], capital:'Panama City', population:4400000, area:75417, continent:'North America', colors:['red','blue','white'], symbols:['star','stripes'], currency:'Panamanian Balboa (PAB)', languages:['Spanish'] },
    { name:'Saint Kitts and Nevis', aliases:['st kitts','saint kitts','kittitian'], capital:'Basseterre', population:55000, area:261, continent:'North America', colors:['green','yellow','black','red','white'], symbols:['star','stripes'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Saint Lucia', aliases:['st lucia','saint lucia','saint lucian'], capital:'Castries', population:180000, area:616, continent:'North America', colors:['blue','yellow','black','white'], symbols:['triangle','stripes'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Saint Vincent and the Grenadines', aliases:['st vincent','saint vincent','vincentian'], capital:'Kingstown', population:110000, area:389, continent:'North America', colors:['blue','yellow','green'], symbols:['diamond','stripes'], currency:'Eastern Caribbean Dollar (XCD)', languages:['English'] },
    { name:'Trinidad and Tobago', aliases:['trinidadian','tobagonian'], capital:'Port of Spain', population:1400000, area:5130, continent:'North America', colors:['red','black','white'], symbols:['stripes'], currency:'Trinidad and Tobago Dollar (TTD)', languages:['English'] },
    { name:'United States', aliases:['usa','us','america','american','united states of america'], capital:'Washington D.C.', population:335000000, area:9372610, continent:'North America', colors:['red','white','blue'], symbols:['star','stripes'], currency:'United States Dollar (USD)', languages:['English'] },

    // SOUTH AMERICA
    { name:'Argentina', aliases:['argentinian','argentinean'], capital:'Buenos Aires', population:46000000, area:2780400, continent:'South America', colors:['blue','white'], symbols:['sun','stripes'], currency:'Argentine Peso (ARS)', languages:['Spanish'] },
    { name:'Bolivia', aliases:['bolivian'], capital:'Sucre', population:12000000, area:1098581, continent:'South America', colors:['red','yellow','green'], symbols:['coat of arms','stripes'], currency:'Boliviano (BOB)', languages:['Spanish','Quechua','Aymara'] },
    { name:'Brazil', aliases:['brazilian'], capital:'Brasília', population:215000000, area:8515767, continent:'South America', colors:['green','yellow','blue','white'], symbols:['star','globe','diamond'], currency:'Brazilian Real (BRL)', languages:['Portuguese'] },
    { name:'Chile', aliases:['chilean'], capital:'Santiago', population:19500000, area:756102, continent:'South America', colors:['red','white','blue'], symbols:['star','stripes'], currency:'Chilean Peso (CLP)', languages:['Spanish'] },
    { name:'Colombia', aliases:['colombian'], capital:'Bogotá', population:52000000, area:1141748, continent:'South America', colors:['yellow','blue','red'], symbols:['tricolor','stripes'], currency:'Colombian Peso (COP)', languages:['Spanish'] },
    { name:'Ecuador', aliases:['ecuadorian'], capital:'Quito', population:18000000, area:283561, continent:'South America', colors:['yellow','blue','red'], symbols:['coat of arms','stripes'], currency:'United States Dollar (USD)', languages:['Spanish'] },
    { name:'Guyana', aliases:['guyanese'], capital:'Georgetown', population:800000, area:214969, continent:'South America', colors:['green','white','red','black','yellow'], symbols:['arrow','stripes'], currency:'Guyanese Dollar (GYD)', languages:['English'] },
    { name:'Paraguay', aliases:['paraguayan'], capital:'Asunción', population:7400000, area:406752, continent:'South America', colors:['red','white','blue'], symbols:['star','coat of arms','stripes'], currency:'Paraguayan Guaraní (PYG)', languages:['Spanish','Guaraní'] },
    { name:'Peru', aliases:['peruvian'], capital:'Lima', population:33000000, area:1285216, continent:'South America', colors:['red','white'], symbols:['coat of arms','stripes'], currency:'Peruvian Sol (PEN)', languages:['Spanish','Quechua','Aymara'] },
    { name:'Suriname', aliases:['surinamese'], capital:'Paramaribo', population:600000, area:163820, continent:'South America', colors:['green','white','red','yellow'], symbols:['star','stripes'], currency:'Surinamese Dollar (SRD)', languages:['Dutch'] },
    { name:'Uruguay', aliases:['uruguayan'], capital:'Montevideo', population:3500000, area:176215, continent:'South America', colors:['white','blue','yellow'], symbols:['sun','stripes'], currency:'Uruguayan Peso (UYU)', languages:['Spanish'] },
    { name:'Venezuela', aliases:['venezuelan'], capital:'Caracas', population:28000000, area:912050, continent:'South America', colors:['yellow','blue','red'], symbols:['star','stripes'], currency:'Venezuelan Bolívar (VES)', languages:['Spanish'] },

    // OCEANIA
    { name:'Australia', aliases:['australian'], capital:'Canberra', population:26000000, area:7692024, continent:'Oceania', colors:['blue','red','white'], symbols:['union jack','star','southern cross'], currency:'Australian Dollar (AUD)', languages:['English'] },
    { name:'Fiji', aliases:['fijian'], capital:'Suva', population:900000, area:18272, continent:'Oceania', colors:['blue','white','red'], symbols:['union jack','shield','stripes'], currency:'Fijian Dollar (FJD)', languages:['English','Fijian','Hindi'] },
    { name:'Kiribati', aliases:['i-kiribati'], capital:'South Tarawa', population:120000, area:811, continent:'Oceania', colors:['red','blue','yellow','white'], symbols:['sun','bird','stripes'], currency:'Australian Dollar (AUD)', languages:['English','Gilbertese'] },
    { name:'Marshall Islands', aliases:['marshallese'], capital:'Majuro', population:42000, area:181, continent:'Oceania', colors:['blue','orange','white'], symbols:['star','stripes'], currency:'United States Dollar (USD)', languages:['Marshallese','English'] },
    { name:'Micronesia', aliases:['micronesian','federated states of micronesia','fsm'], capital:'Palikir', population:115000, area:702, continent:'Oceania', colors:['blue','white'], symbols:['star'], currency:'United States Dollar (USD)', languages:['English'] },
    { name:'Nauru', aliases:['nauruan'], capital:'Yaren', population:10000, area:21, continent:'Oceania', colors:['blue','yellow','white'], symbols:['star','stripes'], currency:'Australian Dollar (AUD)', languages:['Nauruan','English'] },
    { name:'New Zealand', aliases:['new zealander','kiwi'], capital:'Wellington', population:5100000, area:268838, continent:'Oceania', colors:['blue','red','white'], symbols:['union jack','southern cross','stripes'], currency:'New Zealand Dollar (NZD)', languages:['English','Māori'] },
    { name:'Palau', aliases:['palauan'], capital:'Ngerulmud', population:18000, area:459, continent:'Oceania', colors:['blue','yellow'], symbols:['circle'], currency:'United States Dollar (USD)', languages:['Palauan','English'] },
    { name:'Papua New Guinea', aliases:['png','papua new guinean'], capital:'Port Moresby', population:10000000, area:462840, continent:'Oceania', colors:['black','red','yellow'], symbols:['bird of paradise','star','stripes'], currency:'Papua New Guinean Kina (PGK)', languages:['Tok Pisin','English','Hiri Motu'] },
    { name:'Samoa', aliases:['samoan'], capital:'Apia', population:220000, area:2842, continent:'Oceania', colors:['red','blue','white'], symbols:['southern cross','stripes'], currency:'Samoan Tālā (WST)', languages:['Samoan','English'] },
    { name:'Solomon Islands', aliases:['solomon islander'], capital:'Honiara', population:720000, area:28896, continent:'Oceania', colors:['blue','green','yellow','white'], symbols:['star','stripes'], currency:'Solomon Islands Dollar (SBD)', languages:['English'] },
    { name:'Tonga', aliases:['tongan'], capital:"Nuku'alofa", population:100000, area:747, continent:'Oceania', colors:['red','white'], symbols:['cross'], currency:"Tongan Pa'anga (TOP)", languages:['Tongan','English'] },
    { name:'Tuvalu', aliases:['tuvaluan'], capital:'Funafuti', population:11000, area:26, continent:'Oceania', colors:['blue','yellow','white'], symbols:['union jack','star','stripes'], currency:'Australian Dollar (AUD)', languages:['Tuvaluan','English'] },
    { name:'Vanuatu', aliases:['ni-vanuatu'], capital:'Port Vila', population:330000, area:12189, continent:'Oceania', colors:['red','green','black','yellow'], symbols:["boar's tusk",'fern','stripes'], currency:'Vanuatu Vatu (VUV)', languages:['Bislama','English','French'] }
  ];

  /* ── Build lookup index ─────────────────────────────────────────── */
  var IDX = {};
  KB.forEach(function(c) {
    IDX[c.name.toLowerCase()] = c;
    (c.aliases || []).forEach(function(a) { IDX[a.toLowerCase()] = c; });
  });

  /* ── Helpers ────────────────────────────────────────────────────── */
  function fmtPop(n) {
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + ' billion';
    if (n >= 1e6) return Math.round(n / 1e6) + ' million';
    if (n >= 1e3) return Math.round(n / 1e3) + ' thousand';
    return n.toString();
  }

  function fmtArea(n) {
    return n.toLocaleString() + ' km²';
  }

  function joinList(arr) {
    if (arr.length === 1) return arr[0];
    return arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
  }

  /* ── Subregion assignments ──────────────────────────────────────── */
  var SUBREGION_ASSIGN = {
    // Africa — North
    'Algeria':'North Africa','Morocco':'North Africa','Tunisia':'North Africa',
    'Libya':'North Africa','Egypt':'North Africa','Sudan':'North Africa','Mauritania':'North Africa',
    // Africa — West
    'Nigeria':'West Africa','Ghana':'West Africa','Senegal':'West Africa','Mali':'West Africa',
    'Burkina Faso':'West Africa','Niger':'West Africa','Guinea':'West Africa',
    'Sierra Leone':'West Africa','Liberia':'West Africa','Ivory Coast':'West Africa',
    'Togo':'West Africa','Benin':'West Africa','Gambia':'West Africa',
    'Guinea-Bissau':'West Africa','Cabo Verde':'West Africa',
    // Africa — East
    'Kenya':'East Africa','Tanzania':'East Africa','Ethiopia':'East Africa','Uganda':'East Africa',
    'Rwanda':'East Africa','Burundi':'East Africa','Somalia':'East Africa','Eritrea':'East Africa',
    'Djibouti':'East Africa','South Sudan':'East Africa','Mozambique':'East Africa',
    'Madagascar':'East Africa','Mauritius':'East Africa','Seychelles':'East Africa','Comoros':'East Africa',
    // Africa — Central
    'DR Congo':'Central Africa','Congo':'Central Africa','Cameroon':'Central Africa',
    'Central African Republic':'Central Africa','Chad':'Central Africa','Gabon':'Central Africa',
    'Equatorial Guinea':'Central Africa','São Tomé and Príncipe':'Central Africa',
    // Africa — Southern
    'South Africa':'Southern Africa','Namibia':'Southern Africa','Botswana':'Southern Africa',
    'Zimbabwe':'Southern Africa','Zambia':'Southern Africa','Malawi':'Southern Africa',
    'Angola':'Southern Africa','Lesotho':'Southern Africa','Eswatini':'Southern Africa',
    // Asia — East
    'China':'East Asia','Japan':'East Asia','South Korea':'East Asia','North Korea':'East Asia',
    'Mongolia':'East Asia','Taiwan':'East Asia',
    // Asia — Southeast
    'Thailand':'Southeast Asia','Vietnam':'Southeast Asia','Philippines':'Southeast Asia',
    'Indonesia':'Southeast Asia','Malaysia':'Southeast Asia','Singapore':'Southeast Asia',
    'Myanmar':'Southeast Asia','Cambodia':'Southeast Asia','Laos':'Southeast Asia',
    'Brunei':'Southeast Asia','Timor-Leste':'Southeast Asia',
    // Asia — South
    'India':'South Asia','Pakistan':'South Asia','Bangladesh':'South Asia','Sri Lanka':'South Asia',
    'Nepal':'South Asia','Bhutan':'South Asia','Maldives':'South Asia',
    // Asia — Central
    'Kazakhstan':'Central Asia','Uzbekistan':'Central Asia','Turkmenistan':'Central Asia',
    'Tajikistan':'Central Asia','Kyrgyzstan':'Central Asia',
    // Asia — Western
    'Turkey':'Western Asia','Iran':'Western Asia','Iraq':'Western Asia','Saudi Arabia':'Western Asia',
    'United Arab Emirates':'Western Asia','Qatar':'Western Asia','Bahrain':'Western Asia',
    'Kuwait':'Western Asia','Oman':'Western Asia','Yemen':'Western Asia','Jordan':'Western Asia',
    'Lebanon':'Western Asia','Syria':'Western Asia','Israel':'Western Asia','Palestine':'Western Asia',
    'Georgia':'Western Asia','Armenia':'Western Asia','Azerbaijan':'Western Asia','Cyprus':'Western Asia',
    // Europe — Northern
    'Iceland':'Northern Europe','Norway':'Northern Europe','Sweden':'Northern Europe',
    'Finland':'Northern Europe','Denmark':'Northern Europe','Estonia':'Northern Europe',
    'Latvia':'Northern Europe','Lithuania':'Northern Europe',
    'United Kingdom':'Northern Europe','Ireland':'Northern Europe',
    // Europe — Southern
    'Spain':'Southern Europe','Portugal':'Southern Europe','Italy':'Southern Europe',
    'Greece':'Southern Europe','Croatia':'Southern Europe','Slovenia':'Southern Europe',
    'Montenegro':'Southern Europe','Albania':'Southern Europe','North Macedonia':'Southern Europe',
    'Bosnia and Herzegovina':'Southern Europe','Serbia':'Southern Europe','Malta':'Southern Europe',
    'Andorra':'Southern Europe','San Marino':'Southern Europe',
    'Vatican City':'Southern Europe','Monaco':'Southern Europe',
    // Europe — Western
    'France':'Western Europe','Germany':'Western Europe','Netherlands':'Western Europe',
    'Belgium':'Western Europe','Luxembourg':'Western Europe','Switzerland':'Western Europe',
    'Austria':'Western Europe','Liechtenstein':'Western Europe',
    // Europe — Eastern
    'Poland':'Eastern Europe','Czech Republic':'Eastern Europe','Slovakia':'Eastern Europe',
    'Hungary':'Eastern Europe','Romania':'Eastern Europe','Bulgaria':'Eastern Europe',
    'Moldova':'Eastern Europe','Ukraine':'Eastern Europe','Belarus':'Eastern Europe',
    'Russia':'Eastern Europe','Kosovo':'Eastern Europe',
    // North America — Northern
    'Canada':'Northern North America','United States':'Northern North America',
    // North America — Central America
    'Mexico':'Central America','Guatemala':'Central America','Belize':'Central America',
    'Honduras':'Central America','El Salvador':'Central America','Nicaragua':'Central America',
    'Costa Rica':'Central America','Panama':'Central America',
    // North America — Caribbean
    'Cuba':'Caribbean','Jamaica':'Caribbean','Haiti':'Caribbean',
    'Dominican Republic':'Caribbean','Trinidad and Tobago':'Caribbean','Bahamas':'Caribbean',
    'Barbados':'Caribbean','Saint Lucia':'Caribbean','Grenada':'Caribbean',
    'Antigua and Barbuda':'Caribbean','Dominica':'Caribbean',
    'Saint Kitts and Nevis':'Caribbean','Saint Vincent and the Grenadines':'Caribbean',
    // South America — Northern
    'Venezuela':'Northern South America','Colombia':'Northern South America',
    'Guyana':'Northern South America','Suriname':'Northern South America',
    // South America — Southern
    'Argentina':'Southern South America','Chile':'Southern South America','Uruguay':'Southern South America',
    // South America — Western
    'Peru':'Western South America','Ecuador':'Western South America','Bolivia':'Western South America',
    // South America — Eastern
    'Brazil':'Eastern South America','Paraguay':'Eastern South America',
    // Oceania — Australasia
    'Australia':'Australasia','New Zealand':'Australasia',
    // Oceania — Melanesia
    'Papua New Guinea':'Melanesia','Fiji':'Melanesia','Solomon Islands':'Melanesia','Vanuatu':'Melanesia',
    // Oceania — Polynesia
    'Samoa':'Polynesia','Tonga':'Polynesia','Tuvalu':'Polynesia',
    // Oceania — Micronesia
    'Micronesia':'Micronesia (region)','Palau':'Micronesia (region)',
    'Marshall Islands':'Micronesia (region)','Kiribati':'Micronesia (region)','Nauru':'Micronesia (region)'
  };

  // Lowercase user input → canonical display name for subregions
  var SUBREGION_NORM = {
    'north africa':'North Africa','northern africa':'North Africa',
    'west africa':'West Africa','western africa':'West Africa',
    'east africa':'East Africa','eastern africa':'East Africa',
    'central africa':'Central Africa',
    'southern africa':'Southern Africa','south africa region':'Southern Africa',
    'east asia':'East Asia','eastern asia':'East Asia',
    'southeast asia':'Southeast Asia','south east asia':'Southeast Asia',
    'south-east asia':'Southeast Asia','southeastern asia':'Southeast Asia',
    'south asia':'South Asia','southern asia':'South Asia',
    'central asia':'Central Asia',
    'western asia':'Western Asia','west asia':'Western Asia','middle east':'Western Asia',
    'northern europe':'Northern Europe','north europe':'Northern Europe',
    'southern europe':'Southern Europe','south europe':'Southern Europe',
    'western europe':'Western Europe','west europe':'Western Europe',
    'eastern europe':'Eastern Europe','east europe':'Eastern Europe',
    'northern north america':'Northern North America','north north america':'Northern North America',
    'central america':'Central America',
    'caribbean':'Caribbean','the caribbean':'Caribbean',
    'northern south america':'Northern South America','north south america':'Northern South America',
    'southern south america':'Southern South America','south south america':'Southern South America',
    'western south america':'Western South America','west south america':'Western South America',
    'eastern south america':'Eastern South America','east south america':'Eastern South America',
    'australasia':'Australasia',
    'melanesia':'Melanesia',
    'polynesia':'Polynesia',
    'micronesia region':'Micronesia (region)','micronesian region':'Micronesia (region)'
  };

  // Lowercase → continent display name (or 'world')
  var CONTINENT_NORM = {
    'africa':'Africa','african':'Africa',
    'asia':'Asia','asian':'Asia',
    'europe':'Europe','european':'Europe',
    'north america':'North America','north american':'North America',
    'south america':'South America','south american':'South America',
    'oceania':'Oceania','pacific':'Oceania',
    'world':'world','the world':'world','earth':'world','globally':'world','global':'world','everywhere':'world'
  };

  function getSubregion(c) {
    return SUBREGION_ASSIGN[c.name] || null;
  }

  // Detect scope (subregion or continent) from a query string
  function detectScope(q) {
    // Try subregions first (longer key wins)
    var srKeys = Object.keys(SUBREGION_NORM).sort(function(a,b){ return b.length-a.length; });
    for (var i = 0; i < srKeys.length; i++) {
      if (q.indexOf(srKeys[i]) !== -1) return SUBREGION_NORM[srKeys[i]];
    }
    // Then continents
    var cKeys = Object.keys(CONTINENT_NORM).sort(function(a,b){ return b.length-a.length; });
    for (var j = 0; j < cKeys.length; j++) {
      if (q.indexOf(cKeys[j]) !== -1) return CONTINENT_NORM[cKeys[j]];
    }
    return 'world';
  }

  // Return KB entries matching a scope (subregion, continent, or 'world')
  function filterByScope(scope) {
    if (!scope || scope === 'world') return KB.slice();
    var bySub = KB.filter(function(c){ return SUBREGION_ASSIGN[c.name] === scope; });
    if (bySub.length) return bySub;
    return KB.filter(function(c){ return c.continent === scope; });
  }

  // Detect superlative query: "largest/smallest/most populated … in X"
  function detectSuperlative(q) {
    var isMax = /\b(largest|biggest|most area|greatest area|most populated|most populous|highest population|largest population|most people|most land)\b/.test(q);
    var isMin = /\b(smallest|tiniest|least area|fewest area|least populated|least populous|smallest population|fewest people|fewest inhabitants|lowest population|least people)\b/.test(q);
    if (!isMax && !isMin) return null;
    var metric = /\bpopulat|\bpeople\b|\bpopulous\b|\bpopulated\b|\binhabitants\b/.test(q) ? 'population' : 'area';
    var scope = detectScope(q);
    return { dir: isMax ? 'max' : 'min', metric: metric, scope: scope };
  }

  // Detect "which countries are in X?" query
  function detectSubregionListQuery(q) {
    if (!/\bwhich countries\b|\blist.*countries\b|\bcountries in\b|\bcountries of\b|\bwhat countries\b|\bnations in\b|\bnations of\b/.test(q)) return null;
    var srKeys = Object.keys(SUBREGION_NORM).sort(function(a,b){ return b.length-a.length; });
    for (var i = 0; i < srKeys.length; i++) {
      if (q.indexOf(srKeys[i]) !== -1) return SUBREGION_NORM[srKeys[i]];
    }
    var cKeys = Object.keys(CONTINENT_NORM).sort(function(a,b){ return b.length-a.length; });
    for (var j = 0; j < cKeys.length; j++) {
      if (q.indexOf(cKeys[j]) !== -1) {
        var cont = CONTINENT_NORM[cKeys[j]];
        if (cont !== 'world') return cont;
      }
    }
    return null;
  }

  /* ── Find country in question ───────────────────────────────────── */
  function findCountry(q) {
    // try longer matches first to avoid "Congo" matching "DR Congo" partially
    var keys = Object.keys(IDX).sort(function(a,b){ return b.length - a.length; });
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (q.indexOf(k) !== -1) return IDX[k];
    }
    return null;
  }

  /* ── Detect query intent ─────────────────────────────────────────── */
  var INTENTS = [
    { type:'capital',    patterns:['capital','capital city','seat of government'] },
    { type:'population', patterns:['population','how many people','people live','inhabitants','how populated','populous'] },
    { type:'area',       patterns:['area','size','how big','how large','km²','square','land mass','largest','smallest'] },
    { type:'continent',  patterns:['continent','where is','located','region','part of the world'] },
    { type:'colors',     patterns:['color','colour','colors','colours','flag color','flag colour','what color','what colour','colors on','colours on'] },
    { type:'symbols',    patterns:['symbol','emblem','animal','creature','what is on','what\'s on','design','feature','icon','what does','depict'] },
    { type:'currency',   patterns:['currency','money','coin','use','dollar','dinar','pound','franc','peso','rupee','ruble','baht','yen','euro','pay'] },
    { type:'language',   patterns:['language','speak','spoken','official language','tongue','what language','do they speak'] },
    { type:'about',      patterns:['tell me about','information about','info about','facts about','about'] }
  ];

  function detectIntent(q) {
    for (var i = 0; i < INTENTS.length; i++) {
      var intent = INTENTS[i];
      for (var j = 0; j < intent.patterns.length; j++) {
        if (q.indexOf(intent.patterns[j]) !== -1) return intent.type;
      }
    }
    return null;
  }

  /* ── Symbol queries: "which flags have eagles?" ─────────────────── */
  function detectSymbolSearch(q) {
    var symbolKeywords = ['eagle','lion','dragon','bear','bird','tiger','sun','moon','star','crescent','cross','tree','palm','cedar','maple','fish','horse','bull','cow','elephant','snake','cactus'];
    var hasWhich = /\bwhich\b|\bwhat\b/.test(q) && /\bflag|\bcountry|\bcountries/.test(q);
    if (!hasWhich) return null;
    for (var i = 0; i < symbolKeywords.length; i++) {
      if (q.indexOf(symbolKeywords[i]) !== -1) return symbolKeywords[i];
    }
    return null;
  }

  /* ── Color queries: "which flags are red and white?" ─────────────── */
  function detectColorSearch(q) {
    var colorWords = ['red','blue','green','yellow','white','black','orange','purple','gold','pink','brown','maroon','silver','gray','grey'];
    var hasWhich = /\bwhich\b|\bwhat\b/.test(q) && /\bflag|\bcountry|\bcountries/.test(q);
    var hasColor = /\bcolor|\bcolour/.test(q);
    if (!hasWhich && !hasColor) return null;
    var found = [];
    colorWords.forEach(function(c) { if (q.indexOf(c) !== -1) found.push(c); });
    return found.length ? found : null;
  }

  /* ── Build answers ───────────────────────────────────────────────── */
  function buildAbout(c) {
    return 'Here\'s what I know about <strong>' + c.name + '</strong>:<br>'
      + '🏙️ <b>Capital:</b> ' + c.capital + '<br>'
      + '👥 <b>Population:</b> approximately ' + fmtPop(c.population) + '<br>'
      + '📐 <b>Area:</b> ' + fmtArea(c.area) + '<br>'
      + '🌍 <b>Continent:</b> ' + c.continent + (getSubregion(c) ? ' — ' + getSubregion(c) : '') + '<br>'
      + '🎨 <b>Flag colors:</b> ' + joinList(c.colors) + '<br>'
      + '🔣 <b>Flag symbols:</b> ' + joinList(c.symbols) + '<br>'
      + '💰 <b>Currency:</b> ' + c.currency + '<br>'
      + '🗣️ <b>Language(s):</b> ' + joinList(c.languages);
  }

  /* ── Main answer function ────────────────────────────────────────── */
  function getAnswer(raw) {
    var q = raw.toLowerCase().replace(/[?!.,;:'"]/g, '');

    // Superlative: "largest country in Africa", "most populated country in East Asia"
    var sup = detectSuperlative(q);
    if (sup) {
      var pool = filterByScope(sup.scope);
      if (!pool.length) return 'I don\'t have data for that region.';
      var ranked = pool.slice().sort(function(a,b){
        return sup.dir === 'max' ? b[sup.metric] - a[sup.metric] : a[sup.metric] - b[sup.metric];
      });
      var winner = ranked[0];
      var scopeLabel = (sup.scope === 'world') ? 'in the world' : 'in ' + sup.scope;
      var adjective = sup.dir === 'max'
        ? (sup.metric === 'population' ? 'most populous' : 'largest')
        : (sup.metric === 'population' ? 'least populous' : 'smallest');
      if (sup.metric === 'area') {
        return '<strong>' + winner.name + '</strong> is the ' + adjective + ' country ' + scopeLabel + ' with an area of <strong>' + fmtArea(winner.area) + '</strong>.';
      } else {
        return '<strong>' + winner.name + '</strong> is the ' + adjective + ' country ' + scopeLabel + ' with a population of approximately <strong>' + fmtPop(winner.population) + '</strong>.';
      }
    }

    // Subregion list: "which countries are in West Africa?"
    var listScope = detectSubregionListQuery(q);
    if (listScope) {
      var members = filterByScope(listScope);
      if (!members.length) return 'I don\'t have any countries listed for <strong>' + listScope + '</strong>.';
      return 'Countries in <strong>' + listScope + '</strong> (' + members.length + '): ' + members.map(function(c){ return c.name; }).join(', ') + '.';
    }

    // Symbol search: "which flags have eagles?"
    var sym = detectSymbolSearch(q);
    if (sym) {
      var matches = KB.filter(function(c) {
        return c.symbols.some(function(s) { return s.indexOf(sym) !== -1; });
      });
      if (matches.length) {
        return 'Flags featuring a <strong>' + sym + '</strong>: ' + matches.map(function(c){ return c.name; }).join(', ') + '.';
      }
      return 'I couldn\'t find any flags featuring a ' + sym + ' in my knowledge base.';
    }

    // Color search: "which flags are red and blue?"
    var cols = detectColorSearch(q);
    if (cols && cols.length) {
      var colorMatches = KB.filter(function(c) {
        return cols.every(function(col) { return c.colors.indexOf(col) !== -1; });
      });
      if (colorMatches.length) {
        var colStr = joinList(cols);
        return 'Flags with <strong>' + colStr + '</strong>: ' + colorMatches.map(function(c){ return c.name; }).join(', ') + '.';
      }
      return 'I couldn\'t find exact matches for those colors.';
    }

    var country = findCountry(q);
    if (!country) {
      return 'I\'m not sure about that. Try asking about a country\'s capital, population, area, flag colors, symbols, continent, currency, or language!';
    }

    var intent = detectIntent(q);
    if (!intent) {
      // Default to about if country found but no intent
      return buildAbout(country);
    }

    switch (intent) {
      case 'capital':
        return 'The capital of <strong>' + country.name + '</strong> is <strong>' + country.capital + '</strong>.';
      case 'population':
        return '<strong>' + country.name + '</strong> has a population of approximately <strong>' + fmtPop(country.population) + '</strong>.';
      case 'area':
        return '<strong>' + country.name + '</strong> has an area of <strong>' + fmtArea(country.area) + '</strong>.';
      case 'continent': {
        var sr = getSubregion(country);
        var locStr = sr ? country.continent + ' — ' + sr : country.continent;
        return '<strong>' + country.name + '</strong> is in <strong>' + locStr + '</strong>.';
      }
      case 'colors':
        return 'The flag of <strong>' + country.name + '</strong> features: <strong>' + joinList(country.colors) + '</strong>.';
      case 'symbols':
        return 'The flag of <strong>' + country.name + '</strong> features: <strong>' + joinList(country.symbols) + '</strong>.';
      case 'currency':
        return '<strong>' + country.name + '</strong> uses the <strong>' + country.currency + '</strong>.';
      case 'language':
        var langStr = joinList(country.languages);
        return 'The official language' + (country.languages.length > 1 ? 's' : '') + ' of <strong>' + country.name + '</strong> ' + (country.languages.length > 1 ? 'are' : 'is') + ' <strong>' + langStr + '</strong>.';
      case 'about':
        return buildAbout(country);
      default:
        return buildAbout(country);
    }
  }

  /* ── Inject CSS ──────────────────────────────────────────────────── */
  function injectCSS() {
    var style = document.createElement('style');
    style.textContent = [
      /* floating button */
      '.cw-btn{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:9000;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;background:var(--accent,#6c63ff);color:#fff;border:none;border-radius:50px 0 0 50px;padding:14px 10px 14px 14px;box-shadow:-3px 3px 16px rgba(108,99,255,.45);transition:box-shadow .25s,transform .25s;}',
      '.cw-btn:hover{box-shadow:-4px 4px 22px rgba(108,99,255,.65);transform:translateY(-50%) translateX(-2px);}',
      '.cw-btn svg{width:22px;height:22px;flex-shrink:0;}',
      '.cw-btn-label{font-size:10px;font-weight:600;letter-spacing:.5px;writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);line-height:1;opacity:.9;}',
      '@keyframes cw-pulse{0%,100%{box-shadow:-3px 3px 16px rgba(108,99,255,.45);}50%{box-shadow:-3px 3px 26px rgba(108,99,255,.75);}}',
      '.cw-btn.cw-pulse{animation:cw-pulse 2.2s ease-in-out infinite;}',
      /* panel */
      '.cw-panel{position:fixed;right:-380px;top:50%;transform:translateY(-50%);z-index:9001;width:360px;max-height:520px;display:flex;flex-direction:column;background:var(--surface,#16161a);border:1px solid var(--border,#2a2a35);border-radius:14px 0 0 14px;box-shadow:-6px 0 40px rgba(0,0,0,.45);transition:right .35s cubic-bezier(.4,0,.2,1);overflow:hidden;}',
      '.cw-panel.cw-open{right:0;}',
      '.cw-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--surface-2,#1e1e24);border-bottom:1px solid var(--border,#2a2a35);flex-shrink:0;}',
      '.cw-title{font-size:.95rem;font-weight:700;color:var(--text-1,#f0f0f5);display:flex;align-items:center;gap:8px;}',
      '.cw-title svg{color:var(--accent,#6c63ff);}',
      '.cw-close{background:none;border:none;color:var(--text-2,#9898b0);cursor:pointer;padding:4px;border-radius:6px;display:flex;align-items:center;transition:color .2s,background .2s;}',
      '.cw-close:hover{color:var(--text-1,#f0f0f5);background:var(--border,#2a2a35);}',
      '.cw-clear{background:none;border:none;color:var(--text-3,#5c5c78);cursor:pointer;padding:4px;border-radius:6px;display:flex;align-items:center;transition:color .2s,background .2s;position:relative;}',
      '.cw-clear:hover{color:#e05c5c;background:rgba(224,92,92,.1);}',
      '.cw-header-actions{display:flex;align-items:center;gap:2px;}',
      '.cw-cleared-notice{text-align:center;font-size:.78rem;font-style:italic;color:var(--text-3,#5c5c78);padding:6px 0;opacity:1;transition:opacity .6s ease;}',
      '.cw-cleared-notice.cw-fade{opacity:0;}',
      /* messages */
      '.cw-messages{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;}',
      '.cw-messages::-webkit-scrollbar{width:4px;}',
      '.cw-messages::-webkit-scrollbar-track{background:transparent;}',
      '.cw-messages::-webkit-scrollbar-thumb{background:var(--border,#2a2a35);border-radius:2px;}',
      '.cw-msg{display:flex;gap:8px;align-items:flex-end;max-width:90%;}',
      '.cw-msg.cw-user{align-self:flex-end;flex-direction:row-reverse;}',
      '.cw-bubble{padding:9px 13px;border-radius:14px;font-size:.85rem;line-height:1.5;color:var(--text-1,#f0f0f5);}',
      '.cw-user .cw-bubble{background:var(--accent,#6c63ff);color:#fff;border-bottom-right-radius:4px;}',
      '.cw-bot .cw-bubble{background:var(--surface-2,#1e1e24);border:1px solid var(--border,#2a2a35);border-bottom-left-radius:4px;}',
      '.cw-avatar{width:28px;height:28px;border-radius:50%;background:var(--accent-dim,rgba(108,99,255,.15));border:1px solid var(--border,#2a2a35);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px;}',
      /* typing indicator */
      '.cw-typing{display:flex;gap:4px;align-items:center;padding:10px 14px;}',
      '.cw-typing span{width:6px;height:6px;border-radius:50%;background:var(--text-3,#5c5c78);animation:cw-dot .9s ease-in-out infinite;}',
      '.cw-typing span:nth-child(2){animation-delay:.15s;}',
      '.cw-typing span:nth-child(3){animation-delay:.3s;}',
      '@keyframes cw-dot{0%,80%,100%{transform:scale(.7);opacity:.5;}40%{transform:scale(1);opacity:1;}}',
      /* input row */
      '.cw-input-row{display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--border,#2a2a35);background:var(--surface-2,#1e1e24);flex-shrink:0;}',
      '.cw-input{flex:1;background:var(--bg,#0d0d0f);border:1px solid var(--border,#2a2a35);border-radius:20px;padding:8px 14px;color:var(--text-1,#f0f0f5);font-size:.82rem;outline:none;transition:border-color .2s;}',
      '.cw-input:focus{border-color:var(--accent,#6c63ff);}',
      '.cw-input::placeholder{color:var(--text-3,#5c5c78);}',
      '.cw-send{background:var(--accent,#6c63ff);border:none;color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,transform .15s;}',
      '.cw-send:hover{background:#7d76ff;transform:scale(1.08);}',
      '.cw-send svg{width:15px;height:15px;}',
      /* overlay */
      '.cw-overlay{position:fixed;inset:0;z-index:8999;display:none;}',
      '.cw-overlay.cw-active{display:block;}',
      /* light theme */
      '[data-theme="light"] .cw-panel{background:#fff;border-color:#e0dfe8;box-shadow:-6px 0 40px rgba(0,0,0,.12);}',
      '[data-theme="light"] .cw-header{background:#f5f3ee;border-bottom-color:#e0dfe8;}',
      '[data-theme="light"] .cw-bot .cw-bubble{background:#f5f3ee;border-color:#e0dfe8;}',
      '[data-theme="light"] .cw-input{background:#f5f3ee;border-color:#e0dfe8;color:#1a1a2e;}',
      '[data-theme="light"] .cw-input::placeholder{color:#a0a0b8;}',
      '[data-theme="light"] .cw-input-row{background:#f5f3ee;border-top-color:#e0dfe8;}',
      '[data-theme="light"] .cw-messages::-webkit-scrollbar-thumb{background:#e0dfe8;}',
      '[data-theme="light"] .cw-bubble{color:#1a1a2e;}',
      '[data-theme="light"] .cw-user .cw-bubble{color:#fff;}',
      '[data-theme="light"] .cw-avatar{background:rgba(108,99,255,.08);border-color:#e0dfe8;}',
      /* mobile */
      '@media(max-width:480px){.cw-panel{width:100vw;border-radius:14px 14px 0 0;top:auto;bottom:0;right:-100vw;transform:none;max-height:80vh;}.cw-panel.cw-open{right:0;bottom:0;}.cw-btn{padding:10px 8px 10px 12px;}.cw-btn svg{width:18px;height:18px;}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  /* ── Inject HTML ─────────────────────────────────────────────────── */
  function injectHTML() {
    var html = [
      '<div id="cw-overlay" class="cw-overlay"></div>',
      '<button id="cw-btn" class="cw-btn cw-pulse" aria-label="Open Learn More chat" aria-expanded="false">',
      '  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
      '    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
      '  </svg>',
      '  <span class="cw-btn-label">Learn More</span>',
      '</button>',
      '<div id="cw-panel" class="cw-panel" role="dialog" aria-label="Learn More chat" aria-modal="true">',
      '  <div class="cw-header">',
      '    <span class="cw-title">',
      '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      '      Learn More',
      '    </span>',
      '    <div class="cw-header-actions">',
      '      <button id="cw-clear" class="cw-clear" aria-label="Clear conversation" title="Clear conversation">',
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>',
      '      </button>',
      '      <button id="cw-close" class="cw-close" aria-label="Close chat">',
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
      '      </button>',
      '    </div>',
      '  </div>',
      '  <div class="cw-messages" id="cw-messages"></div>',
      '  <div class="cw-input-row">',
      '    <input type="text" id="cw-input" class="cw-input" placeholder="Ask anything about flags..." autocomplete="off" spellcheck="false" maxlength="200"/>',
      '    <button id="cw-send" class="cw-send" aria-label="Send">',
      '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
      '    </button>',
      '  </div>',
      '</div>'
    ].join('');
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) document.body.appendChild(div.firstChild);
  }

  /* ── Widget controller ───────────────────────────────────────────── */
  function init() {
    var btn      = document.getElementById('cw-btn');
    var panel    = document.getElementById('cw-panel');
    var closeBtn = document.getElementById('cw-close');
    var clearBtn = document.getElementById('cw-clear');
    var overlay  = document.getElementById('cw-overlay');
    var input    = document.getElementById('cw-input');
    var sendBtn  = document.getElementById('cw-send');
    var msgBox   = document.getElementById('cw-messages');

    if (!btn || !panel) return;

    var isOpen = false;

    function open() {
      isOpen = true;
      panel.classList.add('cw-open');
      overlay.classList.add('cw-active');
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.remove('cw-pulse');
      // Show welcome if no messages yet
      if (!msgBox.querySelector('.cw-msg')) {
        addBotMsg('👋 Hi! Ask me about any country\'s <b>capital</b>, <b>population</b>, <b>area</b>, <b>continent</b>, <b>flag colors</b>, <b>symbols</b>, <b>currency</b>, or <b>language</b>. You can also ask things like <i>"Which flags have eagles?"</i>');
      }
      setTimeout(function(){ input.focus(); }, 350);
    }

    function close() {
      isOpen = false;
      panel.classList.remove('cw-open');
      overlay.classList.remove('cw-active');
      btn.setAttribute('aria-expanded', 'false');
    }

    function addUserMsg(text) {
      var msg = document.createElement('div');
      msg.className = 'cw-msg cw-user';
      msg.innerHTML = '<div class="cw-bubble">' + escapeHTML(text) + '</div>';
      msgBox.appendChild(msg);
      scrollBottom();
    }

    function addBotMsg(html) {
      var msg = document.createElement('div');
      msg.className = 'cw-msg cw-bot';
      msg.innerHTML = '<div class="cw-avatar">🌍</div><div class="cw-bubble">' + html + '</div>';
      msgBox.appendChild(msg);
      scrollBottom();
      return msg;
    }

    function showTyping() {
      var t = document.createElement('div');
      t.className = 'cw-msg cw-bot';
      t.id = 'cw-typing';
      t.innerHTML = '<div class="cw-avatar">🌍</div><div class="cw-bubble"><div class="cw-typing"><span></span><span></span><span></span></div></div>';
      msgBox.appendChild(t);
      scrollBottom();
      return t;
    }

    function scrollBottom() {
      msgBox.scrollTop = msgBox.scrollHeight;
    }

    function escapeHTML(str) {
      return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function send() {
      var text = input.value.trim();
      if (!text) return;
      input.value = '';
      addUserMsg(text);
      var typing = showTyping();
      setTimeout(function() {
        typing.remove();
        var answer = getAnswer(text);
        addBotMsg(answer);
      }, 900);
    }

    function clearConversation() {
      msgBox.innerHTML = '';
      // Show brief "Conversation cleared" notice then fade it out
      var notice = document.createElement('div');
      notice.className = 'cw-cleared-notice';
      notice.textContent = 'Conversation cleared';
      msgBox.appendChild(notice);
      // Trigger fade after a short display window
      setTimeout(function() { notice.classList.add('cw-fade'); }, 1400);
      // Remove notice and show welcome message once fade completes
      setTimeout(function() {
        notice.remove();
        addBotMsg('👋 Hi! Ask me about any country\'s <b>capital</b>, <b>population</b>, <b>area</b>, <b>continent</b>, <b>flag colors</b>, <b>symbols</b>, <b>currency</b>, or <b>language</b>. You can also ask things like <i>"Which flags have eagles?"</i>');
      }, 2000);
    }

    btn.addEventListener('click', function() { isOpen ? close() : open(); });
    closeBtn.addEventListener('click', close);
    clearBtn.addEventListener('click', clearConversation);
    overlay.addEventListener('click', close);

    sendBtn.addEventListener('click', send);
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { e.preventDefault(); send(); }
    });

    // Escape key closes
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) close();
    });
  }

  /* ── Bootstrap ───────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { injectCSS(); injectHTML(); init(); });
  } else {
    injectCSS(); injectHTML(); init();
  }

})();
