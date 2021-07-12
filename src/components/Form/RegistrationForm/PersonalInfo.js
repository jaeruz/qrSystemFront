import React, { useState, useEffect } from "react"
import { Form, Button, Col, Row, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { createUser } from "../../../actions/UserActions"
import uImage from "../../../img/user.png"
import FileBase from "react-file-base64"

const PersonalInfo = (props) => {
  const dispatch = useDispatch()
  const [subdivisionList, setSubdivisionList] = useState([])

  useEffect(() => {
    setSubdivisionList([
      "Southville",
      "Sunrise",
      "Maripas",
      "Celistine",
      "St. Joseph 7",
      "Purok 1",
      "Purok 2",
      "Purok 3",
      "Purok 4",
      "Purok 5",
      "Purok 6",
    ])
  }, [])

  const [userDetails, setUserDetails] = useState({
    firstName: null,
    middleName: null,
    lastName: null,
    birthDate: null,
    classification: null,
    contactNo: null,
    address: {
      phase: null,
      streetNo: null,
      houseNo: null,
      subdivision: null,
    },
    userImage: null,
    dateRegistered: null,
  })

  useEffect(() => {
    console.log(userDetails.userImage)
  }, [userDetails])
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.id]: e.target.value.toUpperCase(),
      dateRegistered: new Date(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(userDetails))
  }
  const handleUpload = (base64) => {
    let usrImage = document.getElementById("user-image")
    usrImage.src = base64.base64

    setUserDetails({
      ...userDetails,
      userImage: base64.base64,
    })
  }

  const handleAddress = (e) => {
    setUserDetails({
      ...userDetails,
      address: {
        ...userDetails.address,
        [e.target.id]: e.target.value,
      },
    })
  }

  return (
    <>
      <Col lg={8}>
        <div id="personal-info-div">
          <h4>PERSONAL INFORMATION</h4>
          <div className="personal-info-form-group">
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="firstName">
                <Form.Label column sm="2">
                  First Name:{" "}
                </Form.Label>
                <Col sm="1"></Col>
                <Col sm="9">
                  <Form.Control
                    className="reg-form"
                    type="text"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="middleName">
                <Form.Label column sm="3">
                  Middle Name:{" "}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    className="reg-form"
                    placeholder="Doe"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="lastName">
                <Form.Label column sm="3">
                  Last Name:{" "}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    className="reg-form"
                    placeholder="Smith"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group as={Row} controlId="birthDate">
                <Form.Label column sm="3">
                  Birth Date:{" "}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="date"
                    className="reg-form"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group as={Row} controlId="contactNo">
                <Form.Label column sm="3">
                  Contact No.:{" "}
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    className="reg-form"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <hr />
              <Form.Group
                as={Row}
                controlId="classification"
                onChange={handleChange}
              >
                <Form.Label column sm="3">
                  Classification:{" "}
                </Form.Label>
                <Col sm="9">
                  <Form.Check
                    type="radio"
                    label="Senior Citizen"
                    id="classification"
                    value="Senior Citizen"
                    name="classification"
                  />
                  <Form.Check
                    type="radio"
                    label="PWD"
                    id="classification"
                    value="PWD"
                    name="classification"
                  />
                  <Form.Check
                    type="radio"
                    label="Neutral"
                    id="classification"
                    value="Neutral"
                    name="classification"
                  />
                  <Form.Check
                    type="radio"
                    label="Solo Parent"
                    id="classification"
                    value="Solo Parent"
                    name="classification"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="2">
                  Address:{" "}
                </Form.Label>
                <Col sm="1"></Col>
                <Col sm="3">
                  <Form.Group controlId="phase">
                    <Form.Control
                      type="text"
                      className="reg-form"
                      placeholder="Phase"
                      onChange={handleAddress}
                    />
                  </Form.Group>
                </Col>
                <Col sm="3">
                  <Form.Group controlId="streetNo">
                    <Form.Control
                      type="text"
                      className="reg-form"
                      placeholder="Street No."
                      onChange={handleAddress}
                    />
                  </Form.Group>
                </Col>
                <Col sm="3">
                  <Form.Group controlId="houseNo">
                    <Form.Control
                      type="text"
                      className="reg-form"
                      placeholder="House No."
                      onChange={handleAddress}
                    />
                  </Form.Group>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="subdivision">
                <Form.Label column sm="2">
                  Subdivision:{" "}
                </Form.Label>
                <Col sm="1"></Col>
                <Col sm="9">
                  <Form.Control
                    as="select"
                    placeholder="subdivision"
                    onChange={handleAddress}
                  >
                    {subdivisionList.length
                      ? subdivisionList.map((subd) => {
                          return <option>{subd}</option>
                        })
                      : null}
                  </Form.Control>
                </Col>
              </Form.Group>
              <Row>
                <Col sm={3}></Col>
                <Col sm={9}>
                  <Button
                    type="submit"
                    variant="success"
                    size="lg"
                    id="submit-btn"
                    block
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div id="user-image-div">
          <div>
            <Image
              src={uImage}
              id="user-image"
              thumbnail
              fluid
              style={{ width: "228px", height: "221px" }}
            />
            <div className="upload-button">
              <FileBase
                type="file"
                multiple={false}
                onDone={(base64) => handleUpload(base64)}
              />
            </div>
          </div>
        </div>
      </Col>
    </>
  )
}

export default PersonalInfo
