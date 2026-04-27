// ==========================================
// 🚌 АВТОСТАНЦИЯ КЛИКЕР - 5 ЧАСОВ ИГРЫ
// ==========================================
// --- 1. ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ---
let ysdk = null;
let currentLang = 'ru';
let gamesPlayedSinceLastAd = 0;
let gamesTargetForNextAd = Math.floor(Math.random() * 4) + 2;

// --- 2. СЛОВАРЬ ПЕРЕВОДОВ ---
const i18n = {
    ru: {
        gameTitle: "АВТОСТАНЦИЯ<br>КЛИКЕР",
        gameSubtitle: "Стань директором Слободости",
        playBtn: "ИГРАТЬ",
        musicVol: "🎵 Громкость музыки",
        sfxVol: "🔊 Громкость эффектов",
        langLabel: "🌐 Язык (Language)",
        changeOrientation: "🔄 Сменить ориентацию",
        resetBtn: "🗑️ Сбросить прогресс",
        resetWarning: "Вы уверены? Весь прогресс будет удален!",
        navUpgrade: "ОБНОВЛЕНИЕ",
        navShop: "МАГАЗИН",
        navMinigames: "МИНИ-ИГРЫ",
        bonusIncome: "x2 ДОХОД (3 МИН)",
        fleetFullTitle: "Автопарк собран!",
        fleetFullDesc: "Вы достигли максимума",
		maxupgr: "МАКС",
        mgTitle: "Мини-игры",
        mgDispName: "Диспетчер",
        mgDispDesc: "Расшифруй маршрут за 45 сек",
        mgRouteName: "Маршрут",
        mgRouteDesc: "Останавливайся вовремя",
        dispManual: "СПРАВОЧНИК",
        dispFrom: "1-Я ЦИФРА — ОТКУДА",
        dispType: "3-Я ЦИФРА — ТИП",
        dispScore: "СЧЕТ",
        dispTime: "ВРЕМЯ",
        dispMiss: "ПРОМАХИ",
        dispCombo: "СЕРИЯ",
        dispBest: "ЛУЧШАЯ",
        dispRouteNum: "МАРШРУТ №",
        dispWrong: "Неверно!",
        dispFinished: "ГОТОВО!",
        dispTotalRoutes: "Маршрутов:",
        dispTotalCombo: "Лучшая серия:",
        dispTotalReward: "ИТОГО",
        continueBtn: "ПРОДОЛЖИТЬ",
        routeTask: "Останавливайся у 🚏 когда автобус рядом!",
        routePassengers: "Пассажиры:",
		routeDostPass: "Пассажиров",
        routeReward: "За остановку:",
        routeSpeed: "Скорость:",
        routeStopBtn: "СТОП",
        routeFinished: "МАРШРУТ ЗАВЕРШЕН",
        routeTransported: "Перевезено:",
        routeBestCombo: "Лучшая серия в этой игре:",
        routeRecord: "Рекорд:",
        routeMoneyForPass: "За пассажиров:",
        cities: ["Липецк", "Слободость", "Рязань", "Тверь", "Калуга", "Тула", "Орёл", "Москва", "Воронеж", "Курск"],
        types: ["Пригородный", "Городской", "Межобластной", "Скоростной"],
        dispHint: "Серия ×3 = ×2 награда",
        stations: ["Деревенская автостанция", "Городской вокзал", "Областной терминал", "Столичный хаб"],
        levelLabel: "Уровень",
        units: { tr: " трлн", mlrd: " млрд", mln: " млн", k: "к" },
        welcomeBack: "С возвращением!",
        welcomeWaited: "заждалась вас!",
        welcomeCurrent: "Ваш текущий транспорт:",
        balanceLabel: "Баланс:",
        startWork: "Приступить к работе",
		welcomeBack: "С возвращением!",
        welcomeWaited: "ждала вас.",
        welcomeCurrent: "Текущий автобус:",
        balanceLabel: "Баланс:",
        startWork: "ПРИСТУПИТЬ К РАБОТЕ 🚀",
        stations: ["Деревенская автостанция", "Городской вокзал", "Областной терминал", "Столичный хаб"],
		tutorialTitle: "Добро пожаловать в Слободость!",
		tutorialText1: "Вы назначены новым директором местной автостанции.",
		tutorialText2: "Ваша цель — превратить её из деревенской остановки в футуристический хаб.",
		tutorialTip1: "<b>Кликайте</b> по экрану для заработка.",
		tutorialTip2: "<b>Покупайте</b> новые автобусы.",
		tutorialTip3: "<b>Улучшайте</b> их для пассивного дохода.",
		balanceText: "Баланс",
        perSecLabel: "В сек",
        perClickLabel: "За клик",
		tutorialWarn: "⚠️ При покупке нового автобуса старые улучшения сбрасываются!",
		startWorkBtn: "Приступить к работе",
		routeMisses: "Промахи:",
		routeOrSpace: "Или нажми ПРОБЕЛ",
		routeBonus: "Бонус (10+ пассажиров):",
		mgTotal: "ИТОГО:",
		mgCombo: "СЕРИЯ",
		changeMusic: "Сменить музыку"
    },
    en: {
        dispHint: "Combo ×3 = ×2 reward",
        gameTitle: "BUS STATION<br>CLICKER",
		changeMusic: "Change music",
        gameSubtitle: "Become the Director of Slobodost",
        playBtn: "PLAY",
        musicVol: "🎵 Music Volume",
        sfxVol: "🔊 SFX Volume",
        langLabel: "🌐 Language",
		maxupgr: "MAX",
        changeOrientation: "🔄 Change Orientation",
        resetBtn: "🗑️ Reset Progress",
        resetWarning: "Are you sure? All progress will be lost!",
        navUpgrade: "UPGRADE",
        navShop: "SHOP",
		balanceText: "Balance",
        perSecLabel: "Per Sec",
		routeDostPass: "Passengers",
        perClickLabel: "Per Click",
        navMinigames: "MINI-GAMES",
        bonusIncome: "x2 INCOME (3 MIN)",
        fleetFullTitle: "Fleet Complete!",
        fleetFullDesc: "You have reached the maximum",
        mgTitle: "Mini-games",
        mgDispName: "Dispatcher",
        mgDispDesc: "Decode the route in 45 sec",
        mgRouteName: "Route ",
        mgRouteDesc: "Stop on time",
        dispManual: "MANUAL",
        dispFrom: "1ST DIGIT — FROM",
        dispType: "3RD DIGIT — TYPE",
        dispScore: "SCORE",
        dispTime: "TIME",
        dispMiss: "MISSES",
        dispCombo: "COMBO",
        dispBest: "BEST",
        dispRouteNum: "ROUTE №",
        dispWrong: "Wrong!",
        dispFinished: "FINISHED!",
        dispTotalRoutes: "Routes:",
        dispTotalCombo: "Best combo:",
        dispTotalReward: "TOTAL",
        continueBtn: "CONTINUE",
        routeTask: "Stop at 🚏 when the bus is close!",
        routePassengers: "Passengers:",
        routeReward: "Per stop:",
        routeSpeed: "Speed:",
        routeStopBtn: "STOP",
        routeFinished: "ROUTE COMPLETED",
        routeTransported: "Transported:",
        routeBestCombo: "Best combo this game:",
        routeRecord: "Record:",
        routeMoneyForPass: "For passengers:",
        cities: ["Lipetsk", "Slobodost", "Ryazan", "Tver", "Kaluga", "Tula", "Orel", "Moscow", "Voronezh", "Kursk"],
        types: ["Suburban", "Urban", "Intercity", "Express"],
        stations: ["Village Bus Station", "City Bus Terminal", "Regional Hub", "Capital Center"],
        levelLabel: "Level",
        units: { tr: "T", mlrd: "B", mln: "M", k: "k" },
        welcomeBack: "Welcome back!",
        welcomeWaited: "is waiting for you!",
        welcomeCurrent: "Current transport:",
        balanceLabel: "Balance:",
        startWork: "Start work",
		welcomeBack: "Welcome Back!",
        welcomeWaited: "was waiting for you.",
        welcomeCurrent: "Current bus:",
        balanceLabel: "Balance:",
        startWork: "START WORKING 🚀",
        stations: ["Village Station", "City Terminal", "Regional Hub", "Capital Station"],
		tutorialTitle: "Welcome to Slobodost!",
		tutorialText1: "You have been appointed as the new director of the local bus station.",
		tutorialText2: "Your goal is to turn it from a village stop into a futuristic hub.",
		tutorialTip1: "<b>Click</b> on the screen to earn money.",
		tutorialTip2: "<b>Buy</b> new buses.",
		tutorialTip3: "<b>Upgrade</b> them for passive income.",
		tutorialWarn: "⚠️ Old upgrades are reset when buying a new bus!",
		startWorkBtn: "Start Working",
		routeMisses: "Misses:",
		routeOrSpace: "Or press SPACE",
		routeBonus: "Bonus (10+ pass.):",
		mgTotal: "TOTAL:",
		mgCombo: "COMBO"
    }
};

