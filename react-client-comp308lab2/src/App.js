import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
//
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
//
import List from "./components/List";
import ListCourses from "./components/ListCourses";
import ListAllCourses from "./components/ListAllCourses";
import EditStudent from "./components/EditStudent";
import EditCourse from "./components/EditCourse";

import CreateStudent from "./components/CreateStudent";
import ShowStudent from "./components/ShowStudent";
import ShowCourse from "./components/ShowCourse";
import ShowCourseView from "./components/ShowCourseView";

import Home from "./components/Home";
import Login from "./components/Login";
//
function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Student Registration</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home" >Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/list">List of Students</Nav.Link>
              <Nav.Link as={Link} to="/listallcourses">List of Courses</Nav.Link>
              <Nav.Link as={Link} to="/create">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <div>
        <Route render={() => <Home />} path="/home" />
        <Route render={() => <Login />} path="/login" />
        <Route render={() => <List />} path="/list" />
        <Route render={() => <ListCourses />} path="/listcourses" />
        <Route render={() => <ListAllCourses />} path="/listallcourses" />
        <Route render={() => <EditStudent />} path="/edit/:id" />
        <Route render={() => <EditCourse />} path="/editCourse/:id" />
        <Route render={() => <CreateStudent />} path="/create" />
        <Route render={() => <ShowStudent />} path="/show/:id" />
        <Route render={() => <ShowCourse />} path="/showcourse/:id" />
        <Route render={() => <ShowCourseView />} path="/showcourseview/:id" />
      </div> */}
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/listcourses" element={<ListCourses />} />
          <Route path="/listallcourses" element={<ListAllCourses />} />
          <Route path="/edit/:id" element={<EditStudent />} />
          <Route path="/editCourse/:id" element={<EditCourse />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/show/:id" element={<ShowStudent />} />
          <Route path="/showcourse/:id" element={<ShowCourse />} />
          <Route path="/showcourseview/:id" element={<ShowCourseView />} />
        </Routes>
      </div>
    </Router>
  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
