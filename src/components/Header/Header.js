import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../../store/auth-slice";

const Header = (props) => {
  const dispatch = useDispatch();
  const showAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Expenses Calculator</h1>
      {showAuth && (
        <nav>
          <ul>
            <li>
              <button onClick={props.showProfile}>My Profile</button>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
