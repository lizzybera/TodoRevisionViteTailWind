import Input from "react-input-emoji"
import {AiFillDelete} from "react-icons/ai"
import { QueryClient, useMutation, useQuery  } from "@tanstack/react-query"
import { createTodo, deleteOneTodo, viewTodo } from "../../api/todoApi"
import { useSelector } from "react-redux"
import { useState } from "react"
import UserName from "./UserName"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const queryClient = new QueryClient()

const TaskScreen = () => {

    const [parent] = useAutoAnimate()

    const userID = useSelector((state : any)=>(state.taskUser))
    const [tasked, setTasked] = useState("")

    const {data} = useQuery({
        queryKey : ["tasks"],
        queryFn : viewTodo,
        refetchInterval : 1000
    })

    const mutation = useMutation({
        mutationKey: ["tasks"],
        mutationFn: (data : any) => createTodo( data, userID),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
        },
    })

    const onSubmit = () => {
        mutation.mutate(tasked)
    }

  return (
    <div className="flex flex-col items-center">
        <br />
        <br />
        <div>
            <div className="w-[400px]" >
                <Input 
                placeholder="enter a task"
                value = {tasked}
                onChange = {setTasked}
                onEnter = {onSubmit}
                cleanOnEnter
                />
            </div>
        </div>

        <div className="flex flex-wrap" ref={parent} >
                
                        {
                            data?.map(({task, _id, userID} : any)=>(
                                <div key={_id}  >
                            <div className="flex items-center w-[250px] border border-[silver] rounded h-[100px] justify-between p-2 m-2 "  >
                                <div>
                                    <div className="font-bold text-[18px]">{task}</div>
                                    <br />
                                    <UserName myID={userID}/>
                                </div>
                                
                                <AiFillDelete className="text-red-700 hover:cursor-pointer hover:scale-[1.08] "

                                onClick={()=>{
                                    deleteOneTodo(_id)
                                }}
                                />
                            </div>
                        </div>
                            ))
                        }
                   
            </div>
        </div>
  )
}

export default TaskScreen