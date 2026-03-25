// Make default data available locally to avoid CORS fetch issues on file:// protocol
const defaultSongData = {
  "songs": [
    {
      "id": "naatu-naatu-telugu",
      "title": "Naatu Naatu",
      "artist": "Rahul Sipligunj, Kaala Bhairava",
      "language": "Telugu",
      "year": 2021,
      "youtube_link": "https://www.youtube.com/embed/OsU0CGWaLXw",
      "audio_link": "https://open.spotify.com/embed/track/1I9l5F9oK8iG37v1S0yW0L",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BMmMwNjk1MjEtNDViOC00YTliLTlmOTAtNjFhMjBkNDVlZGMxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "Polamgattu dummu loppi potla gittha dukinattu",
        "Eerukammalona siru satta esinattu"
      ],
      "meaning": "Naatu Naatu is a high-energy, Oscar-winning Telugu song from the movie RRR. The song celebrates raw, rustic, and energetic dance, comparing it to various vibrant, earthy elements.",
      "translation": "Like a fighting bull jumping in the dust of the fields...\nLike putting on a shirt made of thorns...",
      "highlights": [
        "Won the Academy Award for Best Original Song",
        "Famous for the incredibly fast, synchronized hook step"
      ],
      "full_lyrics": "Polamgattu dummu loppi potla gittha dukinattu\nEerukamm lona siru satta esinattu\nYerrapaccha cheeralona erragundlamuchatlu\nErrakoka kattukunna yerragandla sandallu\n\nNaatu Naatu Naatu Naatu Naatu Naatu Veera Naatu\nNaatu Naatu Naatu Naatu Naatu Naatu Oora Naatu\nNaatu Naatu Naatu Naatu Naatu Naatu Pachi Naatu\n\nMatti kottu yennalaina magadheera naatu",
      "created_date": "2026-03-24",
      "is_new": true,
      "trending": true
    },
    {
      "id": "chaleya-hindi",
      "title": "Chaleya",
      "artist": "Arijit Singh, Shilpa Rao",
      "language": "Hindi",
      "year": 2023,
      "youtube_link": "https://www.youtube.com/embed/VAdGW7QDJiU",
      "audio_link": "https://open.spotify.com/embed/track/1Pt3ST969Fp2S39p977Y9s",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BZDU0MWI5ODQtY2Y4OC00YzE4LThhYzctMDUxNTE5N2I0N2RhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "Ishq mein dil bana hai",
        "Ishq mein dil fanaa hai"
      ],
      "meaning": "Chaleya is a beautiful romantic track from Jawan. It describes the feeling of being uncontrollably drawn towards the beloved.",
      "translation": "In love, the heart is made.\nIn love, the heart is surrendered.",
      "highlights": [
        "Composed by Anirudh Ravichander",
        "Features Shah Rukh Khan and Nayanthara"
      ],
      "full_lyrics": "Ishq mein dil bana hai\nIshq mein dil fanaa hai\nHo gaya hai mujhko to ye kya\n\nTu zaroori sa hai mujhko zinda rehne ke liye\nHo gaya hai mujhko to ye kya\n\nChaleya teri ore tera chalea\nChaleya teri ore tera chalea",
      "created_date": "2026-03-20",
      "is_new": false,
      "trending": true
    },
    {
      "id": "leo-badass-tamil",
      "title": "Badass",
      "artist": "Anirudh Ravichander",
      "language": "Tamil",
      "year": 2023,
      "youtube_link": "https://www.youtube.com/embed/IktZNVqO1EY",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BN2ZkYjZkNTktNmE0MS00N2UwLTg0ZTYtZjg4YmE0ZDhiYmI1XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "He is a freaking badass",
        "Avan peyare kettale adhirum paaru"
      ],
      "meaning": "Badass is an electrifying track from Leo. It highlights the fierce, unstoppable nature of the protagonist.",
      "translation": "He is a freaking badass.\nJust hearing his name will make you tremble.",
      "highlights": [
        "Main character theme for Thalapathy Vijay"
      ],
      "full_lyrics": "Badass ma!\nHe is a freaking badass!\nAvan peyare kettale adhirum paaru\nAvanoda range verum level dhaan thozha\n\nKaatu payale, avana thatti kekka aal illa\nThuppaki edutha avan thotta ellam success dhaan!",
      "created_date": "2026-03-22",
      "is_new": true,
      "trending": true
    },
    {
      "id": "kgf-toofan-kannada",
      "title": "Toofan",
      "artist": "Santhosh Venky",
      "language": "Kannada",
      "year": 2022,
      "youtube_link": "https://www.youtube.com/embed/vAwqI1U6RTY",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BMGRjYjVjNDYtYmI0Ny00YmFjLWFhY2QtMmI3MWFlY2M1ZDU0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "Toofan.. Toofan.. Toofan ezhidhe"
      ],
      "meaning": "Toofan is a massively energetic song defining the arrival of Rocky Bhai. It hypes up his fierce persona that hits like a storm.",
      "translation": "The storm is rising.",
      "highlights": [
        "Theme song of KGF Chapter 2"
      ],
      "full_lyrics": "Bhaari Toofan Toofan Toofan ezhidhe\nRocky Bhai entridhaare, elru kaali madi\nGarjane suruvagidhe, jagavu bedharidhe\n\nRaktha kuthidhe, dushmana suthidhe\nKGF samrajya avanavandhe!",
      "created_date": "2026-03-24",
      "is_new": false,
      "trending": true
    },
    {
      "id": "illuminati-malayalam",
      "title": "Illuminati",
      "artist": "Dabzee",
      "language": "Malayalam",
      "year": 2024,
      "youtube_link": "https://www.youtube.com/embed/5UabwihB5y8",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BNmU4YTRiYTEtY2Y4MS00YjViLThjNDctYzg5Y2M0OWFhNjA0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "Kannadi koodukkullil..",
        "Ariyathe mayangiya"
      ],
      "meaning": "A chartbuster from Aavesham. It is an upbeat, stylistic gangster anthem.",
      "translation": "Inside the glass cage...\nUnknowingly mesmerized",
      "highlights": [
        "Produced by Sushin Shyam",
        "Went viral globally on Instagram reels"
      ],
      "full_lyrics": "Illuminati.. Illuminati..!\nKannadi koodukkullil ariyathe mayangiya\nNjan oru verum pottan aayirunnu\n\nIppo njan maaripoyi, palli urangipoyi\nLokam ente kaiyil aayi, Illuminati!",
      "created_date": "2026-03-24",
      "is_new": true,
      "trending": true
    },
    {
      "id": "ami-je-tomar-bengali",
      "title": "Ami Je Tomar",
      "artist": "Shreya Ghoshal",
      "language": "Bengali",
      "year": 2007,
      "youtube_link": "https://www.youtube.com/embed/g2Jik-B-43A",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BMjA4NzUyMjg2N15BMl5BanBnXkFtZTcwMDQ0NjY1MQ@@._V1_.jpg",
      "key_lyrics": [
        "Ami je tomar, shudhu je tomar",
        "Tumi keno bujho na"
      ],
      "meaning": "A classical masterpiece expressing Manjulika's eternal devotion and unrequited love.",
      "translation": "I am yours, only yours.\nWhy don't you understand?",
      "highlights": [
        "Famous dance sequence featuring Vidya Balan"
      ],
      "full_lyrics": "Mere dholna sun... mere pyaar ki dhun\nMere dholna sun...\n\nAmi je tomar... shudhu je tomar\nAmi je tomar...\nTumi keno bujho na... Tumi keno bujho na\nAmi je tomar shudhu je tomar!",
      "created_date": "2026-03-24",
      "is_new": false,
      "trending": false
    },
    {
      "id": "srivalli-telugu",
      "title": "Srivalli",
      "artist": "Javed Ali",
      "language": "Telugu",
      "year": 2021,
      "youtube_link": "https://www.youtube.com/embed/hcMzwMrr1tE",
      "thumbnail_url": "https://m.media-amazon.com/images/M/MV5BNTNhY2JlYjEtY2U4Ny00ZTViLTk1YzktNjY0YjllOWY1MTA2XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      "key_lyrics": [
        "Choope bangaram aayene Srivalli",
        "Navve navaratnam aayene"
      ],
      "meaning": "Srivalli is a massive hit from Pushpa: The Rise. It portrays the heavy-duty romantic devotion of the protagonist toward Srivalli.",
      "translation": "Your gaze turned into gold, Srivalli.\nYour smile turned into a diamond.",
      "highlights": [
        "Allu Arjun's iconic 'tilted shoulder' walk started here",
        "Topped charts globally"
      ],
      "full_lyrics": "Choope bangaram aayene Srivalli\nNavve navaratnam aayene..\n\nAithe pushing aithe pushing aithe pushing..\nThagedhe le!\n\nNaa gunde ni thaake ninu thaanane..\nPushpa Pushpa Pushpa!",
      "created_date": "2026-03-24",
      "is_new": false,
      "trending": true
    }
  ]
};

