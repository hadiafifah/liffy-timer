import './App.css';
import Timer from './_components/Timer/timer'

function App() {
  return (
    <div className="App">

      <div className="Header">
        <div className="headerText">
          <div className="Title">
              <img src="assets/logodraft.png" alt="logo draft" className="logo"></img>
              <h1>Liffy Timer</h1>
          </div>
         
          <div className="otherTitles">
            <h3>About</h3>
            <h3>Settings</h3>
          </div>
        </div>
      </div>

      <div className="featuresContainer">  {/*flexbox with two boxes, one for timer and one for the other features*/}
        <div className="timer Card"> 
        <Timer/>
        </div> {/*div holding timer, white bg, box shadow*/}
        <div className="sideFeaturesContainer"> {/*another flexbox with two vertical boxes, on for */}
          <div className="toDo Card"></div>
          <div className="progress Card"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
