import { BingoPiece } from "../BingoPiece/BingoPiece"
import S from "../styles/styles"

export const BingoTable = ({callback, bingoId, bingo}) => {
  console.log(bingo);

  const changeBingoPiece = (piece, value) => {
    callback(bingoId, piece, value);
  };

  return <S.BingoTable>
    {
      Object.values(bingo).map(({isMarked}) => <BingoPiece isMarked={isMarked} callback={changeBingoPiece}/>)
    }
  </S.BingoTable>
}