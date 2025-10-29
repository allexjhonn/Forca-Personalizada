const words = [
  { word: "Manga", clue: "Fruta tropical" },
  { word: "Hipopótamo", clue: "Animal de grande porte" },
  { word: "Notebook", clue: "Dispositivo eletrônico" },
  { word: "Cachorro", clue: "Melhor amigo do homem" },
  { word: "Chocolate", clue: "Doce feito de cacau" },
  { word: "Harpa", clue: "Instrumento musical cordas" },
  { word: "Gato", clue: "Felino" },
  { word: "Ametista", clue: "Tipo de pedra preciosa" },
  { word: "Canoa", clue: "Embarcação no mar" },
  { word: "Radio", clue: "Dispositivo de comunicação" },
  { word: "Pau-Brasil", clue: "Árvore" },
  { word: "Triângulo", clue: "Figura geométrica de três lados" },
  { word: "Lua", clue: "Satélite Natural da terra" },
  { word: "Geladinho", clue: "Doce gelado" },
  { word: "Carro", clue: "Veículo de 4 rodas" },
  { word: "Balão", clue: "Meio de transporte aéreo" },
  { word: "Gorila", clue: "Primate arbóreo" },
  { word: "ClashRoyale", clue: "Rei, torres e cartas" },
  { word: "Pelé", clue: "Melhor jogador de futebol do mundo" },
  { word: "Lâmpada", clue: "Objeto para iluminação" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
