import Routers from "./pages";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeProvider from "./theme";
import "../src/assets/css/style-main.css";

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
