import S from "../styles/styles"

export const BingoPiece =({callback, isMarked})=>{
  console.log(isMarked);

  const changeBingoPiece = ({nativeEvent, target}) => {
    const pieceParent = (nativeEvent.srcElement.parentNode);

    const piecesFromCurrentBingo = Array.from(pieceParent.children);
    const pieceIndex = piecesFromCurrentBingo.indexOf(target);

    callback(pieceIndex, {number: target.value, isMarked: true});
  }

  const imposeMinMaxValue = (evt) =>{
    const input = evt.target;
    const {value} = input;

    input.value = Math.abs(value);

    if(value > 99) input.value = 99;

    changeBingoPiece(evt);
  }

  return <S.BingoPiece isMarked={isMarked} onChange={imposeMinMaxValue} min="1" max="99" type="number" />
}