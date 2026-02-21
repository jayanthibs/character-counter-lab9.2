import "./App.css";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <>
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={20}/>
    </>
  );
}

export default App;
