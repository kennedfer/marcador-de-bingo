import "./styles/App.css";
import { BingoTable } from "./components/BingoTable/BingoTable";
import S from "./components/styles/styles";
import { useEffect, useState } from "react";
import { BingoUtils } from "./utils";

function App() {
  const [bingos, setBingos] = useState({});
  const [numbersPickeds, setNumbersPickeds] = useState([]);

  const createNewBingo = () => {
    const bingoId = Date.now();

    bingos[bingoId] = BingoUtils.blankBingo;

    setBingos(structuredClone(bingos));
  };

  useEffect(() => console.log("update render"));

  const changeBingoPiece = (bingoId, piece, newValue) => {
    bingos[bingoId][piece] = newValue;

    console.log(bingos);
    setBingos(structuredClone(bingos));
  };

  const pickNumber = () => {
    const newPick = prompt("Qual o número que saiu?");
    numbersPickeds.push(newPick);
    console.log(numbersPickeds);

    setNumbersPickeds([...numbersPickeds]);
  };

  return (
    <div className="App">
      <S.BingosContainer>
        {Object.keys(bingos).map((bingoId) => (
          <BingoTable
            key={bingoId}
            callback={changeBingoPiece}
            bingoId={bingoId}
            bingo={bingos[bingoId]}
          />
        ))}
      </S.BingosContainer>

      <button onClick={createNewBingo}>Criar novo bingo</button>
      <button onClick={pickNumber}>Novo numero</button>
    </div>
  );
}

export default App;
