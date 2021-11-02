import TypedReactHooksDemo from "./components/typer"
import useGameControl from "./hooks/game-progress"
import './App.css';

function App() {
  const [saveWalker, getWalker, loadWalker,saveGame,loadGame] = useGameControl()
  return (
    <div className="App">
      <header className="App-header">
        <span><table border="1">
              <tr>
              <td>STR</td>
              <td>DEX</td>
              <td>CON</td>
              <td>INT</td>
              <td>CHA</td>
              <td>LUC</td>                            
              </tr>
              <tr>
              <td>{getWalker().STR}</td>
              <td>{getWalker().DEX}</td>
              <td>{getWalker().CON}</td>
              <td>{getWalker().INT}</td>
              <td>{getWalker().CHA}</td>
              <td>{getWalker().LUK}</td>                            
              </tr>
              </table>
        </span>
      <span id="react-root" className="text-white ml-40 mr-40 text-xl font-bold border-8 border-white">
      <TypedReactHooksDemo />
      </span>
      <span><table border="1">
              <tr>
              <td>Start</td>
              <td>Layer</td>
              <td>Contribution</td>
              <td>BOSS</td>                           
              </tr>
              <tr>
              <td>{loadGame().start}</td>
              <td>{loadGame().layer}</td>
              <td>{loadGame().contribution}</td>
              <td>{loadGame().boss}</td>                     
              </tr>
              <tr><td>Progress</td><td colSpan={3}>{loadGame().progress}</td></tr>
              </table>
        </span>
        <div>
        <button onClick={saveGame()}>Start</button>
        <button onClick={saveGame()}>Stop</button>
        </div>
      </header>
    </div>
  );
}

export default App;