// --- 3. ИНИЦИАЛИЗАЦИЯ SDK ---
document.addEventListener("DOMContentLoaded", () => {
    // Подключаем Яндекс SDK
    YaGames.init().then(_ysdk => {
        ysdk = _ysdk;
        
        // Обязательное требование: сообщаем, что игра загружена
        ysdk.features.LoadingAPI?.ready(); 

        // Инициализация языка
        initLanguage();
        
    }).catch(console.error);
});

// --- 4. ЛОГИКА ЯЗЫКОВ ---
function initLanguage() {
    // Проверяем, выбирал ли игрок язык вручную (сохраняем в браузере)
    let savedLang = localStorage.getItem('slobodskoy_lang');
    
    if (savedLang) {
        currentLang = savedLang;
    } else {
        // Если не выбирал, берем язык из профиля Яндекса
        currentLang = ysdk.environment.i18n.lang;
        if (!i18n[currentLang]) currentLang = 'ru'; // Если язык редкий, ставим русский по умолчанию
    }
    
    document.getElementById('lang-selector').value = currentLang;
    applyTranslations();
}

function changeLanguage(langCode) {
    currentLang = langCode;
    localStorage.setItem('slobodskoy_lang', langCode); // Сохраняем выбор
    applyTranslations();
}

function applyTranslations() {
    const texts = i18n[currentLang];
    
    // Автоматический перевод всех элементов с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.innerHTML = texts[key];
    });

    // Обновляем фон и станцию
    updateBackground(); 
    updateUI();
}

// Вспомогательная функция для случайных чисел
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let balance = 20000000000000000;
let multiplier = 1;
let lastClickTime = 0;
let gameStarted = false;
let loopsStarted = false;

// ==========================================
// 🎮 МИНИ-ИГРЫ: УТИЛИТЫ
// ==========================================

// Переменные для мини-игр
let dispatchHintOpen = false;
let routeGameActive = false;
let routeBusPos = 10;
let routeStopZones = [];
let routeScore = 0;
let routeLives = 3;
let routeGameLoop = null;

// Переключение справочника в Диспетчере
function toggleDispatchHint() {
    const panel = document.getElementById('dispatch-hint-panel');
    if (panel) {
        panel.classList.toggle('open');
        dispatchHintOpen = panel.classList.contains('open');
    }
}

// Закрытие игры Диспетчер
function closeDispatchGame() {
    const gameEl = document.getElementById('tech-inspection-game');
    if (gameEl) {
        gameEl.classList.remove('active');
        setTimeout(() => gameEl.remove(), 300);
    }
    document.getElementById('overlay')?.classList.remove('active');
}

// Закрытие игры Маршрут
function closeRouteGame() {
    routeGameActive = false;
    if (routeGameLoop) clearInterval(routeGameLoop);
    
    const gameEl = document.getElementById('route-game');
    if (gameEl) {
        gameEl.classList.remove('active');
        setTimeout(() => gameEl.remove(), 300);
    }
    document.getElementById('overlay')?.classList.remove('active');
}

// Генерация названия остановки
function getNextStopName() {
    const stops = ["Слободость", "Рынок", "Вокзал", "Парк", "Аэропорт", "Центр", "Школа", "Больница"];
    return stops[Math.floor(Math.random() * stops.length)];
}

// Показ всплывающего результата в Маршруте
function showRouteResult(emoji, text, bonus) {
    const track = document.getElementById('rg-track');
    if (!track) return;
    
    const popup = document.createElement('div');
    popup.className = 'route-result-popup';
    popup.innerHTML = `
        <div class="rp-emoji">${emoji}</div>
        <div class="rp-text">${text}</div>
        <div class="rp-bonus">${bonus}</div>
    `;
    track.appendChild(popup);
    setTimeout(() => popup.remove(), 1200);
}

