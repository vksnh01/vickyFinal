import React from "react";
import './Administration.css'
import { titledata, ContentData } from './AdministorData'

const Administration = () => {
  
      const [titleData, setTitleData] = React.useState([]);
    const [contentData, setContentData] = React.useState([]);
    React.useEffect(() => {
        setTitleData(titledata);
        setContentData(ContentData);
    }, []);
    return (<>
  <div class="accordion container" id="accordionExample">
    <div className="adminsitor-title">
        <h1>Administration</h1>
    </div>
            <div className="administor-container">
                <div className="administor-btn administor-card p_1">
                    {
                        titleData.map((elem) => {
                            const { title, id, aria, expanded, cls } = elem;
                            return (<>
                                <div class="accordion-item ai">
                                    <h2 class="accordion-header" id={id}>
                                        <button class={cls} type="button" data-bs-toggle="collapse" data-bs-target={`#${aria}`} aria-expanded={expanded} aria-controls={aria}>
                                            {title}
                                        </button>
                                    </h2>
                                </div>
                            </>)
                        })
                    }
                </div>


                <div className="administor-card administor-content p_1">
                    {
                        contentData.map((elem) => {
                            const { id, aria, content, classes } = elem;
                            return (<>
                                <div id={aria} class={`accordion-collapse ${classes}`} aria-labelledby={id} data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        {content}
                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}
export default Administration;