let songData = [];
let currentFilter = 'All';
let searchQuery = '';

// DOM Elements
const songGridContainer = document.getElementById('song-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const themeToggle = document.getElementById('theme-toggle');

/**
 * Initialization function
 */
function init() {
  loadData();
  initTheme();
  
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('LyricsVerseHub/')) {
    renderHome();
  } else if (window.location.pathname.includes('song.html')) {
    initSongPage();
  } else if (window.location.pathname.includes('admin_v2.html')) {
    setupAdminV2();
  }
  
  setupEventListeners();
}

/**
 * Data Management
 */
function loadData() {
  try {
    const savedData = localStorage.getItem('lyricsVerseSongs');
    if (savedData) {
      songData = JSON.parse(savedData);
      
      // Retroactive Migration Helper
      let fixOccurred = false;
      songData = songData.map(s => {
        // Fix YouTube Links to strictly use /embed/
        if (s.youtube_link && !s.youtube_link.includes('embed/')) {
          let ytId = '';
          const url = s.youtube_link;
          if (url.includes('watch?v=')) {
            ytId = url.split('watch?v=')[1].split('&')[0].split('?')[0];
          } else if (url.includes('youtu.be/')) {
            ytId = url.split('youtu.be/')[1].split('?')[0];
          } else {
            ytId = url.split('/').pop().split('?')[0];
          }
          if (ytId) {
            s.youtube_link = `https://www.youtube.com/embed/${ytId}`;
            fixOccurred = true;
          }
        }
        
        // Data Migration: thumbnail -> thumbnail_url
        if (s.thumbnail && !s.thumbnail_url) {
          s.thumbnail_url = s.thumbnail;
          delete s.thumbnail;
          fixOccurred = true;
        }

        // Backport audio_link if missing but present in default
        if (!s.audio_link) {
          const defaultRef = defaultSongData.songs.find(ds => ds.id === s.id);
          if (defaultRef && defaultRef.audio_link) {
            s.audio_link = defaultRef.audio_link;
            fixOccurred = true;
          }
        }
        return s;
      });
      if (fixOccurred) {
        localStorage.setItem('lyricsVerseSongs', JSON.stringify(songData));
      }
    } else {
      songData = defaultSongData.songs;
      localStorage.setItem('lyricsVerseSongs', JSON.stringify(songData));
    }
  } catch (error) {
    console.error("Error loading song data", error);
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function setupEventListeners() {
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchQuery = searchInput.value.toLowerCase();
      renderSongs();
    });
    
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        searchQuery = searchInput.value.toLowerCase();
        renderSongs();
      }
    });
  }
}

