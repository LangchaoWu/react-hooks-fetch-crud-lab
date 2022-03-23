import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onDeleteHanler,onChangeHandler}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=>{ return <QuestionItem key={question.id} question={question} onDeleteHanler={onDeleteHanler} onChangeHandler={onChangeHandler}></QuestionItem>})}</ul>
    </section>
  );
}

export default QuestionList;
