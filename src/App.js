import Button from "./components/Button";
import { Column, Grid, Row } from "./components/Grid";
import { Dropdown, Form, InputField, TextArea } from "./components/Inputs";
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

        <br />

        {/* Test Form */}
        <Form>
          <InputField placeholder="Input Field" label="Input Field" type="text" />
          <Dropdown label="Select" options={
            {
              "1": "Option 1",
              "2": "Option 2"
            }
          } />
          <TextArea placeholder="Text area" label="Text area" />
        </Form>
      </header>
    </div>
  );
}

export default App;
