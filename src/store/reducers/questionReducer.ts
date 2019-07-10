import { Question } from 'types/Question';

export interface QuestionReducerState {
  questions: Question[];
}

export const questions: Question[] = [
  {
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
  },
  {
    id: 1,
    title: 'Jaką wodę wybierasz?',
    answers: [
      { text: 'Kranówkę z wielorazowego bidonu', isCorrect: true },
      { text: 'Ze sklepu w jednorazowej butelce', isCorrect: false },
    ],
    hints: [
      'Picie wody z kranu to oszczędność dla środowiska (nie powstaje zbędny plastik) i dla Twojej kieszeni. Ogromna większość wodociągów w Polsce zapewnia wodę o jakości lepszej niż przeciętna woda z butelki. Najlepiej nalewać ją kilka sekund po odkręceniu kranu do metalowego lub szklanego bidonu.',
    ],
  },
  {
    id: 2,
    title: 'W Twojej ulubionej bluzie zepsuł się zamek. Co robisz?',
    answers: [
      { text: 'Zanoszę do naprawy do krawca', isCorrect: true },
      { text: 'Kupuję nową', isCorrect: false },
    ],
    hints: [
      'Przemysł modowy należy do największych trucicieli świata.  Aby wyprodukować jedna bluzę należy zużyć 10 tys litrów wody. Lepiej naprawiać ...',
      'Naprawianie zepsutych rzeczy to jedna z głównych zasad ekologicznego stylu życia. Lepiej naprawić niż wyrzucać. To oszczędność zasobów ziemi, które się kończą (uprawy roślin dla przemysłu modowego pochłaniają ogromne ilości wody i prowadzą do zmian w rolnictwie) oraz pieniędzy. To także stawianie oporu przemysłowi reklamowemu, który wciąż namawia nas do kupowania.',
    ],
  },
];

const initState = {
  questions,
};

const questionsReducer = (state = initState) => {
  return state;
};

export default questionsReducer;
