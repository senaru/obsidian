import Button from "./components/Button";
import { Column, Grid, Row } from "./components/Grid";
import "./style/global.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Test Btn */}
        <Button type="button" value="value" variant="primary">Test btn</Button>

        {/* Test Grid */}
        <Grid>
          <Row>
            <Column size="one">
              One
            </Column>
            <Column size="eleven">
              Eleven
            </Column>
          </Row>
        </Grid>

      </header>
    </div>
  );
}

export default App;
