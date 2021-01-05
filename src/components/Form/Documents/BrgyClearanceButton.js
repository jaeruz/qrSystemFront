import React from 'react'
import { Button } from 'react-bootstrap';

import  Docxtemplater  from 'docxtemplater'
import Pizzip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver';


const BrgyClearanceButton = ({specificUser}) => {


     const handleDownload = () => {

        JSZipUtils.getBinaryContent("/documents/Brgy-Clearance.docx", (error,content) => {
         if(error){
            console.log(error)
            return;
        }
        var zip = new Pizzip(content);
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        console.log(specificUser)
            
        if (specificUser !== null) {
            doc.setData({
                first_name: specificUser[0].firstName,
                middle_name: specificUser[0].middleName,
                last_name: specificUser[0].lastName,
                address: specificUser[0].address.houseNo + " " + specificUser[0].address.phase+" "+specificUser[0].address.streetNo+" "+specificUser[0].address.subdivision,
                purpose: 'Job Requirement'
            });
        } else {
            doc.setData({
                first_name: "",
                middle_name:"",
                last_name: "",
                address: "",
                // birth_date: "",
                // age:"",
                // ordinal_date:"",
                purpose: ""
            });
            }
            
        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(error)
            console.log(JSON.stringify({error: e}));
            throw error;
        }

        var out = doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) 
            
            
        if (specificUser !== null) {
            saveAs(out, specificUser[0]._id + "-Brgy-Clearance.docx");
        } else {
            saveAs(out,"Brgy-Clearance.docx");
        }
     })
        
    }
    return ( 
        <Button variant="info" onClick={handleDownload}>Brgy-Clearance.docx</Button>
     );
}
 
export default BrgyClearanceButton;