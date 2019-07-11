import React from 'react';

import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import AnswerPicker from '../components/AnswerPicker';

export const question = {
  title: 'Planujesz wakacje..',
  answers: [
    {
      text: 'Pociąg i rower, w przyrodzie',
      isCorrect: true,
      hint:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. ',
    },
    {
      text: 'Byle jak najdalej, samolotem',
      isCorrect: false,
      hint:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. ',
    },
  ],
  image: '',
};

export const actions = {
  onPick: action('onPick'),
};

storiesOf('Question', module)
  .addDecorator(withKnobs)
  .add('AnswerPicker', () => (
    <AnswerPicker {...actions} answers={object('answers', question.answers)} />
  ));
