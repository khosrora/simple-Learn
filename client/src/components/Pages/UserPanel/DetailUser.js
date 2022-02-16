import { useSelector } from 'react-redux';



const DetailUser = () => {

    const { User } = useSelector(state => state);

    return (
        <div className="container">
            <div className="box-overflow">
                <div className="border-detailUser">
                    <p>نام و نام خانوادگی : <br /> <span>{User.user.fullname}</span></p>
                    <p>پست الکترونیک : <br /> <span>{User.user.email}</span></p>
                    <p>شماره تماس : <br /> <span>{User.user.mobile}</span></p>
                </div>
                <hr />
                {
                    User.channell &&
                    <div>
                        <div className="border-detailUser">
                            <p>نام کانال : <br /> <span>{User.channell.name}</span></p>
                            <p>لینک آپارات : <br /> <a target="_blank" href={User.channell.linkAparat} >{User.channell.linkAparat}</a></p>
                            <p>توضیحات کوتاه : <br /> <span>{User.channell.shortDesc}</span></p>
                            <p>توضیحات  : <br /> <span>{User.channell.desc}</span></p>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default DetailUser;
