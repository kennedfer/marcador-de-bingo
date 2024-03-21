import { BingoPiece } from "../BingoPiece/BingoPiece"
import S from "../styles/styles"

export const BingoTable = ({callback, bingoId, bingo}) => {
  console.log(bingo);

  const changeBingoPiece = (piece, value) => {
    callback(bingoId, piece, value);
  };

  // const blankPieces = bingo ? bingo : Array.from(Array(25).keys());

  return <S.BingoTable>
    {
      Object.keys(bingo).map(({isMarked}) => <BingoPiece isMarked={isMarked} callback={changeBingoPiece}/>)
    }
  </S.BingoTable>
}