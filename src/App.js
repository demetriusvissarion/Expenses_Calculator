import React, { Fragment, useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//// Test Counter
// import Child1 from "./TestCounter/child1";
// import "./TestCounter/child1.css";

import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import UserProfile from "./components/UserProfile/UserProfile";
import { useSelector } from "react-redux";

const App = () => {
  const showAuth = useSelector((state) => state.auth.isAuthenticated);
  const [showProfile, setShowProfile] = useState(false);

  const showProfileHandler = () => {
    setShowProfile(!showProfile);
  };

  // const dispatch = useDispatch();

  // const loginHandler = (event) => {
  //   event.preventDefault();

  //   dispatch(authActions.login());
  // };

  return (
    <div>
      <Header />
      {!showAuth && <Auth />}
      {showAuth && (
        <Fragment>
          {showProfile && <UserProfile showProfile={showProfileHandler} />}
          <NewExpense />
          <Expenses />
        </Fragment>
      )}
    </div>
  );
};

//// Test Counter
// export function Counter() {
//   const [count, setCount] = useState(0);

//   const handleAdd = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div className="child1_container">
//       <h4>Counter</h4>
//       <Child1 handleAdd={handleAdd} />
//       {count}
//     </div>
//   );
// }

export default App;
