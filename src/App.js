import './App.css';
import log from 'loglevel'


function App() {
    log.setLevel("info")
    log.debug("123456")
    log.info("123456")
    log.warn("123456")
    log.error("123456")

  return (
    <div>
      <header className="App-header">
        <p> React Logger sample</p>
      </header>
    </div>
  );
}

export default App;