// Потеря жизни в Маршруте
function loseLife() {
    routeLives--;
    const livesEl = document.getElementById('rg-lives');
    if (livesEl) {
        livesEl.innerText = '❤️'.repeat(routeLives) + '🖤'.repeat(3 - routeLives);
    }
    if (routeLives <= 0) {
        setTimeout(() => {
            showRouteResult('🏁', 'Маршрут завершён!', `+${routeScore * 10} ₽`);
            balance += routeScore * 10;
            updateUI();
            closeRouteGame();
        }, 500);
    }
}
// 🎛️ НАСТРОЙКИ
let settings = { musicVol: 0.4, sfxVol: 0.2 };

function loadSettings() {
    const raw = localStorage.getItem('slobodost_settings');
    if (raw) {
        try { settings = JSON.parse(raw); } catch(e) {}
    }
    // Применяем к ползункам и аудио
    document.getElementById('music-volume').value = settings.musicVol;
    document.getElementById('sfx-volume').value = settings.sfxVol;
    
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) bgMusic.volume = settings.musicVol;
}

function saveSettings() {
    settings.musicVol = parseFloat(document.getElementById('music-volume').value);
    settings.sfxVol = parseFloat(document.getElementById('sfx-volume').value);
    localStorage.setItem('slobodost_settings', JSON.stringify(settings));
    
    const bgMusic = document.getElementById('bg-music');
    if (bgMusic) {
        bgMusic.volume = settings.musicVol;
        // Если громкость 0 — ставим паузу, если подняли — играем
        if (settings.musicVol === 0) bgMusic.pause();
        else if (bgMusic.paused && gameStarted) bgMusic.play();
    }
}

// Привязка ползунков
window.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    document.getElementById('music-volume').addEventListener('input', saveSettings);
    document.getElementById('sfx-volume').addEventListener('input', saveSettings);
});
// ==========================================
// 🚌 АВТОБУСЫ (БАЛАНС НА 5 ЧАСОВ)
// Каждый автобус = 25-35 минут активной игры
// ==========================================
const buses = [
    { name: "ПАЗ-672",     price: 0,              clickBase: 1,         secBase: 8,          img: "paz-672.png",     scale: 1    },
    { name: "ЛиАЗ-677",    price: 12000,          clickBase: 4,         secBase: 35,         img: "liaz-677.png",    scale: 1.2    },
    { name: "Ikarus-256",  price: 95000,          clickBase: 18,        secBase: 180,        img: "ikarus-256.png",  scale: 1    },
    { name: "ПАЗ-3205",    price: 650000,         clickBase: 95,        secBase: 950,        img: "paz-3205.png",    scale: 1    },
    { name: "ЛиАЗ-5292",   price: 4200000,        clickBase: 480,       secBase: 4800,       img: "liaz-5292.png",   scale: 1.3    },
    { name: "МАЗ-203",     price: 28000000,       clickBase: 2400,      secBase: 24000,      img: "maz-203.png",     scale: 1.3    },
    { name: "Neoplan",     price: 180000000,      clickBase: 12000,     secBase: 120000,     img: "neoplan.png",     scale: 1   },
    { name: "Mercedes",    price: 1100000000,     clickBase: 60000,     secBase: 600000,     img: "merc.png",        scale: 0.8    },
    { name: "VipBus",      price: 6500000000,     clickBase: 300000,    secBase: 3000000,    img: "vipbus.png",      scale: 1    },
    { name: "FuturBus",    price: 35000000000,    clickBase: 1500000,   secBase: 15000000,   img: "futbus.png",      scale: 1    }
];

let currentBusIdx = 0;
let upgrades = { capacity: 0, engine: 0, interior: 0 };
const MAX_UPGRADE_LEVEL = 50;
const stations = ["Деревенская автостанция", "Городской вокзал", "Областной терминал", "Столичный хаб"];

// ==========================================
// 📊 СТАТИСТИКА МИНИ-ИГР
// ==========================================
let miniGameStats = {
    dispatcher: { bestStreak: 0, totalGames: 0 },
    route: { bestStreak: 0, totalGames: 0 }
};

// ==========================================
// 💾 СОХРАНЕНИЯ
// ==========================================
function saveProgress() {
    localStorage.setItem('slobodost_save', JSON.stringify({
        balance: balance,
        busIdx: currentBusIdx,
        upgrades: upgrades,
        miniGameStats: miniGameStats,
        savedAt: Date.now()
    }));
}

function loadProgress() {
    const raw = localStorage.getItem('slobodost_save');
    if (!raw) return false;
    try {
        const d = JSON.parse(raw);
        balance = d.balance || 0;
        currentBusIdx = d.busIdx || 0;
        upgrades = d.upgrades || { capacity: 0, engine: 0, interior: 0 };
        miniGameStats = d.miniGameStats || { dispatcher: { bestStreak: 0, totalGames: 0 }, route: { bestStreak: 0, totalGames: 0 } };
        return true;
    } catch (e) { return false; }
}

// ==========================================
// 📢 РЕКЛАМА
// ==========================================
let lastInterstitial = 0, lastBonusAd = 0;
let bonusActive = false, bonusTimer = null;

function checkInterstitialAd() {
    if (Date.now() - lastInterstitial >= 180000) {
        lastInterstitial = Date.now();
        console.log('[YANDEX] Interstitial ad');
    }
}

function checkBonusAd() {
    if (bonusActive) return;
    if (Date.now() - lastBonusAd >= 300000) {
        lastBonusAd = Date.now();
        const c = document.getElementById('ad-bonus-container');
        if (c) {
            c.style.display = 'block';
            bonusTimer = setTimeout(() => { if (!bonusActive && c) c.style.display = 'none'; }, 20000);
        }
    }
}

function activateBonus() {
    if (bonusActive) return;
    if (bonusTimer) clearTimeout(bonusTimer);
    bonusActive = true;
    multiplier = 2;
    document.getElementById('ad-bonus-container').style.display = 'none';
    updateUI();
    setTimeout(() => { multiplier = 1; bonusActive = false; updateUI(); }, 180000);
}

// ==========================================
// 🔊 ЗВУКИ
// ==========================================
function playPurchaseSound() {
    const s = document.getElementById('purchase-sound');
    if (s) { s.currentTime = 0; s.volume = settings.sfxVol; s.play().catch(() => {}); }
}

function playCoinSound() {
    const s = document.getElementById('coin-sound');
    if (s) { s.currentTime = 0; s.volume = settings.sfxVol; s.play().catch(() => {}); }
}

