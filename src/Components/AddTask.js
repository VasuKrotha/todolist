const AddTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  themecol,
  setthemcol,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatetask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              names: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      console.log(updatetask);
      setTasklist(updatetask);
      setTask({});
    } else {
      const date = new Date();
      const newtask = {
        id: date.getTime(),
        names: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newtask]);
      setTask({});
    }
  };

  const bordercolor = themecol === "light" ? "dark" : "light";

  return (
    <div
      className="mt-5 container my-5
    "
    >
      <section>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="mt-1">
              <input
                type="text"
                placeholder="addTask"
                name="task"
                autoComplete="off"
                value={task.names || ""}
                onChange={(e) => setTask({ ...task, names: e.target.value })}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-danger mx-3  ">
                {task.id ? "update" : "Add "}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
