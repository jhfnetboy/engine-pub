import TypedReactHooks from "./components/typer"
import useGameControl from "./hooks/game-progress"
import './App.css';

function App() {
  // const [setWalker, getWalker,saveGame,loadGame] = useGameControl()
  // const walkerAttribute = getWalker()
  // const gameProgress = loadGame()
  return (
    <div className="App">
      <header className="App-header">
      <span id="react-root" className="text-white ml-40 mr-40 text-xl font-bold border-8 border-white">
      <TypedReactHooks />
      </span>
        <div>
        <button onClick={()=>{window.location.reload()}}>Restart</button>
        </div>
      </header>
    </div>
  );
}

export default App;
