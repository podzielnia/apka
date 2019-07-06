import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import QuestionView from "../components/QuestionView";
import { questions } from "../questions";
import { action } from "@storybook/addon-actions";

export const actions = {
  onPick: action("onPick")
};

storiesOf("Question", module)
  .addDecorator(withKnobs)
  .add("QuestionView", () => (
    <QuestionView question={object("question", questions[0])} {...actions} />
  ));
