var moldura
var fotos
var indice
var temporizador
var botaoVoltar
var botaoAvancar

const path = "imagens/"
const ext = ".jpeg"
const tempoEspera = 3000

fotos = ["img1", "img2", "img3", "img4", "img5"]
indice = 0

window.onload = Iniciar

function Iniciar(){
  moldura = document.getElementById("moldura")
  botaoAvancar = document.getElementById("btnAvancar")
  botaoVoltar = document.getElementById("btnVoltar")

  botaoAvancar.onclick = AvancarFoto
  botaoVoltar.onclick = VoltarFoto
  MostrarFoto()
  AutomatizarFoto()
}

function AvancarFoto(){
  if(indice < fotos.length - 1){
    indice++
  } else {
    indice = 0
  }
  MostrarFoto()
  AutomatizarFoto()
}

function VoltarFoto(){
  if(indice < 1){
    indice = fotos.length - 1
  } else {
    indice--
  }
  MostrarFoto()
  AutomatizarFoto()
}

function MostrarFoto(){
  moldura.src = path + fotos[indice] + ext
}

function AutomatizarFoto(){
  clearInterval(temporizador)
  temporizador = setInterval(AvancarFoto, tempoEspera)
}