function renderHome() {
  if (!songGridContainer) return;

  const categoriesContainer = document.querySelector('.categories');
  if (categoriesContainer) {
    const uniqueLangs = [...new Set(songData.map(s => s.language))];
    let pillsHTML = `<button class="category-pill ${currentFilter === 'All' ? 'active' : ''}" data-lang="All">All</button>`;
    
    uniqueLangs.forEach(lang => {
      pillsHTML += `<button class="category-pill ${currentFilter === lang ? 'active' : ''}" data-lang="${lang}">${lang}</button>`;
    });
    
    categoriesContainer.innerHTML = pillsHTML;
    
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.getAttribute('data-lang');
        renderSongs();
      });
    });
  }

  renderSongs();
}

/**
 * Rendering Logic
 */
function renderSongs() {
  if (!songGridContainer) return;
  let filtered = songData;
  if (currentFilter !== 'All') {
    filtered = filtered.filter(song => song.language === currentFilter);
  }
  if (searchQuery) {
    filtered = filtered.filter(song => 
      song.title.toLowerCase().includes(searchQuery) || 
      song.artist.toLowerCase().includes(searchQuery)
    );
  }
  filtered.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));

  if (filtered.length === 0) {
    songGridContainer.innerHTML = '<p style="text-align:center; width:100%; grid-column: 1 / -1; color:var(--text-muted)">No songs found. Try a different search.</p>';
    return;
  }
  songGridContainer.innerHTML = filtered.map((song, index) => buildSongCard(song, index)).join('');
}

