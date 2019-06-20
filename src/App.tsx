import React from "react";

import QuestionText from "./components/QuestionText";
import QuestionImage from "./components/QuestionImage";
import AnswerPicker from "./components/AnswerPicker";
import { lighten, withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const questions = [];

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Podzielnia
          </Typography>
        </Toolbar>
      </AppBar>
      <BorderLinearProgress
        variant="determinate"
        color="secondary"
        value={50}
      />
      <QuestionText />
      <QuestionImage />
      <AnswerPicker />
    </div>
  );
};

export default App;
