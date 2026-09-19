const audio = document.querySelector("audio");
const imagem = document.querySelector(".imagem");
const playBtn = document.getElementById("playBtn");
const barra = document.getElementById("barra");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const capaPlayer = document.getElementById("capaPlayer");
const tituloMusica = document.getElementById("tituloMusica");
const artistaMusica = document.getElementById("artistaMusica");

const syncedBalladLyrics = [
  [420, "Haha"],
  [1440, "Just around the bend, try to comprehend"],
  [3860, "These walking machines are not pretend"],
  [6770, "Far from all repair, can you be prepared?"],
  [9690, "Don't make it obvious, you're scared"],
  [12580, "Lock up all the doors, hide until the morn'"],
  [15220, "There's no way out, there's no way out"],
  [18020, "So don't you even try to run away now"],
  [24280, "Waiting out the clock, got no time to live"],
  [26680, "Why'd you pick up a nighttime shift?"],
  [29300, "Every moment, danger, every moment, fear"],
  [32300, "They already know that you are here"],
  [34760, "So lock up all the doors, hide until the morn'"],
  [38030, "There's no way out, there's no way out"],
  [40260, "So don't you even try to run away now"],
  [46420, "So put your sanity in your pocket"],
  [49250, "Not gonna need it when they come knockin'"],
  [51950, "Forget about your imagination"],
  [54780, "And pray to God for your salvation"],
  [58370, "You're alive right now, survive right now"],
  [61560, "That's all you can do"],
  [64170, "If you're alive right now, survive right now"],
  [67160, "That's all you can do"],
  [69620, "I'm no machine, why would I lie?"],
  [72510, "Sometimes a dream is a nightmare disguised"],
  [75050, "No more time to rehearse"],
  [76240, "So I'll grind through my verse"],
  [77880, "When I died, system fried"],
  [78850, "Don't know why I still work"],
  [80400, "And the crime wasn't solved"],
  [81820, "Purple guys, unabsolved"],
  [83180, "Tryna tie up the theories"],
  [84630, "Outlined on your walls"],
  [86180, "All the sins remain with the pain inside"],
  [88850, "They reskinned my face, but the paint won't dry"],
  [91630, "Who said this place was made of magic? 'Cause I call it a casket"],
  [94870, "And in my case it's open, but they're hoping they can mask it"],
  [97870, "An attraction, that's all I am to anyone"],
  [100650, "Guess you only learn what you're worth when you're gone"],
  [103160, "Nothing left to do, I guess I'll sing the songs that they want"],
  [106160, "Our collective conscience twisted up"],
  [107850, "As long as I've got you in my heart"],
  [109860, "I'll know I'm not alone, baby"],
  [111920, "It's a comfort knowing we're both going crazy"],
  [114290, "So put your sanity in your pocket"],
  [116830, "Not gonna need it when they come knockin'"],
  [119850, "Forget about your imagination"],
  [122340, "And pray to God for your salvation"],
  [126480, "You're alive right now, survive right now"],
  [129230, "That's all you can do"],
  [131630, "If you're alive right now, survive right now"],
  [134950, "That's all you can do"],
  [137910, "I'm crazy, I'm crazy"],
  [140780, "I'm crazy, I'm going crazy"],
  [143470, "I'm crazy, I'm crazy"],
  [146420, "I'm crazy"],
  [148430, "Just around the bend, try to comprehend"],
  [150920, "These walking machines are not pretend"],
  [153710, "Far from all repair, can you be prepared?"],
  [156590, "Look right over there"],
  [158810, "So put your sanity in your pocket"],
  [161430, "Not gonna need it when they come knockin'"],
  [164470, "Forget about your imagination"],
  [166750, "And pray to God for your salvation"],
  [170520, "If you're alive right now, survive right now"],
  [173520, "That's all you can do"],
  [176380, "If you're alive right now, survive right now"],
  [179390, "That's all you can do"],
  [182500, "I'm crazy, I'm crazy"],
  [185130, "I'm crazy, I'm going crazy"],
  [188060, "I'm crazy, I'm crazy"],
  [190860, "I'm crazy"],
];

