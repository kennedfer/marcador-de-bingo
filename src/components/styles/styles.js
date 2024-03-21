import styled from "styled-components";

const S = {};

S.BingosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

S.BingoTable = styled.div`
  display: grid;
  gap: 5px;
  padding: 5px;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  aspect-ratio: 1;
`;

S.BingoPiece = styled.input`
  aspect-ratio: 1;
  width: 50px;

  border: none;

  text-align: center;

  ${(props) => {
    if (props.isMarked) {
      return `
      background-color: green;
      
      `;
    } else {
      return `
      background-color: blue;
      `;
    }
  }}
`;

export default S;
