import styled from "styled-components";

const S = {};

S.BingoTable = styled.div`
  display: grid;
  gap: 5px;

  background-color: red;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  aspect-ratio: 1;

  width: 300px;
`;

S.BingoPiece = styled.input`
  aspect-ratio: 1;
  background-color: blue;
  width: 50px;

  border: none;

  text-align: center;
`;

export default S;
