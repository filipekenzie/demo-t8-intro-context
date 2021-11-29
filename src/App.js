import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Display />
      </header>
    </div>
  );
}

export default App;
