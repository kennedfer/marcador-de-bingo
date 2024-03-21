import styled from "styled-components";

const S = {};

S.BingosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
`;

S.Bingo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  padding: 10px;

  background-color: #7761f0;

  border: 2px solid #4414ab;
  border-radius: 10px;
`;

S.BingoName = styled.input`
  color: white;
  background-color: transparent;
  border: none;

  font-size: large;
  text-align: center;

  padding: 5px;
`;

S.BingoTable = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  aspect-ratio: 1;
  border-radius: 10px;

  box-sizing: border-box;
  overflow: hidden;
`;

S.BingoPiece = styled.input`
  aspect-ratio: 1;
  width: 50px;
  height: 52px;

  font-size: 2.1rem;
  font-weight: bolder;

  color: #434f88;

  border: none;
  outline: none;

  text-align: center;

  &:nth-child(even) {
    background-color: #e4ebfe;
  }

  ${(props) => {
    if (props.isMarked) {
      return `
      filter: brightness(90%);
      
      `;
    } else {
      return `
      background-color: white;
      `;
    }
  }}
`;

S.NewBingoButton = styled.button`
  width: 294px;
  height: 325px;

  background-color: rgb(228 235 254 / 27%);
  border: 5px dashed #e4ebfe;

  color: #4414ab;
  font-weight: bolder;
`;

S.FloatingLayout = styled.div`
  display: flex;
  gap: 10px;

  position: fixed;
  right: 50%;
  bottom: 20px;

  transform: translate(50%, 0%);
`;

S.PickNumberFAB = styled.button`
  width: 200px;
  padding: 10px;

  color: white;
  background-color: orange;

  border: 2px solid #ffd36f;
  border-radius: 237px;
`;

S.IconsButton = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 99px;

  padding: 10px;

  ${(props) => {
    if (props.refresh) {
      return `
      background-color: #eee;
      
      `;
    } else if (props.clear) {
      return `
      background-color: red;
      `;
    } else {
      return `
      background-color: orange;
      `;
    }
  }}
`;

export default S;
