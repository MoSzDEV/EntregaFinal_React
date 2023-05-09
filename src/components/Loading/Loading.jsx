import { BallTriangle } from  'react-loader-spinner'
import './Loading.css'

const Loading = () => {
  return (
    <div className="spinner">
    <BallTriangle
    height={120}
    width={120}
    radius={5}
    color="#7900b6"
    ariaLabel="ball-triangle-loading"
    wrapperClass={{}}
    wrapperStyle=""
    visible={true}
    />
    </div>
  )
}

export default Loading