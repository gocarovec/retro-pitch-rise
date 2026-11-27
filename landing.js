/* Retro Pitch Rise – Úvodní obrazovka (HRÁT HRU + O HŘE) pro všech 14 jazyků */
(() => {
  'use strict';

  const TXT = {
    en: {
      sub: 'RETRO FOOTBALL CAREER',
      play: 'PLAY GAME',
      about: 'ABOUT THE GAME',
      desc: 'Create your own football star and choose ANY position on the pitch — Goalkeeper, Defender, Midfielder, or Striker! Start in the lower divisions, train 5 unique attributes, sign contracts & sponsors, buy luxury gear, and rise all the way to European cups and the World Cup.'
    },
    cs: {
      sub: 'RETRO FOTBALOVÁ KARIÉRA',
      play: 'HRÁT HRU',
      about: 'O HŘE',
      desc: 'Vytvoř si vlastní fotbalovou hvězdu a vyber si JAKÝKOLIV post na hřišti — brankáře, obránce, záložníka nebo útočníka! Začni v nižších soutěžích, trénuj 5 dovedností, podepisuj smlouvy se sponzory, nakupuj luxusní vybavení a probojuj se až do evropských pohárů a na Mistrovství světa.'
    },
    sk: {
      sub: 'RETRO FUTBALOVÁ KARIÉRA',
      play: 'HRAŤ HRU',
      about: 'O HRE',
      desc: 'Vytvor si vlastnú futbalovú hviezdu a vyber si AKÝKOĽVEK post na ihrisku — brankára, obrancu, záložníka alebo útočníka! Začni v nižších súťažiach, trénuj 5 zručností, podpisuj zmluvy so sponzormi a prebojuj sa až do európskych pohárov a na Majstrovstvá sveta.'
    },
    de: {
      sub: 'RETRO-FUSSBALLKARRIERE',
      play: 'SPIEL STARTEN',
      about: 'ÜBER DAS SPIEL',
      desc: 'Erstelle deinen eigenen Fußballstar und wähle JEDE Position — Torwart, Verteidiger, Mittelfeldspieler oder Stürmer! Starte in unteren Ligen, trainiere 5 Fähigkeiten, unterschreibe Verträge & Sponsoren und steige bis in den Europapokal und zur WM auf.'
    },
    fr: {
      sub: 'CARRIÈRE DE FOOTBALL RÉTRO',
      play: 'JOUER',
      about: 'À PROPOS DU JEU',
      desc: 'Créez votre star du football et choisissez N’IMPORTE QUEL poste — Gardien, Défenseur, Milieu ou Attaquant ! Débutez dans les divisions inférieures, entraînez 5 attributs, signez des sponsors et grimpez jusqu’aux coupes d’Europe et la Coupe du Monde.'
    },
    es: {
      sub: 'CARRERA DE FÚTBOL RETRO',
      play: 'JUGAR',
      about: 'ACERCA DEL JUEGO',
      desc: 'Crea tu estrella del fútbol y elige CUALQUIER posición — Portero, Defensa, Centrocampista o Delantero. Empieza en divisiones inferiores, entrena 5 atributos, firma patrocinadores y llega hasta las copas europeas y el Mundial.'
    },
    pt: {
      sub: 'CARREIRA DE FUTEBOL RETRÔ',
      play: 'JOGAR',
      about: 'SOBRE O JOGO',
      desc: 'Crie sua estrela do futebol e escolha QUALQUER posição — Goleiro, Defensor, Meio-campista ou Atacante! Comece nas divisões inferiores, treine 5 atributos, assine patrocinadores e chegue às copas europeias e à Copa do Mundo.'
    },
    uk: {
      sub: 'РЕТРО ФУТБОЛЬНА КАР’ЄРА',
      play: 'ГРАТИ',
      about: 'ПРО ГРУ',
      desc: 'Створи власну футбольну зірку та обери БУДЬ-ЯКУ позицію — воротаря, захисника, півзахисника чи нападника! Почни з нижчих дивізіонів, тренуй 5 навичок, підписуй спонсорів і дістанься єврокубків та Чемпіонату світу.'
    },
    pl: {
      sub: 'RETRO KARIERA PIŁKARSKA',
      play: 'GRAJ',
      about: 'O GRZE',
      desc: 'Stwórz własną gwiazdę futbolu i wybierz DOWOLNĄ pozycję — bramkarza, obrońcę, pomocnika lub napastnika! Zacznij w niższych ligach, trenuj 5 umiejętności, podpisuj kontrakty ze sponsorami i awansuj aż do pucharów europejskich i Mistrzostw Świata.'
    },
    bg: {
      sub: 'РЕТРО ФУТБОЛНА КАРИЕРА',
      play: 'ИГРАЙ',
      about: 'ЗА ИГРАТА',
      desc: 'Създай своя футболна звезда и избери ВСЯКА позиция — вратар, защитник, полузащитник или нападател! Започни в долните дивизии, тренирай 5 умения, подписвай със спонсори и стигни до европейските турнири и Световното първенство.'
    },
    it: {
      sub: 'CARRIERA CALCIO RETRÒ',
      play: 'GIOCA',
      about: 'INFORMAZIONI SUL GIOCO',
      desc: 'Crea la tua stella del calcio e scegli QUALSIASI ruolo — Portiere, Difensore, Centrocampista o Attaccante! Parti dalle serie minori, allena 5 attributi, firma sponsor e arriva fino alle coppe europee e ai Mondiali.'
    },
    vi: {
      sub: 'SỰ NGHIỆP BÓNG ĐÁ CỔ ĐIỂN',
      play: 'CHƠI NGAY',
      about: 'GIỚI THIỆU TRÒ CHƠI',
      desc: 'Tạo ngôi sao bóng đá của riêng bạn và chọn BẤT KỲ vị trí nào — Thủ môn, Hậu vệ, Tiền vệ hoặc Tiền đạo! Bắt đầu từ giải hạng dưới, rèn luyện 5 chỉ số, ký hợp đồng tài trợ và vươn tới cúp châu Âu cùng World Cup.'
    },
    sv: {
      sub: 'RETRO FOTBOLLSKARRIÄR',
      play: 'SPELA',
      about: 'OM SPELET',
      desc: 'Skapa din egen fotbollsstjärna och välj VILKEN position som helst — Målvakt, Försvarare, Mittfältare eller Anfallare! Börja i lägre divisioner, träna 5 egenskaper, skriv sponsoravtal och nå Europacuperna och VM.'
    },
    no: {
      sub: 'RETRO FOTBALLKARRIERE',
      play: 'SPILL',
      about: 'OM SPILLET',
      desc: 'Lag din egen fotballstjerne og velg HVILKEN SOM HELST posisjon — Keeper, Forsvarer, Midtbanespiller eller Spiss! Start i lavere divisjoner, tren 5 ferdigheter, signer sponsorer og nå europacupene og VM.'
    }
  };

  function getLang() {
    let l = (document.documentElement.lang || navigator.language || 'en').slice(0, 2).toLowerCase();
    if (l === 'nb' || l === 'nn') l = 'no';
    return TXT[l] ? l : 'en';
  }

  function initLanding() {
    const app = document.getElementById('app');
    const slots = document.getElementById('slots');
    if (!app || !slots || document.getElementById('landing_screen')) return;

    // Skryjeme výběr slotů dokud hráč neklikne na "HRÁT HRU"
    slots.classList.add('hidden');

    const box = document.createElement('section');
    box.id = 'landing_screen';
    box.style.cssText = 'display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;flex:1;padding:12px 6px;gap:14px;';

    box.innerHTML = `
      <div class="card" style="width:100%;padding:22px 16px;border:2px solid rgba(255,210,63,0.45);background:rgba(6,24,14,0.88);box-shadow:0 10px 28px rgba(0,0,0,0.45);">
        <div style="font-size:42px;line-height:1;margin-bottom:8px;">⚽</div>
        <h2 id="ld_title" style="margin:0 0 6px;font-size:22px;letter-spacing:1px;color:#ffd23f;"></h2>
        <div id="ld_sub" style="font-size:11px;opacity:0.8;letter-spacing:1.2px;margin-bottom:20px;"></div>

        <button id="ld_play_btn" style="width:100%;min-height:54px;font-size:17px;font-weight:900;letter-spacing:1px;background:#ffd23f;color:#0b2414;border:none;border-radius:10px;cursor:pointer;margin-bottom:10px;box-shadow:0 4px 0 #b88e14;"></button>

        <button id="ld_about_btn" style="width:100%;min-height:46px;font-size:14px;font-weight:700;background:rgba(255,255,255,0.1);color:#fff;border:1px solid rgba(255,255,255,0.28);border-radius:10px;cursor:pointer;"></button>

        <div id="ld_about_box" style="display:none;margin-top:14px;padding:12px;text-align:left;font-size:13px;line-height:1.5;background:rgba(0,0,0,0.38);border-radius:8px;border:1px solid rgba(255,255,255,0.15);color:#e8f5e9;"></div>
      </div>
    `;

    // Vložíme úvodní obrazovku hned za horní lištu (před sekci #slots)
    app.insertBefore(box, slots);

    // Převzetí názvu hry z horní lišty (aby seděl i když sis hru přejmenoval)
    const h1 = app.querySelector('h1');
    const gameTitle = h1 ? h1.textContent.replace('⚽', '').trim() : 'PITCH RISE';
    document.getElementById('ld_title').textContent = gameTitle;

    function updateTexts() {
      const t = TXT[getLang()];
      document.getElementById('ld_sub').textContent = t.sub;
      document.getElementById('ld_play_btn').textContent = '▶ ' + t.play;
      document.getElementById('ld_about_btn').textContent = 'ℹ️ ' + t.about;
      document.getElementById('ld_about_box').textContent = t.desc;
    }

    updateTexts();

    // Tlačítko HRÁT HRU -> schová úvodní obrazovku a otevře sloty / hru
    document.getElementById('ld_play_btn').onclick = () => {
      box.style.display = 'none';
      slots.classList.remove('hidden');
    };

    // Tlačítko O HŘE -> rozbalí / sbalí krátký popis hry
    document.getElementById('ld_about_btn').onclick = () => {
      const ab = document.getElementById('ld_about_box');
      ab.style.display = ab.style.display === 'none' ? 'block' : 'none';
    };

    // Automatická aktualizace textů při změně jazyka
    new MutationObserver(updateTexts).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanding);
  } else {
    initLanding();
  }
})();