const temporaryLoveLyrics = [
  [15800, "Time goes by"],
  [16110, "I don't know why I would ever let you hurt me"],
  [18820, "Look me in the eye, tell a little lie"],
  [20840, "Let me know you won't deserve me"],
  [22730, "One last night in the moonlight"],
  [24470, "Wouldn't do another if I could"],
  [26270, "Hold me tight, make it feel right"],
  [28430, "Leave and never say"],
  [29530, "Goodbye, bye, bye"],
  [31950, "I'll never let you have me"],
  [36160, "Past tonight, night, night"],
  [39120, "Some kind of temporary love"],
  [44780, "Before the time runs out, I'm gonna let you down"],
  [48510, "Might be a man on Mars before I need you again"],
  [52570, "If you had let me know that you have loved me so"],
  [56000, "This wouldn't seem so hard"],
  [58300, "Can we let it end?"],
  [60230, "Time goes by"],
  [61220, "I don't know why you would ever let me hurt you"],
  [63810, "Look you in the eye, tell a little lie"],
  [65920, "That you know I don't deserve you"],
  [67710, "Feed the fire, take me higher"],
  [69570, "One last dance till we die"],
  [71360, "One desire, I'll deny it"],
  [73200, "Leave before I change my"],
  [74590, "Mind, mind, mind"],
  [76730, "I'll never let you have me"],
  [81100, "Past tonight, night, night"],
  [84240, "Some kind of temporary love"],
  [89670, "Before the time runs out, I'm gonna let you down"],
  [93630, "Might be a man on Mars before I need you again"],
  [97180, "If you had let me know that you have loved me so"],
  [101130, "This wouldn't seem so hard"],
  [103200, "Can we let it end?"],
  [104980, "Time goes by"],
  [106120, "I don't know why I would ever let you hurt me"],
  [108720, "Before the time runs out, I'm gonna let you down"],
  [112300, "Might be a man on Mars before I need you again"],
  [115910, "If you had let me know that you have loved me so"],
  [119810, "This wouldn't seem so hard"],
  [121900, "Can we let it end?"],
  [124100, "Time goes by"],
  [124670, "I don't know why I would ever let you hurt me"],
  [127640, "Look me in the eye, tell a little lie"],
  [129390, "Let me know you won't deserve me"],
  [131500, "One last night in the moonlight"],
  [133290, "Wouldn't do another if I could"],
  [135130, "Hold me tight, make it feel right"],
  [136990, "Leave and never say goodbye"],
];

const songs = {
  temporaryLove: {
    title: "Temporary Love",
    artist: "The Living Tombstone × CG5",
    cover: "tltxcg5.jpeg",
    source: "The Living Tombstone × CG5 - Temporary Love - The Living Tombstone.mp3",
    lyrics: temporaryLoveLyrics,
  },
  ballad: {
    title: "Ballad of the Walking Machines",
    artist: "CG5 × JT Music",
    cover: "ballad.png",
    source: "Ballad of the Walking Machines.mp3",
    lyrics: syncedBalladLyrics,
  },
};

let lyrics = songs.temporaryLove.lyrics;

function gerarLetra() {
  const container = document.getElementById('letraTotal');
  container.innerHTML = ""; 

  lyrics.forEach((linha, i) => {
    const p = document.createElement('p');
    p.innerText = linha[1];
    p.setAttribute('data-index', i); 
    p.className = 'linha-letra';      
    container.appendChild(p);
  });
}
gerarLetra(); 

let ultimoIndex = -1;

function selecionarMusica(songId) {
  const song = songs[songId];
  if (!song) return;

  audio.pause();
  audio.src = song.source;
  audio.load();
  imagem.src = song.cover;
  capaPlayer.src = song.cover;
  tituloMusica.textContent = song.title;
  artistaMusica.textContent = song.artist;
  lyrics = song.lyrics;
  ultimoIndex = -1;
  barra.value = 0;
  tempoAtual.textContent = "0:00";
  tempoTotal.textContent = "0:00";
  playBtn.textContent = "▶";
  imagem.classList.remove("girarImagem");
  gerarLetra();

  document.querySelectorAll(".songButton").forEach((button) => {
    button.classList.toggle("ativa", button.dataset.song === songId);
  });
}

document.querySelectorAll(".songButton").forEach((button) => {
  button.addEventListener("click", () => selecionarMusica(button.dataset.song));
});

function showLyric(indexAtual) {
  const todasAsLinhas = document.querySelectorAll('.linha-letra');
  
  todasAsLinhas.forEach((linha, i) => {
    linha.classList.remove('ativa', 'passada');

    if (i === indexAtual) {
      linha.classList.add('ativa'); 
      
      if (indexAtual !== ultimoIndex) {
        linha.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    } else if (i < indexAtual) {
      linha.classList.add('passada'); 
    }
  });

  ultimoIndex = indexAtual;
}

function play() {
  audio.play();
  imagem.classList.add("girarImagem");
  playBtn.textContent = "⏸";
}

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);
  return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
}

audio.addEventListener("timeupdate", () => {
  const tempo = audio.currentTime * 1000;
  let index = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (tempo >= lyrics[i][0]) {
      index = i;
    } else {
      break;
    }
  }

  if (index >= 0) {
    showLyric(index);
  }

  if (!isNaN(audio.duration)) {
    barra.value = (audio.currentTime / audio.duration) * 100;
  }

  tempoAtual.textContent = formatarTempo(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  tempoTotal.textContent = formatarTempo(audio.duration);
});

barra.addEventListener("input", () => {
  audio.currentTime = (barra.value / 100) * audio.duration;
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    play();
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    imagem.classList.remove("girarImagem");
  }
});

audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  imagem.classList.remove("girarImagem");
});
