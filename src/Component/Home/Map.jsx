import React from 'react'
import Iframe from 'react-iframe'

const Map =({w,h})=>{

    return(<>
    <div className="iframe">
<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.794344669079!2d77.45356211448603!3d29.812485236449167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e914700779f77%3A0x5f3b29d74893351e!2sGochar%20Mahavidyalaya%2C%20Rampur%20Maniharan!5e0!3m2!1sen!2sin!4v1669545811249!5m2!1sen!2sin" width={w} height={h} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
</div>

    </>)
}
export default Map;