function buildSongCard(song, index) {
  const url = `song.html?id=${song.id}`;
  const animDelay = (index * 0.1) + 's';
  const ytId = getYTId(song.youtube_link);
  
  return `
    <a href="${url}" class="song-card animate" style="animation-delay: ${animDelay}; opacity: 0;">
      ${song.is_new ? '<span class="badge badge-new">New</span>' : ''}
      <div class="thumbnail-wrapper">
        <img src="${song.thumbnail_url || `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`}" 
             alt="${song.title} Thumbnail" 
             class="song-thumb" 
             loading="lazy"
             onerror="handleThumbError(this, '${ytId}')">
      </div>
      <div class="song-info">
        <h3 class="song-title">${song.title}</h3>
        <p class="song-artist">${song.artist}</p>
        <div class="song-meta">
          <span class="badge badge-lang">${song.language}</span>
          <span style="font-weight:600; color:var(--text-main); font-size:0.85rem">${song.year || ''}</span>
        </div>
      </div>
    </a>
  `;
}

function initSongPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  if (!id) {
    window.location.href = 'index.html';
    return;
  }

  const song = songData.find(s => s.id === id);
  if (!song) {
    const details = document.getElementById('song-details');
    if(details) details.innerHTML = '<h2>Song Not Found</h2><a href="index.html" class="btn">Return Home</a>';
    return;
  }

  document.title = `${song.title} Lyrics Meaning - ${song.artist} | LyricsVerseHub`;
  
  const videoFrame = document.getElementById('video-frame');
  if (videoFrame) {
    videoFrame.src = song.youtube_link;
  }

  const audioSection = document.getElementById('audio-section');
  const audioFrame = document.getElementById('audio-frame');
  const audioLabel = document.querySelector('#audio-section .audio-label span');
  if (audioSection && audioFrame) {
    if (song.audio_link) {
      audioSection.style.display = 'block';
      audioFrame.src = song.audio_link;
      if(audioLabel) audioLabel.textContent = 'Listen to Audio Version';
    } else if (song.youtube_link) {
      audioSection.style.display = 'block';
      audioFrame.src = song.youtube_link;
      if(audioLabel) audioLabel.textContent = 'Listen to Audio (YT Player)';
    } else {
      audioSection.style.display = 'none';
    }
  }

  document.getElementById('song-title').textContent = song.title;
  document.getElementById('song-artist').textContent = song.artist;
  document.getElementById('song-lang-badge').textContent = song.language;
  if(song.year) document.getElementById('song-year').textContent = song.year;
  
  if(song.is_new) document.getElementById('song-badge').style.display = 'inline-block';

  // Rendering sections
  const keyLyricsList = document.getElementById('key-lyrics-list');
  if (keyLyricsList && song.key_lyrics) {
    keyLyricsList.innerHTML = song.key_lyrics.map(l => `<li>${l}</li>`).join('');
  }

  const meaningEl = document.getElementById('song-meaning');
  if (meaningEl) meaningEl.textContent = song.meaning;

  const translationEl = document.getElementById('song-translation');
  if (translationEl) {
    translationEl.innerHTML = (song.translation || 'NA').split('\n').map(l => `<p>${l}</p>`).join('');
  }

  const highlightsList = document.getElementById('highlights-list');
  if (highlightsList && song.highlights) {
    highlightsList.innerHTML = song.highlights.map(h => `<li>${h}</li>`).join('');
  }

  const fullLyricsEl = document.getElementById('full-lyrics-text');
  if (fullLyricsEl) fullLyricsEl.textContent = song.full_lyrics || "Full lyrics not available for this track yet.";
}

