import React from 'react'
import { Link } from 'react-router-dom';

const Title = ({ title, link, desc }) => {
    return (
        <div className="title-details">
            <p>{title} <Link to={link}>مشاهده همه</Link></p>
            <span>
                {desc}
            </span>
        </div>
    )
}

export default Title    