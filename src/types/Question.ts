export interface Question {
  id: string;
  title: string;
  answers: Answer[];
  image: string;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
  hint: string;
}
