import React,{useEffect,useState} from 'react'
import { Container, Row, Button, Image, Col,Table, Spinner, ButtonGroup } from 'react-bootstrap';
import uImage from '../../../img/user.png'
import UserProfileDetails from './UserProfileDetails';
import { FaArrowCircleLeft } from "react-icons/fa";
import { useDispatch,useSelector } from 'react-redux'
import { getUser } from '../../../actions/UserActions'
import { getPurposes } from '../../../actions/PurposeActions';
import Moment from 'react-moment';
import BrgyClearanceButton from '../Documents/BrgyClearanceButton';
import Indigency from '../Documents/Indigency';
import BusinessPermit from '../Documents/BusinessPermit';
import moment from 'moment'

const UserProfile = (props) => {

    const [userID, setUserID] = useState(null)
    const [usrImg, setUsrImg] = useState(null)
    const [specificUser, setSpecificUser] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const purpose = useSelector(state => state.purpose)
    const [filteredPurpose, setFilteredPurpose] = useState(null)
    useEffect(() => {
        const filtUser = user.filter(u => u._id == userID)
        setSpecificUser(filtUser)
    }, [user])

    useEffect(() => {
      
        const filtPurpose = purpose.filter(p => userID == p.userID)
        setFilteredPurpose(filtPurpose)
  
    }, [purpose])
    
    useEffect(() => {
        // console.log(filteredPurpose)
    }, [filteredPurpose])
    useEffect(() => {
        dispatch(getUser())
        dispatch(getPurposes())
    }, [dispatch])
    useEffect(() => {
        let id = props.match.params.user_id;
        setUserID(id)
    }, [])

    useEffect(() => {
        console.log(specificUser)
        if (specificUser) {
            if (specificUser.length) {
                console.log(moment(new Date(specificUser[0].birthDate),"MMM D YYYY").format("LL"))
            }
        }
        
    }, [specificUser])

    const handleBack = (e) => {
        props.history.push('/records')
    }

    return ( 
        <Container>
        {user && specificUser ? (
            user.length && specificUser.length ? (
                <>
                <Row>
                    <Col lg={1}>
                        <FaArrowCircleLeft style={{ marginTop: '40px', fontSize: '30px',cursor:'pointer' }} onClick={handleBack}/>
                    </Col>
                    <Col lg={4} style={{ width: '100% !important' }}>
                        {usrImg ? (
                                <Image src={usrImg} id="user-image-profile" style={{ width: '228px', height: '221px' }} thumbnail />
                        ) : (
                            <Image src={uImage} id="user-image-profile" style={{ width: '228px', height: '221px' }} thumbnail />
                        )}
                        
                    </Col>
                    <Col lg={7} style={{margin:'0 !important',width:'100% !important'}}>
                                <UserProfileDetails userID={userID} history={props.history} usrImg={usrImg} setUsrImg={setUsrImg} specificUser={ specificUser}/>
                    </Col>
                </Row>
                        
                <hr/>
                <div style={{ width: '100%',display:'flex' }}>
                    <div style={{ margin: 'auto' }}>
                        <h4 style={{textAlign:'center'}}>Downloads</h4>
                        <ButtonGroup>
                            <BrgyClearanceButton specificUser={ specificUser}/>
                            <Indigency specificUser={ specificUser}/>
                            <BusinessPermit specificUser={ specificUser}/>
                        </ButtonGroup>      
                    </div>
                </div>
                <hr/>
                <div className="title-div">
                    <h4>VISIT INFORMATION</h4>
                </div>
                
                <Table striped bordered hover>
                    <thead className="table-record">
                        <tr>
                            <th>Visit Date:</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPurpose ? (
                            filteredPurpose.length ? filteredPurpose.map(f => {
                                return (
                                    <tr key={f._id}>
                                    <td><Moment>{f.purposeDate}</Moment></td>
                                    <td>{f.purpose}</td>            
                                    </tr>
                                )
                            }) : (
                                    <tr>
                                        <td>N/A</td>
                                        <td>N/A</td>            
                                    </tr>
                                )
                        ):(<p>Loading...</p>)}
                    </tbody>
                </Table>
                </>
            ): (
                <div style={{paddingTop:'30px', width:'100%' }}>
                    <Spinner animation="border" role="status" style={{display:"block",margin:'0 auto',color:'#669966'}}/>
                </div>
            )
        ): (
            <p>Loading...</p>
        )}
        
        
        </Container>

     );
}
 
export default UserProfile;