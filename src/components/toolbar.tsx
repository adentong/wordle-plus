import LinkIcon from "@mui/icons-material/Link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, InputLabel, Link, MenuItem, Select, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ToWords } from "to-words";
import { maxWordLen, minWordLen } from "../app/constants";
import { ToolbarProps } from "../app/types";
import { buttonSxProps } from "../styleOverrides";

const toWords = new ToWords();

export const ToolbarComponent: React.FC<ToolbarProps> = (props) => {
  return (
    <ThemeProvider theme={props.theme}>
      <div className="toolbar">
        <div className="toolbar_left">
          {props.gameState === "new" && (
            <div>
              <div className="num_guesses_setting">
                <InputLabel sx={{ color: "var(--color-tone-1)" }}>Number of Guesses:</InputLabel>
                <TextField
                  size="small"
                  value={props.numGuesses}
                  onChange={props.onGuessesChanged}
                  sx={{ marginLeft: "8px", width: 50 }}
                  error={!props.isGuessesValid()}
                />
              </div>
              <div className="num_characters_setting">
                <InputLabel sx={{ color: "var(--color-tone-1)" }}>Word Length:</InputLabel>
                <Select
                  size="small"
                  value={props.numCharacters}
                  onChange={props.onCharactersChanged}
                  sx={{ width: 95 }}
                >
                  {Array.from({ length: maxWordLen - minWordLen + 1 }, (_, i) => i + minWordLen).map((i) => (
                    <MenuItem key={i} value={i}>
                      {toWords.convert(i)}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="time_limit_setting_container">
                <div className="time_limit_setting">
                  <InputLabel sx={{ color: "var(--color-tone-1)" }}>Time Limit:</InputLabel>
                  <TextField
                    size="small"
                    value={props.timeLimit}
                    onChange={props.onTimeLimitChanged}
                    sx={{ width: 75 }}
                    error={!props.isTimeLimitValid()}
                  />
                </div>
                <div className="time_limit_setting_description">in seconds. 0=no time limit</div>
              </div>
            </div>
          )}
          {props.gameState !== "new" && (
            <Link
              component="button"
              onClick={props.shareLink}
              sx={{ display: "flex", alignItems: "center", fontSize: "16px", color: "var(--color-tone-2)" }}
              underline="none"
            >
              <LinkIcon sx={{ marginRight: "4px" }} />
              Copy link to this game
            </Link>
          )}
        </div>
        <div className="spacer"></div>
        <div className="toolbar_right">
          {props.gameState === "new" ? (
            <Button
              variant="contained"
              size="medium"
              onClick={props.start}
              sx={buttonSxProps}
              disabled={!props.isValid()}
            >
              Start
              <PlayArrowIcon sx={{ marginLeft: "4px" }} />
            </Button>
          ) : (
            <Button variant="contained" size="medium" onClick={props.reset} sx={buttonSxProps}>
              Reset
              <RestartAltIcon sx={{ marginLeft: "4px" }} />
            </Button>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};
