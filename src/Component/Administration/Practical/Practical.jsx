import React from "react";
import "./Practical.css"
import Data from './PracticalData'

const Practical =()=>{
const [record,setRecord]=React.useState([]);
React.useEffect(()=>{
    setRecord(Data);
},[])

    return(<>
    
    <div className="practical-main-div">
        <div className="practical-head-div">
            <p className="id">Sr. No.</p>
            <p>Name</p>
            <p>Designation</p>
            <p>Email-Id</p>
            <p>Contact Number</p>
        </div>
        {
            record.map((elem)=>{
                    const {id,name,designation,email,contact,cls}=elem;
                return(<>
                 <div className={`practical-data-div ${cls}`} key={id}>
            <p className="id">{id}</p>
            <p>{name}</p>
            <p>{designation}</p>
            <p>{email}</p>
            <p>{contact}</p>

        </div>
                </>)
            })
        }
       
    </div>
    
    </>)
}
export default Practical;