// ==========================================
// 🧮 ЭКОНОМИКА (ЗАМЕДЛЕНА)
// ==========================================
function getClickPower() {
    const bus = buses[currentBusIdx];
    // Клик = 1/5 от дохода в секунду (медленнее)
    const baseClick = Math.max(1, Math.floor(bus.secBase / 5));
    const lvl = Math.min(upgrades.interior, MAX_UPGRADE_LEVEL);
    const bonus = 1 + lvl * 0.08; // 8% за уровень (меньше)
    return Math.floor(baseClick * bonus * multiplier);
}

function getSecPower() {
    const bus = buses[currentBusIdx];
    const lvlE = Math.min(upgrades.engine, MAX_UPGRADE_LEVEL);
    const lvlC = Math.min(upgrades.capacity, MAX_UPGRADE_LEVEL);
    const bonus = 1 + lvlE * 0.08 + lvlC * 0.08; // 8% за уровень
    return Math.floor(bus.secBase * bonus * multiplier);
}

function getUpgradeCost(type) {
    // ✅ В 10 РАЗ ДЕШЕВЛЕ: база = 2 секунды пассива
    // ✅ Медленный рост x1.18
    const base = Math.max(50, Math.floor(buses[currentBusIdx].secBase * 2));
    return Math.floor(base * Math.pow(1.18, upgrades[type]));
}

function isUpgradeMaxed(type) {
    return upgrades[type] >= MAX_UPGRADE_LEVEL;
}

// ==========================================
// 👆 КЛИК
// ==========================================
function handleGlobalClick(event) {
    if (!gameStarted) return;
    const now = Date.now();
    if (now - lastClickTime < 100) return;
    lastClickTime = now;

    if (
        event.target.closest('button') ||
        event.target.closest('.modal-window') ||
        event.target.closest('#stats-panel') ||
        event.target.closest('#main-navigation') ||
        event.target.closest('#station-footer') ||
        event.target.closest('#ad-bonus-container')
    ) return;

    const power = getClickPower();
    balance += power;
    updateUI();
    playCoinSound();
    createFloatingText(event.clientX, event.clientY, power);

    const busImg = document.getElementById('current-bus-img');
    const s = buses[currentBusIdx].scale;
    busImg.style.transition = 'none';
    busImg.style.transform = `scale(${s * 0.92})`;
    setTimeout(() => {
        busImg.style.transition = 'transform 0.1s ease-out';
        busImg.style.transform = `scale(${s})`;
    }, 50);
}

// ==========================================
// 🛒 ПОКУПКИ
// ==========================================
function buyUpgrade(type) {
    if (!gameStarted || isUpgradeMaxed(type)) return;
    const cost = getUpgradeCost(type);
    if (balance < cost) return;
    balance -= cost;
    upgrades[type]++;
    playPurchaseSound();
    updateUI();
    saveProgress();
}

function buyNextBus() {
    if (!gameStarted) return;
    const next = currentBusIdx + 1;
    if (next >= buses.length) return;
    if (balance < buses[next].price) return;

    // Вызываем полноэкранную рекламу
    showInterstitialAd(() => {
        // Весь код покупки переносим внутрь callback-функции.
        // Он сработает СРАЗУ после того, как игрок закроет рекламу.
        balance -= buses[next].price;
        currentBusIdx = next;
        
        // Сброс улучшений при покупке нового автобуса
        upgrades = { capacity: 0, engine: 0, interior: 0 };
        
        playPurchaseSound();
        updateBackground();
        updateUI();
        saveProgress();
    });
}

// ==========================================
// 🖼️ ФОН
// ==========================================
function updateBackground() {
    let bg = 'oneurfon.png', levelNum = 1;
    const texts = i18n[currentLang]; // Берем весь объект языка

    if (currentBusIdx >= 8) { bg = 'foururfon.png'; levelNum = 4; }
    else if (currentBusIdx >= 5) { bg = 'threeurfon.png'; levelNum = 3; }
    else if (currentBusIdx >= 2) { bg = 'twourfon.png'; levelNum = 2; }

    document.getElementById('game-container').style.backgroundImage = `url('images/backgrounds/${bg}')`;
    
    // Безопасное обращение к текстам
    if (texts.stations) {
        document.getElementById('level-name').innerText = texts.stations[levelNum - 1];
    }
    document.getElementById('level-num').innerText = `${texts.levelLabel || 'Уровень'} ${levelNum}`;
    
    const bw = document.getElementById('bus-wrapper');
    if (levelNum === 3) bw.classList.add('level-3-shift');
    else bw.classList.remove('level-3-shift');
}

// ==========================================
// 💬 ФОРМАТИРОВАНИЕ И UI
// ==========================================
function formatMoney(n) {
    const u = i18n[currentLang].units; // Берем приставки текущего языка
    if (n >= 1e12) return (n / 1e12).toFixed(2) + u.tr;
    if (n >= 1e9) return (n / 1e9).toFixed(2) + u.mlrd;
    if (n >= 1e6) return (n / 1e6).toFixed(2) + u.mln;
    if (n >= 1000) return (n / 1000).toFixed(1) + u.k;
    return Math.floor(n).toLocaleString();
}

function updateUI() {
    document.getElementById('balance').innerText = formatMoney(balance);
	const t = i18n[currentLang];
	document.getElementById('per-sec').innerText = formatMoney(getSecPower());
	document.getElementById('per-click').innerText = formatMoney(getClickPower());

    const busImg = document.getElementById('current-bus-img');
    if (busImg) {
        busImg.src = `images/buses/${buses[currentBusIdx].img}`;
        busImg.style.transform = `scale(${buses[currentBusIdx].scale})`;
    }

    document.getElementById('current-bus-label').innerText = `🚌 ${buses[currentBusIdx].name}`;

    const capEl = document.getElementById('btn-cap-cost');
    const engEl = document.getElementById('btn-eng-cost');
    const intEl = document.getElementById('btn-int-cost');
	if (capEl) capEl.innerText = isUpgradeMaxed('capacity') ? t.maxupgr : formatMoney(getUpgradeCost('capacity'));
	if (engEl) engEl.innerText = isUpgradeMaxed('engine') ? t.maxupgr : formatMoney(getUpgradeCost('engine'));
	if (intEl) intEl.innerText = isUpgradeMaxed('interior') ? t.maxupgr : formatMoney(getUpgradeCost('interior'));

    const nextBus = buses[currentBusIdx + 1];
    const busAvailable = document.getElementById('bus-available');
    const busComplete = document.getElementById('bus-complete');

    if (nextBus) {
    // ✅ Просто обновляем цену — кнопка и её onclick остаются нетронутыми
    document.getElementById('next-bus-price').innerText = formatMoney(nextBus.price);
    document.getElementById('next-bus-name').innerText = nextBus.name;
    
    busAvailable.style.display = 'block';
    busComplete.style.display = 'none';
	} else {
    busAvailable.style.display = 'none';
    busComplete.style.display = 'block';
}
}

