import { Question } from 'types/Question';

export interface QuestionReducerState {
  questions: Question[];
}

export const questions: Question[] = [
  {
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
  },
];

const initState = {
  questions,
};

const questionsReducer = (state = initState) => {
  return state;
};

export default questionsReducer;
