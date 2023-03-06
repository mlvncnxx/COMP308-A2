import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Jumbotron } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Banner from "../images/StudentRegistration.png";

function EditStudent(props) {
  let navigate = useNavigate();
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
    favoriteTopic: ""
  });
  const [showLoading, setShowLoading] = useState(true);
  const apiUrl = "http://localhost:3000/students/" + props.match.params.id;
  //runs only once after the first render
  useEffect(() => {
    setShowLoading(false);
    //call api
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setStudent(result.data);
      console.log(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const updateStudent = e => {
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
      favoriteTopic: student.favoriteTopic
    };
    axios
      .put(apiUrl, data)
      .then(result => {
        setShowLoading(false);
        navigate("/show/" + result.data._id);
      })
      .catch(error => setShowLoading(false));
  };
  //runs when user enters a field
  const onChange = e => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="span12 div-style">
        {showLoading && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {/* <Jumbotron> */}
          <Form onSubmit={updateStudent}>
            <Form.Group>
              <Form.Label> Student Id</Form.Label>
              <Form.Control
                type="text"
                name="studentId"
                id="studentId"
                value={student.studentId}
                disabled
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
              <Form.Label> Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
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
                placeholder="Enter city"
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

            <Button variant="primary col-12" type="submit">
              Update
            </Button>
          </Form>
        {/* </Jumbotron> */}
      </div>
    </div>
  );
}

export default EditStudent;
