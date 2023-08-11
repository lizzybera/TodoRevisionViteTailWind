import {AiOutlineMail} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {  signinAuth } from "../../api/authApi"
import { createUser } from "../../global/GlobalState"
import {useDispatch} from "react-redux"


// npm install @hookform/resolvers yup

 
const SignIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const model = yup.object({
        email : yup.string().required(),
    })

    const {
        register, handleSubmit, reset
    } = useForm({
       resolver : yupResolver(model)
    })

    const onHandleSubmit = handleSubmit((data)=>{
        const {email} = data;

        signinAuth({email}).then((res)=>{
            dispatch(createUser(res))
            navigate("/")
        })

        reset()
    })

  return (
    <div className="flex items-center justify-center h-[100vh]" >
        <form onSubmit={onHandleSubmit}
        className="w-[300px] border rounded min-h-[300px] flex flex-col items-center pt-8">

        {/* inputs  */}
        <div className="w-[90%] border h-[40px] flex items-center my-2 relative" >  
                <label className=" absolute top-[-10px] px-2 bg-white text-[10px] font-bold "> Email</label>
                <AiOutlineMail className="text-[silver] text-[30px] ml-2 " />
                <input 
                className="flex-1 outline-none pl-4"
             placeholder="enter email" {...register("email")}
                />
            </div>

        {/* Button */}
        <button type="submit"
        className="bg-[purple] w-[90%] text-white h-[40px] rounded mt-6"
        >
            Sign-in
        </button>

        {/* navigate */}
        <Link to="/register">
        <button
        className="bg-[dodgerblue] w-[270px] text-white h-[40px] rounded mt-6 no-underline cursor-pointer"
        >
            Register
        </button>
        </Link>
        </form>
    </div>
  )
}

export default SignIn