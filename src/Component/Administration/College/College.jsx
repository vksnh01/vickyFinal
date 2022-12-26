import React from "react";
import "./College.css"
import Data from './CollegeData'

const College=()=>{
const [record,setRecord]=React.useState([]);
React.useEffect(()=>{
    setRecord(Data);
},[])

    return(<>
    
    <div className="college-main-div">
        <div className="college-head-div">
            <p className="head-id">S.N.</p>
            <p>Committee</p>
            <p>Co-ordinator</p>
            <p>Email-Id</p>
            <p>Contact Number</p>
        </div>
        {
            record.map((elem)=>{
                    const {id,NOC,co,email,cls,contact}=elem;
                return(<>
                 <div className={`college-data-div ${cls}`} key={id}>
            <p className="id">{id}</p>
            <p>{NOC}</p>
            <p>{co}</p>
            <p>{email}</p>
            <p>{contact}</p>

        </div>
                </>)
            })
        }
       
    </div>
    
    </>)
}
export default College;