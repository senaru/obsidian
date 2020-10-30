import Button from "./components/Button";
import "./style/global.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="button" value="value" variant="primary">Test btn</Button>
      </header>
    </div>
  );
}

export default App;
