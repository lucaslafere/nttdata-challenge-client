import { Button } from "@ui5/webcomponents-react"; // loads ui5-button wrapped in a ui5-webcomponents-react component

function App() {
  return <Button onClick={() => alert("Hello World!")}>Hello world!</Button>;
}

export default App;
