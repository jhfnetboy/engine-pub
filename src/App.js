import TypedReactHooksDemo from "./components/typer"
import useGameControl from "./hooks/game-progress"
import './App.css';

function App() {
  const [setWalker, getWalker,saveGame,loadGame] = useGameControl()
  const walkerAttribute = getWalker()
  const gameProgress = loadGame()
  return (
    <div className="App">
      <header className="App-header">
        <span><table border="1">
          <tbody>
              <tr>
              <td>STR</td>
              <td>DEX</td>
              <td>CON</td>
              <td>INT</td>
              <td>CHA</td>
              <td>LUC</td>                            
              </tr>
              <tr>
              <td>{walkerAttribute.STR}</td>
              <td>{walkerAttribute.DEX}</td>
              <td>{walkerAttribute.CON}</td>
              <td>{walkerAttribute.INT}</td>
              <td>{walkerAttribute.CHA}</td>
              <td>{walkerAttribute.LUK}</td>                            
              </tr>
          </tbody>              
              </table>
        </span>
      <span id="react-root" className="text-white ml-40 mr-40 text-xl font-bold border-8 border-white">
      <TypedReactHooksDemo />
      </span>
      <span><table border="1">
            <tbody>
              <tr>
              <td>Start</td>
              <td>Layer</td>
              <td>Contribution</td>
              <td>BOSS</td>                           
              </tr>
              <tr>
              <td>{gameProgress.start}</td>
              <td>{gameProgress.layer}</td>
              <td>{gameProgress.contribution}</td>
              <td>{gameProgress.boss}</td>                     
              </tr>
              <tr><td>Progress</td><td colSpan={3}>{gameProgress.progress}</td></tr>
              </tbody>
            </table>
        </span>
        <div>
        <button onClick={()=>saveGame()}>Start</button>
        <button onClick={()=>saveGame()}>Stop</button>
        </div>
      </header>
    </div>
  );
}

export default App;
