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
      "full_lyrics": "Polamgattu dummu loppi potla gittha dukinattu\nEerukammalona siru satta esinattu\nYerrapaccha cheeralona erragundlamuchatlu\nErrakoka kattukunna yerragandla sandallu\n\nNaatu Naatu Naatu Naatu Naatu Naatu Veera Naatu\nNaatu Naatu Naatu Naatu Naatu Naatu Oora Naatu\nNaatu Naatu Naatu Naatu Naatu Naatu Pachi Naatu\n\nMatti kottu yennalaina magadheera naatu",
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
       "thumbnail": "https://img.youtube.com/vi/vAwqI1U6RTY/maxresdefault.jpg",
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
       "thumbnail": "https://img.youtube.com/vi/5UabwihB5y8/maxresdefault.jpg",
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
       "thumbnail": "https://img.youtube.com/vi/g2Jik-B-43A/maxresdefault.jpg",
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
       "thumbnail": "https://img.youtube.com/vi/hcMzwMrr1tE/maxresdefault.jpg",
       "key_lyrics": [
         "Choope bangaram aayene Srivalli",
         "Navve navaratnam aayene"
       ],
       "meaning": "A sweet confession of rough, unfiltered love from Pushpa, expressing that Srivalli's glance is worth more than worldly riches.",
       "translation": "Your glance became gold, Srivalli.\nYour smile became a precious gem.",
       "highlights": [
         "Famous hook step performed by Allu Arjun"
       ],
       "full_lyrics": "Choope bangaram aayene Srivalli\nNavve navaratnam aayene\nEhe, kannullo neelalu kanniya\nOohallona theli aadene\n\nSrivalli... naa praanam srivalli\nNeethone naa jeevitham srivalli!",
       "created_date": "2026-03-24",
       "is_new": false,
       "trending": true
    },
    {
       "id": "jhoome-jo-pathaan-hindi",
       "title": "Jhoome Jo Pathaan",
       "artist": "Arijit Singh, Sukriti Kakar",
       "language": "Hindi",
       "year": 2023,
       "youtube_link": "https://www.youtube.com/embed/YxWlaYCA8MU",
       "thumbnail": "https://img.youtube.com/vi/YxWlaYCA8MU/maxresdefault.jpg",
       "key_lyrics": [
         "Jhoome jo pathaan meri jaan",
         "Mehfil hi lut jaaye"
       ],
       "meaning": "A celebratory, swagger-filled party anthem from Pathaan celebrating the invincible aura of the hero.",
       "translation": "When Pathaan dances, my love...\nThe entire gathering is captivated.",
       "highlights": [
         "Features massive global appeal",
         "Shot across multiple exotic European locations"
       ],
       "full_lyrics": "Tumne mohabbat karni hai\nHumne mohabbat ki hai\n\nJhoome jo pathaan meri jaan\nMehfil hi lut jaaye\nDede jo zubaan meri jaan\nUspe rooh lut jaaye\n\nJhoome jo pathaan...",
       "created_date": "2026-03-24",
       "is_new": false,
       "trending": true
    },
    {
       "id": "rowdy-baby-tamil",
       "title": "Rowdy Baby",
       "artist": "Dhanush, Dhee",
       "language": "Tamil",
       "year": 2018,
       "youtube_link": "https://www.youtube.com/embed/x6Q7c9LSKqM",
       "thumbnail": "https://img.youtube.com/vi/x6Q7c9LSKqM/maxresdefault.jpg",
       "key_lyrics": [
         "Hey rowdy baby...",
         "Unkitta matikitta naan enna aaven"
       ],
       "meaning": "A quirky, fast-paced love duet where the rough hero flirts with the equally bold heroine.",
       "translation": "Hey rowdy baby...\nWhat will happen to me if I get caught by you?",
       "highlights": [
         "Broke massive YouTube viewership records"
       ],
       "full_lyrics": "Hey en goli sodave\nEn kari meen kozhambe\nUnkitta matikitta naan enna aaven\n\nHey rowdy baby\nEn blood-u pressure baby\nUn jodi aaven, unnoda thozhan aaven!",
       "created_date": "2026-03-24",
       "is_new": false,
       "trending": true
    },
    {
       "id": "starboy-english",
       "title": "Starboy",
       "artist": "The Weeknd ft. Daft Punk",
       "language": "English",
       "year": 2016,
       "youtube_link": "https://www.youtube.com/embed/34Na4j8HLjc",
       "thumbnail": "https://img.youtube.com/vi/34Na4j8HLjc/maxresdefault.jpg",
       "key_lyrics": [
         "I'm a motherf***in' starboy",
         "Look what you've done"
       ],
       "meaning": "Delves into his massive success, extravagant lifestyle, and the darker, more isolating aspects of fame.",
       "translation": "NA",
       "highlights": [
         "Collaboration with electronic duo Daft Punk"
       ],
       "full_lyrics": "I'm tryna put you in the worst mood, ah\nP1 cleaner than your church shoes, ah\nMilli point two just to hurt you, ah\nAll red Lamb' just to tease you, ah\n\nLook what you've done\nI'm a motherf***in' starboy\nLook what you've done\nI'm a motherf***in' starboy",
       "created_date": "2026-03-24",
       "is_new": false,
       "trending": true
    }
  ]
};

