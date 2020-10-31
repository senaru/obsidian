import Button from "./components/Button";
import { Column, Grid, Row } from "./components/Grid";
import { Checkbox, Dropdown, Form, InputField, TextArea } from "./components/Inputs";
import List from "./components/List";
import Table from "./components/Table";
import "./style/global.scss";

function App() {
  const headings = ["Name", "Weight"];
  const body = [
    ["Item", "Item Weight"],
    ["Item2", "Item2 Weight"]
  ];
  const listItems = ["Item1", ["Item2", "item 2.1"], "Item3"]

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
          <InputField placeholder="Input Field" label="Input Field" />
          <Dropdown label="Select" options={
            {
              "1": "Option 1",
              "2": "Option 2"
            }
          } />
          <TextArea placeholder="Text area" label="Text area" />
          <Checkbox>Tick</Checkbox>
        </Form>

        {/* Test Table */}
        <Table headings={headings} body={body} />

        {/* Test List */}
        <List items={listItems} subListType="ordered" />
      </header>
    </div>
  );
}

export default App;
