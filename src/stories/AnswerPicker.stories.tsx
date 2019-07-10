import React from 'react';

import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import AnswerPicker from '../components/AnswerPicker';

export const question = {
  id: 0,
  title: 'Planujesz wakacje..',
  answers: [
    { text: 'Pociąg i rower, w przyrodzie', isCorrect: true },
    { text: 'Byle jak najdalej, samolotem', isCorrect: false },
  ],
  hints: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. ',
    'Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet,',
  ],
};

export const actions = {
  onPick: action('onPick'),
};

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('AnswerPicker', () => (
    <AnswerPicker {...actions} answers={object('answers', question.answers)} />
  ));
