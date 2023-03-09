import { Provider } from "react-redux";
import SearchPage from "./pages/Search";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </>
  );
}

export default App;
