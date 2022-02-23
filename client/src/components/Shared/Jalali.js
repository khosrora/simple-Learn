import moment from 'jalali-moment'

const Jalali = ({ date }) => {
    return <p>{moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</p>
}

export default Jalali