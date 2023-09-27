import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import Showtask from "./Components/Showtask";

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  const [themecol, setthemcol] = useState("light");

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header themecol={themecol} setthemcol={setthemcol} />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        themecol={themecol}
        setthemcol={setthemcol}
      />
      <Showtask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        themecol={themecol}
        setthemcol={setthemcol}
      />
    </div>
  );
}

export default App;