// ==========================================
// 📋 МЕНЮ
// ==========================================
function openMenu(id) {
    if (document.getElementById('tutorial-window')?.classList.contains('active')) return;
    closeAllMenus();
    document.getElementById(id)?.classList.add('active');
    document.getElementById('overlay')?.classList.add('active');
}

function closeAllMenus(event) {
    if (event?.target.closest('.modal-content') && !event.target.classList.contains('close-btn')) return;
    if (document.getElementById('tutorial-window')?.classList.contains('active')) return;
    document.querySelectorAll('.modal-window').forEach(w => w.classList.remove('active'));
    document.getElementById('overlay')?.classList.remove('active');
}

function createFloatingText(x, y, value) {
    const el = document.createElement('div');
    el.className = 'floating-click-value';
    el.innerText = `+${formatMoney(value)} ₽`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
}

// ==========================================
// 🎉 ПРИВЕТСТВИЕ
// ==========================================
function showWelcomeBack() {
    const li = currentBusIdx >= 8 ? 3 : currentBusIdx >= 5 ? 2 : currentBusIdx >= 2 ? 1 : 0;
    const t = i18n[currentLang]; // Берём словарь текущего языка
    
    const modal = document.createElement('div');
    modal.id = 'welcome-back-modal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:9998;display:flex;align-items:center;justify-content:center;';
    
    modal.innerHTML = `
        <div style="background:#1e1e1e;padding:40px;border-radius:20px;border:3px solid #ffd700;text-align:center;max-width:400px;width:90%;box-shadow:0 0 40px rgba(255,215,0,0.2);">
            <div style="font-size:3rem;margin-bottom:10px;">🚌</div>
            <h2 style="color:#ffd700;margin:0 0 10px;font-size:1.8rem;">${t.welcomeBack}</h2>
            <p style="color:#ccc;margin:0 0 20px;">
                ${t.stations[li]} <span style="color:#ffd700;">${t.welcomeWaited}</span>
            </p>
            <div style="background:#2a2a2a;border-radius:12px;padding:15px;margin-bottom:20px;">
                <p style="color:#aaa;margin:0 0 5px;font-size:0.85rem;">${t.welcomeCurrent}</p>
                <p style="color:#00ffcc;font-size:1.2rem;font-weight:bold;margin:0;">🚌 ${buses[currentBusIdx].name}</p>
                <p style="color:#aaa;font-size:0.85rem;margin:8px 0 0;">
                    ${t.balanceLabel} <b style="color:#ffd700;">${formatMoney(balance)} ₽</b>
                </p>
            </div>
            <button onclick="document.getElementById('welcome-back-modal').remove()" 
                    style="padding:14px 0;width:100%;background:#28a745;color:white;border:none;border-radius:10px;font-size:1.1rem;font-weight:bold;cursor:pointer;">
                ${t.startWork}
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ==========================================
// 🚀 ЗАПУСК
// ==========================================
function initPlayButton() {
    const hasSave = localStorage.getItem('slobodost_save') !== null;
    document.getElementById('play-btn').addEventListener('click', () => {
		initMusic(); 
        
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) { 
            bgMusic.volume = settings.musicVol; 
            bgMusic.play().catch(() => {}); 
        }

        const startScreen = document.getElementById('start-screen');
        startScreen.classList.add('hidden');

        setTimeout(() => {
            startScreen.style.display = 'none';
            if (hasSave) {
                startGame();
                showWelcomeBack();
            } else {
                document.getElementById('overlay').classList.add('active');
                document.getElementById('tutorial-window').classList.add('active');
            }
        }, 600);
    });
}

function startGame() {
    document.getElementById('tutorial-window')?.classList.remove('active');
    document.getElementById('overlay')?.classList.remove('active');
    gameStarted = true;

    // Обязательно для Яндекса: уведомляем о начале игрового процесса
    if (ysdk && ysdk.features && ysdk.features.GameplayAPI) {
        ysdk.features.GameplayAPI.start();
    }

    if (!loopsStarted) {
        startGameLoops();
        loopsStarted = true;
    }
}

function startGameLoops() {
    setInterval(() => {
        if (gameStarted) { balance += getSecPower() / 10; updateUI(); }
    }, 100);

    setInterval(() => { if (gameStarted) saveProgress(); }, 30000);

    document.getElementById('reward-btn')?.addEventListener('click', activateBonus);
    
    setInterval(() => {
        if (gameStarted) { checkInterstitialAd(); checkBonusAd(); }
    }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('game-container').addEventListener('click', handleGlobalClick);
    loadProgress();
    initPlayButton();
    updateBackground();
    updateUI();
});

// ==========================================
// 🎮 МИНИ-ИГРА: ДИСПЕТЧЕР (x4 МЕНЬШЕ НАГРАДА)
// ==========================================
function startTechInspectionGame() {
    closeAllMenus();
    document.getElementById('overlay').classList.add('active');
    
    const container = document.getElementById('game-container');
    
    // Создаём оверлей игры
    const gameEl = document.createElement('div');
    gameEl.id = 'tech-inspection-game';
    gameEl.className = 'active';
    gameEl.innerHTML = `
        <div class="dispatch-game-area">
            <div class="dispatch-header">
                <div class="dh-item">
                    <div class="dh-label">Время</div>
                    <div class="dh-val" id="di-timer">45</div>
                </div>
                <div class="dh-item">
                    <div class="dh-label">Счёт</div>
                    <div class="dh-val" id="di-score">0</div>
                </div>
                <div class="dh-item">
                    <div class="dh-label">Промахи</div>
                    <div class="dh-val" id="di-misses">0/2</div>
                </div>
                <button onclick="closeDispatchGame()" 
                    style="background:none;border:1px solid #555;color:#fff;
                           border-radius:6px;padding:4px 10px;cursor:pointer;">✕</button>
            </div>
            
            <div class="dispatch-body">
                <div class="dispatch-task">
                    <p>Введите код маршрута:</p>
                    <input type="text" id="di-input" maxlength="3" placeholder="А-01" 
                           style="width:100%;padding:12px;font-size:1.2rem;text-align:center;
                                  background:#222;border:2px solid #ffd700;border-radius:10px;
                                  color:#ffd700;margin:10px 0;">
                </div>
                <button id="di-submit" 
                    style="width:100%;padding:15px;font-size:1.1rem;background:#28a745;
                           color:white;border:none;border-radius:10px;cursor:pointer;font-weight:bold;">
                    ПРОВЕРИТЬ
                </button>
                <div id="di-feedback" style="margin-top:15px;text-align:center;font-weight:bold;"></div>
            </div>
        </div>
        
        <!-- СПРАВОЧНИК: кнопка-рычаг -->
        <button class="dispatch-hint-toggle" id="hint-toggle-btn" onclick="toggleDispatchHint()">📋</button>
        
        <!-- СПРАВОЧНИК: панель -->
        <div class="dispatch-hint" id="dispatch-hint-panel">
            <h4>📖 Справочник маршрутов</h4>
            <div class="hint-row"><span class="hint-code">А-01</span><span class="hint-val">Центр → Вокзал</span></div>
            <div class="hint-row"><span class="hint-code">Б-14</span><span class="hint-val">Рынок → Аэропорт</span></div>
            <div class="hint-row"><span class="hint-code">В-23</span><span class="hint-val">Парк → Школа</span></div>
            <div class="hint-row"><span class="hint-code">Г-07</span><span class="hint-val">Больница → Центр</span></div>
            <div class="hint-row"><span class="hint-code">Д-31</span><span class="hint-val">Вокзал → Рынок</span></div>
            <button onclick="toggleDispatchHint()" 
                style="margin-top:12px;width:100%;padding:8px;background:#333;
                       color:#ffd700;border:1px solid #ffd700;border-radius:8px;cursor:pointer;">
                ✕ Закрыть
            </button>
        </div>
    `;
    container.appendChild(gameEl);
    
    // Логика игры
    let score = 0, misses = 0, timeLeft = 45, gameActive = true;
    const correctCodes = ['А-01', 'Б-14', 'В-23', 'Г-07', 'Д-31'];
    
    const timerInterval = setInterval(() => {
        if (!gameActive) return;
        timeLeft--;
        document.getElementById('di-timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            gameActive = false;
            clearInterval(timerInterval);
            endDispatchGame(score, misses);
        }
    }, 1000);
    
    document.getElementById('di-submit').addEventListener('click', () => {
        if (!gameActive) return;
        const input = document.getElementById('di-input').value.toUpperCase();
        const feedback = document.getElementById('di-feedback');
        
        if (correctCodes.includes(input)) {
            score++;
            feedback.innerText = '✅ Верно! +10 ₽';
            feedback.style.color = '#4caf50';
            balance += 10;
            document.getElementById('di-score').innerText = score;
            playPurchaseSound();
        } else {
            misses++;
            feedback.innerText = `❌ Неверно! Правильно: ${correctCodes[Math.floor(Math.random()*correctCodes.length)]}`;
            feedback.style.color = '#ff4444';
            document.getElementById('di-misses').innerText = `${misses}/2`;
            if (misses >= 2) {
                gameActive = false;
                clearInterval(timerInterval);
                setTimeout(() => endDispatchGame(score, misses), 500);
                return;
            }
        }
        document.getElementById('di-input').value = '';
        updateUI();
    });
    
    // Enter для отправки
    document.getElementById('di-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('di-submit').click();
    });
}
    function showQuestion() {
        if (!gameActive) return;
        if (nextQuestionTimeout) clearTimeout(nextQuestionTimeout);
        
        currentQ = generateQuestion();
        questionStartTime = Date.now();
        const tickEl = document.getElementById('disp-ticket');
        if (tickEl) { tickEl.style.opacity='0'; setTimeout(() => { tickEl.innerText=currentQ.num; tickEl.style.transition='opacity 0.2s'; tickEl.style.opacity='1'; },100); }
        const optEl = document.getElementById('disp-options');
        if (optEl) {
            optEl.innerHTML = '';
            currentQ.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.innerHTML = `<span style="font-size:0.92rem;line-height:1.4;">${opt}</span>`;
                btn.style.cssText = 'background:rgba(255,255,255,0.07);border:2px solid #444;border-radius:12px;color:white;padding:14px 10px;cursor:pointer;font-size:0.9rem;text-align:center;transition:all 0.15s;line-height:1.4;';
                btn.onmouseenter = () => { btn.style.borderColor='#ffd700'; btn.style.background='rgba(255,215,0,0.1)'; };
                btn.onmouseleave = () => { btn.style.borderColor='#444'; btn.style.background='rgba(255,255,255,0.07)'; };
                btn.onclick = () => answerQuestion(opt, btn);
                optEl.appendChild(btn);
            });
        }
        const fb = document.getElementById('disp-feedback');
        if (fb) fb.innerText = '';
    }

    function answerQuestion(chosen, btnEl) {
        if (!gameActive) return;
        const isCorrect = chosen === currentQ.correct;
        const elapsed = (Date.now() - questionStartTime) / 1000;
        const speedMult = elapsed < 3 ? 2 : elapsed < 6 ? 1.5 : 1;

        document.querySelectorAll('#disp-options button').forEach(b => {
            b.style.pointerEvents = 'none';
            if (b === btnEl) {
                b.style.borderColor = isCorrect ? '#4caf50' : '#ff4444';
                b.style.background = isCorrect ? 'rgba(76,175,80,0.25)' : 'rgba(255,68,68,0.25)';
            }
        });

        const fb = document.getElementById('disp-feedback');
        if (isCorrect) {
            streak++;
            const mult = streak >= 3 ? 2 : 1;
            const reward = Math.floor(rewardPerTicket * mult * speedMult);
            speedBonus += reward - rewardPerTicket;
            balance += reward;
            score++;
            document.getElementById('disp-score').innerText = score;
            document.getElementById('disp-streak').innerText = `x${streak >= 3 ? 2 : 1}`;
            if (fb) { fb.style.color='#4caf50'; fb.innerText = streak >= 3 ? `✅ СЕРИЯ ${streak}! +${formatMoney(reward)} ₽` : `✅ +${formatMoney(reward)} ₽`; }
            createFloatingText(window.innerWidth/2, window.innerHeight/2, reward);
            playPurchaseSound();
        } else {
            if (streak > miniGameStats.dispatcher.bestStreak) miniGameStats.dispatcher.bestStreak = streak;
            streak = 0;
            misses++;
            document.getElementById('disp-misses').innerText = `${misses}/2`;
            document.getElementById('disp-streak').innerText = 'x1';
            if (fb) { fb.style.color='#ff4444'; fb.innerText=`❌ Неверно!`; }
            
            if (misses >= 2) {
                gameActive = false;
                clearInterval(timerInterval);
                if (nextQuestionTimeout) clearTimeout(nextQuestionTimeout);
                setTimeout(() => endDispatcherGame(score, misses, speedBonus, baseReward), 800);
                return;
            }
        }
        updateUI();
        nextQuestionTimeout = setTimeout(() => { if (gameActive) showQuestion(); }, isCorrect ? 600 : 1200);
    }

    const timerInterval = setInterval(() => {
        if (!gameActive) return;
        timeLeft--;
        const el = document.getElementById('disp-timer');
        if (el) { el.innerText=timeLeft; if(timeLeft <=10) el.style.color='#ff4444'; }
        if (timeLeft <= 0) {
            gameActive = false;
            clearInterval(timerInterval);
            if (nextQuestionTimeout) clearTimeout(nextQuestionTimeout);
            setTimeout(() => endDispatcherGame(score, misses, speedBonus, baseReward), 400);
        }
    }, 1000);

    showQuestion();
}

function endDispatchGame(score, misses) {
    const reward = score * 10;
    balance += reward;
    
    const gameEl = document.getElementById('tech-inspection-game');
    if (gameEl) {
        gameEl.innerHTML = `
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                        text-align:center;background:#1e1e1e;padding:40px;border-radius:20px;
                        border:3px solid #ffd700;min-width:300px;">
                <h2 style="color:#ffd700;margin:0 0 20px;">🏁 СМЕНА ЗАВЕРШЕНА</h2>
                <p style="color:#ccc;">✅ Правильных: <b style="color:#00ffcc;">${score}</b></p>
                <p style="color:#ccc;">❌ Промахов: <b style="color:#ff4444;">${misses}</b></p>
                <p style="color:#ffd700;font-size:1.5rem;font-weight:bold;margin:20px 0;">+${reward} ₽</p>
                <button onclick="closeDispatchGame()" 
                    style="padding:12px 40px;background:#28a745;color:white;border:none;
                           border-radius:10px;font-size:1.1rem;cursor:pointer;font-weight:bold;">
                    ПРОДОЛЖИТЬ
                </button>
            </div>
        `;
    }
    updateUI();
}

// ==========================================
// 🚌 МИНИ-ИГРА: МАРШРУТ (x4 МЕНЬШЕ НАГРАДА)
// ==========================================
function startRouteGame() {
    closeAllMenus();
    document.getElementById('overlay').classList.add('active');
    
    const container = document.getElementById('game-container');
    
    const gameEl = document.createElement('div');
    gameEl.id = 'route-game';
    gameEl.className = 'active';
    gameEl.innerHTML = `
        <!-- Шапка с инфо -->
        <div class="route-header">
            <div class="rh-item">
                <div class="rh-label">Маршрут</div>
                <div class="rh-val" id="rg-route">№12</div>
            </div>
            <div class="rh-item">
                <div class="rh-label">Очки</div>
                <div class="rh-val" id="rg-score">0</div>
            </div>
            <div class="rh-item">
                <div class="rh-label">Жизни</div>
                <div class="rh-val" id="rg-lives">❤️❤️❤️</div>
            </div>
            <button onclick="closeRouteGame()" 
                style="background:none;border:1px solid #555;color:#fff;
                       border-radius:6px;padding:4px 10px;cursor:pointer;">✕</button>
        </div>
        
        <!-- Трасса -->
        <div class="route-track-wrapper">
            <div class="route-track" id="rg-track">
                <div class="route-road"></div>
                <div class="route-road-line"></div>
                <div class="route-bus" id="rg-bus" style="top: 10%">🚌</div>
            </div>
        </div>
        
        <!-- Большая кнопка СТОП -->
        <button class="route-stop-btn" id="rg-stop-btn" onclick="pressStop()">
            🛑 СТОП
        </button>
    `;
    container.appendChild(gameEl);
    
    // Инициализация переменных
    routeGameActive = true;
    routeBusPos = 10;
    routeStopZones = [];
    routeScore = 0;
    routeLives = 3;
    
    // Генерируем первую остановку
    spawnStop(70);
    
    // Запускаем цикл игры
    startRouteGameLoop();
}
function startRouteGameLoop() {
    const busEl = document.getElementById('rg-bus');
    
    routeGameLoop = setInterval(() => {
        if (!routeGameActive) return;
        
        routeBusPos += 0.4;
        if (routeBusPos > 100) {
            routeBusPos = -10;
            spawnStop(10 + Math.random() * 30);
        }
        if (busEl) busEl.style.top = routeBusPos + '%';
    }, 16);
}
function spawnStop(posPercent) {
    const track = document.getElementById('rg-track');
    if (!track) return;
    
    const stop = document.createElement('div');
    stop.className = 'route-stop';
    stop.style.top = posPercent + '%';
    stop.dataset.pos = posPercent;
    stop.textContent = getNextStopName();
    track.appendChild(stop);
    routeStopZones.push({ el: stop, pos: posPercent, width: 8 });
}
function spawnStop(posPercent) {
    const track = document.getElementById('rg-track');
    if (!track) return;
    
    const stop = document.createElement('div');
    stop.className = 'route-stop';
    stop.style.top = posPercent + '%';
    stop.dataset.pos = posPercent;
    stop.textContent = getNextStopName();
    track.appendChild(stop);
    routeStopZones.push({ el: stop, pos: posPercent, width: 8 });
}

function endRouteGame(passengers, baseReward, maxStreak) {
    const total = passengers * 10;
    const bonus = passengers >= 10 ? Math.floor(baseReward * 0.5) : 0;
    balance += total + bonus;
    
    miniGameStats.route.totalGames++;
    if (maxStreak > miniGameStats.route.bestStreak) miniGameStats.route.bestStreak = maxStreak;

    const gameArea = document.getElementById('minigame-area');
    if (gameArea) {
        if (gameArea._spaceHandler) document.removeEventListener('keydown', gameArea._spaceHandler);
        gameArea.innerHTML = `
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;background:#222;padding:40px;border-radius:20px;border:3px solid #ffd700;min-width:360px;max-width:90vw;">
                <h2 style="color:#ffd700;font-size:2rem;margin:0 0 20px;">🏁 ${t.routeFinished}</h2>
                <p style="color:#ccc;font-size:1.1rem;margin:10px 0;">👥 ${t.routeTransported}: <span style="color:#00ffcc;font-weight:bold;">${passengers}</span> ${t.routeDostPass}</p>
                <p style="color:#ff9800;font-size:1rem;margin:8px 0;">⚡ ${t.routeBestCombo}: <span style="font-weight:bold;">${maxStreak}</span></p>
                <p style="color:#ffd700;font-size:0.95rem;margin:8px 0;">🏆 ${t.routeRecord}: <span style="font-weight:bold;">${miniGameStats.route.bestStreak}</span></p>
                <div style="background:#333;padding:20px;border-radius:10px;margin:20px 0;">
				<p style="color:#aaa;margin:5px 0;">💰 ${t.routeMoneyForPass}: ${formatMoney(total)} ₽</p>
                    ${bonus > 0 ? `<p style="color:#4caf50;margin:5px 0;">🎁 ${t.routeBonus}: +${formatMoney(bonus)} ₽</p>` : ''}
				<p style="color:#ffd700;font-size:1.4rem;font-weight:bold;margin:14px 0 0;padding-top:14px;border-top:2px solid #555;">${t.mgTotal}: +${formatMoney(total+bonus)} ₽</p>
                </div>
                <button onclick="closeMinigame()" style="padding:14px 0;width:100%;background:#28a745;color:white;border:none;border-radius:10px;font-size:1.1rem;font-weight:bold;cursor:pointer;">${t.continueBtn}</button>
            </div>
        `;
    }
    updateUI();
    saveProgress();
}

function closeMinigame() {
    // 1. Убираем элементы мини-игры с экрана (твой оригинальный код)
    const gameArea = document.getElementById('minigame-area');
    if (gameArea) {
        if (gameArea._spaceHandler) document.removeEventListener('keydown', gameArea._spaceHandler);
        gameArea.remove();
    }
    document.getElementById('overlay')?.classList.remove('active');

    // 2. Увеличиваем счетчик завершенных игр
    gamesPlayedSinceLastAd++;

    // 3. Проверяем, достигли ли мы цели для показа рекламы
    if (gamesPlayedSinceLastAd >= gamesTargetForNextAd) {
        
        // Вызываем функцию показа рекламы (убедись, что функция showInterstitialAd из прошлого ответа у тебя добавлена)
        showInterstitialAd(() => {
            // Этот блок сработает ТОЛЬКО после того, как игрок досмотрит и закроет рекламу
            gamesPlayedSinceLastAd = 0; // Обнуляем счетчик
            gamesTargetForNextAd = Math.floor(Math.random() * 4) + 2; // Генерируем новую цель (2, 3, 4 или 5)
        });
        
    }
}

// 🎛️ УПРАВЛЕНИЕ НАСТРОЙКАМИ
function openSettings() {
    closeAllMenus();
    document.getElementById('settings-window').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeSettings() {
    document.getElementById('settings-window').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// 🔄 ОРИЕНТАЦИЯ ЭКРАНА
function toggleOrientation() {
    if (!screen.orientation) {
        alert('Ваш браузер не поддерживает смену ориентации. Поверните устройство вручную.');
        return;
    }
    const current = screen.orientation.type;
    const target = current.includes('portrait') ? 'landscape' : 'portrait';
    
    screen.orientation.lock(target).then(() => {
        console.log(`[ORIENTATION] Locked to ${target}`);
    }).catch(err => {
        // Фолбэк: полноэкранный режим часто помогает с ориентацией
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
        alert(`Не удалось заблокировать ${target}. Попробуйте повернуть устройство.`);
    });
}

// 🗑️ СБРОС ПРОГРЕССА
function resetProgress() {
    if (confirm(i18n[currentLang].resetWarning)) {
        localStorage.removeItem('slobodost_save');
        localStorage.removeItem('slobodost_settings');
        location.reload();
    }
}
// --- 5. ЛОГИКА РЕКЛАМЫ (ПОЛНОЭКРАННАЯ) ---
function showInterstitialAd(onCloseCallback) {
    const bgMusic = document.getElementById('bg-music');
    let wasPlaying = bgMusic ? !bgMusic.paused : false;

    // 1. Улучшенная проверка: проверяем существование ysdk и наличие метода adv
    if (typeof ysdk !== 'undefined' && ysdk !== null && ysdk.adv) {
        
        // По правилам Яндекса перед рекламой нужно выключить звук
        if (bgMusic) bgMusic.pause();

        try {
            ysdk.adv.showFullscreenAdv({
                callbacks: {
                    onClose: function(wasShown) {
                        // Реклама закрылась — возвращаем звук и продолжаем игру
                        console.log("Реклама закрыта. Статус показа:", wasShown);
                        if (wasPlaying && bgMusic) bgMusic.play();
                        if (onCloseCallback) onCloseCallback();
                    },
                    onError: function(error) {
                        // Если ошибка (например, AdBlock), просто идем дальше
                        console.error("Ошибка при показе рекламы:", error);
                        if (wasPlaying && bgMusic) bgMusic.play();
                        if (onCloseCallback) onCloseCallback();
                    }
                }
            });
        } catch (e) {
            // Критическая ошибка вызова метода SDK
            console.error("Критическая ошибка вызова SDK:", e);
            if (wasPlaying && bgMusic) bgMusic.play();
            if (onCloseCallback) onCloseCallback();
        }
    } else {
        // 2. Если SDK не инициализирован (локальный запуск или сбой загрузки)
        console.warn("Yandex SDK не обнаружен. Пропуск рекламы.");
        if (onCloseCallback) onCloseCallback();
    }
}

function forceCloseMinigame() {
    const gameArea = document.getElementById('minigame-area');
    if (gameArea) {
        if (gameArea._spaceHandler) document.removeEventListener('keydown', gameArea._spaceHandler);
        gameArea.remove();
    }
    document.getElementById('overlay')?.classList.remove('active');
}
// Список ваших новых песен
const playlist = [
    "music/background_music.mp3",
    "music/background_music1.mp3",
    "music/background_music2.mp3",
    "music/background_music3.mp3",
    "music/background_music4.mp3"
];

let currentTrackIdx = 0;

function initMusic() {
    const audio = document.getElementById('bg-music');
    
    // 1. Выбираем рандомный трек при старте
    currentTrackIdx = Math.floor(Math.random() * playlist.length);
    audio.src = playlist[currentTrackIdx];
    
    // 2. Когда песня заканчивается — запускаем следующую тоже на рандом
    audio.onended = () => {
        nextTrack();
    };
}

function nextTrack() {
    const audio = document.getElementById('bg-music');
    
    // Выбираем новый индекс, который не совпадает с текущим
    let newIdx;
    do {
        newIdx = Math.floor(Math.random() * playlist.length);
    } while (newIdx === currentTrackIdx && playlist.length > 1);
    
    currentTrackIdx = newIdx;
    audio.src = playlist[currentTrackIdx];
    audio.play().catch(() => console.log("Нужен клик для запуска музыки"));
}
