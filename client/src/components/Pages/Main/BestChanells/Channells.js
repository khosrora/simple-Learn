import { useState } from 'react'
import { useSelector } from 'react-redux'
import CartChannell from './../../../Shared/CartChannell';


const Channells = () => {

    const [search, setSearch] = useState("");
    const { publicData } = useSelector(state => state)

    const channells = publicData.topChannells;


    return (
        <div className='single-publics'>
            <div className="title-single-publics">
                <div className="detail-public">
                    <h1>تمام کانال ها</h1>
                    <p>به ترتیب بازدید...</p>
                    <p>تعداد کانال ها : <span>300</span></p>
                </div>
                <div className="search-public">
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='نام کانال را بنویسید' />
                    <i className='fas fa-search'></i>
                </div>
            </div>
            <div className="items-single-publics">
                {
                    channells.map(i => {
                        return i.name.includes(search)
                            ?
                            <CartChannell slug={i.slug} name={i.name} shortDesc={i.shortDesc} image={i.image ? i.image.thumb : "http://localhost:4000/uploads/images/channell/default.png"} view={i.view} createdAt={i.createdAt} />
                            :
                            null
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Channells