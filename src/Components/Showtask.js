import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Showtask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  themecol,
  setthemcol,
}) => {
  const handleDelete = (id) => {
    const updatetask = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatetask);
  };

  const handleEdit = (id) => {
    const selecttask = tasklist.find((todo) => todo.id === id);
    setTask(selecttask);
  };

  const bordercolor = themecol === "light" ? "dark" : "light";

  return (
    <div
      className={`container border border-1 rounded-2 border-${bordercolor} `}
    >
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex justify-content-center">
          <div className="h5">Todo</div>
          <div className=" mx-1">
            <div className="circle">{tasklist.length}</div>
          </div>
        </div>

        <div>
          <button className="btn btn-primary" onClick={() => setTasklist([])}>
            Clearall
          </button>
        </div>
      </div>
      <hr style={{ border: "2px solid " }} />
      <div>
        <div className="container-fluid">
          <div className="row">
            {tasklist.map((item) => (
              <div className="col-xl-3 col-md-5 col-sm-6 " key={item.id}>
                <div
                  className={`d-flex justify-content-between border border-2 border-${bordercolor} p-2 my-3`}
                >
                  <div className="d-flex flex-column justify-content-start ">
                    <div>{item.names}</div>
                    <div style={{ fontSize: 11 }}>{item.time}</div>
                  </div>
                  <div className="d-flex flex-row mt-2">
                    <div style={{ color: "blue" }}>
                      <i
                        className="bi bi-pencil-square "
                        onClick={() => handleEdit(item.id)}
                      ></i>
                    </div>

                    <div style={{ color: "red" }}>
                      <i
                        className="bi bi-trash-fill"
                        onClick={() => handleDelete(item.id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showtask;
