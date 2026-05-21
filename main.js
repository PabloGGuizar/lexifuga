import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'es';
  const translations = {
    es: {
      'title': 'LexífugaES',
      'subtitle': 'Centrífuga de Palabras en español',
      'input-hint': 'Entre 3 y 9 letras',
      'label-all': 'Por longitud',
      'label-anagram': 'Solo Anagramas',
      'label-slider': 'Longitud exacta:',
      'btn-lexifugar': 'Lexifugar',
      'results-title': 'Resultados',
      'placeholder': 'Escribe una palabra...',
      'letras': 'letras',
      'encontrada': 'encontrada',
      'encontradas': 'encontradas',
      'no-results': 'No se encontraron palabras.',
      'fun-fact': '🧠 Dato curioso: De <strong>{total}</strong> permutaciones posibles, solo <strong>{count}</strong> ({percent}%) forman palabras reales.',
      'help-title': '¿Cómo funciona Lexífuga?',
      'help-p1': 'Lexífuga encuentra todas las palabras reales que se pueden formar con las letras que escribas.',
      'help-li1': '<strong>Por longitud:</strong> Busca palabras usando cualquier subconjunto de tus letras (ej. con "ROCA" encuentra "OCA", "CARO", etc).',
      'help-li2': '<strong>Solo Anagramas:</strong> Busca palabras usando EXACTAMENTE todas las letras ingresadas (ej. con "ROCA" encuentra "CARO" y "ARCO").',
      'help-p2': 'También te mostramos un dato estadístico sobre cuántas permutaciones matemáticas posibles existen frente a las que realmente son palabras válidas.',
      'help-close': 'Entendido',
      'de': 'De',
      'a': 'a',
      'footer-text': '© 2026 Lexífuga — Desarrollado por <a href="https://www.linkedin.com/in/pablogguizar/" target="_blank" rel="noopener noreferrer">Pablo G. Guízar</a>. Código abierto bajo licencia MIT disponible en <a href="https://github.com/PabloGGuizar/lexifuga" target="_blank" rel="noopener noreferrer">GitHub</a>.'
    },
    ca: {
      'title': 'LexífugaCAT',
      'subtitle': 'Centrífuga de Paraules en català',
      'input-hint': 'Entre 3 i 9 lletres',
      'label-all': 'Per longitud',
      'label-anagram': 'Només Anagrames',
      'label-slider': 'Longitud exacta:',
      'btn-lexifugar': 'Lexifugar',
      'results-title': 'Resultats',
      'placeholder': 'Escriu una paraula...',
      'letras': 'lletres',
      'encontrada': 'trobada',
      'encontradas': 'trobades',
      'no-results': 'No s\'han trobat paraules.',
      'fun-fact': '🧠 Dada curiosa: De <strong>{total}</strong> permutacions possibles, només <strong>{count}</strong> ({percent}%) formen paraules reals.',
      'help-title': 'Com funciona Lexífuga?',
      'help-p1': 'Lexífuga troba totes les paraules reals que es poden formar amb les lletres que escriguis.',
      'help-li1': '<strong>Per longitud:</strong> Busca paraules utilitzant qualsevol subconjunt de les teves lletres (ex. amb "ROCA" troba "OCA", "CARO", etc).',
      'help-li2': '<strong>Només Anagrames:</strong> Busca paraules utilitzant EXACTAMENT totes les lletres ingressades (ex. amb "ROCA" troba "CARO" i "ARCO").',
      'help-p2': 'També et mostrem una dada estadística sobre quantes permutacions matemàtiques possibles existeixen enfront de les que realment són paraules vàlides.',
      'help-close': 'Entès',
      'de': 'De',
      'a': 'a',
      'footer-text': '© 2026 Lexífuga — Desenvolupat per <a href="https://www.linkedin.com/in/pablogguizar/" target="_blank" rel="noopener noreferrer">Pablo G. Guízar</a>. Codi obert sota llicència MIT disponible a <a href="https://github.com/PabloGGuizar/lexifuga" target="_blank" rel="noopener noreferrer">GitHub</a>.'
    }
  };

  const wordInput = document.getElementById('word-input');
  const spinBtn = document.getElementById('spin-btn');
  const sliderMin = document.getElementById('length-slider-min');
  const sliderMax = document.getElementById('length-slider-max');
  const sliderTrack = document.getElementById('slider-track');
  const lengthDisplay = document.getElementById('length-display');
  const sliderMaxLabel = document.getElementById('slider-max-label');
  
  const anagramToggle = document.getElementById('anagram-toggle');
  const labelAll = document.getElementById('label-all');
  const labelAnagram = document.getElementById('label-anagram');
  
  const centrifugeContainer = document.getElementById('centrifuge-container');
  const centrifugeLetters = document.getElementById('centrifuge-letters');
  
  const resultsContainer = document.getElementById('results-container');
  const resultsContent = document.getElementById('results-content');
  const resultsCount = document.getElementById('results-count');
  
  const langEsBtn = document.getElementById('lang-es');
  const langCaBtn = document.getElementById('lang-ca');
  
  const themeToggle = document.getElementById('theme-toggle');
  const helpBtn = document.getElementById('help-btn');
  const helpModal = document.getElementById('help-modal');
  const closeHelpBtn = document.getElementById('close-help');

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  // Theme Toggle
  let isDarkMode = localStorage.getItem('theme') !== 'light';
  function updateTheme() {
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
      themeToggle.innerHTML = sunIcon;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.innerHTML = moonIcon;
    }
  }
  updateTheme(); // Init
  
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateTheme();
  });

  // Help Modal
  helpBtn.addEventListener('click', () => {
    helpModal.classList.remove('hidden');
  });
  
  closeHelpBtn.addEventListener('click', () => {
    helpModal.classList.add('hidden');
  });
  
  // Close on outside click
  helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) {
      helpModal.classList.add('hidden');
    }
  });
  
  function updateLanguage(lang) {
    currentLang = lang;
    
    if (lang === 'es') {
      langEsBtn.classList.add('active');
      langCaBtn.classList.remove('active');
    } else {
      langCaBtn.classList.add('active');
      langEsBtn.classList.remove('active');
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
    });
    
    updateSliderDisplay();
    
    // Clear results if any, since it's easier than re-translating the DOM
    if (!resultsContainer.classList.contains('hidden')) {
      resultsContainer.classList.add('hidden');
      resultsContent.innerHTML = '';
      spinBtn.disabled = wordInput.value.length < 3;
    }
  }

  langEsBtn.addEventListener('click', () => updateLanguage('es'));
  langCaBtn.addEventListener('click', () => updateLanguage('ca'));

  // Initialize Web Worker
  const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
  
  // Input Validation
  wordInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^a-zA-ZñÑçÇáéíóúÁÉÍÓÚüÜàèïòÀÈÏÒ·]/g, '');
    e.target.value = value;
    
    if (value.length >= 3 && value.length <= 9) {
      spinBtn.disabled = false;
      sliderMin.max = value.length;
      sliderMax.max = value.length;
      sliderMaxLabel.textContent = value.length;
      
      if (anagramToggle.checked) {
        sliderMin.disabled = true;
        sliderMax.disabled = true;
        sliderMin.value = value.length;
        sliderMax.value = value.length;
      } else {
        sliderMin.disabled = false;
        sliderMax.disabled = false;
        if (parseInt(sliderMin.value) > value.length) sliderMin.value = value.length;
        // Always expand the max slider to the new word length to avoid it getting stuck
        sliderMax.value = value.length;
      }
      updateSliderDisplay();
    } else {
      spinBtn.disabled = true;
      sliderMin.disabled = true;
      sliderMax.disabled = true;
      sliderMin.value = 3;
      sliderMax.value = 9;
      sliderMin.max = 9;
      sliderMax.max = 9;
      sliderMaxLabel.textContent = '9';
      updateSliderDisplay();
    }
  });

  function updateSliderDisplay() {
    const minVal = parseInt(sliderMin.value);
    const maxVal = parseInt(sliderMax.value);
    const textLetras = translations[currentLang]['letras'];
    
    lengthDisplay.textContent = `${minVal}/${maxVal} ${textLetras}`;
    
    const min = parseInt(sliderMin.min);
    const max = parseInt(sliderMin.max);
    
    if (max > min) {
      const leftPercent = ((minVal - min) / (max - min)) * 100;
      const rightPercent = ((maxVal - min) / (max - min)) * 100;
      sliderTrack.style.left = `${leftPercent}%`;
      sliderTrack.style.width = `${rightPercent - leftPercent}%`;
    } else {
      sliderTrack.style.left = '0%';
      sliderTrack.style.width = '100%';
    }
  }
  
  sliderMin.addEventListener('input', (e) => {
    if (parseInt(sliderMin.value) > parseInt(sliderMax.value)) {
      sliderMin.value = sliderMax.value;
    }
    updateSliderDisplay();
  });

  sliderMax.addEventListener('input', (e) => {
    if (parseInt(sliderMax.value) < parseInt(sliderMin.value)) {
      sliderMax.value = sliderMin.value;
    }
    updateSliderDisplay();
  });

  // Toggle visual update
  anagramToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      labelAll.classList.remove('active');
      labelAnagram.classList.add('active');
      sliderMin.disabled = true;
      sliderMax.disabled = true;
      const wordLen = wordInput.value.trim().length;
      if (wordLen >= 3) {
        sliderMin.value = wordLen;
        sliderMax.value = wordLen;
      }
      updateSliderDisplay();
    } else {
      labelAll.classList.add('active');
      labelAnagram.classList.remove('active');
      const wordLen = wordInput.value.trim().length;
      if (wordLen >= 3 && wordLen <= 9) {
        sliderMin.disabled = false;
        sliderMax.disabled = false;
        if (parseInt(sliderMin.value) === wordLen && parseInt(sliderMax.value) === wordLen) {
          sliderMin.value = 3;
        }
      }
      updateSliderDisplay();
    }
  });
  
  // Initialize toggle state
  labelAll.classList.add('active');

  // Handle Centrifuge action
  spinBtn.addEventListener('click', () => {
    const word = wordInput.value.trim();
    if (word.length < 3 || word.length > 9) return;
    
    // UI Updates
    spinBtn.disabled = true;
    wordInput.disabled = true;
    anagramToggle.disabled = true;
    sliderMin.disabled = true;
    sliderMax.disabled = true;
    resultsContainer.classList.add('hidden');
    resultsContent.innerHTML = '';
    
    // Start Animation
    centrifugeContainer.classList.add('active');
    centrifugeContainer.classList.add('spinning');
    
    // Create animated letters
    centrifugeLetters.innerHTML = '';
    const letters = word.split('');
    const angleStep = 360 / letters.length;
    
    letters.forEach((char, index) => {
      const el = document.createElement('div');
      el.className = 'c-letter';
      el.textContent = char;
      
      const speed = 0.5 + Math.random() * 0.5; // 0.5s to 1s
      const initialDelay = Math.random() * 0.5;
      const angle = index * angleStep;
      
      el.style.setProperty('--speed', `${speed}s`);
      el.style.animationDelay = `-${initialDelay}s`;
      
      // The CSS animation will handle the orbiting, but we set an initial transform
      // to space them out evenly before they start spinning fast.
      el.style.transform = `rotate(${angle}deg) translateX(70px) rotate(-${angle}deg)`;
      
      centrifugeLetters.appendChild(el);
    });

    // Send to worker
    worker.postMessage({
      word,
      minLength: anagramToggle.checked ? word.length : parseInt(sliderMin.value),
      maxLength: anagramToggle.checked ? word.length : parseInt(sliderMax.value),
      lang: currentLang
    });
  });

  // Handle Worker response
  worker.onmessage = (e) => {
    const { results, totalPermutations } = e.data;
    
    // Add artificial delay to show off the beautiful animation (e.g., 2 seconds)
    setTimeout(() => {
      // Stop animation
      centrifugeContainer.classList.remove('active');
      centrifugeContainer.classList.remove('spinning');
      centrifugeLetters.innerHTML = '';
      
      // Restore UI
      spinBtn.disabled = false;
      wordInput.disabled = false;
      anagramToggle.disabled = false;
      if (!anagramToggle.checked) {
        sliderMin.disabled = false;
        sliderMax.disabled = false;
      }
      
      // Render results
      renderResults(results, totalPermutations);
    }, 2000);
  };
  
  function renderResults(results, totalPermutations) {
    const countStr = results.length === 1 ? translations[currentLang]['encontrada'] : translations[currentLang]['encontradas'];
    resultsCount.textContent = `${results.length} ${countStr}`;
    resultsContainer.classList.remove('hidden');
    
    if (results.length === 0) {
      resultsContent.innerHTML = `<p style="text-align:center; color: var(--text-muted)">${translations[currentLang]['no-results']}</p>`;
      return;
    }
    
    // Group by length
    const groups = {};
    results.forEach(word => {
      if (!groups[word.length]) groups[word.length] = [];
      groups[word.length].push(word);
    });
    
    // Render groups
    const lengths = Object.keys(groups).map(Number).sort((a, b) => b - a);
    
    let html = '';
    
    if (totalPermutations > 0) {
      const percent = ((results.length / totalPermutations) * 100).toFixed(2);
      let factStr = translations[currentLang]['fun-fact']
        .replace('{total}', totalPermutations.toLocaleString())
        .replace('{count}', results.length)
        .replace('{percent}', percent);
        
      html += `
        <div class="fun-fact" style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; text-align: center; color: var(--text-main); font-size: 0.95rem; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);">
          ${factStr}
        </div>
      `;
    }
    
    lengths.forEach(len => {
      html += `
        <div class="length-group">
          <h3>${len} ${translations[currentLang]['letras']} <span style="font-size: 0.8rem; opacity: 0.6;">(${groups[len].length})</span></h3>
          <div class="word-list">
            ${groups[len].map(w => `<div class="word-tag">${w}</div>`).join('')}
          </div>
        </div>
      `;
    });
    
    resultsContent.innerHTML = html;
  }
});
