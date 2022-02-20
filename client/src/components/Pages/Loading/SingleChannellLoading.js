import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SingleChannellLoading = () => {
    return (

        <SkeletonTheme baseColor="#EEEEEE" highlightColor="#D8D2CB">
            <Skeleton count={1} height={300} />
        </SkeletonTheme>

    )
}

export default SingleChannellLoading