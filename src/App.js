import './App.css';
import Weather from "./Weather"
function App() {
  return (
    <div className="App">
      <Weather defaultcity="New York" />
      <footer className="GitHub-link">
        <a href="https://github.com/njm-5558/react-weather-week5">
          Open-source code
        </a>
        <span> ,by Najme Babai, SheCodes student</span>
      </footer>
    </div>
  );
}

export default App;
