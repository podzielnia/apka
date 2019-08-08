import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import QuestionImage from '../components/QuestionImage';

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionImage', () => <QuestionImage />);
