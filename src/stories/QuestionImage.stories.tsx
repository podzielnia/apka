import React from 'react';

import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import QuestionImage from '../components/QuestionImage';

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('QuestionImage', () => (
    <QuestionImage image={object('image', undefined)} />
  ));
