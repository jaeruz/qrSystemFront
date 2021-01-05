import React from 'react'
import {  Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Form from '../../Form/Form';
import SubNavBar from '../SubNavbar/SubNavbar';

const SubBody = () => {
    return ( 
        <BrowserRouter>
        <Container className="sub-body">
            <SubNavBar />
            <Form/>
            </Container>
        </BrowserRouter>
     );
}
 
export default SubBody;