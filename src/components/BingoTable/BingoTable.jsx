import { BingoPiece } from "../BingoPiece/BingoPiece"
import S from "../styles/styles"

export const BingoTable = ({callback, bingoId, bingo}) => {
  const changeBingoPiece = (piece, value) => {
    callback(bingoId, piece, value);
  };

  return <S.BingoTable>
    {
      Object.values(bingo.pieces).map(({number, isMarked}) => <BingoPiece localNumber={number} isMarked={isMarked} callback={changeBingoPiece}/>)
    }
  </S.BingoTable>
}