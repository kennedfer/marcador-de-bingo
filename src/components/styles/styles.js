import styled from "styled-components";

const S = {};

S.BingoTable = styled.div`
  display: grid;
  background-color: red;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

S.BingoPiece = styled.div`
  aspect-ratio: 1;
  padding: 10px;
`;

export default S;
