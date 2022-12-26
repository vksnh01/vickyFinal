import React from 'react';
import './Format.css'

const Ag = ({Data}) => {
    const [record, setRecord] = React.useState([]);
    React.useEffect(() => {
        setRecord(Data);
    },[])


    return (<>
        <div className='card-main-div'>
            {
                record.map((elem, ind) => {
                    const { url, name, designation, subject, contact } = elem;
                    console.log(url);
                    return (<>
                        <div className="card-div" key={ind}>
                            <img src={url} alt={name} className="img" />
                            <div className='card-content-div'>
                                <div className="card-content-div-title">
                                    <p className="span">Name:</p>
                                    <p className="span">Designation:</p>
                                    <p className="span">Subject:</p>
                                    <p className="span">Contact:</p>
                                </div>
                                <div className='card-content-div-data'>
                                    <p className="data">{name}</p>
                                    <p className="data">{designation}</p>
                                    <p className="data">{subject}</p>
                                    <p className="data">{contact}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                })
            }
        
        </div>


    </>)
}
export default Ag;