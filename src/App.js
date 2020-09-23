import React from 'react';
import './App.css';
import './Tweet.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Info from './Components/Info'
import Calendar from './Components/Calendar'
import Main from "./Components/MainPage"
import Graph from "./Components/Graph"
import ChatBox from "./Components/Chatbox"
import AllMentors from "./Components/MentorsList"
import Improvements from "./Components/Improvements"
// import DateTimePickerF from "./Components/DatePicker"
// import LoginMax from "./Components/login(max)"
// import SignUpPage from "./Components/SignUp"
import Login from "./Components/Login"
import Register from "./Components/Register"
// import Cms from './Cms';


import HomePage from "./HomePage";
import { createBrowserHistory as createHistory } from "history";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";


const history = createHistory();
function App({ calendarStore }) {
  return (
    <div>
      <Router history={history}>
        <Navbar className="navbar" bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="#home">Erticulate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar-ul">
              <Link className="navbar-li " to="/"><i className="Logo" class="fas fa-door-open"></i>Login  </Link>
              <Link className="navbar-li " to="/register"><i className="Logo" class="far fa-user-circle"></i>SignUp </Link>
              <Link className="navbar-li " to="/mentors"><i className="Logo" class="fas fa-info"></i>Mentors </Link>
              <Link className="navbar-li " to="/chat"><i className="Logo" class="far fa-comments"></i>Chat </Link>
              <Link className="navbar-li " to="/calendar"><i className="Logo" class="far fa-calendar-alt"></i>Calendar </Link>
              <Link className="navbar-li " to="/graph"><i className="Logo" class="fas fa-chart-bar"></i>Feedback </Link>
              <Link className="navbar-li " to="/improvements"><i className="Logo" class="fas fa-tasks"></i>Progress  </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            {/* <SignUpPage/> */}
            <Register />
          </Route>
          <Route path="/mentors">
            <AllMentors />
            <Info />
            <ChatBox />
          </Route>
          <Route path="/chat">
            <Main />
            <ChatBox />
          </Route>
          <Route
            path="/calendar"
            exact
            component={props => (
              <HomePage {...props} calendarStore={calendarStore} />
            )}
          >
          </Route>
          <Route path="/graph">
            <Graph />
            <ChatBox />
          </Route>
          <Route path="/improvements">
            <Improvements />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

