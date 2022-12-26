import React from "react";
import "./Office.css"
import Data from './OfficeData'

const Office =()=>{
const [record,setRecord]=React.useState([]);
React.useEffect(()=>{
    setRecord(Data);
},[])

    return(<>
    
    <div className="office-main-div">
        <div className="office-head-div">
            <p>Sr. No.</p>
            <p>Name</p>
            <p>Designation</p>
            <p>Contact</p>
        </div>
        {
            record.map((elem)=>{
                    const {id,name,designation,contact,cls}=elem;
                return(<>
                 <div className={`office-data-div ${cls}`} key={id}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{designation}</p>
            <p>{contact}</p>

        </div>
                </>)
            })
        }
       
    </div>
    
    </>)
}
export default Office;