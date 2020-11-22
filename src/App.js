import './App.css';
import Weather from "./Weather.js"


export default function App() {
  return (
    <div className="App">
      <div classNam="container">
      <header className="App-header">
          <Weather />
          <footer>Open Source-Code by <a href="https://github.com/isottasala/react-weather-app" target="_blank" rel="noreferrer">Isotta Sala</a></footer>
      </header>
      </div>
    </div>
  );
}

