import React from 'react'
import { Row,Col, Container } from 'react-bootstrap';
import PersonalInfo from './PersonalInfo'
import UserImage from './UserImage';


const RegistrationForm = () => {
    return (
        <Container>
        <Row>
                {/* <Col lg={8}> */}
                    {/* <div id="personal-info-div"> */}
                        <PersonalInfo/>
                    {/* </div>
                </Col> */}
                {/* <Col lg={4}>
                    <div id="user-image-div">
                        <UserImage/>
                    </div>
                </Col> */}
            </Row>
        </Container>
      );
}
 
export default RegistrationForm;