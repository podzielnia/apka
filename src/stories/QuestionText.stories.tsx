import React from 'react';

import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import QuestionText from '../components/QuestionText';

const testText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionText', () => <QuestionText text={object('text', testText)} />);
