import React from 'react';

import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import QuestionView from '../components/QuestionView';
import { questions } from '../questions';

export const actions = {
  onPick: action('onPick'),
};

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionView', () => (
    <QuestionView question={object('question', questions[0])} {...actions} />
  ));
