const audio = document.querySelector("audio");
const imagem = document.querySelector(".imagem");
const playBtn = document.getElementById("playBtn");
const barra = document.getElementById("barra");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");

const lyrics = [
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