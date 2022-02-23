


const AboutChannell = ({ name, email, shortDesc, desc }) => {

    return (
        <div div className='aboutChannell'>
            <div div className="detil-Channell" >
                <p>ادمین کانال : <span>{name}</span></p>
                <p>پست الکترونیک : <span>{email}</span></p>
                <hr />
                <p>
                    توضیحات کو تاه :
                    <br />
                    {shortDesc}
                </p>
                <p>
                    درباره کانال :
                    <br />
                    {desc}
                </p>
            </div >
        </div >
    )
}

export default AboutChannell    