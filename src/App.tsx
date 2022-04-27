import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { Wordle } from "./components/wordle";
import { allwordsMap } from "./dictionaries/allwords";
import { wordsMap } from "./dictionaries/words";
import { globalStyles, theme } from "./styleOverrides";

function App() {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Wordle wordsMap={wordsMap} allwordsMap={allwordsMap}></Wordle>
      </ThemeProvider>
    </>
  );
}

export default App;
