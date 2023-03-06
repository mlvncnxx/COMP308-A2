import React, { useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Jumbotron } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Banner from "../images/StudentRegistration.png";

function CreateStudent(props) {
  let navigate = useNavigate()
  //
  const [student, setStudent] = useState({
    _id: "",
    studentId: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    program: "",
    address: "",
    city: "",
    favoriteSubject: "",
    favoriteTopic: "",
  });
  const [showLoading, setShowLoading] = useState(false);
  const apiUrl = "http://localhost:3000/";

  const saveStudent = (e) => {
    setShowLoading(true);
    e.preventDefault();
    const data = {
      studentId: student.studentId,
      firstName: student.firstName,
      lastName: student.lastName,
      phoneNumber: student.phoneNumber,
      email: student.email,
      password: student.password,
      program: student.program,
      address: student.address,
      city: student.city,
      favoriteSubject: student.favoriteSubject,
      favoriteTopic: student.favoriteTopic,
    };
    axios.post(apiUrl, data)
      .then((result) => {
        setShowLoading(false);
        navigate('/show/' + result.data._id)
      }).catch((error) => setShowLoading(false));
  };

  const onChange = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      
        <h2 className="h2-style" align="center">Student Sign up</h2>
        {showLoading && 
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
        {/* <Jumbotron> */}
          <Form onSubmit={saveStudent}>
            <Form.Group>
              <Form.Label>Student Id</Form.Label>
              <Form.Control
                type="text"
                name="studentId"
                id="studentId"
                placeholder="Enter student number"
                value={student.studentId}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                value={student.firstName}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                value={student.lastName}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={student.phoneNumber}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                rows="3"
                placeholder="Enter email"
                value={student.email}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={student.password}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Program</Form.Label>
              <Form.Control
                type="text"
                name="program"
                id="program"
                placeholder="Enter program"
                value={student.program}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                rows="3"
                placeholder="Enter address"
                value={student.address}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                rows="3"
                placeholder="Enter City."
                value={student.city}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Favorite Subject</Form.Label>
              <Form.Control
                type="text"
                name="favoriteSubject"
                id="favoriteSubject"
                placeholder="Enter Favorite Subject."
                value={student.favoriteSubject}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Favorite Topic</Form.Label>
              <Form.Control
                type="text"
                name="favoriteTopic"
                id="favoriteTopic"
                placeholder="Enter Favorite Topic."
                value={student.favoriteTopic}
                onChange={onChange}
              />
            </Form.Group>
            <br />
            <Button variant="outline-primary col-12" type="submit">
              Save
            </Button>
          </Form>
        {/* </Jumbotron> */}
      </div>
    // </div>
  );
}

export default CreateStudent;
