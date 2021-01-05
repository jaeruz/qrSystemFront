import React, { useState, useEffect } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const UpdateInfo = ({user}) => {

    const [subdivisionList, setSubdivisionList] = useState([])
    
    useEffect(() => {
        setSubdivisionList(['Katapatan Homes',
	'Asla Homes',
	'Asla Homes',
	'Don Onofre',
	'Hongkong Village',
	'Grand Acacia Grove',
	'San Carlos Village',
	'Southpoint Subdivision',
	'Southville 1A Depante',
	'Lakeside Ph1',
	'Lakeside Ph2',
	'Lakeside Ph3 Pag - ibig',
	'Lakeside Ph3 Relocation',
	'Lakeside Ph4',
    'Southville Ph14',
            'NIA Road'])
        console.log(user)
        setUserDetails(user)
    }, [])

    const [userDetails, setUserDetails] = useState(user)

    useEffect(() => {
        console.log(userDetails)
    }, [userDetails])
    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.id]: e.target.value,
        })

        console.log(userDetails)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createUser(userDetails))
        // console.log(userDetails)
    }

    const handleAddress = (e) => {
       
        setUserDetails({
            ...userDetails,
            address: {
                ...userDetails.address,
                [e.target.id]:e.target.value
            }
        })
        console.log(userDetails)
    }

    return ( 
        <div>
            <h4>UPDATE INFORMATION</h4>
            <div className="personal-info-form-group">
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="firstName">
                        <Form.Label column sm="2">First Name: </Form.Label>
                        <Col sm="1"></Col>
                        <Col sm="9">
                            <Form.Control type="text" value={userDetails.firstName} onChange={handleChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="middleName">
                        <Form.Label column sm="3">Middle Name: </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" value={userDetails.middleName} onChange={handleChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="lastName">
                        <Form.Label column sm="3">Last Name: </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" value={userDetails.lastName} onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                    <hr />
                    <Form.Group as={Row} controlId="contactNo">
                        <Form.Label column sm="3">Contact No.: </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" value={userDetails.contactNo} onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                    <hr />
    

                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Address: </Form.Label>
                        <Col sm="1"></Col>
                        <Col sm="3">
                            <Form.Group controlId="phase">
                                <Form.Control type="text" value={userDetails.address.phase}  onChange={ handleAddress}/>
                            </Form.Group>
                        </Col>
                        <Col sm="3">
                            <Form.Group controlId="streetNo">
                                <Form.Control type="text" value={userDetails.address.streetNo} onChange={handleAddress} />
                            </Form.Group>
                        </Col>
                        <Col sm="3">
                            <Form.Group controlId="houseNo">
                                <Form.Control type="text" value={userDetails.address.houseNo}  onChange={handleAddress} />
                            </Form.Group>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="subdivision">
                        <Form.Label column sm="2">Subdivision: </Form.Label>
                        <Col sm="1"></Col>
                        <Col sm="9">
                            <Form.Control as="select" value={userDetails.address.subdivision} onChange={handleAddress}>
                                {subdivisionList.length ? subdivisionList.map(subd => {
                                    return (
                                        <option>{subd}</option>
                                    )
                                }):(null)}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Row>
                        <Col sm={3}>
                            
                        </Col>
                        <Col sm={9}>
                            
                            <Button type="submit" variant="success" size="lg" id="submit-btn" block>Register</Button>
                            
                        </Col>
                    </Row>
                    
                </Form>
            
                
            </div>
            
        </div>
     );
}
 
export default UpdateInfo;