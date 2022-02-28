import React from 'react'
import { Link } from 'react-router-dom';
import MyImage from './../../../Shared/LazyImage';
import transform from "../../../../styles/images/transform.jpg"

const YouCan = () => {
    return (
        <div className='youCan'>
            <div className="image-youCan">
                <MyImage url={transform} name="شما میتوانید" />
            </div>
            <div className="detail-youCan">
                <h1>زندگی خود را از طریق آموزش متحول کنید</h1>
                <p>
                    زبان آموزان در سراسر جهان مشاغل جدید را راه اندازی می کنند، در زمینه های خود پیشرفت می کنند و زندگی خود را غنی می کنند.
                </p>
                <Link>انتخاب کن !!</Link>
            </div>
        </div>
    )
}

export default YouCan