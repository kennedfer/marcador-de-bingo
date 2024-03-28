const CHECK_BINGO = {
  QUINA: checkQuina,
  FULL: checkFull,
};

export function checkBingo(bingo) {
  return CHECK_BINGO[bingo.type](bingo);
}

export function getBingoId() {
  return Date.now();
}

export const blankBingo = {
  type: "QUINA",
  pieces: {
    0: { number: "", isMarked: false },
    1: { number: "", isMarked: false },
    2: { number: "", isMarked: false },
    3: { number: "", isMarked: false },
    4: { number: "", isMarked: false },
    5: { number: "", isMarked: false },
    6: { number: "", isMarked: false },
    7: { number: "", isMarked: false },
    8: { number: "", isMarked: false },
    9: { number: "", isMarked: false },
    10: { number: "", isMarked: false },
    11: { number: "", isMarked: false },
    12: { number: "", isMarked: false },
    13: { number: "", isMarked: false },
    14: { number: "", isMarked: false },
    15: { number: "", isMarked: false },
    16: { number: "", isMarked: false },
    17: { number: "", isMarked: false },
    18: { number: "", isMarked: false },
    19: { number: "", isMarked: false },
    20: { number: "", isMarked: false },
    21: { number: "", isMarked: false },
    22: { number: "", isMarked: false },
    23: { number: "", isMarked: false },
    24: { number: "", isMarked: false },
  },
};

export function checkQuina(bingo) {
  const pieces = Object.values(bingo.pieces);
  for (let x = 0; x < 5; x++) {
    let piecesMarkedsByRow = 0;
    let piecesMarkedsByColumn = 0;

    for (let y = 0; y < 5; y++) {
      if (pieces[x * 5 + y].isMarked) piecesMarkedsByRow++;
      if (pieces[x + y * 5].isMarked) piecesMarkedsByColumn++;
    }

    if (piecesMarkedsByRow === 5 || piecesMarkedsByColumn === 5) return true;
  }

  return false;
}

export function checkFull(bingo) {
  const pieces = Object.values(bingo.pieces);
  let piecesMarkeds = 0;
  pieces.forEach((piece) => (piecesMarkeds += piece.isMarked ? 1 : 0));
  console.log(piecesMarkeds);

  return piecesMarkeds === 24;
}
