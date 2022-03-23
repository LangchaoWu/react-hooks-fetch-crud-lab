import React, { useState ,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(questions=>setQuestions(questions))
  },[])

  function addQuestionHanlder(newQuestion){
    setQuestions([...questions,newQuestion])
  }

  function onDeleteHanler(deletedQuestion){
    const newQuestions=questions.filter((question)=>{return question.id!== deletedQuestion.id})
    setQuestions(newQuestions)
  }

  function onChangeHandler(updateQuestion){
    const newQuestions=questions.map((question)=>{
       if(question.id === updateQuestion.id)
        {return updateQuestion}
        else {return question}
      })

    setQuestions(newQuestions)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestionHanlder={addQuestionHanlder} /> : <QuestionList questions={questions} onDeleteHanler={onDeleteHanler} onChangeHandler={onChangeHandler}/>}
    </main>
  );
}

export default App;
