import "./styles/App.css";
import { BingoTable } from "./components/BingoTable/BingoTable";

function App() {
  const bingos = {};

  return (
    <div className="App">
      <div>
        <BingoTable></BingoTable>
        <BingoTable></BingoTable>
        <BingoTable></BingoTable>
      </div>
    </div>
  );
}

export default App;
