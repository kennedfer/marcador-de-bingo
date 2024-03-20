import { BingoPiece } from "../BingoPiece/BingoPiece"
import S from "../styles/styles"

export const BingoTable = () => {
  const blankPieces = Array.from(Array(25).keys());

  return <S.BingoTable>
    {
      blankPieces.map(_ => <BingoPiece></BingoPiece>)
    }
  </S.BingoTable>
}