import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/to-do-list.png";
import { useEffect, useState } from "react";

const Header = ({ themecol, setthemcol }) => {
  const [theme, setTheme] = useState("light");

  const changetheme = () => {
    if (theme === "dark") {
      setTheme("light");
      setthemcol("light");
    } else {
      setTheme("dark");
      setthemcol("dark");
    }
  };

  const bordercolor = themecol === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header>
      <div
        className={`container border-${bordercolor} d-flex flex-row justify-content-around mt-4`}
      >
        <div className="d-flex flex-row">
          <div>
            <img src={logo} alt="logo" height={50} width={50} />
          </div>
          <div className="m-2 h2">To Do List</div>
        </div>

        <div class="form-check form-switch ">
          <button onClick={changetheme} type="button" className="btn border-0">
            {theme === "light" ? (
              <div className="text-warning">
                <i className="bi bi-brightness-high-fill bi-2x"></i>
              </div>
            ) : (
              <div className="text-light">
                <i class="bi bi-moon-fill bi-2x"></i>
              </div>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
