import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BestChanellsLoading = () => {
    return (
        <div className='bestCanals'>
            <div className="details-bestcanal">
                <div className="title-details">
                    <SkeletonTheme baseColor="#EEEEEE" highlightColor="#D8D2CB">
                        <Skeleton count={6} height={100} />
                    </SkeletonTheme>
                </div>
            </div>
        </div>
    )
}

export default BestChanellsLoading