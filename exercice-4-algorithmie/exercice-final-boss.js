const chars = [
  { x: 0, y: 0, char: "p" },
  { x: 0, y: 1, char: "y" },
  { x: 0, y: 2, char: "t" },
  { x: 0, y: 3, char: "h" },
  { x: 0, y: 4, char: "a" },
  { x: 0, y: 5, char: "g" },
  { x: 0, y: 6, char: "o" },
  { x: 0, y: 7, char: "r" },
  { x: 0, y: 8, char: "e" },
  { x: 1, y: 2, char: "h" },
  { x: 2, y: 2, char: "a" },
  { x: 3, y: 2, char: "l" },
  { x: 4, y: 2, char: "e" },
  { x: 5, y: 2, char: "s" },
  { x: 1, y: 8, char: "u" },
  { x: 2, y: 8, char: "c" },
  { x: 3, y: 8, char: "l" },
  { x: 4, y: 8, char: "i" },
  { x: 5, y: 8, char: "d" },
  { x: 6, y: 8, char: "e" },
  { x: 4, y: 3, char: "i" },
  { x: 4, y: 4, char: "n" },
  { x: 4, y: 5, char: "s" },
  { x: 4, y: 6, char: "t" },
  { x: 4, y: 7, char: "e" },
  { x: 4, y: 9, char: "n" },
  { x: 2, y: 6, char: "a" },
  { x: 2, y: 7, char: "r" },
  { x: 2, y: 9, char: "h" },
  { x: 2, y: 10, char: "i" },
  { x: 2, y: 11, char: "m" },
  { x: 2, y: 12, char: "e" },
  { x: 2, y: 13, char: "d" },
  { x: 2, y: 14, char: "e" },
];

// Résultat attendu :
// p y t h a g o r e
//     h           u
//     a       a r c h i m e d e
//     l           l
//     e i n s t e i n
//     s           d
//                 e

// TODO :
// 1. Compter le nombre de lignes nécessaires (indice : cherche le x maximum)
// 2. Compter le nombre de colonnes nécessaires (indice : cherche le y maximum)
// 3. Créer un tableau par ligne, rempli d'espaces " "
// 4. Placer chaque caractère à la bonne position dans le bon tableau
// 5. Afficher chaque ligne avec console.log et .join()
