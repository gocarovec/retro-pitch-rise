/* Pitch Rise – background music (standalone). Load AFTER the main game script. */
(()=>{'use strict';
const $=s=>document.querySelector(s),FADE=500,
get=k=>{try{return localStorage.getItem(k)}catch(e){return null}},
put=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};

/* [button/title label, volume label] */
const TXT={
en:['Music','Music volume'],de:['Musik','Musiklautstärke'],fr:['Musique','Volume de la musique'],
es:['Música','Volumen de la música'],pt:['Música','Volume da música'],cs:['Hudba','Hlasitost hudby'],
uk:['Музика','Гучність музики'],pl:['Muzyka','Głośność muzyki'],sk:['Hudba','Hlasitosť hudby'],
bg:['Музика','Сила на музиката'],it:['Musica','Volume della musica'],vi:['Nhạc','Âm lượng nhạc'],
sv:['Musik','Musikvolym'],no:['Musikk','Musikkvolum']};
const lang=()=>{let l=(document.documentElement.lang||navigator.language||'en').slice(0,2).toLowerCase();
 l={nb:'no',nn:'no'}[l]||l;return TXT[l]?l:'en'};

let on=get('pr_music_on')!=='0',
 vol=(()=>{const v=parseFloat(get('pr_music_vol'));return isNaN(v)?.6:Math.min(1,Math.max(0,v))})(),
 ctx=null,unlocked=false,live=false,primed=false,wasM=false;

/* ---------- tracks ---------- */
const mk=src=>{const a=new Audio();a.src=src;a.loop=true;a.preload='auto';a._g=0;a._t=0;return a};
const T={menu:mk('before_the_whistle.mp3'),match:mk('under_the_floodlights.mp3')};
const lv=a=>{const x=Math.min(1,Math.max(0,a._g*vol));if(a._n)a._n.gain.value=x;else a.volume=x};
Object.values(T).forEach(lv);

/* Web Audio gain (makes fades/volume work on iOS, where audio.volume is read-only) */
function wire(){if(ctx||location.protocol==='file:')return;
 try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ctx=new C();
  for(const k in T){const a=T[k];a._n=ctx.createGain();a._n.gain.value=0;ctx.createMediaElementSource(a).connect(a._n);a._n.connect(ctx.destination);a.volume=1}
 }catch(e){ctx=null;for(const k in T){delete T[k]._n;T[k].volume=0}}}

function fade(a,to,ms,done){clearTimeout(a._f);const f=a._g,t0=performance.now();
 (function s(){const k=ms>0?Math.min(1,(performance.now()-t0)/ms):1;a._g=f+(to-f)*k;lv(a);
  if(k<1)a._f=setTimeout(s,30);else if(done)done()})()}

function go(k,t,reset){const a=T[k];if(a._t===t&&!(t&&a.paused))return;a._t=t;
 if(t){if(reset){try{a.currentTime=0}catch(e){}}
  const p=a.play();
  if(p&&p.then)p.then(()=>{live=true;rmGest()},()=>{a._t=0;clearTimeout(a._f);a._g=0;lv(a)});
  fade(a,1,FADE)}
 else fade(a,0,FADE,()=>{if(a._t===0)a.pause()})}

function hush(){for(const k in T){const a=T[k];clearTimeout(a._f);a._t=0;a._g=0;lv(a);a.pause()}}

/* ---------- game state detection (DOM only, no game internals) ---------- */
const matchOn=()=>{const m=$('#match'),r=$('#res');return !!m&&!m.classList.contains('hidden')&&!(r&&r.childElementCount)};
const paused=()=>{const p=$('#pz');return !!p&&p.textContent.indexOf('▶')>-1};

function sync(){const m=matchOn(),p=paused();let w=null;
 if(on&&unlocked&&!document.hidden)w=m?(p?null:'match'):'menu';
 const reset=m&&!wasM;wasM=m;
 if(ctx&&ctx.state==='suspended')ctx.resume().catch(()=>{});
 go('menu',w==='menu'?1:0);go('match',w==='match'?1:0,reset&&w==='match')}

/* ---------- autoplay unlock ---------- */
function unlock(){wire();unlocked=true;sync();
 if(!primed){primed=true;/* iOS: each element must be started once inside a gesture */
  T.match.play().then(()=>{live=true;rmGest();if(T.match._t!==1){T.match.pause();try{T.match.currentTime=0}catch(e){}}},()=>{primed=false})}}
const GEST=['pointerup','touchend','click','keydown'],gh=()=>{if(!live)unlock()};
GEST.forEach(e=>addEventListener(e,gh,true));
function rmGest(){if(live)GEST.forEach(e=>removeEventListener(e,gh,true))}

/* ---------- UI ---------- */
function paint(){const t=TXT[lang()],b=$('#msc_btn'),l=$('#msc_lbl'),s=$('#msc_vol'),p=$('#msc_pct');
 if(b){b.title=b.ariaLabel=t[0];b.setAttribute('aria-pressed',on);b.style.opacity=on?1:.4;b.style.filter=on?'none':'grayscale(1)'}
 if(l&&l.textContent!==t[1])l.textContent=t[1];
 if(s)s.value=Math.round(vol*100);
 if(p)p.textContent=Math.round(vol*100)+'%'}
function setOn(v){on=v;put('pr_music_on',v?'1':'0');paint();sync()}
function ui(){const mu=$('#mu');
 if(mu&&!$('#msc_btn')){const b=document.createElement('button');b.id='msc_btn';b.textContent='🎵';
  b.style.cssText='width:44px;min-width:44px;flex:none;padding:0;margin:0 6px 0 0';b.onclick=()=>setOn(!on);mu.parentNode.insertBefore(b,mu)}
 const card=$('#modal .card');
 if(card&&!$('#msc_row')){const r=document.createElement('div');r.id='msc_row';r.style.margin='8px 0 6px';
  r.innerHTML='<div class="row"><span id="msc_lbl"></span><b id="msc_pct"></b></div><input id="msc_vol" type="range" min="0" max="100" step="5" style="padding:0;height:32px;margin:4px 0 0;accent-color:#ffd23f">';
  const bs=card.querySelectorAll(':scope>button');card.insertBefore(r,bs[bs.length-1]||null);
  $('#msc_vol').oninput=e=>{vol=e.target.value/100;put('pr_music_vol',vol);Object.values(T).forEach(lv);
   if(vol>0&&!on)setOn(true);else paint()}}
 paint()}

/* ---------- hooks ---------- */
const mo=new MutationObserver(sync);
const m=$('#match'),r=$('#res'),z=$('#pz');
if(m)mo.observe(m,{attributes:true,attributeFilter:['class']});
if(r)mo.observe(r,{childList:true});
if(z)mo.observe(z,{childList:true,characterData:true,subtree:true});
new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
if($('#modal'))new MutationObserver(ui).observe($('#modal'),{attributes:true,attributeFilter:['class']});
document.addEventListener('visibilitychange',()=>document.hidden?hush():sync());
addEventListener('pagehide',hush);
ui();sync();
})();
