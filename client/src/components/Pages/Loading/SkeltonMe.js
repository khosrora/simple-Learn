import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeltonMe = ({ count, height }) => {
    return (
        <SkeletonTheme baseColor="#EEEEEE" highlightColor="#D8D2CB" >
            <Skeleton count={count} height={height} />
        </SkeletonTheme>
    )
}

export default SkeltonMe