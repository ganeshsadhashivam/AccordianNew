import { useState } from "react";
import data from "./data";
import "./App.css";
import Questions from "./Questions";

// function App() {
//   const [questions, setQuestions] = useState(data);

//   return (
//     <main className="App">
//       <Questions questions={questions} />
//     </main>
//   );
// }

//Alternative
function App() {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
    console.log(id);
  };
  return (
    <main className="App">
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;
