/* Pitch Rise – Ostatní soutěže (15 zemí, 1.–4. liga) & UEFA Koeficient (všech 14 jazyků) */
(() => {
  'use strict';

  const TXT = {
    en: {
      btn: 'OTHER LEAGUES',
      title: 'WORLD LEAGUES & UEFA',
      tabLeagues: 'LEAGUES',
      tabUefa: 'UEFA COEFF.',
      tier: 'Tier',
      pts: 'PTS',
      mp: 'MP',
      gd: 'GD',
      uefaTitle: 'UEFA COUNTRY COEFFICIENTS (5-YR)',
      uefaNote: 'Determines European Cup spots for next season (UCL / UEL / UECL).',
      spots: 'Spots',
      close: 'CLOSE',
      switchBtn: 'SWITCH CAREER'
    },
    cs: {
      btn: 'OSTATNÍ SOUTĚŽE',
      title: 'SVĚTOVÉ LIGY A UEFA',
      tabLeagues: 'SOUTĚŽE',
      tabUefa: 'KOEFICIENT UEFA',
      tier: 'Úroveň',
      pts: 'B',
      mp: 'Z',
      gd: 'SK',
      uefaTitle: 'KOEFICIENT ZEMÍ UEFA (5 LET)',
      uefaNote: 'Určuje počet míst v evropských pohárech pro další sezónu (LM / EL / KL).',
      spots: 'Místa',
      close: 'ZAVŘÍT',
      switchBtn: 'PŘEPNOUT KARIÉRU'
    },
    sk: {
      btn: 'OSTATNÉ SÚŤAŽE',
      title: 'SVETOVÉ LIGY A UEFA',
      tabLeagues: 'SÚŤAŽE',
      tabUefa: 'KOEFICIENT UEFA',
      tier: 'Úroveň',
      pts: 'B',
      mp: 'Z',
      gd: 'SK',
      uefaTitle: 'KOEFICIENT KRAJÍN UEFA (5 ROKOV)',
      uefaNote: 'Určuje počet miest v európskych pohároch pre ďalšiu sezónu (LM / EL / KL).',
      spots: 'Miesta',
      close: 'ZAVRIEŤ',
      switchBtn: 'PREPNÚŤ KARIÉRU'
    },
    de: {
      btn: 'ANDERE LIGEN',
      title: 'LIGEN & UEFA-WERTUNG',
      tabLeagues: 'LIGEN',
      tabUefa: 'UEFA-KOEFF.',
      tier: 'Liga',
      pts: 'PKT',
      mp: 'SP',
      gd: 'TD',
      uefaTitle: 'UEFA-FÜNFJAHRESWERTUNG',
      uefaNote: 'Bestimmt die Europapokal-Startplätze der nächsten Saison.',
      spots: 'Plätze',
      close: 'SCHLIESSEN',
      switchBtn: 'KARRIERE WECHSELN'
    },
    fr: {
      btn: 'AUTRES LIGUES',
      title: 'CHAMPIONNATS & UEFA',
      tabLeagues: 'LIGUES',
      tabUefa: 'COEFF. UEFA',
      tier: 'Division',
      pts: 'PTS',
      mp: 'MJ',
      gd: 'DB',
      uefaTitle: 'COEFFICIENTS UEFA (5 ANS)',
      uefaNote: 'Détermine les places européennes pour la saison prochaine.',
      spots: 'Places',
      close: 'FERMER',
      switchBtn: 'CHANGER DE CARRIÈRE'
    },
    es: {
      btn: 'OTRAS LIGAS',
      title: 'LIGAS Y COEF. UEFA',
      tabLeagues: 'LIGAS',
      tabUefa: 'COEF. UEFA',
      tier: 'Nivel',
      pts: 'PTS',
      mp: 'PJ',
      gd: 'DG',
      uefaTitle: 'COEFICIENTES UEFA (5 AÑOS)',
      uefaNote: 'Determina los cupos europeos para la próxima temporada.',
      spots: 'Cupos',
      close: 'CERRAR',
      switchBtn: 'CAMBIAR CARRERA'
    },
    pt: {
      btn: 'OUTRAS LIGAS',
      title: 'LIGAS E COEF. UEFA',
      tabLeagues: 'LIGAS',
      tabUefa: 'COEF. UEFA',
      tier: 'Divisão',
      pts: 'PTS',
      mp: 'J',
      gd: 'SG',
      uefaTitle: 'COEFICIENTES UEFA (5 ANOS)',
      uefaNote: 'Define as vagas nas competições europeias da próxima época.',
      spots: 'Vagas',
      close: 'FECHAR',
      switchBtn: 'MUDAR CARREIRA'
    },
    uk: {
      btn: 'ІНШІ ЛІГИ',
      title: 'ЛІГИ ТА КОЕФ. УЄФА',
      tabLeagues: 'ЛІГИ',
      tabUefa: 'КОЕФ. УЄФА',
      tier: 'Рівень',
      pts: 'О',
      mp: 'І',
      gd: 'РМ',
      uefaTitle: 'ТАБЛИЦЯ КОЕФІЦІЄНТІВ УЄФА',
      uefaNote: 'Визначає кількість місць у єврокубках на наступний сезон.',
      spots: 'Місця',
      close: 'ЗАКРИТИ',
      switchBtn: 'ЗМІНИТИ КАР’ЄРУ'
    },
    pl: {
      btn: 'INNE LIGI',
      title: 'LIGI I WSPÓŁCZ. UEFA',
      tabLeagues: 'LIGI',
      tabUefa: 'WSP. UEFA',
      tier: 'Poziom',
      pts: 'PKT',
      mp: 'M',
      gd: 'BR',
      uefaTitle: 'RANKING KRAJOWY UEFA (5 LAT)',
      uefaNote: 'Określa liczbę miejsc w europejskich pucharach na kolejny sezon.',
      spots: 'Miejsca',
      close: 'ZAMKNIJ',
      switchBtn: 'ZMIEŃ KARIERĘ'
    },
    bg: {
      btn: 'ДРУГИ ЛИГИ',
      title: 'ЛИГИ И КОЕФ. УЕФА',
      tabLeagues: 'ЛИГИ',
      tabUefa: 'КОЕФ. УЕФА',
      tier: 'Ниво',
      pts: 'Т',
      mp: 'М',
      gd: 'ГР',
      uefaTitle: 'КОЕФИЦИЕНТИ НА УЕФА (5 Г.)',
      uefaNote: 'Определя квотите за европейските турнири през следващия сезон.',
      spots: 'Квоти',
      close: 'ЗАТВОРИ',
      switchBtn: 'СМЕНИ КАРИЕРАТА'
    },
    it: {
      btn: 'ALTRI CAMPIONATI',
      title: 'CAMPIONATI E UEFA',
      tabLeagues: 'CAMPIONATI',
      tabUefa: 'COEFF. UEFA',
      tier: 'Serie',
      pts: 'PT',
      mp: 'G',
      gd: 'DR',
      uefaTitle: 'RANKING UEFA PER PAESI (5 ANNI)',
      uefaNote: 'Determina i posti nelle coppe europee per la prossima stagione.',
      spots: 'Posti',
      close: 'CHIUDI',
      switchBtn: 'CAMBIA CARRIERA'
    },
    vi: {
      btn: 'GIẢI ĐẤU KHÁC',
      title: 'CÁC GIẢI ĐẤU & UEFA',
      tabLeagues: 'GIẢI ĐẤU',
      tabUefa: 'HỆ SỐ UEFA',
      tier: 'Hạng',
      pts: 'Đ',
      mp: 'ST',
      gd: 'HS',
      uefaTitle: 'BẢNG XẾP HẠNG HỆ SỐ UEFA',
      uefaNote: 'Quyết định số suất dự cúp châu Âu mùa giải tới.',
      spots: 'Suất',
      close: 'ĐÓNG',
      switchBtn: 'ĐỔI SỰ NGHIỆP'
    },
    sv: {
      btn: 'ANDRA LIGOR',
      title: 'LIGOR & UEFA-KOEFF.',
      tabLeagues: 'LIGOR',
      tabUefa: 'UEFA-KOEFF.',
      tier: 'Nivå',
      pts: 'P',
      mp: 'S',
      gd: 'MS',
      uefaTitle: 'UEFA LANDSKOEFFICIENT (5 ÅR)',
      uefaNote: 'Avgör Europacupplatserna inför nästa säsong.',
      spots: 'Platser',
      close: 'STÄNG',
      switchBtn: 'BYT KARRIÄR'
    },
    no: {
      btn: 'ANDRE LIGAER',
      title: 'LIGAER & UEFA-KOEFF.',
      tabLeagues: 'LIGAER',
      tabUefa: 'UEFA-KOEFF.',
      tier: 'Nivå',
      pts: 'P',
      mp: 'K',
      gd: 'MF',
      uefaTitle: 'UEFA LANDSKOEFFISIENT (5 ÅR)',
      uefaNote: 'Bestemmer europacupplassene for neste sesong.',
      spots: 'Plasser',
      close: 'LUKK',
      switchBtn: 'BYTT KARRIERE'
    }
  };

  // Základní 5letý koeficient UEFA + kvóty pohárů (LM / EL / KL) pro 15 zemí
  const BASE_UEFA = [
    { code: 'en', pts: 104.303, spots: '4 UCL · 2 UEL · 1 UECL' },
    { code: 'it', pts: 90.284,  spots: '4 UCL · 2 UEL · 1 UECL' },
    { code: 'es', pts: 89.489,  spots: '4 UCL · 2 UEL · 1 UECL' },
    { code: 'de', pts: 86.624,  spots: '4 UCL · 2 UEL · 1 UECL' },
    { code: 'fr', pts: 66.831,  spots: '3 UCL · 2 UEL · 1 UECL' },
    { code: 'nl', pts: 61.300,  spots: '2 UCL · 2 UEL · 1 UECL' },
    { code: 'pt', pts: 56.316,  spots: '2 UCL · 1 UEL · 2 UECL' },
    { code: 'be', pts: 48.800,  spots: '2 UCL · 1 UEL · 2 UECL' },
    { code: 'tr', pts: 38.600,  spots: '2 UCL · 1 UEL · 2 UECL' },
    { code: 'cz', pts: 36.050,  spots: '2 UCL · 1 UEL · 2 UECL' },
    { code: 'sc', pts: 36.050,  spots: '1 UCL · 1 UEL · 2 UECL' },
    { code: 'ch', pts: 32.975,  spots: '1 UCL · 1 UEL · 2 UECL' },
    { code: 'at', pts: 32.600,  spots: '1 UCL · 1 UEL · 2 UECL' },
    { code: 'dk', pts: 31.450,  spots: '1 UCL · 1 UEL · 2 UECL' },
    { code: 'gr', pts: 30.125,  spots: '1 UCL · 1 UEL · 2 UECL' }
  ];

  // Reálné kluby pro rychlou simulaci ostatních zemí (pokud nejsou v aktuální hráčově tabulce)
  const CLUBS_DB = {
    en: ['Manchester City','Arsenal','Liverpool','Aston Villa','Tottenham','Chelsea','Newcastle','Manchester Utd','West Ham','Brighton','Bournemouth','Crystal Palace','Wolves','Fulham','Everton','Brentford'],
    es: ['Real Madrid','FC Barcelona','Girona','Atlético Madrid','Athletic Bilbao','Real Sociedad','Real Betis','Villarreal','Valencia','Alavés','Osasuna','Getafe','Celta Vigo','Sevilla','Mallorca','Las Palmas'],
    it: ['Inter Milan','AC Milan','Juventus','Atalanta','Bologna','AS Roma','Lazio','Fiorentina','Torino','Napoli','Genoa','Monza','Hellas Verona','Lecce','Udinese','Cagliari'],
    de: ['Bayer Leverkusen','VfB Stuttgart','Bayern Munich','RB Leipzig','Borussia Dortmund','Eintracht Frankfurt','Hoffenheim','Heidenheim','Werder Bremen','Freiburg','Augsburg','Wolfsburg','Mainz 05','Mönchengladbach','Union Berlin','Bochum'],
    fr: ['Paris Saint-Germain','AS Monaco','Stade Brestois','Lille','Nice','Olympique Lyon','RC Lens','Olympique Marseille','Reims','Rennes','Toulouse','Montpellier','Strasbourg','Nantes','Le Havre','Auxerre'],
    nl: ['PSV Eindhoven','Feyenoord','FC Twente','AZ Alkmaar','Ajax','NEC Nijmegen','FC Utrecht','Sparta Rotterdam','Go Ahead Eagles','Fortuna Sittard','Heerenveen','PEC Zwolle','Almere City','Heracles'],
    pt: ['Sporting CP','SL Benfica','FC Porto','SC Braga','Vitória Guimarães','Moreirense','Arouca','Famalicão','Casa Pia','Farense','Rio Ave','Gil Vicente','Estoril','Boavista'],
    be: ['Club Brugge','Union Saint-Gilloise','Anderlecht','Cercle Brugge','Genk','Antwerp','Gent','Mechelen','Sint-Truiden','Standard Liège','Westerlo','Charleroi'],
    tr: ['Galatasaray','Fenerbahçe','Trabzonspor','Başakşehir','Kasımpaşa','Beşiktaş','Sivasspor','Alanyaspor','Rizespor','Antalyaspor','Gaziantep FK','Adana Demirspor'],
    cz: ['Sparta Praha','Slavia Praha','Viktoria Plzeň','Baník Ostrava','Slovácko','Mladá Boleslav','Slovan Liberec','Sigma Olomouc','Hradec Králové','Bohemians 1905','Teplice','Jablonec','Pardubice','Karviná'],
    sc: ['Celtic','Rangers','Hearts','Kilmarnock','St Mirren','Dundee','Aberdeen','Hibernian','Motherwell','Ross County','St Johnstone','Dundee United'],
    at: ['Sturm Graz','RB Salzburg','LASK','Rapid Wien','Hartberg','Austria Klagenfurt','Wolfsberger AC','Austria Wien','BW Linz','SCR Altach','WSG Tirol','Grazer AK'],
    ch: ['Young Boys','Lugano','Servette','FC Zürich','St. Gallen','Winterthur','FC Luzern','FC Basel','Yverdon','Grasshoppers','Lausanne-Sport','FC Sion'],
    gr: ['PAOK','AEK Athens','Olympiacos','Panathinaikos','Aris','Lamia','Asteras Tripolis','Atromitos','Panserraikos','OFI Crete','Volos','Panetolikos'],
    dk: ['FC Midtjylland','Brøndby IF','FC København','FC Nordsjælland','AGF Aarhus','Silkeborg IF','OB Odense','Viborg FF','Randers FC','Lyngby BK','Vejle BK','AaB Aalborg']
  };

  let selCountry = 'cz';
  let selTier = 1;
  let activeTab = 'leagues';

  function getLang() {
    let l = (document.documentElement.lang || navigator.language || 'en').slice(0, 2).toLowerCase();
    if (l === 'nb' || l === 'nn') l = 'no';
    return TXT[l] ? l : 'en';
  }

  // Deterministický generátor pro simulaci tabulek ostatních soutěží podle odehraných kol hráče
  function seededRand(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function getPlayerState() {
    try {
      if (typeof P !== 'undefined' && P && P.c) return P;
    } catch (e) {}
    return null;
  }

  function buildSimulatedTable(countryCode, tier) {
    const p = getPlayerState();
    // Pokud hráč hraje přesně tuto zemi a tuto úroveň, zobrazíme jeho skutečnou tabulku!
    if (p && p.co === countryCode && Number(p.ti) === Number(tier) && Array.isArray(p.tb) && p.tb.length) {
      return p.tb.map(row => ({
        name: row.n || row.name || 'Club',
        mp: row.p ?? row.mp ?? 0,
        gd: (row.gf ?? 0) - (row.ga ?? 0),
        pts: row.pts ?? 0,
        isUser: row.n === p.c
      })).sort((a, b) => b.pts - a.pts || b.gd - a.gd);
    }

    const baseClubs = CLUBS_DB[countryCode] || CLUBS_DB.en;
    const season = p ? (p.s || 1) : 1;
    // Počet odehraných zápasů v ostatních ligách se odvíjí od postupu hráčovy sezóny
    let mp = p && Array.isArray(p.tb) && p.tb[0] ? (p.tb[0].p || 0) : 14;
    if (mp > (baseClubs.length - 1) * 2) mp = (baseClubs.length - 1) * 2;

    const tierPrefix = tier === 1 ? '' : (tier === 2 ? ' II' : (tier === 3 ? ' B' : ' Reg.'));
    const countrySeed = countryCode.charCodeAt(0) * 31 + countryCode.charCodeAt(1) * 17 + tier * 101 + season * 13;

    const rows = baseClubs.map((club, idx) => {
      // Síla týmu klesá s pořadím v seznamu + sezónní variace
      const strength = Math.max(0.25, 0.82 - (idx * 0.032) + (seededRand(countrySeed + idx * 7) - 0.5) * 0.22);
      let pts = 0;
      let gd = 0;
      for (let m = 1; m <= mp; m++) {
        const r = seededRand(countrySeed + idx * 97 + m * 19);
        if (r < strength * 0.72) {
          pts += 3;
          gd += 1 + Math.floor(seededRand(countrySeed + m + idx) * 2);
        } else if (r < strength * 0.72 + 0.24) {
          pts += 1;
        } else {
          gd -= 1 + Math.floor(seededRand(countrySeed + m * 3 + idx) * 2);
        }
      }
      return {
        name: tier === 1 ? club : club + tierPrefix,
        mp,
        gd,
        pts,
        isUser: false
      };
    });

    return rows.sort((a, b) => b.pts - a.pts || b.gd - a.gd);
  }

const COUNTRY_INFO = {
    en: { name: 'England', iso: 'gb-eng' },
    es: { name: 'Spain', iso: 'es' },
    it: { name: 'Italy', iso: 'it' },
    de: { name: 'Germany', iso: 'de' },
    fr: { name: 'France', iso: 'fr' },
    nl: { name: 'Netherlands', iso: 'nl' },
    pt: { name: 'Portugal', iso: 'pt' },
    be: { name: 'Belgium', iso: 'be' },
    tr: { name: 'Turkey', iso: 'tr' },
    cz: { name: 'Czechia', iso: 'cz' },
    sc: { name: 'Scotland', iso: 'gb-sct' },
    at: { name: 'Austria', iso: 'at' },
    ch: { name: 'Switzerland', iso: 'ch' },
    gr: { name: 'Greece', iso: 'gr' },
    dk: { name: 'Denmark', iso: 'dk' }
  };

  function getCountryMeta(code) {
    const info = COUNTRY_INFO[code] || { name: code.toUpperCase(), iso: code };
    const flagHtml = `<img src="https://flagcdn.com/24x18/${info.iso}.png" alt="${code}" style="width:18px;height:13px;border-radius:2px;vertical-align:middle;object-fit:cover;box-shadow:0 0 2px rgba(0,0,0,0.5);">`;
    let tiers = ['1. Liga', '2. Liga', '3. Liga', '4. Liga'];
    try {
      if (typeof CT !== 'undefined' && Array.isArray(CT)) {
        const found = CT.find(c => c[0] === code);
        if (found && Array.isArray(found[3])) tiers = found[3];
      }
    } catch (e) {}
    return {
      code,
      flag: flagHtml,
      name: (typeof T === 'function' ? T(info.name) : info.name),
      tiers
    };
  }

  function renderModalContent() {
    const t = TXT[getLang()];
    const p = getPlayerState();
    const wrap = document.getElementById('comp_body');
    if (!wrap) return;

    if (activeTab === 'uefa') {
      const season = p ? (p.s || 1) : 1;
      const list = BASE_UEFA.map((item, i) => {
        const delta = ((seededRand(season * 53 + i * 11) - 0.35) * 6.5);
        const total = Math.max(15, item.pts + (season - 1) * 2.1 + delta);
        const meta = getCountryMeta(item.code);
        return { ...item, total, delta, meta };
      }).sort((a, b) => b.total - a.total);

      wrap.innerHTML = `
        <div style="font-size:12px;font-weight:700;color:#ffd23f;margin-bottom:4px;">${t.uefaTitle}</div>
        <div style="font-size:11px;opacity:0.8;margin-bottom:10px;">${t.uefaNote}</div>
        <div style="max-height:52vh;overflow-y:auto;display:flex;flex-direction:column;gap:5px;padding-right:2px;">
          ${list.map((c, idx) => {
            const isPlayerCountry = p && p.co === c.code;
            const dSign = c.delta >= 0 ? '+' : '';
            const dColor = c.delta >= 0 ? '#69f0ae' : '#ff8a80';
            return `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 9px;border-radius:7px;background:${isPlayerCountry ? 'rgba(255,210,63,0.2)' : 'rgba(255,255,255,0.06)'};border:1px solid ${isPlayerCountry ? '#ffd23f' : 'rgba(255,255,255,0.1)'};font-size:12px;">
                <div style="display:flex;align-items:center;gap:7px;">
                  <b style="width:18px;color:#ffd23f;">${idx + 1}.</b>
                  <span style="font-size:16px;">${c.meta.flag}</span>
                  <div>
                    <div style="font-weight:700;">${c.meta.name}</div>
                    <div style="font-size:10px;opacity:0.75;">${c.spots}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-weight:900;font-size:13px;">${c.total.toFixed(3)}</div>
                  <div style="font-size:10px;color:${dColor};">${dSign}${c.delta.toFixed(3)}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
      return;
    }

    // Záložka SOUTĚŽE
    const countries = BASE_UEFA.map(u => getCountryMeta(u.code));
    const currentMeta = getCountryMeta(selCountry);
    const table = buildSimulatedTable(selCountry, selTier);

    wrap.innerHTML = `
      <div style="display:flex;gap:6px;margin-bottom:8px;">
        <select id="comp_country_sel" style="flex:1;padding:8px;border-radius:8px;background:#0d2b1a;color:#fff;border:1px solid rgba(255,210,63,0.5);font-weight:700;">
          ${countries.map(c => `<option value="${c.code}" ${c.code === selCountry ? 'selected' : ''}>${c.flag} ${c.name}</option>`).join('')}
        </select>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:10px;">
        ${[1, 2, 3, 4].map(lv => `
          <button class="comp_tier_btn" data-tier="${lv}" style="padding:6px 2px;font-size:11px;border-radius:6px;border:1px solid ${selTier === lv ? '#ffd23f' : 'rgba(255,255,255,0.2)'};background:${selTier === lv ? '#ffd23f' : 'rgba(255,255,255,0.08)'};color:${selTier === lv ? '#0b2414' : '#fff'};font-weight:800;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            ${currentMeta.tiers[lv - 1] || (t.tier + ' ' + lv)}
          </button>
        `).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;font-size:10px;opacity:0.75;padding:0 8px 4px;">
        <span># &nbsp; ${currentMeta.flag} ${currentMeta.tiers[selTier - 1] || ''}</span>
        <span>${t.mp} &nbsp;|&nbsp; ${t.gd} &nbsp;|&nbsp; <b>${t.pts}</b></span>
      </div>
      <div style="max-height:46vh;overflow-y:auto;display:flex;flex-direction:column;gap:4px;padding-right:2px;">
        ${table.map((r, i) => {
          let zoneColor = 'transparent';
          if (selTier === 1) {
            if (i < 2) zoneColor = '#29b6f6';
            else if (i < 4) zoneColor = '#ffa726';
            else if (i >= table.length - 2) zoneColor = '#ef5350';
          } else {
            if (i < 2) zoneColor = '#66bb6a';
            else if (i === 2) zoneColor = '#ffee58';
            else if (selTier < 4 && i >= table.length - 2) zoneColor = '#ef5350';
          }
          return `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;border-radius:6px;background:${r.isUser ? 'rgba(255,210,63,0.22)' : 'rgba(255,255,255,0.06)'};border-left:4px solid ${zoneColor};font-size:12px;">
              <div style="display:flex;align-items:center;gap:6px;overflow:hidden;">
                <span style="width:18px;opacity:0.8;font-weight:700;">${i + 1}.</span>
                <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:${r.isUser ? '900' : '600'};color:${r.isUser ? '#ffd23f' : '#fff'};">${r.name}</span>
              </div>
              <div style="display:flex;align-items:center;gap:8px;flex:none;font-variant-numeric:tabular-nums;">
                <span style="opacity:0.75;width:18px;text-align:right;">${r.mp}</span>
                <span style="opacity:0.85;width:24px;text-align:right;">${r.gd > 0 ? '+' + r.gd : r.gd}</span>
                <b style="width:24px;text-align:right;color:#ffd23f;">${r.pts}</b>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    document.getElementById('comp_country_sel').onchange = (e) => {
      selCountry = e.target.value;
      renderModalContent();
    };
    wrap.querySelectorAll('.comp_tier_btn').forEach(btn => {
      btn.onclick = () => {
        selTier = Number(btn.getAttribute('data-tier'));
        renderModalContent();
      };
    });
  }

  function openCompetitionsModal() {
    const t = TXT[getLang()];
    const p = getPlayerState();
    if (p && p.co) {
      selCountry = p.co;
      selTier = Number(p.ti) || 1;
    }

    let ov = document.getElementById('comp_overlay');
    if (!ov) {
      ov = document.createElement('div');
      ov.id = 'comp_overlay';
      ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.78);z-index:9999;display:flex;align-items:center;justify-content:center;padding:12px;';
      document.body.appendChild(ov);
    }

    ov.innerHTML = `
      <div class="card" style="width:100%;max-width:440px;padding:14px;background:#0a2416;border:2px solid #ffd23f;box-shadow:0 12px 32px rgba(0,0,0,0.6);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <h2 style="margin:0;font-size:16px;color:#ffd23f;">🌍 ${t.title}</h2>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px;">
          <button id="comp_tab_leagues" style="padding:8px;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;border:1px solid #ffd23f;background:${activeTab === 'leagues' ? '#ffd23f' : 'transparent'};color:${activeTab === 'leagues' ? '#0b2414' : '#fff'};">🏆 ${t.tabLeagues}</button>
          <button id="comp_tab_uefa" style="padding:8px;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;border:1px solid #ffd23f;background:${activeTab === 'uefa' ? '#ffd23f' : 'transparent'};color:${activeTab === 'uefa' ? '#0b2414' : '#fff'};">🇪🇺 ${t.tabUefa}</button>
        </div>
        <div id="comp_body"></div>
        <button id="comp_close_btn" style="width:100%;margin-top:12px;min-height:44px;font-weight:800;background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.25);border-radius:8px;cursor:pointer;">${t.close}</button>
      </div>
    `;
    ov.style.display = 'flex';

    document.getElementById('comp_tab_leagues').onclick = () => {
      activeTab = 'leagues';
      openCompetitionsModal();
    };
    document.getElementById('comp_tab_uefa').onclick = () => {
      activeTab = 'uefa';
      openCompetitionsModal();
    };
    document.getElementById('comp_close_btn').onclick = () => {
      ov.style.display = 'none';
    };

    renderModalContent();
  }

  // Najde tlačítko "Přepnout kariéru / Switch Career" v hlavním menu a nahradí ho za "Ostatní soutěže"
  // a zároveň přidá "Přepnout kariéru" do Nastavení (kulatého kolečka)
  function patchButtons() {
    const t = TXT[getLang()];
    const hub = document.getElementById('hub');
    if (hub) {
      const buttons = Array.from(hub.querySelectorAll('button'));
      buttons.forEach(btn => {
        const oc = btn.getAttribute('onclick') || '';
        const txt = (btn.textContent || '').toUpperCase();
        const isSwitchBtn =
          oc.includes('slotsScr') ||
          txt.includes('SWITCH CAREER') ||
          txt.includes('PŘEPNOUT KARIÉRU') ||
          txt.includes('PREPNÚŤ KARIÉRU') ||
          txt.includes('KARRIERE WECHSELN') ||
          txt.includes('CHANGER DE CARRIÈRE') ||
          txt.includes('CAMBIAR CARRERA') ||
          txt.includes('MUDAR CARREIRA') ||
          txt.includes('ЗМІНИТИ КАР') ||
          txt.includes('ZMIEŃ KARIERĘ') ||
          txt.includes('СМЕНИ КАРИЕРАТА') ||
          txt.includes('CAMBIA CARRIERA') ||
          txt.includes('ĐỔI SỰ NGHIỆP') ||
          txt.includes('BYT KARRIÄR') ||
          txt.includes('BYTT KARRIERE');

        if (isSwitchBtn && btn.id !== 'comp_hub_btn') {
          btn.id = 'comp_hub_btn';
          btn.removeAttribute('onclick');
          btn.textContent = '🌍 ' + t.btn;
          btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            openCompetitionsModal();
          };
        } else if (btn.id === 'comp_hub_btn') {
          const wanted = '🌍 ' + t.btn;
          if (btn.textContent !== wanted) btn.textContent = wanted;
        }
      });
    }
  }

  // Sledujeme vykreslení hlavního menu (#hub) a otevření Nastavení (#modal)
  const hubEl = document.getElementById('hub');
  if (hubEl) {
    new MutationObserver(patchButtons).observe(hubEl, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }
  const modalEl = document.getElementById('modal');
  if (modalEl) {
    new MutationObserver(patchButtons).observe(modalEl, { attributes: true, attributeFilter: ['class'] });
  }
  new MutationObserver(patchButtons).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  patchButtons();
})();
