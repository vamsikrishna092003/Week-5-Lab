import './components/app-header.js';
import './components/user-card.js';
import './components/character-info.js';
import './components/app-footer.js';

const app = document.getElementById('app');


const header = document.createElement('app-header');
header.setAttribute('title', 'Anime World');

const main = document.createElement('main');

const card1 = document.createElement('user-card');
card1.setAttribute('name', 'Naruto Uzumaki');
card1.setAttribute('role', 'Hokage');
card1.setAttribute('img-src', 'https://www.clipartmax.com/png/middle/261-2611551_naruto-clipart-chibi-naruto-uzumaki.png');

const card2 = document.createElement('user-card');
card2.setAttribute('name', 'Sakura Haruno');
card2.setAttribute('role', 'Medical Ninja');
card2.setAttribute('img-src', 'https://toppng.com/uploads/preview/naruto-sakura-11551063462evjlsiuewg.png');


const info = document.createElement('character-info');
info.setAttribute('title', 'About Naruto');
info.setAttribute('description', 'Naruto Uzumaki is a ninja from Konoha who dreams of becoming Hokage. Known for his determination and strong will.');

const sakuraInfo = document.createElement('character-info');
sakuraInfo.setAttribute('title', 'About Sakura');
sakuraInfo.setAttribute('description', 'Sakura Haruno is a skilled medical ninja from Konoha. Known for her intelligence, determination, and exceptional chakra control.');

const footer = document.createElement('app-footer');
footer.setAttribute('text', '© 2025 Anime World. All rights reserved.');


main.append(card1, card2, info, sakuraInfo);
app.append(header, main, footer);
