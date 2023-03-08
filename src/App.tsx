import ClickableButton from "./components/Button";
import InputField from "./components/Input";
import Rating from "./components/Rating";

function App() {
  return (
    <>
      <ClickableButton>How it Works?</ClickableButton>
      <InputField value="" />
      <Rating value={3} />
    </>
  );
}

export default App;
