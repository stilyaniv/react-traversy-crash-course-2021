import Header from "./components/Header";
import Tasks from './components/Tasks'
import { useState } from "react";

function App() {
   const [tasks, setTasks] = useState([
     { id: 1, text: "This", day: "Monday", reminder: true },
     { id: 2, text: "Other", day: "Friday", reminder: true },
     { id: 3, text: "Different", day: "Sunday", reminder: false },
   ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
