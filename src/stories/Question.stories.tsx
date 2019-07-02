import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Question from "../components/Question";

storiesOf("Question", module)
  .addDecorator(withKnobs)
  .add("default", () => <Question />);
