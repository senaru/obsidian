import Accordion from "./components/Accordion";
import Button from "./components/Button";
import { Column, Grid, Row } from "./components/Grid";
import { Checkbox, Dropdown, Form, InputField, TextArea } from "./components/Inputs";
import List from "./components/List";
import Radio from "./components/Radio/radio";
import Table from "./components/Table";
import { Tab, TabContent } from "./components/Tabs";
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

        {/* Test Radio Button */}
        <Radio>Radio Button</Radio>
        <Radio>Radio Button</Radio>

        {/* Test Tabs */}
        {/* <Tab tabs={[["#id", "displayName"], ["#id2", "displayName2"]]} />
        <TabContent id="id" active={true}>Tab 1 Content</TabContent>
        <TabContent id="id2">Tab 2 Content</TabContent> */}

        {/* Test Accordion */}
        <Accordion header="Click Me">Testing Accordion</Accordion>
        <Accordion header="Click Me too">Testing 2nd Accordion</Accordion>

      </header>
    </div>
  );
}

export default App;
