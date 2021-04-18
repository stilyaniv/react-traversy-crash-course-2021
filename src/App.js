import Header from "./components/Header";
import Tasks from './components/Tasks'
import { useState } from "react";

function App() {
   const [tasks, setTasks] = useState([
     { id: 1, text: "This", day: "Monday", reminder: true },
     { id: 2, text: "Other", day: "Friday", reminder: true },
     { id: 3, text: "Different", day: "Sunday", reminder: false },
   ]);

   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !== id))
   }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
