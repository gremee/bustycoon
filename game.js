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
    const t = i18n[currentLang];
    
    // Удаляем старый модал, если он вдруг остался
    const oldModal = document.getElementById('welcome-back-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'welcome-back-modal';
    modal.className = 'welcome-overlay'; // Добавляем класс для управления из CSS
    
    modal.innerHTML = `
        <div class="welcome-content">
            <div class="welcome-emoji">🚌</div>
            <h2 class="welcome-title">${t.welcomeBack}</h2>
            <p class="welcome-desc">
                ${t.stations[li]} <span class="accent-text">${t.welcomeWaited}</span>
            </p>
            <div class="welcome-info-card">
                <p class="info-label">${t.welcomeCurrent}</p>
                <p class="info-bus-name">🚌 ${buses[currentBusIdx].name}</p>
                <p class="info-balance">
                    ${t.balanceLabel} <b class="accent-text">${formatMoney(balance)} ₽</b>
                </p>
            </div>
            <button onclick="document.getElementById('welcome-back-modal').remove()" class="welcome-start-btn">
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
    // ✅ УМЕНЬШЕНО В 4 РАЗА: было *120, стало *30
    const baseReward = getSecPower() * 30;
    const rewardPerTicket = Math.floor(baseReward / 15);

    const t = i18n[currentLang]; 
    const cities = t.cities; 
    const busTypesArr = t.types;

    function generateQuestion() {
        const d1 = Math.floor(Math.random() * 10);
        let d2 = Math.floor(Math.random() * 10);
        while (d2 === d1) d2 = Math.floor(Math.random() * 10);
        const d3 = Math.floor(Math.random() * 10);
        
        // Логика выбора типа (как у тебя в коде, но берем из массива словаря)
        let typeStr = "";
        if (d3 === 1 || d3 === 2) typeStr = busTypesArr[0]; // Пригородный
        else if (d3 >= 3 && d3 <= 5) typeStr = busTypesArr[1]; // Городской
        else if (d3 >= 6 && d3 <= 8) typeStr = busTypesArr[2]; // Межобластной
        else typeStr = busTypesArr[3]; // Скоростной

        const correct = `${cities[d1]} → ${cities[d2]} (${typeStr})`;
        const wrongs = new Set();
        while (wrongs.size < 3) {
            const w1 = Math.floor(Math.random() * 10);
            let w2 = Math.floor(Math.random() * 10);
            while (w2 === w1) w2 = Math.floor(Math.random() * 10);
            const w3 = Math.floor(Math.random() * busTypesArr.length);
			const wrong = `${cities[w1]} → ${cities[w2]} (${busTypesArr[w3]})`;
            if (wrong !== correct) wrongs.add(wrong);
        }
        return { num: `${d1}${d2}${d3}`, correct, options: [correct, ...wrongs].sort(() => Math.random() - 0.5) };
    }

    let score = 0, misses = 0, timeLeft = 45, gameActive = true;
    let streak = 0, speedBonus = 0, currentQ = null, questionStartTime = 0;
    let nextQuestionTimeout = null;

    const gameArea = document.createElement('div');
    gameArea.id = 'minigame-area';
    gameArea.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:2000;overflow:hidden;';

    gameArea.innerHTML = `
		<button onclick="forceCloseMinigame()" style="position:absolute;top:15px;right:20px;background:none;border:none;color:white;font-size:2.5rem;cursor:pointer;z-index:9999;">×</button>
        <div style="display:flex;width:100%;height:100%;">
            <div style="width:200px;min-width:200px;height:100%;background:rgba(255,255,255,0.04);border-right:1px solid #333;padding:18px;overflow-y:auto;flex-shrink:0;">
                <p style="color:#ffd700;font-weight:bold;font-size:1rem;margin:0 0 14px;text-align:center;">📖 ${t.dispManual}</p>
                <p style="color:#aaa;font-size:0.75rem;margin:0 0 8px;text-transform:uppercase;">${t.dispFrom}</p>
                ${cities.map((v, k) => `<div style="display:flex;align-items:center;gap:8px;margin:4px 0;"><span style="background:#333;color:#ffd700;width:24px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.85rem;flex-shrink:0;">${k}</span><span style="color:#ddd;font-size:0.88rem;">${v}</span></div>`).join('')}
                <div style="border-top:1px solid #444;margin:14px 0;"></div>
                <p style="color:#aaa;font-size:0.75rem;margin:0 0 6px;text-transform:uppercase;">${t.dispType}</p>
				${[
					['1-2', '#4caf50', t.types[0]],
					['3-5', '#2196f3', t.types[1]],
					['6-8', '#ff9800', t.types[2]],
					['9-0', '#e91e63', t.types[3]]
				].map(([k, c, v]) => `
					<div style="display:flex;align-items:center;gap:8px;margin:4px 0;">
						<span style="background:#333;color:#ffd700;width:30px;height:24px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:0.75rem;flex-shrink:0;">${k}</span>
						<span style="color:${c};font-size:0.85rem;">${v}</span>
					</div>
`).join('')}
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;overflow-y:auto;">
                <div style="text-align:center;margin-bottom:18px;">
                    <h2 style="color:#ffd700;font-size:1.8rem;margin:0;">📋 ${t.mgDispName.toUpperCase()}</h2>
                    <p style="color:#888;font-size:0.85rem;margin:5px 0 0;">${t.mgDispDesc}</p>
                </div>
                <div style="display:flex;gap:14px;margin-bottom:18px;flex-wrap:wrap;justify-content:center;">
                    <div style="background:rgba(255,255,255,0.07);padding:8px 20px;border-radius:20px;text-align:center;min-width:75px;">
                        <div style="color:#aaa;font-size:0.7rem;">${t.dispScore}</div>
                        <div id="disp-score" style="color:#ffd700;font-size:1.4rem;font-weight:bold;">0</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.07);padding:8px 20px;border-radius:20px;text-align:center;min-width:75px;">
                        <div style="color:#aaa;font-size:0.7rem;">${t.dispTime}</div>
                        <div id="disp-timer" style="color:#ff9800;font-size:1.4rem;font-weight:bold;">${t.dispTime}</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.07);padding:8px 20px;border-radius:20px;text-align:center;min-width:75px;">
                        <div style="color:#aaa;font-size:0.7rem;">${t.dispMiss}</div>
                        <div id="disp-misses" style="color:#ff4444;font-size:1.4rem;font-weight:bold;">0/2</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.07);padding:8px 20px;border-radius:20px;text-align:center;min-width:75px;">
                        <div style="color:#aaa;font-size:0.7rem;">${t.dispCombo}</div>
                        <div id="disp-streak" style="color:#4caf50;font-size:1.4rem;font-weight:bold;">x1</div>
                    </div>
                    <div style="background:rgba(255,215,0,0.1);padding:8px 20px;border-radius:20px;text-align:center;min-width:90px;border:1px solid #ffd700;">
                        <div style="color:#ffd700;font-size:0.65rem;">${t.dispBest}</div>
                        <div style="color:#ffd700;font-size:1.2rem;font-weight:bold;">${miniGameStats.dispatcher.bestStreak}</div>
                    </div>
                </div>
                <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);border:2px solid #ffd700;border-radius:16px;padding:22px 40px;text-align:center;margin-bottom:18px;width:100%;max-width:420px;">
                    <div style="color:#aaa;font-size:0.78rem;letter-spacing:2px;margin-bottom:8px;">${t.mgRouteName} №</div>
                    <div id="disp-ticket" style="font-size:4rem;font-weight:bold;color:#ffd700;letter-spacing:14px;font-family:monospace;text-shadow:0 0 10px rgba(255,215,0,0.4);">---</div>
                </div>
                <div id="disp-options" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;max-width:560px;"></div>
                <div id="disp-feedback" style="height:30px;margin-top:14px;font-size:1rem;font-weight:bold;text-align:center;"></div>
                <div style="margin-top:16px;padding:12px 20px;background:rgba(76,175,80,0.1);border-radius:10px;border:1px solid #4caf50;text-align:center;">
                    <span style="color:#4caf50;font-weight:bold;">💰 ~${formatMoney(baseReward)} ₽ &nbsp;|&nbsp; ${t.dispHint}</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(gameArea);

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

