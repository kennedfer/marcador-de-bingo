import "./styles/App.css";
import { BingoTable } from "./components/BingoTable/BingoTable";
import S from "./components/styles/styles";
import { useEffect, useState } from "react";
import { BingoUtils } from "./utils";

import xIcon from "./icons/x-icon.svg";
import refreshIcon from "./icons/refresh-icon.svg";
import diceIcon from "./icons/dice-icon.svg";

function App() {
  const [bingos, setBingos] = useState({});
  const [numbersPickeds, setNumbersPickeds] = useState([]);

  const createNewBingo = () => {
    const bingoId = BingoUtils.getBingoId();

    bingos[bingoId] = BingoUtils.blankBingo;

    setBingos(structuredClone(bingos));
  };

  const changeBingoPiece = (bingoId, piece, newValue) => {
    bingos[bingoId].pieces[piece] = newValue;

    console.log(bingos);
    setBingos(structuredClone(bingos));
  };

  const checkPiecesToMark = () => {
    Object.entries(bingos).forEach(([bingoId, bingo]) => {
      Object.values(bingo.pieces).forEach(({ number }, index) => {
        bingos[bingoId].pieces[index].isMarked =
          numbersPickeds.includes(number);
      });
    });

    setBingos(structuredClone(bingos));
  };

  const pickNumber = () => {
    const newPick = prompt("Qual o número que saiu?");
    numbersPickeds.push(newPick);
    console.log(numbersPickeds);

    checkPiecesToMark();
    setNumbersPickeds([...numbersPickeds]);
  };

  const deleteAllBingos = () => {
    const canDelete = window.confirm(
      "Tem certeza que deseja deletar todos os bingos?"
    );
    if (canDelete) setBingos({});
  };

  const clearNumbersPickeds = () => {
    const canClear = window.confirm(
      "Tem certeza que deseja iniciar um novo sorteio?"
    );
    if (canClear) {
      setNumbersPickeds([]);
      checkPiecesToMark();
    }
  };

  useEffect(() => checkPiecesToMark(), [numbersPickeds]);

  return (
    <div className="App">
      <S.BingosContainer>
        {Object.keys(bingos).map((bingoId) => (
          <S.Bingo>
            <S.BingoName type="text" defaultValue="Meu Bingo..." />
            <BingoTable
              key={bingoId}
              callback={changeBingoPiece}
              bingoId={bingoId}
              bingo={bingos[bingoId]}
            />
          </S.Bingo>
        ))}

        <S.NewBingoButton onClick={createNewBingo}>Novo Bingo</S.NewBingoButton>
      </S.BingosContainer>

      <S.FloatingLayout>
        <S.IconsButton
          onClick={deleteAllBingos}
          clear
          src={xIcon}
        ></S.IconsButton>
        <S.IconsButton src={diceIcon} onClick={pickNumber}></S.IconsButton>
        <S.IconsButton
          onClick={clearNumbersPickeds}
          refresh
          src={refreshIcon}
        ></S.IconsButton>
      </S.FloatingLayout>
    </div>
  );
}

export default App;
