import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Table,
  Form,
  Button,
  Row,
  Col,
  Container,
  Spinner,
} from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { getUser } from "../../../actions/UserActions"
import { useState } from "react"
import { Link } from "react-router-dom"

const Records = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const [searchState, setSearchState] = useState(null)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  // useEffect(() => {
  //     console.log(user)
  // }, [user])

  const handleSearch = (e) => {
    setSearchState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(searchState)
  }
  const handleClick = (id) => {
    props.history.push("/profile/" + id)
  }

  return (
    <Container className="records-container">
      {user ? (
        user.length ? (
          <>
            <h4>RECORDS</h4>
            <Form id="record-search" onSubmit={handleSubmit}>
              <Form.Group as={Row} controlId="idQuery">
                <Col xs={2}>
                  <Button
                    variant="secondary"
                    type="submit"
                    className="green-color"
                  >
                    <span>
                      <FaSearch style={{ fontSize: "20px" }} />
                    </span>
                  </Button>
                </Col>
                <Col xs={10}>
                  <Form.Control
                    type="text"
                    placeholder="ID search"
                    onChange={handleSearch}
                  />
                </Col>
              </Form.Group>
            </Form>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date Registered</th>
                  <th>Full Name</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {user.length ? (
                  user.map((u) => {
                    return (
                      <tr
                        as={Link}
                        to={"/profile/" + u._id}
                        key={u._id}
                        onClick={() => handleClick(u._id)}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{u._id}</td>
                        <td>{u.dateRegistered}</td>
                        <td>
                          {(
                            u.firstName +
                            " " +
                            u.middleName +
                            " " +
                            u.lastName
                          ).toUpperCase()}
                        </td>
                        <td>{u.contactNo}</td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td>No Results</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </>
        ) : (
          <div style={{ paddingTop: "30px", width: "100%" }}>
            <Spinner
              animation="border"
              role="status"
              style={{ display: "block", margin: "0 auto", color: "#669966" }}
            />
          </div>
        )
      ) : (
        <p>loading..</p>
      )}
    </Container>
  )
}

export default Records
