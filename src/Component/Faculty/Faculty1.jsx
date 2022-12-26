import React, { useEffect } from "react";
import { FacultyData,FacultyContent } from './Faculty_Data/FacultyTitleData'
import './Faculty1.css';

const Faculty1 = () => {
    const [titlesData, setTitlesData] = React.useState([]);
    const [contentsData, setContentsData] = React.useState([]);

    useEffect(() => {
        setTitlesData(FacultyData);
        setContentsData(FacultyContent);
    }, [])

    return (<>
    <div className="faculty-title-div">
        <h1>Faculties</h1>
    </div>
        <div className="accordion" id="accordionExample">
            <div className="faculties-container">
                <div className="faculties-btn faculties-card p_1">
                    {
                        titlesData.map((elem) => {
                            const { title, id, aria, expanded, cls } = elem;
                            return (<>
                                <div className="accordion-item ai">
                                    <h2 className="accordion-header" id={id}>
                                        <button className={cls} type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#${aria}`} 
                                        aria-expanded={expanded} 
                                        aria-controls={aria}>
                                            {title}
                                        </button>
                                    </h2>
                                </div>
                            </>)
                        })
                    }
                </div>

                <div className="faculties-card faculties-content p_1">
                    {
                        contentsData.map((elem) => {
                            const { id, aria, name, classes } = elem;
                            return (<>
                                <div id={aria} className={`accordion-collapse ${classes}`} aria-labelledby={id} data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {name}
                                    </div>
                                </div>
                            </>)})
                    }
                </div>
            </div>
        </div>

    </>)
}
export default Faculty1;