import S from "../styles/styles"

export const BingoPiece =()=>{
  const imposeMinMaxValue = (evt) =>{
    const input = evt.target;
    const {value} = input;

    input.value = Math.abs(value);

    if(value > 99) return input.value = 99;
  }

  return <S.BingoPiece onChange={imposeMinMaxValue} min="1" max="99" type="number" />
}