import React,{useState} from 'react'
import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../actions/UserActions';
import UpdateInfo from './UpdateInfo';
import UpdateUserImage from './UpdateUserImage';
import { FaArrowCircleLeft } from "react-icons/fa";


const UpdateInfoForm = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [specificUser, setSpecificUser] = useState(null)
    const [userID, setUserID] = useState(null)
    useEffect(() => {
        let id = props.match.params.user_id;
        console.log(id);
        setUserID(id)
    }, [])

    useEffect(() => {
        const filtUser = user.filter(u => u._id === userID)
        console.log(specificUser)
        setSpecificUser(filtUser)
    }, [user])
    useEffect(() => {
        console.log(specificUser)
    }, [specificUser])
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    const handleBack = (id) => {
        props.history.push('/profile/'+id)
    }
    
    return (
        <Container>
        <Row>
                <Col lg={1}>
                    <FaArrowCircleLeft style={{ marginTop: '40px', fontSize: '30px',cursor:'pointer' }} onClick={()=>handleBack(specificUser[0]._id)}/>
                </Col>
                <Col lg={7}>
                <div id="personal-info-div">
                    {  specificUser ?
                        (specificUser.length ?
                        (<UpdateInfo user={specificUser[0]}/>):(<p>Please wait..</p>)): (<p>Loading.. please wait</p>)
                    }
                    
                    </div>
                </Col>
                <Col lg={4}>
                    <div id="user-image-div">
                        <UpdateUserImage/>
                    </div>
                </Col>
            </Row>
        </Container>
      );
}
 
export default UpdateInfoForm;