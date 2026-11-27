/* Pitch Rise: +4 languages (it, vi, sv, no). Loaded AFTER the main script. */
(function(){
const XT=`NEW CAREER|NUOVA CARRIERA|SỰ NGHIỆP MỚI|NY KARRIÄR|NY KARRIERE
Player name|Nome del giocatore|Tên cầu thủ|Spelarnamn|Spillernavn
Nationality (national team)|Nazionalità (nazionale)|Quốc tịch (đội tuyển quốc gia)|Nationalitet (landslag)|Nasjonalitet (landslag)
Starting country|Paese di partenza|Quốc gia khởi đầu|Startland|Startland
Starting tier|Livello iniziale|Giải đấu khởi đầu|Startdivision|Startdivisjon
Starting position|Ruolo iniziale|Vị trí khởi đầu|Startposition|Startposisjon
START CAREER|INIZIA LA CARRIERA|BẮT ĐẦU SỰ NGHIỆP|STARTA KARRIÄREN|START KARRIEREN
AGE|ETÀ|TUỔI|ÅLDER|ALDER
Age|Età|Tuổi|Ålder|Alder
CONTINUE|CONTINUA|TIẾP TỤC|FORTSÄTT|FORTSETT
Goalkeeper|Portiere|Thủ môn|Målvakt|Keeper
Defender|Difensore|Hậu vệ|Försvarare|Forsvarer
Midfielder|Centrocampista|Tiền vệ|Mittfältare|Midtbanespiller
Striker|Attaccante|Tiền đạo|Anfallare|Spiss
Key stats:|Statistiche chiave:|Chỉ số chính:|Nyckelvärden:|Nøkkelverdier:
Reflexes|Riflessi|Phản xạ|Reflexer|Reflekser
Handling|Presa|Bắt bóng|Gripsäkerhet|Ballsikkerhet
Kicking|Rinvii|Phát bóng|Utsparkar|Utspark
Tackling|Contrasti|Tắc bóng|Brytningar|Taklinger
Heading|Colpi di testa|Đánh đầu|Nickar|Hodestøt
Pace|Velocità|Tốc độ|Fart|Fart
Passing|Passaggi|Chuyền bóng|Passningar|Pasninger
Vision|Visione di gioco|Tầm nhìn|Spelförståelse|Oversikt
Shooting|Tiro|Sút bóng|Skott|Skudd
Dribbling|Dribbling|Rê bóng|Dribbling|Dribling
Diving|Tuffi|Lao người|Plongningar|Dykk
Positioning|Posizionamento|Chọn vị trí|Positionering|Posisjonering
Marking|Marcatura|Kèm người|Markering|Markering
Strength|Forza|Sức mạnh|Styrka|Styrke
Interceptions|Intercetti|Cắt bóng|Passningsbrytningar|Avskjæringer
Stamina|Resistenza|Thể lực|Uthållighet|Utholdenhet
Long Shots|Tiri da lontano|Sút xa|Distansskott|Langskudd
Off the Ball|Movimento senza palla|Chạy chỗ không bóng|Spel utan boll|Bevegelse uten ball
Key Starter|Titolare|Trụ cột|Ordinarie|Fast førstevalg
Impact Sub|Subentrante decisivo|Dự bị quyết định|Inbytare|Joker
Reserve Squad|Squadra riserve|Đội dự bị|Reservlag|Reservelag
Season|Stagione|Mùa giải|Säsong|Sesong
goals|gol|bàn thắng|mål|mål
assists|assist|kiến tạo|assist|assist
Stadium|Stadio|Sân vận động|Arena|Stadion
Table|Classifica|Bảng xếp hạng|Tabell|Tabell
Wage|Stipendio|Lương|Lön|Lønn
/wk|/sett.|/tuần|/v|/uke
Contract|Contratto|Hợp đồng|Kontrakt|Kontrakt
Squad role|Ruolo in rosa|Vai trò trong đội|Roll i truppen|Rolle i troppen
Manager trust|Fiducia dell'allenatore|Niềm tin của HLV|Tränarens förtroende|Trenerens tillit
Fame|Fama|Danh tiếng|Berömmelse|Berømmelse
PLAY MATCH|GIOCA PARTITA|CHƠI TRẬN ĐẤU|SPELA MATCH|SPILL KAMP
TRAINING|ALLENAMENTO|TẬP LUYỆN|TRÄNING|TRENING
LEAGUE TABLE|CLASSIFICA|BẢNG XẾP HẠNG|TABELL|TABELL
CAREER STATS|STATISTICHE DI CARRIERA|THỐNG KÊ SỰ NGHIỆP|KARRIÄRSTATISTIK|KARRIEREstatistikk
RESET CAREER|RIPRISTINA CARRIERA|ĐẶT LẠI SỰ NGHIỆP|ÅTERSTÄLL KARRIÄREN|NULLSTILL KARRIEREN
CAREER|CARRIERA|SỰ NGHIỆP|KARRIÄR|KARRIERE
SETTINGS|IMPOSTAZIONI|CÀI ĐẶT|INSTÄLLNINGAR|INNSTILLINGER
CLOSE|CHIUDI|ĐÓNG|STÄNG|LUKK
LANGUAGE|LINGUA|NGÔN NGỮ|SPRÅK|SPRÅK
BACK|INDIETRO|QUAY LẠI|TILLBAKA|TILBAKE
Kick-off!|Calcio d'inizio!|Trận đấu bắt đầu!|Avspark!|Avspark!
— Half-time —|— Intervallo —|— Hết hiệp 1 —|— Halvtid —|— Pause —
KEY MOMENT:|MOMENTO CHIAVE:|KHOẢNH KHẮC QUYẾT ĐỊNH:|AVGÖRANDE ÖGONBLICK:|AVGJØRENDE ØYEBLIKK:
FULL TIME:|FINE PARTITA:|HẾT GIỜ:|SLUTSIGNAL:|FULLTID:
VICTORY|VITTORIA|CHIẾN THẮNG|SEGER|SEIER
DEFEAT|SCONFITTA|THẤT BẠI|FÖRLUST|TAP
DRAW|PAREGGIO|HÒA|OAVGJORT|UAVGJORT
Match rating|Voto della partita|Điểm trận đấu|Matchbetyg|Kamprating
Goals|Gol|Bàn thắng|Mål|Mål
Assists|Assist|Kiến tạo|Assist|Assist
GOAL!|GOL!|VÀO!|MÅL!|MÅL!
GOAL for|GOL per|BÀN THẮNG cho|MÅL för|MÅL for
MISS!|SBAGLIATO!|TRƯỢT!|MISS!|BOM!
GOOD|BENE|TỐT|BRA|BRA
PERFECT!|PERFETTO!|HOÀN HẢO!|PERFEKT!|PERFEKT!
TACKLE!|CONTRASTA!|TẮC BÓNG!|BRYT!|TAKLE!
INTERCEPT!|INTERCETTA!|CẮT BÓNG!|BRYT PASSNINGEN!|AVSKJÆR!
HEAD IT!|DI TESTA!|ĐÁNH ĐẦU!|NICKA!|HODESTØT!
PASS!|PASSA!|CHUYỀN!|PASSA!|PASS!
SHOOT!|TIRA!|SÚT!|SKJUT!|SKYT!
SEASON|STAGIONE|MÙA GIẢI|SÄSONG|SESONG
COMPLETE|COMPLETATA|HOÀN TẤT|AVSLUTAD|FULLFØRT
Penalty!|Rigore!|Phạt đền!|Straff!|Straffe!
Header!|Colpo di testa!|Đánh đầu!|Nick!|Hodestøt!
Through ball|Passaggio filtrante|Đường chuyền xuyên tuyến|Djupledspassning|Gjennombruddspasning
Killer pass|Passaggio decisivo|Đường chuyền sát thủ|Dödande passning|Drapspasning
1v1 tackle|Contrasto 1 contro 1|Tắc bóng 1 đối 1|Tackling 1 mot 1|1 mot 1-takling
Block the shot|Blocca il tiro|Chặn cú sút|Blockera skottet|Blokker skuddet
Shot incoming!|Tiro in arrivo!|Cú sút đang tới!|Skott på väg!|Skudd på vei!
Cup|Coppa|Cúp|Cup|Cup
Quarter-Final|Quarti di finale|Tứ kết|Kvartsfinal|Kvartfinale
Semi-Final|Semifinale|Bán kết|Semifinal|Semifinale
Final|Finale|Chung kết|Final|Finale
Rating|Voto|Điểm|Betyg|Rating
Energy|Energia|Năng lượng|Energi|Energi
Mood|Umore|Tinh thần|Humör|Humør
SPONSORS|SPONSOR|NHÀ TÀI TRỢ|SPONSORER|SPONSORER
SHOP|NEGOZIO|CỬA HÀNG|BUTIK|BUTIKK
Save Slot|Slot di salvataggio|Ô lưu|Sparplats|Lagringsplass
Empty Slot|Slot vuoto|Ô trống|Tom plats|Tom plass
Start New Career in this Slot|Inizia una nuova carriera in questo slot|Bắt đầu sự nghiệp mới ở ô này|Starta ny karriär på denna plats|Start ny karriere i denne plassen
Load Career|Carica carriera|Tải sự nghiệp|Ladda karriär|Last inn karriere
Delete Save|Elimina salvataggio|Xóa bản lưu|Radera sparfil|Slett lagring
Confirm Delete?|Confermare l'eliminazione?|Xác nhận xóa?|Bekräfta radering?|Bekreft sletting?
CAREER SLOTS|SLOT DI CARRIERA|Ô SỰ NGHIỆP|KARRIÄRPLATSER|KARRIEREPLASSER
TROPHY CABINET|BACHECA DEI TROFEI|TỦ CÚP|TROFÉSKÅP|TROFESKAP
League titles|Titoli di campionato|Chức vô địch giải|Ligatitlar|Ligatitler
Domestic Cup|Coppa nazionale|Cúp quốc gia|Inhemsk cup|Nasjonal cup
Player of Year|Giocatore dell'anno|Cầu thủ của năm|Årets spelare|Årets spiller
TIMELINE|CRONOLOGIA|DÒNG THỜI GIAN|TIDSLINJE|TIDSLINJE
RECENT MATCHES|PARTITE RECENTI|TRẬN GẦN ĐÂY|SENASTE MATCHER|SISTE KAMPER
Appearances|Presenze|Số trận|Matcher|Kamper
Clean sheets|Porta inviolata|Giữ sạch lưới|Hållna nollor|Nullet mål
Ballon d’Or|Pallone d’Oro|Quả bóng vàng|Ballon d’Or|Ballon d’Or
Locked|Bloccato|Đã khóa|Låst|Låst
INJURY!|INFORTUNIO!|CHẤN THƯƠNG!|SKADA!|SKADE!
RECOVERED|RECUPERATO|ĐÃ HỒI PHỤC|ÅTERHÄMTAD|FRISK
England|Inghilterra|Anh|England|England
Spain|Spagna|Tây Ban Nha|Spanien|Spania
Italy|Italia|Ý|Italien|Italia
Germany|Germania|Đức|Tyskland|Tyskland
France|Francia|Pháp|Frankrike|Frankrike
Netherlands|Paesi Bassi|Hà Lan|Nederländerna|Nederland
Czech Republic|Repubblica Ceca|Séc|Tjeckien|Tsjekkia
Czechia|Repubblica Ceca|Séc|Tjeckien|Tsjekkia
Scotland|Scozia|Scotland|Skottland|Skottland
Brazil|Brasile|Brazil|Brasilien|Brasil
Japan|Giappone|Nhật Bản|Japan|Japan`;
const XT2=`LUXURY SHOP & STAFF|NEGOZIO DI LUSSO E STAFF|CỬA HÀNG CAO CẤP & ĐỘI NGŨ|LYXBUTIK & STAB|LUKSUSBUTIKK OG STAB
LUXURY SHOP|NEGOZIO DI LUSSO|CỬA HÀNG CAO CẤP|LYXBUTIK|LUKSUSBUTIKK
STAFF|STAFF|ĐỘI NGŨ|STAB|STAB
LIFESTYLE|STILE DI VITA|LỐI SỐNG|LIVSSTIL|LIVSSTIL
Nutritionist|Nutrizionista|Chuyên gia dinh dưỡng|Nutritionist|Ernæringsfysiolog
Physiotherapist|Fisioterapista|Chuyên gia vật lý trị liệu|Fysioterapeut|Fysioterapeut
Part-time Nutritionist|Nutrizionista part-time|Dinh dưỡng bán thời gian|Deltidsnutritionist|Deltids ernæringsfysiolog
Club Nutritionist|Nutrizionista del club|Dinh dưỡng của CLB|Klubbens nutritionist|Klubbens ernæringsfysiolog
Elite Nutrition Team|Team nutrizionale d'élite|Đội dinh dưỡng tinh hoa|Elitnutritionsteam|Elite ernæringsteam
Club Physio|Fisio del club|Vật lý trị liệu CLB|Klubbfysio|Klubbfysio
Senior Physiotherapist|Fisioterapista senior|Chuyên gia VLTL cấp cao|Senior fysioterapeut|Senior fysioterapeut
Medical Team|Staff medico|Đội ngũ y tế|Medicinskt team|Medisinsk team
Top Football Agent (+20% wage, more offers)|Top agente (+20% stipendio, più offerte)|Siêu đại diện (+20% lương, nhiều đề nghị hơn)|Toppagent (+20 % lön, fler erbjudanden)|Toppagent (+20 % lønn, flere tilbud)
Top Football Agent|Top agente|Siêu đại diện|Toppagent|Toppagent
Cars|Auto|Xe hơi|Bilar|Biler
Real Estate|Immobili|Bất động sản|Fastigheter|Eiendom
Luxury Gear|Accessori di lusso|Phụ kiện cao cấp|Lyxutrustning|Luksusutstyr
Used Hatchback|Utilitaria usata|Xe hatchback cũ|Begagnad halvkombi|Brukt kompaktbil
Sports Coupe|Coupé sportiva|Coupe thể thao|Sportcoupé|Sportscoupé
Supercar|Supercar|Siêu xe|Supersportbil|Supersportsbil
Hypercar|Hypercar|Hypercar|Hypercar|Hypercar
Rented Flat|Appartamento in affitto|Căn hộ thuê|Hyrd lägenhet|Leid leilighet
City Apartment|Appartamento in città|Căn hộ trung tâm|Stadslägenhet|Byleilighet
Luxury Villa|Villa di lusso|Biệt thự sang trọng|Lyxvilla|Luksusvilla
Private Mansion|Villa privata|Dinh thự riêng|Privat herrgård|Privat herregård
Custom Cleats|Scarpini su misura|Giày đá bóng đặt riêng|Skräddarsydda skor|Skreddersydde skoa
Designer Watches|Orologi firmati|Đồng hồ hàng hiệu|Designerklockor|Designerklokker
Private Jet|Jet privato|Máy bay riêng|Privatjet|Privatfly
Fame/wk|Fama/sett.|Danh tiếng/tuần|Berömmelse/v|Berømmelse/uke
Upkeep|Mantenimento|Chi phí duy trì|Underhåll|Vedlikehold
BOOSTERS|POTENZIAMENTI|VẬT TĂNG CƯỜNG|BOOSTERS|BOOSTERE
Special Offers for Your Position|Offerte speciali per il tuo ruolo|Ưu đãi đặc biệt cho vị trí của bạn|Specialerbjudanden för din position|Spesialtilbud for din posisjon
REFRESH OFFERS|AGGIORNA OFFERTE|LÀM MỚI ƯU ĐÃI|UPPDATERA ERBJUDANDEN|OPPDATER TILBUD
SOLD|VENDUTO|ĐÃ BÁN|SÅLD|SOLGT
Isotonic Energy Pack|Pacchetto energetico isotonico|Gói năng lượng đẳng trương|Isotoniskt energipaket|Isotonisk energipakke
Cryotherapy & Spa Session|Crioterapia e spa|Liệu pháp lạnh & spa|Kryoterapi & spa|Kryoterapi og spa
Private Weekend Getaway|Weekend privato di relax|Kỳ nghỉ cuối tuần riêng tư|Privat weekendresa|Privat weekendtur
Custom Grip Gloves|Guanti con presa personalizzata|Găng tay bám tùy chỉnh|Skräddarsydda greppvantar|Skreddersydde grephansker
Reflex Training Light Pods|Luci per allenare i riflessi|Đèn luyện phản xạ|Reflexträningsljus|Reflekstreningslys
Penalty Analyst Tablet|Tablet analisi rigori|Máy tính bảng phân tích phạt đền|Straffanalysplatta|Straffeanalyse-nettbrett
Neck & Core Mobility Kit|Kit mobilità collo e core|Bộ vận động cổ & thân|Rörlighetskit nacke & core|Mobilitetssett nakke og core
Carbon-Fiber Shin Guards|Parastinchi in carbonio|Bọc ống chân carbon|Skenskydd i kolfiber|Leggbeskyttere i karbon
Tactical Video Breakdown|Analisi video tattica|Phân tích video chiến thuật|Taktisk videoanalys|Taktisk videoanalyse
Aerial Leap Resistance Bands|Bande elastiche per il salto|Dây kháng lực bật nhảy|Motståndsband för hopp|Motstandsbånd for hopp
Heavy-Duty Studded Boots|Scarpini rinforzati|Giày đinh siêu bền|Kraftiga knappskor|Kraftige knoppsko
Precision Control Cleats|Scarpini per il controllo|Giày kiểm soát chính xác|Precisionsskor|Presisjonssko
Vision & Scanning VR Drill|Esercizio VR di visione|Bài tập VR tầm nhìn|VR-övning för spelförståelse|VR-øvelse for oversikt
Endurance GPS Vest|Gilet GPS di resistenza|Áo GPS thể lực|GPS-väst för uthållighet|GPS-vest for utholdenhet
Match Tempo Analytics|Analisi del ritmo di gioco|Phân tích nhịp độ trận đấu|Matchtempoanalys|Kamptempoanalyse
Lightweight Speed Boots|Scarpini leggeri da velocità|Giày tốc độ siêu nhẹ|Lätta fartskor|Lette fartssko
Finishing VR Simulator|Simulatore VR di finalizzazione|Mô phỏng VR dứt điểm|VR-simulator för avslut|VR-simulator for avslutninger
Striker Instinct Masterclass|Masterclass istinto da bomber|Lớp học bản năng tiền đạo|Masterclass i anfallsinstinkt|Mesterklasse i spissinstinkt
Explosive Sprint Parachute|Paracadute per sprint esplosivi|Dù tập chạy nước rút|Sprintfallskärm|Sprintfallskjerm
Key moments +2|Momenti chiave +2|Khoảnh khắc quyết định +2|Avgörande ögonblick +2|Avgjørende øyeblikk +2
Sessions this week|Sessioni questa settimana|Buổi tập tuần này|Pass den här veckan|Økter denne uken
each costs 15 energy|ognuna costa 15 energia|mỗi buổi tốn 15 năng lượng|varje kostar 15 energi|hver koster 15 energi
SPONSORS & SHOP|SPONSOR E NEGOZIO|NHÀ TÀI TRỢ & CỬA HÀNG|SPONSORER & BUTIK|SPONSORER OG BUTIKK
REQUEST TRANSFER|CHIEDI IL TRASFERIMENTO|YÊU CẦU CHUYỂN NHƯỢNG|BEGÄR ÖVERGÅNG|BE OM OVERGANG
OFFERS (max 3 deals)|OFFERTE (max 3 accordi)|ƯU ĐÃI (tối đa 3 hợp đồng)|ERBJUDANDEN (max 3 avtal)|TILBUD (maks 3 avtaler)
No active deals.|Nessun accordo attivo.|Không có hợp đồng nào.|Inga aktiva avtal.|Ingen aktive avtaler.
No offers right now.|Nessuna offerta al momento.|Hiện chưa có ưu đãi.|Inga erbjudanden just nu.|Ingen tilbud akkurat nå.
Next brand:|Prossimo marchio:|Thương hiệu tiếp theo:|Nästa varumärke:|Neste merke:
or better|o superiore|hoặc cao hơn|eller bättre|eller bedre
 per | per | mỗi | per | per
clean sheet|porta inviolata|giữ sạch lưới|hållen nolla|nullet mål
assist|assist|kiến tạo|assist|assist
goal|gol|bàn thắng|mål|mål
or Man of the Match|o Man of the Match|hoặc Cầu thủ xuất sắc nhất trận|eller matchens spelare|eller kampens spiller
or MotM|o MotM|hoặc MVP|eller MotM|eller MotM
Personal Trainer + Recovery Gear|Personal trainer + attrezzatura per il recupero|HLV cá nhân + đồ phục hồi|Personlig tränare + återhämtningsutrustning|Personlig trener + restitusjonsutstyr
Lifestyle upgrade|Upgrade stile di vita|Nâng cấp lối sống|Livsstilsuppgradering|Livsstilsoppgradering
+15% XP per level|+15% XP per livello|+15% XP mỗi cấp|+15 % XP per nivå|+15 % XP per nivå
+25% Fame per level|+25% Fama per livello|+25% danh tiếng mỗi cấp|+25 % berömmelse per nivå|+25 % berømmelse per nivå
MAX|MAX|TỐI ĐA|MAX|MAKS
Lv|Liv.|Cấp|Nivå|Nivå
CAPTAIN TEAM TALK|DISCORSO DEL CAPITANO|BÀI NÓI CỦA ĐỘI TRƯỞNG|KAPTENSTAL|KAPTEINENS TALE
Big match ahead. How do you address the squad?|Grande partita in arrivo. Cosa dici alla squadra?|Trận đấu lớn sắp tới. Bạn nói gì với đội?|Stor match väntar. Hur talar du till laget?|Stor kamp venter. Hva sier du til laget?
FIRE THEM UP|CARICALI|TRUYỀN LỬA CHO HỌ|ELDA UPP DEM|FYR DEM OPP
risky, big boost|rischioso, grande bonus|rủi ro, tăng mạnh|riskabelt, stor boost|risikabelt, stor boost
STAY CALM|RESTA CALMO|GIỮ BÌNH TĨNH|HÅLL DIG LUGN|HOLD DEG ROLIG
safe, small boost|sicuro, piccolo bonus|an toàn, tăng nhẹ|säkert, liten boost|trygt, liten boost
STICK TO THE PLAN|SEGUI IL PIANO|BÁM SÁT KẾ HOẠCH|HÅLL DIG TILL PLANEN|HOLD DEG TIL PLANEN
reliable boost|bonus affidabile|tăng ổn định|pålitlig boost|pålitelig boost
NAMED CLUB CAPTAIN!|NOMINATO CAPITANO DEL CLUB!|ĐƯỢC CHỌN LÀM ĐỘI TRƯỞNG CLB!|UTSEDD TILL KLUBBKAPTEN!|UTNEVNT TIL KLUBBKAPTEIN!
NATIONAL TEAM CAPTAIN!|CAPITANO DELLA NAZIONALE!|ĐỘI TRƯỞNG ĐỘI TUYỂN QUỐC GIA!|LANDSLAGSKAPTEN!|LANDSLAGSKAPTEIN!
Armband lost|Fascia persa|Mất băng đội trưởng|Bindeln förlorad|Kapteinsbindet tapt
Nations League Finals|Finali di Nations League|Vòng chung kết Nations League|Nations League-finaler|Nations League-finaler
World Cup Qualifiers|Qualificazioni ai Mondiali|Vòng loại World Cup|VM-kval|VM-kvalifisering
European Championship (EURO)|Campionato europeo (EURO)|Giải vô địch châu Âu (EURO)|Europamästerskapet (EM)|Europamesterskapet (EM)
International Friendly|Amichevole internazionale|Giao hữu quốc tế|Landskamp (vänskaplig)|Landskamp (vennskapelig)
Friendly|Amichevole|Giao hữu|Vänskapsmatch|Treningskamp
Group|Girone|Bảng|Grupp|Gruppe
Qualifier|Qualificazione|Vòng loại|Kvalmatch|Kvalifisering
 · Through to the knockouts| · Qualificati agli ottavi| · Vào vòng loại trực tiếp| · Vidare till slutspelet| · Videre til sluttspillet
 · Eliminated in the group| · Eliminati nel girone| · Bị loại ở vòng bảng| · Utslagna i gruppen| · Slått ut i gruppen
 · Out| · Fuori| · Bị loại| · Utslagna| · Ute
 · Qualified for the World Cup!| · Qualificati ai Mondiali!| · Giành vé dự World Cup!| · Klara för VM!| · Klar for VM!
 · Failed to qualify| · Non qualificati| · Không vượt qua vòng loại| · Kvalade inte in| · Kvalifiserte seg ikke
 (promoted)| (promossi)| (thăng hạng)| (uppflyttade)| (rykket opp)
 (relegated)| (retrocessi)| (xuống hạng)| (nedflyttade)| (rykket ned)
World Cup|Mondiali|World Cup|VM|VM
Champions Cup|Champions Cup|Champions Cup|Champions Cup|Champions Cup
Tap LEFT, MIDDLE or RIGHT of the goal to dive. Watch the ball!|Tocca SINISTRA, CENTRO o DESTRA per tuffarti. Guarda il pallone!|Chạm TRÁI, GIỮA hoặc PHẢI khung thành để lao người. Hãy nhìn bóng!|Tryck VÄNSTER, MITT eller HÖGER för att kasta dig. Titta på bollen!|Trykk VENSTRE, MIDTEN eller HØYRE for å kaste deg. Se på ballen!
Tap when the marker is in the green zone (gold = perfect).|Tocca quando il segnalino è nella zona verde (oro = perfetto).|Chạm khi con trỏ nằm trong vùng xanh (vàng = hoàn hảo).|Tryck när markören är i den gröna zonen (guld = perfekt).|Trykk når markøren er i den grønne sonen (gull = perfekt).
Tap the OPEN lane (green ring). Defenders keep shifting!|Tocca la corsia LIBERA (anello verde). I difensori si spostano!|Chạm vào đường TRỐNG (vòng xanh). Hậu vệ liên tục di chuyển!|Tryck på den FRIA banan (grön ring). Försvararna rör sig!|Trykk på den FRIE banen (grønn ring). Forsvarerne flytter seg!
Keys:|Tasti:|Phím:|Tangenter:|Taster:
or Space|o Spazio|hoặc Space|eller mellanslag|eller mellomrom
Higher stats cost much more XP and money. Rest between matches restores energy.|Le statistiche alte costano molti più XP e soldi. Riposare tra le partite ripristina energia.|Chỉ số cao tốn nhiều XP và tiền hơn. Nghỉ giữa các trận giúp hồi năng lượng.|Höga värden kostar mycket mer XP och pengar. Vila mellan matcherna återställer energi.|Høye verdier koster mye mer XP og penger. Hvile mellom kampene gjenoppretter energi.
Each upgrade costs 1 XP plus money. Earn XP from match ratings.|Ogni upgrade costa 1 XP più denaro. Guadagni XP con i voti.|Mỗi lần nâng cấp tốn 1 XP và tiền. XP nhận từ điểm trận.|Varje uppgradering kostar 1 XP plus pengar. XP får du via matchbetyg.|Hver oppgradering koster 1 XP pluss penger. XP får du fra kampkarakterer.
Tap a trophy for its history|Tocca un trofeo per la storia|Chạm vào cúp để xem lịch sử|Tryck på en trofé för historik|Trykk på en trofé for historikk
(details not recorded for earlier wins)|(dettagli non registrati per le vittorie precedenti)|(chưa ghi chi tiết các lần vô địch trước)|(detaljer saknas för tidigare segrar)|(detaljer er ikke lagret for tidligere seire)
Finish 1st in your league.|Chiudi al 1° posto in campionato.|Về nhất giải đấu của bạn.|Sluta etta i din liga.|Bli nummer 1 i din liga.
Win the domestic cup final.|Vinci la finale di coppa nazionale.|Thắng chung kết cúp quốc gia.|Vinn den inhemska cupfinalen.|Vinn finalen i nasjonal cup.
Average rating 7.5+ over a season.|Voto medio 7,5+ in una stagione.|Điểm trung bình 7,5+ trong một mùa.|Snittbetyg 7,5+ under en säsong.|Snittkarakter 7,5+ i løpet av en sesong.
Win the Nations League Finals with your national team.|Vinci le finali di Nations League con la nazionale.|Vô địch chung kết Nations League cùng đội tuyển.|Vinn Nations League-finalen med landslaget.|Vinn Nations League-finalen med landslaget.
Win the continental championship with your national team.|Vinci il campionato continentale con la nazionale.|Vô địch châu lục cùng đội tuyển quốc gia.|Vinn kontinentala mästerskapet med landslaget.|Vinn kontinentalmesterskapet med landslaget.
NATIONAL TEAM CALL-UP!|CONVOCAZIONE IN NAZIONALE!|ĐƯỢC TRIỆU TẬP LÊN ĐTQG!|LANDSLAGSUTTAGNING!|LANDSLAGSINNKALLING!
MID-SEASON WINDOW|MERCATO INVERNALE|KỲ CHUYỂN NHƯỢNG GIỮA MÙA|VINTERFÖNSTRET|VINTERVINDUET
NO THANKS|NO, GRAZIE|KHÔNG, CẢM ƠN|NEJ TACK|NEI TAKK
Contract expired: extend or go free|Contratto scaduto: rinnova o vai a parametro zero|Hợp đồng hết hạn: gia hạn hoặc tự do|Kontraktet utgånget: förläng eller gå free|Kontrakten utløpt: forleng eller gå fri
1 year left on your contract|Ti resta 1 anno di contratto|Hợp đồng còn 1 năm|1 år kvar på kontraktet|1 år igjen av kontrakten
No offers this year. Raise your rating and OVR.|Nessuna offerta quest'anno. Migliora voto e OVR.|Năm nay chưa có đề nghị. Hãy nâng điểm và OVR.|Inga erbjudanden i år. Höj betyg och OVR.|Ingen tilbud i år. Øk karakter og OVR.
EXTEND CONTRACT|RINNOVA IL CONTRATTO|GIA HẠN HỢP ĐỒNG|FÖRLÄNG KONTRAKT|FORLENG KONTRAKT
STAY AT|RESTA A|Ở LẠI|STANNA I|BLI I
Delete your saved career? This cannot be undone.|Eliminare la carriera salvata? Non si può annullare.|Xóa sự nghiệp đã lưu? Không thể hoàn tác.|Radera din sparade karriär? Det går inte att ångra.|Slette den lagrede karrieren? Dette kan ikke angres.
Invalid save data.|Dati di salvataggio non validi.|Dữ liệu lưu không hợp lệ.|Ogiltig sparfil.|Ugyldige lagringsdata.
EXPORT SAVE|ESPORTA SALVATAGGIO|XUẤT BẢN LƯU|EXPORTERA SPARFIL|EKSPORTER LAGRING
IMPORT SAVE|IMPORTA SALVATAGGIO|NHẬP BẢN LƯU|IMPORTERA SPARFIL|IMPORTER LAGRING
SWITCH CAREER|CAMBIA CARRIERA|ĐỔI SỰ NGHIỆP|BYT KARRIÄR|BYTT KARRIERE`;
[['it','🇮🇹','Italiano'],['vi','🇻🇳','Tiếng Việt'],['sv','🇸🇪','Svenska'],['no','🇳🇴','Norsk']].forEach(l=>{if(!LG.some(x=>x[0]==l[0]))LG.push(l)});
Object.assign(LI,{it:9,vi:10,sv:11,no:12});
(XT+'\n'+XT2).split('\n').forEach(l=>{const a=l.split('|'),d=D[a[0]];if(d&&a.length>=5)for(let i=0;i<4;i++)d[9+i]=a[1+i]});
const st=document.createElement('style');
st.textContent="html[lang=vi] body,html[lang=vi] h1,html[lang=vi] h2,html[lang=vi] .px,html[lang=vi] .score,html[lang=vi] button,html[lang=vi] input,html[lang=vi] select{font-family:'Segoe UI',Roboto,'Noto Sans',Arial,sans-serif}html[lang=vi] button,html[lang=vi] h1,html[lang=vi] h2,html[lang=vi] .px{font-weight:700;letter-spacing:0}";
document.head.appendChild(st);
let s=null;try{s=localStorage.getItem('pr_lang')}catch(e){}
if(s=='nb'||s=='nn')s='no';
if(!s){let n=(navigator.language||'en').slice(0,2).toLowerCase();if(n=='nb'||n=='nn')n='no';s=n}
if(['it','vi','sv','no'].includes(s))setLang(s);
})();
