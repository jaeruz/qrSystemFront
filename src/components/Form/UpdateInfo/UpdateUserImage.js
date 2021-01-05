import React from 'react'
import uImage from '../../../img/user.png'
import {Button, Image} from 'react-bootstrap'
const UpdateUserImage = () => {
    return (
        <>
            <div>
                <Image src={uImage} id="user-image" thumbnail />
                <Button variant="secondary" id="browse-btn">Browse</Button>
            </div>
        </>
     );
}
 
export default UpdateUserImage;