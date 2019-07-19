import React from 'react';

import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import QuestionImage from '../components/QuestionImage';

const testText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionImage', () => <QuestionImage />);
