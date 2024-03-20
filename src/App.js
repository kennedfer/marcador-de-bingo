import "./styles/App.css";
import { BingoTable } from "./components/BingoTable/BingoTable";
import S from "./components/styles/styles";

function App() {
  const bingos = {};

  return (
    <div className="App">
      <S.BingosContainer>
        <BingoTable></BingoTable>
        <BingoTable></BingoTable>
        <BingoTable></BingoTable>
      </S.BingosContainer>
    </div>
  );
}

export default App;