// State management
let songData = [];
let currentFilter = 'All';
let searchQuery = '';

// DOM Elements
const songGridContainer = document.getElementById('song-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryPills = document.querySelectorAll('.category-pill');
const themeToggle = document.getElementById('theme-toggle');

// Initialize
async function init() {
  await loadData();
  
  // Setup Theme
  initTheme();

  // Setup routing simple logic
  const path = window.location.pathname;
  if (path.includes('song.html') || path.includes('/lyrics/')) {
    initSongPage();
  } else if (path.includes('admin_v2.html') || path.includes('official0')) {
    setupAdminV2();
  } else if (path.includes('index.html') || path.endsWith('/')) {
    renderHome();
    setupEventListeners();
  } else if (!path.includes('.html')) {
    // default to home for unknown
    renderHome();
    setupEventListeners();
  }
}

async function loadData() {
  try {
    const localData = localStorage.getItem('lyricsHubSongs');
    if (localData) {
      songData = JSON.parse(localData);
      // smarter sync: only add missing default songs, don't revert user deletions
      const localIds = new Set(songData.map(s => s.id));
      const hasDefaultFlag = localStorage.getItem('lyricsHubInited');
      
      if (!hasDefaultFlag) {
        // First time ever? Merge defaults.
        const newDefaults = defaultSongData.songs.filter(s => !localIds.has(s.id));
        if (newDefaults.length > 0) {
          songData = [...songData, ...newDefaults];
          localStorage.setItem('lyricsHubSongs', JSON.stringify(songData));
        }
        localStorage.setItem('lyricsHubInited', 'true');
      }
      
      // Retroactive YouTube Fix for "all previous links"
      let fixOccurred = false;
      songData = songData.map(s => {
        if (s.youtube_link && (!s.youtube_link.includes('/embed/') || s.youtube_link.includes('nocookie'))) {
          let ytId = '';
          const url = s.youtube_link;
          if (url.includes('embed/')) {
            ytId = url.split('embed/')[1].split('?')[0];
          } else if (url.includes('watch?v=')) {
            ytId = url.split('watch?v=')[1].split('&')[0];
          } else if (url.includes('youtu.be/')) {
            ytId = url.split('youtu.be/')[1].split('?')[0];
          } else {
            ytId = url.split('/').pop();
          }
          if (ytId) {
            s.youtube_link = `https://www.youtube.com/embed/${ytId}`;
            fixOccurred = true;
          }
        }
        
        // Backport audio_link if missing but present in default
        if (!s.audio_link) {
          const defaultRef = defaultSongData.songs.find(ds => ds.id === s.id);
          if (defaultRef && defaultRef.audio_link) {
            s.audio_link = defaultRef.audio_link;
            fixOccurred = true;
          }
        }
        
        // Data Migration: thumbnail -> thumbnail_url
        if (s.thumbnail && !s.thumbnail_url) {
          s.thumbnail_url = s.thumbnail;
          delete s.thumbnail;
          fixOccurred = true;
        }
        
        return s;
      });
      if (fixOccurred) {
        localStorage.setItem('lyricsHubSongs', JSON.stringify(songData));
      }
    } else {
      // In a real app we would fetch from an API. Since this is static and we are avoiding CORS on file://, we use defaultSongData.
      songData = defaultSongData.songs;
      localStorage.setItem('lyricsHubSongs', JSON.stringify(songData));
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
  // Add staggered animation delay
  const animDelay = (index * 0.1) + 's';
  return `
    <a href="${url}" class="song-card animate" style="animation-delay: ${animDelay}; opacity: 0;">
      ${song.is_new ? '<span class="badge badge-new">New</span>' : ''}
      <div class="thumbnail-wrapper">
        <img src="${song.thumbnail_url || `https://img.youtube.com/vi/${getYTId(song.youtube_link)}/maxresdefault.jpg`}" 
             alt="${song.title} Thumbnail" 
             class="song-thumb" 
             loading="lazy"
             onerror="handleThumbError(this, '${getYTId(song.youtube_link)}')">
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
  let id = params.get('path') || params.get('id');
  
  if (!id) {
    const parts = window.location.pathname.split('/');
    id = parts[parts.length - 1]; 
    if (id.endsWith('.html')) id = id.replace('.html', '');
  }

  const song = songData.find(s => s.id === id);
  if (!song) {
    const details = document.getElementById('song-details');
    if(details) details.innerHTML = '<h2>Song Not Found</h2><p>Please return to the <a href="index.html" style="color:var(--accent)">Home Page</a>.</p>';
    const videoCont = document.getElementById('video-frame');
    if(videoCont) videoCont.parentElement.style.display = 'none';
    return;
  }

  document.title = `${song.title} Lyrics Meaning - ${song.artist} | LyricsHubIndia`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `Read the complete meaning and summary for ${song.title} by ${song.artist} in ${song.language}. Watch the official video and explore more.`);
  }

  const videoFrame = document.getElementById('video-frame');
  if (videoFrame) {
    let finalUrl = song.youtube_link;
    // ensure standard embed format
    if (!finalUrl.includes('?')) {
      finalUrl += '?rel=0&modestbranding=1';
    }
    videoFrame.src = finalUrl;
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
      // Fallback to small YT player for audio
      audioSection.style.display = 'block';
      audioFrame.src = song.youtube_link;
      if(audioLabel) audioLabel.textContent = 'Listen to Audio (YT Player)';
    } else {
      audioSection.style.display = 'none';
    }
  }

  const titleEl = document.getElementById('song-title');
  if (titleEl) titleEl.textContent = song.title;

  const artistEl = document.getElementById('song-artist');
  if (artistEl) artistEl.textContent = song.artist;

  const langEl = document.getElementById('song-lang');
  if (langEl) langEl.textContent = song.language;

  const lyricsEl = document.getElementById('song-lyrics');
  if (lyricsEl) lyricsEl.textContent = song.meaning || song.lyrics_or_summary;
  
  // Advanced Sections
  const keyLyricsSec = document.getElementById('key-lyrics-section');
  const keyLyricsEl = document.getElementById('song-key-lyrics');
  if (keyLyricsSec && keyLyricsEl && song.key_lyrics && song.key_lyrics.length > 0) {
    keyLyricsSec.style.display = 'block';
    keyLyricsEl.innerHTML = song.key_lyrics.join('<br>');
  }

  const transSec = document.getElementById('translation-section');
  const transEl = document.getElementById('song-translation');
  if (transSec && transEl && song.translation && song.translation !== 'NA') {
    transSec.style.display = 'block';
    transEl.innerHTML = (song.translation).replace(/\n/g, '<br>');
  }

  const highSec = document.getElementById('highlights-section');
  const highEl = document.getElementById('song-highlights');
  if (highSec && highEl && song.highlights && song.highlights.length > 0) {
    highSec.style.display = 'block';
    highEl.innerHTML = song.highlights.map(h => `<li style="margin-bottom:0.5rem;"><i class="fas fa-check-circle" style="color:var(--accent); margin-right:8px; font-size:0.9rem;"></i> ${h}</li>`).join('');
  }

  const fullSec = document.getElementById('full-lyrics-section');
  const fullEl = document.getElementById('song-full-lyrics');
  if (fullSec && fullEl && song.full_lyrics && song.full_lyrics !== '') {
    fullSec.style.display = 'block';
    fullEl.textContent = song.full_lyrics;
  }
  
  const badgeEl = document.getElementById('song-badge');
  if (badgeEl) {
    if (song.is_new) {
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      let copyText = song.title + " by " + song.artist + "\n\nMeaning:\n" + (song.meaning || song.lyrics_or_summary);
      if(song.translation && song.translation !== 'NA') copyText += "\n\nTranslation:\n" + song.translation;
      copyText += "\n\nRead more at: " + window.location.href;
      
      navigator.clipboard.writeText(copyText);
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    });
  }

  const shareWa = document.getElementById('share-wa');
  if (shareWa) shareWa.href = `https://api.whatsapp.com/send?text=Check out the meaning of ${encodeURIComponent(song.title)} here: ${encodeURIComponent(window.location.href)}`;
  
  const shareTw = document.getElementById('share-tw');
  if (shareTw) shareTw.href = `https://twitter.com/intent/tweet?text=Loving ${encodeURIComponent(song.title)} by ${encodeURIComponent(song.artist)}!&url=${encodeURIComponent(window.location.href)}`;
  
  const shareFb = document.getElementById('share-fb');
  if (shareFb) shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;

  const relatedContainer = document.getElementById('related-songs');
  if (relatedContainer) {
    const related = songData.filter(s => s.language === song.language && s.id !== song.id).slice(0, 4);
    if(related.length > 0) {
      relatedContainer.innerHTML = related.map((s, i) => buildSongCard(s, i)).join('');
    } else {
       const relatedSection = document.querySelector('.related-section');
       if(relatedSection) relatedSection.style.display = 'none';
    }
  }
}

