// Declarando variáveis e pegando elementos do DOM
const botaoAnterior = document.getElementById("anterior")
const botaoPlayPause = document.getElementById("play-pause")
const botaoPlay = document.querySelector(".play")
const botaoPause = document.querySelector(".pause")
const botaoProximo = document.getElementById("proximo")
const audio = document.getElementById("audio-capitulo")
const tituloAudio = document.getElementById("capitulo")
let audioTocando = false
let audioAtual = 1
const quantidadeAudios = 10


// Adicionando eventos

// Áudio anterior
botaoAnterior.addEventListener("click", audioAnterior)
// Iniciar e pausar áudio
botaoPlayPause.addEventListener("click", tocarOuPausar)
// Próximo áudio
botaoProximo.addEventListener("click", proximoAudio)


// Definindo funções

// Volta para o áudio anterior
function audioAnterior() {
    audioAtual > 1 ? audioAtual -= 1 : audioAtual = quantidadeAudios
    alterarInformacoes()
    continuarTocando()
}

// Inverte o estado do áudio (se está tocando, para de tocar... se não está tocando, então é iniciado)
function tocarOuPausar() {
    audioTocando = !audioTocando

    if (audioTocando) {
        audio.play()
    } 
    else {
        audio.pause()
    }

    botaoPlay.style.display = audioTocando ? "none" : "block"
    botaoPause.style.display = audioTocando ? "block" : "none"
}

// Avança para o próximo áudio
function proximoAudio() {
    audioAtual < quantidadeAudios ? audioAtual += 1 : audioAtual = 1
    alterarInformacoes()
    continuarTocando()
}

// Continua tocando quando o áudio é alterado
function continuarTocando() {
    if (audioTocando) {
        audio.play()
    }
}

// Altera as informações do livro (capítulo e áudio) toda vez que o capítulo é mudado
function alterarInformacoes() {
    tituloAudio.textContent = `Capítulo ${audioAtual}`
    audio.src = `/audios/${audioAtual}.mp3`
}