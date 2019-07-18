import React from 'react';

import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import Modal from './Modal';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPick: (answer: Answer, question: Question) => void;
  toggleModal: boolean;
  closeModal: any;
  message: string;
  hint: string;
  answerNumber: number;
}

export default function QuestionView({ question, onPick, toggleModal, closeModal, message, hint, answerNumber }: Props) {

  const onPickAnswer = (answer: Answer) => onPick(answer, question);
  
  const onCloseModal = closeModal;
  const onToggleModal = toggleModal;

  return (
    <div>
      <QuestionText text={question.title} />
      <QuestionImage />
      <AnswerPicker 
        onPick={onPickAnswer} 
        answers={question.answers} 
      />
      <Modal 
        toggleModal={onToggleModal}
        closeModal={onCloseModal}
        message={message}
        hint={hint}
        answerNumber={answerNumber}
      />
    </div>
  );
}
