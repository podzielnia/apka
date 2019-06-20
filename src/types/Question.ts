export interface Question {
  id: number;
  title: string;
  answers: Answer[];
  hints: string[];
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
