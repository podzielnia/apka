import React from 'react';

import { Answer, Question } from '../types/Question';
import AnswerPicker from './AnswerPicker';
import Modal from './Modal';
import QuestionImage from './QuestionImage';
import QuestionText from './QuestionText';

interface Props {
  question: Question;
  onPick: (answer: Answer, question: Question) => void;
  modalVisible: boolean;
  closeModal: () => void;
  message: string;
  hint: string;
  answerNumber: number;
  questionsLength: number;
}

export default function QuestionView({ question, onPick, modalVisible, closeModal, message, hint, answerNumber, questionsLength }: Props) {

  const onPickAnswer = (answer: Answer) => onPick(answer, question);

  const onCloseModal = closeModal;
  const onModalVisible = modalVisible;

  return (
    <div>
      <QuestionText text={question.title} />
      <QuestionImage />
      <AnswerPicker
        onPick={onPickAnswer}
        answers={question.answers}
      />
      <Modal
        modalVisible={onModalVisible}
        closeModal={onCloseModal}
        message={message}
        hint={hint}
        answerNumber={answerNumber}
        questionsLength={questionsLength}
      />
    </div>
  );
}
