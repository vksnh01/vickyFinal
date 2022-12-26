import React from "react";
import "./Manage.css"
import Data from './ManagingData'

const Manage =()=>{
const [record,setRecord]=React.useState([]);
React.useEffect(()=>{
    setRecord(Data);
},[])

    return(<>
    
    <div className="manage-main-div">
        <div className="manage-head-div">
            <p>Sr. No.</p>
            <p>Name</p>
            <p>Designation</p>
            <p style={{"text-align":"start"}}>Email-Id</p>
        </div>
        {
            record.map((elem)=>{
                    const {id,name,designation,email,cls}=elem;
                return(<>
                 <div className={`manage-data-div ${cls}`} key={id}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{designation}</p>
            <p >{email}</p>

        </div>
                </>)
            })
        }
       
    </div>
    
    </>)
}
export default Manage;