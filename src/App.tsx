import ClickableButton from "./components/Button";
import FavoriteButton from "./components/FavoriteButton";
import InputField from "./components/Input";
import Rating from "./components/Rating";

function App() {
  return (
    <>
      <ClickableButton>How it Works?</ClickableButton>
      <InputField value="" />
      <Rating value={3} />
      <FavoriteButton pressed={false} />
    </>
  );
}

export default App;
