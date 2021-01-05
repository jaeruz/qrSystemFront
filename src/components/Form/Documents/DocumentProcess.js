// import  {DocxReader}  from '../../../pdf/DocXReader'
import  Docxtemplater  from 'docxtemplater'
import JSZip from 'jszip'
import Pizzip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import $ from 'jquery'
import { saveAs } from 'file-saver';
import { setData } from 'docxtemplater'
import { Button } from 'react-bootstrap'
import BrgyClearanceButton from './BrgyClearanceButton'
// import { fs } from 'fs'



const DocumentProcess = () => {
  
    const handleDownload = () => {

        JSZipUtils.getBinaryContent("/brgyclrnc.docx", (error,content) => {
         if(error){
            console.log(error)
            return;
        }
        var zip = new Pizzip(content);
        // zip.file("/test.docx", content)
        
        var doc = new Docxtemplater();
        doc.loadZip(zip);
        console.log(doc)

        doc.setData({
            first_name: 'Jaeruz',
            last_name: 'Datiles',
            address: 'P2 Blk9 Lot10 lakeside',
            purpose: 'Job Requirement'
        });

        try {
            // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
            doc.render()
            // console.log("????")
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
            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }

        var out = doc.getZip().generate({
            type:"blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) 
          saveAs(out,"brgyclrnc.docx");

     })
        
    }

    

    
    return ( 
        <div>
            <Button variant="secondary" onClick={handleDownload}>Download docx</Button>
            <BrgyClearanceButton/>
        </div>
     );
}
 
export default DocumentProcess;