function endDispatcherGame(score, misses, speedBonus, baseReward) {
	const t = i18n[currentLang];
    const baseTotal = score * Math.floor(baseReward / 15);
    const perfect = misses === 0 && score >= 8;
    const perfectBonus = perfect ? Math.floor(baseReward * 0.5) : 0;
    const finalReward = speedBonus + perfectBonus;
    balance += finalReward;
    
    miniGameStats.dispatcher.totalGames++;
    if (score > miniGameStats.dispatcher.bestStreak) miniGameStats.dispatcher.bestStreak = score;

    const gameArea = document.getElementById('minigame-area');
    if (gameArea) {
        gameArea.innerHTML = `
            <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;background:#1e1e1e;padding:40px;border-radius:20px;border:3px solid ${perfect?'#ffd700':'#4caf50'};min-width:340px;max-width:90vw;">
                <h2 style="color:${perfect?'#ffd700':'#4caf50'};font-size:2rem;margin:0 0 16px;">${score >= 8 ? '🏆' : '✅'} ${t.dispFinished}</h2>
                <div style="background:#2a2a2a;border-radius:12px;padding:20px;margin:16px 0;text-align:left;">
                    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #333;"><span style="color:#aaa;">${t.dispTotalRoutes}</span><span style="color:#00ffcc;font-weight:bold;">${score}</span></div>
                    <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #333;"><span style="color:#aaa;">${t.dispTotalCombo}</span><span style="color:#ffd700;font-weight:bold;">${miniGameStats.dispatcher.bestStreak}</span></div>
                    ${speedBonus > 0 ? `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #333;"><span style="color:#aaa;">${t.dispTotalReward}</span><span style="color:#ff9800;font-weight:bold;">+${formatMoney(speedBonus)} ₽</span></div>` : ''}
                    <div style="display:flex;justify-content:space-between;padding:10px 0 0;"><span style="color:#fff;font-weight:bold;">${t.dispTotalReward}:</span><span style="color:#ffd700;font-size:1.5rem;font-weight:bold;">+${formatMoney(baseTotal+finalReward)} ₽</span></div>
                </div>
                <button onclick="closeMinigame()" style="padding:14px 0;width:100%;background:#28a745;color:white;border:none;border-radius:10px;font-size:1.1rem;font-weight:bold;cursor:pointer;">${t.continueBtn}</button>
            </div>
        `;
    }
    updateUI();
    saveProgress();
}

// ==========================================
// 🚌 МИНИ-ИГРА: МАРШРУТ (x4 МЕНЬШЕ НАГРАДА)
// ==========================================
function startRouteGame() {
    const t = i18n[currentLang];
    closeAllMenus();
    document.getElementById('overlay').classList.add('active');
    
    const baseReward = getSecPower() * 22;
    const passengersPerStop = Math.max(1, Math.floor(getSecPower() / 8));

    const gameArea = document.createElement('div');
    gameArea.id = 'minigame-area';
    // Добавляем класс для скролла, если контент не влезет
    gameArea.innerHTML = `
        <button onclick="forceCloseMinigame()" style="position:fixed;top:10px;right:10px;background:#ff4444;border:none;color:white;font-size:1.5rem;width:40px;height:40px;border-radius:5px;cursor:pointer;z-index:10001;">×</button>
        
        <div class="route-header-compact" style="position:relative; width:90%; margin: 10px auto; text-align:center; background:rgba(0,0,0,0.82); padding:10px; border-radius:15px; border:2px solid #ffd700;">
            <h2 style="color:#ffd700; font-size:1.2rem; margin:0;">${t.mgRouteName}№42</h2>
            <div style="display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
                <p style="color:#00ffcc; font-size:0.9rem; margin:5px 0;">👥 <span id="passengers">0</span></p>
                <p style="color:#ff4444; font-size:0.9rem; margin:5px 0;">❌ <span id="missed">0</span>/2</p>
                <p style="color:#ff9800; font-size:0.9rem; margin:5px 0;">⚡ <span id="speed-display">1.0</span>x</p>
            </div>
        </div>

        <div id="route-road" style="position:relative; width:90%; height:80px; background:linear-gradient(to bottom,#555,#333); margin: 20px auto; border-radius:10px; overflow:hidden; border:3px solid #666;">
            <div style="position:absolute; bottom:5px; width:100%; height:2px; background:repeating-linear-gradient(90deg,#fff 0,#fff 20px,transparent 20px,transparent 40px);"></div>
            <div id="route-bus" style="position:absolute; left:0; bottom:10px; font-size:3rem; transition: left 0.05s linear;">🚌</div>
            <div style="position:absolute; right:15%; bottom:0; font-size:2rem;">🚏</div>
        </div>

        <div style="text-align:center; padding-bottom: 20px;">
            <button id="stop-btn" style="padding:15px 50px; font-size:1.2rem; background:linear-gradient(135deg,#ff9800,#f57c00); color:white; border:none; border-radius:10px; font-weight:bold; cursor:pointer;">${t.routeStopBtn} 🛑</button>
        </div>
    `;

    gameArea.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:2000;';
    document.body.appendChild(gameArea);

    let busPos = 0, passengers = 0, missed = 0, gameActive = true;
    let speedMultiplier = 1.0;
    const stopPosition = 75; 

    const moveInterval = setInterval(() => {
        if (!gameActive) return;
        
        busPos += 1.5 * speedMultiplier;
        const busEl = document.getElementById('route-bus');
        if (busEl) busEl.style.left = busPos + '%';

        // ТЕЛЕПОРТАЦИЯ ОБРАТНО, если проехал мимо
        if (busPos > 105) {
            busPos = 0; // ТЕПАЕМ В НАЧАЛО
            missed++;
            document.getElementById('missed').innerText = missed;
            if (missed >= 2) {
                gameActive = false;
                clearInterval(moveInterval);
                setTimeout(() => endRouteGame(passengers, baseReward), 300);
            }
        }
    }, 50);

    function attemptStop() {
        if (!gameActive) return;
        // Зона остановки (примерно от 65% до 85% дороги)
        if (busPos > 65 && busPos < 85) {
            passengers += passengersPerStop;
            document.getElementById('passengers').innerText = passengers;
            busPos = 0; // ТЕПАЕМ В НАЧАЛО ПОСЛЕ УСПЕХА
            speedMultiplier += 0.1;
            document.getElementById('speed-display').innerText = speedMultiplier.toFixed(1);
        } else {
            // Ошибка клика — тоже тепаем назад, чтобы не ждать
            busPos = 0;
            missed++;
            document.getElementById('missed').innerText = missed;
            if (missed >= 2) {
                gameActive = false;
                clearInterval(moveInterval);
                endRouteGame(passengers, baseReward);
            }
        }
    }

    document.getElementById('stop-btn').onclick = attemptStop;
}

function endRouteGame(passengers, baseReward) {
    const t = i18n[currentLang];
    const total = passengers * 10;
    const bonus = passengers >= 10 ? Math.floor(baseReward * 0.5) : 0;
    balance += (total + bonus);
    
    const gameArea = document.getElementById('minigame-area');
    if (gameArea) {
        // Очищаем всё и вставляем карточку с результатами
        gameArea.innerHTML = `
            <div class="game-results-card" style="background:#222; padding:30px; border-radius:20px; border:3px solid #ffd700; width:90%; max-width:400px; text-align:center; margin: 20px auto;">
                <h2 style="color:#ffd700; margin:0 0 15px;">🏁 ${t.routeFinished}</h2>
                <div style="background:#333; padding:15px; border-radius:10px; margin-bottom:20px; text-align:left; font-size:0.9rem;">
                    <p>👥 ${t.routeTransported}: <span style="color:#00ffcc;">${passengers}</span></p>
                    <p>💰 ${t.routeMoneyForPass}: ${total} ₽</p>
                    ${bonus > 0 ? `<p style="color:#4caf50;">🎁 ${t.routeBonus}: +${bonus} ₽</p>` : ''}
                    <hr style="border:0; border-top:1px solid #555;">
                    <p style="font-size:1.2rem; color:#ffd700; text-align:center;">${t.mgTotal}: ${total + bonus} ₽</p>
                </div>
                <button onclick="closeMinigame()" style="width:100%; padding:15px; background:#28a745; color:white; border:none; border-radius:10px; font-weight:bold; font-size:1.1rem; cursor:pointer;">
                    ${t.continueBtn}
                </button>
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
