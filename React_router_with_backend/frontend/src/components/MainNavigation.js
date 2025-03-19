import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            HOME
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            EVENTS
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
