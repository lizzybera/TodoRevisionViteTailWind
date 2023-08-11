import { PropsWithChildren } from "react"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { Navigate } from "react-router-dom"

const PrivateRoute: React.FC<PropsWithChildren> = ({children}) => {
    const taskUser = useSelector((state : any) => ( state.taskUser))
  return (
    <div>
        {
        taskUser?
        (<div> {children} </div>) : (<Navigate to="/signin" />)
    }
    </div>
  )
}

export default PrivateRoute