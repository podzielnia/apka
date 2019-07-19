import React from 'react';

import { object, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import QuestionView from '../components/QuestionView';

export const question = {
  id: '0',
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
  .add('QuestionView', () => (
    <QuestionView question={object('question', question)} {...actions} />
  ));
