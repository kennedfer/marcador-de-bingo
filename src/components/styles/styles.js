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
  background-color: blue;
  width: 50px;

  border: none;

  text-align: center;
`;

export default S;
