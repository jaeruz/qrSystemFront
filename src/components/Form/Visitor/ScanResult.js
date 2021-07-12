import React, { useEffect, useState } from "react"
import { Col, Row, Image, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import uImage from "../../../img/user.png"
import Moment from "react-moment"
import { getPurposes } from "../../../actions/PurposeActions"

const ScanResult = ({ specificUser }) => {
  const dispatch = useDispatch()
  const purpose = useSelector((state) => state.purpose)
  const [filteredPurpose, setFilteredPurpose] = useState(null)

  useEffect(() => {
    dispatch(getPurposes())
  }, [dispatch])

  useEffect(() => {
    if (specificUser) {
      if (specificUser.length) {
        const filtPurpose = purpose.filter(
          (p) => specificUser[0]._id == p.userID
        )
        console.log("lllllllll")
        setFilteredPurpose(filtPurpose)
      }
    }
  }, [purpose, specificUser])

  useEffect(() => {
    console.log(filteredPurpose)
  }, [filteredPurpose])

  return (
    <div className="scan-result">
      {specificUser ? (
        specificUser.length ? (
          <>
            <Row>
              <Col md={4}>
                {specificUser[0].userImage ? (
                  <Image
                    src={specificUser[0].userImage}
                    id="result-image"
                    thumbnail
                    style={{ width: "228px", height: "190px" }}
                  />
                ) : (
                  <Image
                    src={uImage}
                    id="result-image"
                    thumbnail
                    style={{ width: "228px", height: "190px" }}
                  />
                )}
              </Col>
              <Col md={1}></Col>
              <Col md={7}>
                <div className="result-info">
                  <h4>
                    {(
                      specificUser[0].firstName +
                      " " +
                      specificUser[0].middleName +
                      " " +
                      specificUser[0].lastName
                    ).toUpperCase()}
                  </h4>
                  <br />
                  <p>
                    BIRTH DATE:{" "}
                    <Moment format="MM/DD/YYYY">
                      {specificUser[0].birthDate}
                    </Moment>
                  </p>
                  <p>
                    AGE:{" "}
                    {new Date().getFullYear() -
                      new Date(specificUser[0].birthDate).getFullYear()}
                  </p>
                  <p>
                    CLASSIFICATION:{" "}
                    {specificUser[0].classification.toUpperCase()}
                  </p>
                  <p>
                    ADDRESS:{" "}
                    {(
                      specificUser[0].address.phase +
                      " " +
                      specificUser[0].address.streetNo +
                      " " +
                      specificUser[0].address.houseNo +
                      " " +
                      specificUser[0].address.subdivision
                    ).toUpperCase()}
                  </p>
                  <p>PHONE NUMBER: {specificUser[0].contactNo}</p>
                  <p>
                    DATE REGISTERED:{" "}
                    <Moment>{specificUser[0].dateRegistered}</Moment>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead className="table-record">
                    <tr>
                      <th>Visit Date:</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPurpose && filteredPurpose.length ? (
                      filteredPurpose.map((f) => {
                        return (
                          <tr>
                            <td>
                              <Moment>{f.purposeDate}</Moment>
                            </td>
                            <td>{f.purpose}</td>
                          </tr>
                        )
                      })
                    ) : (
                      <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </>
        ) : (
          <h3>No Result</h3>
        )
      ) : (
        <p>Loading..</p>
      )}
    </div>
  )
}

export default ScanResult
