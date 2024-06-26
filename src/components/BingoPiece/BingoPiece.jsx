import S from "../styles/styles"

export const BingoPiece =({callback, localNumber, isMarked})=>{
  const changeBingoPiece = ({nativeEvent, target}) => {
    const pieceParent = (nativeEvent.srcElement.parentNode);

    const piecesFromCurrentBingo = Array.from(pieceParent.children);
    const pieceIndex = piecesFromCurrentBingo.indexOf(target);

    callback(pieceIndex, {number: target.value, isMarked: false});
  }

  const imposeMinMaxValue = (evt) =>{
    const input = evt.target;
    const {value} = input;

    input.value = Math.abs(value);

    if(value > 99) input.value = 99;

    changeBingoPiece(evt);
  }

  return <S.BingoPiece isMarked={isMarked} onChange={imposeMinMaxValue} defaultValue={localNumber} min="1" max="99" type="number" />
}