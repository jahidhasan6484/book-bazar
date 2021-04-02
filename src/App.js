import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import CheckOut from "./components/CheckOut/CheckOut";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import AddBook from "./components/AddBook/AddBook";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/order">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          {/* <Route path="/manageBooks">
            <ManageBooks></ManageBooks>
          </Route>
          <Route path="/addBooks">
            <AddBook></AddBook>
          </Route> */}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
