import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RenderComponent from './RenderComponent';
import "./styles/RenderProps.css";


function RenderProps() {

  const [showAlert,setShowAlert] = useState(false);
  const  [studentId, setStudentId] = useState(null)  
  const [deletedStudent, setDeletedStudent] = useState(null)

  const handleDeleteClick = (id)=>{
    setStudentId(id)
    setShowAlert(true)  
  }

  const deleteStudent = async(id)=>{
    try{
      const delStudent = await axios.delete(
        `http://127.0.0.1:8000/api/students/${id}`
        
      )
    }
    catch(error){
      console.log("Error occured")
    }
    
  }

  const handleDelete = ()=>{
    deleteStudent(studentId);
    setShowAlert(false);
    setStudentId(null)
    setDeletedStudent(studentId)
  }

  return (
    <div>
        <RenderComponent deletedStudent={deletedStudent} category="students" render={
          (data)=>{
            return (
              data.map((datum)=>(
                <div style={{border: "black 2px solid", margin: "4px", padding:"8px", borderRadius: "8px"}} key={datum.id}>
                    <h3>{`${datum.f_name}  ${datum.l_name}`}</h3>
                    <p>{datum.admission_no}</p>
                    <p>{datum.age}</p>
                    <p>{datum.admissionDate}</p>
                    <div className="delete-holder">

                      <p className="delete" onClick={(e) => handleDeleteClick (datum.id, setDeletedStudent)}>Delete</p>
                    </div>
                    <div>
                    </div>
                </div>
              ))
            )
          }      
            
        }/>
        {showAlert && 
          <div className="alert">
          <p>Are you sure you want to delete student?</p>
          <div className="alert-buttons">
          <button className="del" onClick={handleDelete}>Delete</button>
          <button className="cancel" onClick={()=>setShowAlert(false)}>Cancel</button>
          </div>
        </div>}
        
    </div>
  )
}

export default RenderProps

