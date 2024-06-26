import "./styles/App.css";
import { BingoTable } from "./components/BingoTable/BingoTable";
import S from "./components/styles/styles";
import { useEffect, useState } from "react";
import { BingoUtils } from "./utils";

import xIcon from "./icons/x-icon.svg";
import refreshIcon from "./icons/refresh-icon.svg";
import diceIcon from "./icons/dice-icon.svg";

function App() {
  const [bingos, setBingos] = useState(BingoUtils.getBingosFromLocalStorage());
  const [numbersPickeds, setNumbersPickeds] = useState([]);

  function changeBingoName(evt, bingoId) {
    bingos[bingoId].name = evt.target.value;
  }

  function checkBingos() {
    const winnersBingos = Object.values(bingos).filter((bingo) =>
      BingoUtils.checkBingo(bingo)
    );

    winnersBingos.forEach(bingo =>  alert("Voce ganhou no bingo: "+bingo.name));
  }

  const refreshBingos = () => {
    setBingos(structuredClone(bingos));
  };

  const createNewBingo = () => {
    const bingoId = BingoUtils.getBingoId();
    bingos[bingoId] = BingoUtils.blankBingo;

    refreshBingos();
  };

  const changeBingoPiece = (bingoId, piece, newValue) => {
    bingos[bingoId].pieces[piece] = newValue;

    BingoUtils.saveBingosToLocalStorage(bingos);

    refreshBingos();
  };

  const checkPiecesToMark = () => {
    Object.entries(bingos).forEach(([bingoId, bingo]) => {
      Object.values(bingo.pieces).forEach(({ number }, index) => {
        bingos[bingoId].pieces[index].isMarked =
          numbersPickeds.includes(number);
      });
    });

    refreshBingos();
  };

  const pickNumber = () => {
    const newPick = prompt("Qual o número que saiu?");
    numbersPickeds.push(newPick);

    checkPiecesToMark();
    checkBingos();
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

  function changeBingoType({ target }, bingoId) {
    bingos[bingoId].type = target.value;
  }

  useEffect(checkPiecesToMark, [numbersPickeds]);

  return (
    <div className="App">
      <S.BingosContainer>
        {Object.keys(bingos).map((bingoId) => (
          <S.Bingo>
            <S.BingoName type="text" onChange={(evt)=>changeBingoName(evt, bingoId)} defaultValue="Meu Bingo..." />
            <BingoTable
              key={bingoId}
              callback={changeBingoPiece}
              bingoId={bingoId}
              bingo={bingos[bingoId]}
            />
            <select onChange={(e) => changeBingoType(e, bingoId)}>
              <option value="QUINA">Quina</option>
              <option value="FULL">Cartela cheia</option>
            </select>
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
