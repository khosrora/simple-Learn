import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UserPanellLoading = () => {
    return (
        <div className="container">
            <div className="box-overflow">
                <SkeletonTheme baseColor="#EEEEEE" highlightColor="#D8D2CB">
                    <Skeleton count={6} height={10} />
                </SkeletonTheme>
            </div>
        </div>
    )
}

export default UserPanellLoading