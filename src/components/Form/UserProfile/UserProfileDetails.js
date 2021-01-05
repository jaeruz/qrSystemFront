import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUser } from '../../../actions/UserActions'
import Moment from 'react-moment';
import 'moment-timezone';
import { Button, Col, Row } from 'react-bootstrap';
import { FaRegEdit,FaQrcode } from 'react-icons/fa';
import Modal from 'react-modal'
import QRCode from 'qrcode.react'

const UserProfileDetails = ({userID,history,setUsrImg,specificUser}) => {
    
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    // const [specificUser, setSpecificUser] = useState(null)
    const [QRState, setQRState] = useState(false)
    // useEffect(() => {
    //     const filtUser = user.filter(u => u._id == userID)
    //     setSpecificUser(filtUser)
    // }, [user])

    useEffect(() => {
        if (specificUser) {
            if (specificUser.length) {
                setUsrImg(specificUser[0].userImage)    
            }
        }
    }, [specificUser])
    // useEffect(() => {
    //     dispatch(getUser())
    // }, [dispatch])


    const handleEdit = (id) => {
        history.push('/edit/'+id)
    }
    return ( 
        <div id="user-profile-details">   
            <Modal isOpen={QRState} onRequestClose={() => setQRState(false)}
                style={
                    {
                        overlay: {
                            backgroundColor: 'rgb(0,0,0,0.5)',
                        },
                        content: {
                            backgroundColor: 'white',
                            border: '0',
                            borderRadius: '7px',
                            bottom: 'auto',
                            minHeight: '35rem',
                            left: '50%',
                            padding: '50px',
                            position: 'fixed',
                            right: 'auto',
                            top: '50%',
                            transform: 'translate(-50%,-50%)',
                            minWidth: '30rem',
                            width: '80%',
                            maxWidth: '40rem'
                        }
                    }
                }>
                <div style={{display:'block',margin:'0 auto'}}>
                    <QRCode value={userID} style={{ display: 'block', margin: '0 auto', width: '70%', height: '70%' }} />
                    <Button style={{ display: 'block', margin: '30px auto'}}>Download</Button>
                </div>
                
            </Modal>

            <Row>
                <Col sm={8}>
                    <h4>PERSONAL INFORMATION</h4>
                </Col>
                {specificUser ? (
                    specificUser.length ? (
                        <Col sm={4}>
                            <FaRegEdit style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} onClick={() => handleEdit(specificUser[0]._id)} />
                            <FaQrcode style={{ fontSize: '30px', marginRight: '10px', cursor: 'pointer' }} onClick={ ()=>setQRState(true)}/>
                        </Col>
                    ):(null)
                ):(null)}        
            </Row>

            {specificUser ? (
                specificUser.length ? (
                    <div className="profile-info" key={specificUser[0]._id}>
                        <p>NAME: {specificUser[0].firstName.toUpperCase() + ' ' + specificUser[0].middleName.toUpperCase() + ' ' + specificUser[0].lastName.toUpperCase()}</p>
                        <p>BIRTH DATE: <Moment format="MM/DD/YYYY">{specificUser[0].birthDate}</Moment></p>
                        <p>AGE: {new Date().getFullYear() - new Date(specificUser[0].birthDate).getFullYear()}</p>
                        <p>CLASSIFICATION: {(specificUser[0].classification).toUpperCase()}</p>
                        <p>ADDRESS: {(specificUser[0].address.phase + ' '+ specificUser[0].address.streetNo+' '+specificUser[0].address.houseNo+' '+specificUser[0].address.subdivision).toUpperCase()}</p>
                        <p>PHONE NUMBER: {specificUser[0].contactNo}</p>
                        <p>DATE REGISTERED: <Moment>{specificUser[0].dateRegistered}</Moment></p>
                    </div>
                ):(<p>Loading .. </p>)
                ):(<p>Loading .. </p>)}
        </div>
     );
}

export default UserProfileDetails;