/**
 * Admin Logic
 */
function setupAdminV2() {
  const authOverlay = document.getElementById('auth-overlay');
  const loginForm = document.getElementById('login-form');
  const loginEmail = document.getElementById('login-email');
  const authError = document.getElementById('auth-error');
  
  if (!sessionStorage.getItem('lyricsAdminAuth')) {
    authOverlay.style.display = 'flex';
  } else {
    authOverlay.style.display = 'none';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (loginEmail.value === 'admin@lyricsversehub.com') {
        sessionStorage.setItem('lyricsAdminAuth', 'true');
        authOverlay.style.display = 'none';
        authError.style.display = 'none';
      } else {
        authError.style.display = 'block';
      }
    });
  }

  // 3-Stage Cascading Logic
  const deleteBtn = document.getElementById('delete-btn');
  const langSelect = document.getElementById('edit_lang_select');
  const yearSelect = document.getElementById('edit_year_select');
  const songSelect = document.getElementById('edit_song_select');
  const adminV2Form = document.getElementById('admin-v2-form');

  window._refreshAdminDropdowns = function() {
    const langs = [...new Set(songData.map(s => s.language))].sort();
    langSelect.innerHTML = '<option value="">Select Language</option>' + langs.map(l => `<option value="${l}">${l}</option>`).join('');
    langSelect.value = '';
    yearSelect.innerHTML = '<option value="">Select Year</option>';
    songSelect.innerHTML = '<option value="">Select Song</option>';
    adminV2Form.reset();
    document.getElementById('admin_edit_id').value = '';
  };

  if(!langSelect) return;

  langSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    if (!selectedLang) {
      yearSelect.innerHTML = '<option value="">Select Year</option>';
      songSelect.innerHTML = '<option value="">Select Song</option>';
      return;
    }
    const years = [...new Set(songData.filter(s => s.language === selectedLang).map(s => s.year))].sort((a,b) => b-a);
    yearSelect.innerHTML = '<option value="">Select Year</option>' + years.map(y => `<option value="${y}">${y}</option>`).join('');
    songSelect.innerHTML = '<option value="">Select Song</option>';
  });

  yearSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    const selectedYear = parseInt(yearSelect.value);
    if (!selectedYear) {
      songSelect.innerHTML = '<option value="">Select Song</option>';
      return;
    }
    const songs = songData.filter(s => s.language === selectedLang && s.year === selectedYear).sort((a,b) => a.title.localeCompare(b.title));
    songSelect.innerHTML = '<option value="">Select Song</option>' + songs.map(s => `<option value="${s.id}">${s.title}</option>`).join('');
  });

  songSelect.addEventListener('change', () => {
    const editId = songSelect.value;
    if (!editId) {
      adminV2Form.reset();
      document.getElementById('admin_edit_id').value = '';
      return;
    }
    const song = songData.find(s => s.id === editId);
    if (song) {
      document.getElementById('admin_edit_id').value = song.id;
      document.getElementById('title').value = song.title;
      document.getElementById('artist').value = song.artist;
      document.getElementById('language').value = song.language;
      document.getElementById('year').value = song.year || '';
      document.getElementById('youtube_link').value = song.youtube_link;
      const audioInput = document.getElementById('audio_link');
      if(audioInput) audioInput.value = song.audio_link || '';
      const thumbInput = document.getElementById('thumbnail_url');
      if(thumbInput) thumbInput.value = song.thumbnail_url || '';
      document.getElementById('key_lyrics').value = song.key_lyrics ? song.key_lyrics.join('\n') : '';
      document.getElementById('meaning').value = song.meaning || '';
      document.getElementById('translation').value = song.translation === 'NA' ? '' : (song.translation || '');
      document.getElementById('highlights').value = song.highlights ? song.highlights.join('\n') : '';
      document.getElementById('full_lyrics').value = song.full_lyrics || '';
      document.getElementById('is_new').checked = !!song.is_new;
      document.getElementById('trending').checked = !!song.trending;
    }
  });

  deleteBtn.addEventListener('click', () => {
    const editId = document.getElementById('admin_edit_id').value;
    if (!editId) return;
    if (confirm(`Are you sure you want to delete "${document.getElementById('title').value}"?`)) {
      songData = songData.filter(s => s.id !== editId);
      localStorage.setItem('lyricsVerseSongs', JSON.stringify(songData));
      alert('Song deleted from Local Storage.');
      window._refreshAdminDropdowns();
    }
  });

  adminV2Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('admin_edit_id').value;
    
    // Collecting fields...
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const language = document.getElementById('language').value;
    const year = parseInt(document.getElementById('year').value);
    const youtube_link = document.getElementById('youtube_link').value;
    const audio_link = document.getElementById('audio_link') ? document.getElementById('audio_link').value : '';
    const thumbnail_url = document.getElementById('thumbnail_url') ? document.getElementById('thumbnail_url').value : '';
    const key_lyrics = document.getElementById('key_lyrics').value.split('\n').filter(l => l.trim() !== '');
    const meaning = document.getElementById('meaning').value;
    const translation = document.getElementById('translation').value || 'NA';
    const highlights = document.getElementById('highlights').value.split('\n').filter(h => h.trim() !== '');
    const full_lyrics = document.getElementById('full_lyrics').value || '';
    const is_new = document.getElementById('is_new').checked;
    const trending = document.getElementById('trending').checked;

    const formattedEmbed = youtube_link.includes('embed/') ? youtube_link : `https://www.youtube.com/embed/${getYTId(youtube_link)}`;
    const id = editId || `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${language.toLowerCase()}`;
    
    const newSong = {
      id, title, artist, language, year,
      youtube_link: formattedEmbed, thumbnail_url, audio_link,
      key_lyrics, meaning, translation, highlights, full_lyrics,
      created_date: new Date().toISOString().split('T')[0],
      is_new, trending
    };

    if (editId) {
      const idx = songData.findIndex(s => s.id === editId);
      if (idx !== -1) {
        newSong.created_date = songData[idx].created_date;
        songData[idx] = newSong;
      }
    } else {
      songData.unshift(newSong);
    }
    localStorage.setItem('lyricsVerseSongs', JSON.stringify(songData));
    alert(`Song successfully ${editId ? 'updated' : 'added'}!`);
    window._refreshAdminDropdowns();
  });

  window._refreshAdminDropdowns();

  const aiBtn = document.getElementById('ai-auto-gen');
  if (aiBtn) {
    aiBtn.addEventListener('click', () => {
      document.getElementById('key_lyrics').value = "Sample Lyric Line 1\nSample Lyric Line 2";
      document.getElementById('meaning').value = "This song explores themes of love and resilience...";
      document.getElementById('highlights').value = "Hit single of the year\nCritically acclaimed production";
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

function getYTId(url) {
  if (!url) return '';
  if (url.includes('embed/')) return url.split('embed/')[1].split('?')[0];
  if (url.includes('watch?v=')) return url.split('watch?v=')[1].split('&')[0];
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
  return url.split('/').pop().split('?')[0];
}

function handleThumbError(img, ytId) {
  if (!ytId) {
    img.src = 'https://via.placeholder.com/640x360?text=LyricsVerseHub+Music';
    return;
  }
  if (img.src.includes('maxresdefault')) {
    img.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  } else if (img.src.includes('hqdefault')) {
    img.src = `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
  } else {
    img.src = 'https://via.placeholder.com/640x360?text=LyricsVerseHub+Music';
  }
}