function setupAdminV2() {
  const authOverlay = document.getElementById('auth-overlay');
  const loginForm = document.getElementById('login-form');
  const loginEmail = document.getElementById('login-email');
  const authError = document.getElementById('auth-error');
  const logoutBtn = document.getElementById('logout-btn');

  // Check auth
  if (sessionStorage.getItem('lyricsAdminAuth') !== 'true') {
    authOverlay.style.display = 'flex';
  } else {
    authOverlay.style.display = 'none';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (loginEmail.value === 'admin@lyricshubindia.com') {
        sessionStorage.setItem('lyricsAdminAuth', 'true');
        authOverlay.style.display = 'none';
        authError.style.display = 'none';
      } else {
        authError.textContent = 'Unauthorized email address.';
        authError.style.display = 'block';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('lyricsAdminAuth');
      authOverlay.style.display = 'flex';
    });
  }

  const adminV2Form = document.getElementById('admin-v2-form');
  const editLangSelect = document.getElementById('edit_lang_select');
  const editYearSelect = document.getElementById('edit_year_select');
  const editSelect = document.getElementById('edit_song_select');
  
  if (editLangSelect && editYearSelect && editSelect) {
    const populateLangs = (selectedLang = '') => {
      const uniqueLangs = [...new Set(songData.map(s => s.language))].filter(Boolean).sort();
      editLangSelect.innerHTML = '<option value="">-- All Languages --</option>';
      uniqueLangs.forEach(lang => {
        editLangSelect.innerHTML += `<option value="${lang}" ${selectedLang === lang ? 'selected' : ''}>${lang}</option>`;
      });
    };

    const populateYears = (filterLang = '', selectedYear = '') => {
      let filteredSongs = songData;
      if (filterLang) filteredSongs = filteredSongs.filter(s => s.language === filterLang);
      
      const uniqueYears = [...new Set(filteredSongs.map(s => s.year))].filter(Boolean).sort((a,b)=>b-a);
      
      editYearSelect.innerHTML = '<option value="">-- All Years --</option>';
      if (uniqueYears.length > 0) {
        editYearSelect.disabled = false;
        uniqueYears.forEach(year => {
          editYearSelect.innerHTML += `<option value="${year}" ${String(selectedYear) === String(year) ? 'selected' : ''}>${year}</option>`;
        });
      } else {
        editYearSelect.disabled = true;
      }
    };

    const populateAdminSelect = (filterLang = '', filterYear = '') => {
      editSelect.innerHTML = '<option value="">-- Add New Song --</option>';
      let songsToDisplay = songData;
      if (filterLang) songsToDisplay = songsToDisplay.filter(s => s.language === filterLang);
      if (filterYear) songsToDisplay = songsToDisplay.filter(s => String(s.year) === String(filterYear));
      
      // Sort ascending alphabetically
      songsToDisplay.sort((a, b) => a.title.localeCompare(b.title));
      
      songsToDisplay.forEach(s => {
        const yr = s.year ? ` - ${s.year}` : '';
        editSelect.innerHTML += `<option value="${s.id}">${s.title}${yr}</option>`;
      });
    };
    
    // Attach to window so submit handler can call them directly
    window._refreshAdminDropdowns = () => {
      const curLang = editLangSelect.value;
      const curYear = editYearSelect.value;
      populateLangs(curLang);
      populateYears(curLang, curYear);
      populateAdminSelect(curLang, curYear);
    };

    populateLangs();
    populateYears();
    populateAdminSelect();

    editLangSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      populateYears(selectedLang);
      populateAdminSelect(selectedLang, '');
      if(adminV2Form) adminV2Form.reset();
      document.getElementById('admin_edit_id').value = '';
    });

    editYearSelect.addEventListener('change', (e) => {
      populateAdminSelect(editLangSelect.value, e.target.value);
      if(adminV2Form) adminV2Form.reset();
      document.getElementById('admin_edit_id').value = '';
    });

    editSelect.addEventListener('change', (e) => {
      const selectedId = e.target.value;
      if (!selectedId) {
        if(adminV2Form) adminV2Form.reset();
        document.getElementById('admin_edit_id').value = '';
        return;
      }
      const song = songData.find(s => s.id === selectedId);
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
        document.getElementById('trending').checked = song.trending;
        
        // UI feedback
        const statusEl = document.getElementById('cms-status');
        if(statusEl) statusEl.textContent = `MODE: Editing "${song.title}"`;
        const delBtn = document.getElementById('delete-btn');
        if(delBtn) delBtn.style.display = 'block';
        const subBtn = document.getElementById('submit-btn');
        if(subBtn) subBtn.innerHTML = '<i class="fas fa-save" style="margin-right:8px;"></i> Save Changes';
      }
    });

    const delBtn = document.getElementById('delete-btn');
    if (delBtn) {
      delBtn.addEventListener('click', () => {
        const idToDelete = document.getElementById('admin_edit_id').value;
        if (!idToDelete) return;
        
        if (confirm('Are you SURE you want to delete this song permanently?')) {
          songData = songData.filter(s => s.id !== idToDelete);
          localStorage.setItem('lyricsHubSongs', JSON.stringify(songData));
          alert('Song deleted successfully!');
          adminV2Form.reset();
          document.getElementById('admin_edit_id').value = '';
          delBtn.style.display = 'none';
          document.getElementById('cms-status').textContent = '';
          document.getElementById('submit-btn').innerHTML = '<i class="fas fa-cloud-upload-alt" style="margin-right:8px;"></i> Publish to Platform';
          if (window._refreshAdminDropdowns) window._refreshAdminDropdowns();
        }
      });
    }
  }

  if (adminV2Form) {
    adminV2Form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const editId = document.getElementById('admin_edit_id').value;
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
      
      let ytId = '';
      if (youtube_link.includes('embed/')) {
        ytId = youtube_link.split('embed/')[1].split('?')[0];
      } else if (youtube_link.includes('watch?v=')) {
        ytId = youtube_link.split('watch?v=')[1].split('&')[0];
      } else if (youtube_link.includes('youtu.be/')) {
        ytId = youtube_link.split('youtu.be/')[1].split('?')[0];
      } else {
        ytId = youtube_link.split('/').pop();
      }
      
      const formattedEmbed = `https://www.youtube.com/embed/${ytId}`;
      const thumbnail = `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
      
      const id = editId || `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${language.toLowerCase()}`;
      
      const newSong = {
        id, title, artist, language, year,
        youtube_link: formattedEmbed, 
        thumbnail_url,
        audio_link,
        key_lyrics, meaning, translation, highlights, full_lyrics,
        created_date: new Date().toISOString().split('T')[0],
        is_new, trending
      };
      
      if (editId) {
        const idx = songData.findIndex(s => s.id === editId);
        if (idx !== -1) {
          // retain original creation date
          newSong.created_date = songData[idx].created_date;
          songData[idx] = newSong;
        }
      } else {
        songData.unshift(newSong); // Add new song to front
      }
      
      localStorage.setItem('lyricsHubSongs', JSON.stringify(songData));
      
      alert(`Song successfully ${editId ? 'updated' : 'added'} to Local Storage!`);
      adminV2Form.reset();
      document.getElementById('admin_edit_id').value = '';
      
      const statusEl = document.getElementById('cms-status');
      if(statusEl) statusEl.textContent = '';
      const delBtn = document.getElementById('delete-btn');
      if(delBtn) delBtn.style.display = 'none';
      const subBtn = document.getElementById('submit-btn');
      if(subBtn) subBtn.innerHTML = '<i class="fas fa-cloud-upload-alt" style="margin-right:8px;"></i> Publish to Platform';

      if (window._refreshAdminDropdowns) {
        window._refreshAdminDropdowns();
      }
    });
  }

  const aiBtn = document.getElementById('ai-auto-gen');
  if (aiBtn) {
    aiBtn.addEventListener('click', () => {
      document.getElementById('key_lyrics').value = "Mock autogenerated lyric line 1...\nMock autogenerated lyric line 2...";
      document.getElementById('meaning').value = "This is an AI-generated mock summary interpreting the song's incredibly deep meaning and thematic elements. It speaks about love and resilience.";
      document.getElementById('translation').value = "Mock translation line 1...\nMock translation line 2...";
      document.getElementById('highlights').value = "Hit #1 on the local charts\nFeatures a spectacular vocal performance";
      document.getElementById('full_lyrics').value = "[Verse 1]\nMock full lyrics generation...\nLine 2...\nLine 3...\n\n[Chorus]\nFull Chorus Mock...";
    });
  }
}

document.addEventListener('DOMContentLoaded', init);

/**
 * Helper to extract YouTube ID from varied URL formats
 */
function getYTId(url) {
  if (!url) return '';
  if (url.includes('embed/')) return url.split('embed/')[1].split('?')[0];
  if (url.includes('watch?v=')) return url.split('watch?v=')[1].split('&')[0];
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split('?')[0];
  return url.split('/').pop().split('?')[0];
}

/**
 * Robust Thumbnail Fallback Handler
 */
function handleThumbError(img, ytId) {
  if (!ytId) {
    img.src = 'https://via.placeholder.com/640x360?text=LyricsHubIndia+Music';
    return;
  }
  
  if (img.src.includes('maxresdefault')) {
    img.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
  } else if (img.src.includes('hqdefault')) {
    img.src = `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
  } else {
    img.src = 'https://via.placeholder.com/640x360?text=LyricsHubIndia+Music';
  }
}
