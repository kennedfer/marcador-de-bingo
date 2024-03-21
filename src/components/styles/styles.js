import styled from "styled-components";

const S = {};

S.BingosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

S.BingoTable = styled.div`
  display: grid;
  padding: 10px;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  aspect-ratio: 1;

  background-color: #7761f0;

  border: 2px solid #4414ab;
  border-radius: 5px;
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
      background-color: green;
      
      `;
    } else {
      return `
      background-color: white;
      `;
    }
  }}
`;

export default S;
