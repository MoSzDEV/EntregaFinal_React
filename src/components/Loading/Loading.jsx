import { Watch, ThreeDots } from  'react-loader-spinner'
import './Loading.css'

const Loading = ({shape}) => {

  return (
    
    <div className="spinner">

      {shape === "line" &&
          <ThreeDots 
          height="80" 
          width="120" 
          radius="9"
          color="#7900b6" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
          />
        }

      {shape === "clock" &&
          <Watch
          height="50"
          width="50"
          radius="50"
          color="#7900b6"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      }

    </div>
  )
}

export default Loading