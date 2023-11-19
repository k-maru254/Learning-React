import React, { useEffect, useState } from 'react'
import axios from "axios"

function RenderComponent({render, category, deletedStudent}) {

    const [data, setData] = useState([])
    const [status, setStatus] = useState([])

    const getStudents = async () =>{
        try{
            const res = await axios.get("http://127.0.0.1:8000/api/students")
            setStatus(res.status)
            setData(res.data)
        }
        catch (error){
            console.log("error")
        }
    }

    useEffect(()=>{        
        getStudents()
    }, [deletedStudent])

  return (render(data))
}

export default RenderComponent
