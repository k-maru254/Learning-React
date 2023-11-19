import React, { useEffect, useReducer, useState } from 'react';
import "./styles/ValidationForm.css"
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';

function FormValidationForm() {

    const studentData = {
        "f_name": "",
        "l_name": "",
        "age": 12,
        "admission_no": 1000,
        "subjects": []
    };

    let errorMessages = {
        shortText:"Input atleast 2 characters", 
        ageRange: "Age must be between 12 and 20", 
        maxAge: "Maximum age is 20 years",
        subjectLimit: "Select between 3 and 5 subjects",
        admissionRange: "Admission number should be between 1000 and 9999"
    }

    const [inputTouched, setInputTouched] = useState(
        {
            fName: false,
            lName: false,
            age: false,
            adminNo: false,
            subjects: false
        }
    )

    const [validInput, setValidInput] = useState(
        {
            fName: false,
            lName: false,
            age: false,
            admissionNo: false,
            subjects: false
        }
    )

    const [addStudentStatus, setAddStudentStatus] = useState("")
        const navigator = useNavigate()

    const inputValueReducer = (state, action)=>{
        const type = action.type
        const element = action.element

        switch(type){
            case "fName":{
                setValidInput({...validInput, fName:element.value.length > 1})
                return {...state, f_name: element.value}               
            };     
            case "lName":{
                setValidInput({...validInput, lName:element.value.length > 1})
                return {...state, l_name:element.value}
            };    
            case "age":{
                setValidInput({...validInput, age:element.value > 11 && element.value < 21})
                return {...state, age:element.value}
            };     
            case "adminNo":{
                setValidInput({...validInput, admissionNo:element.value > 999 && element.value < 10000})
                return {...state, admission_no:element.value}
            }
            case "subjects":{
                setInputTouched({...inputTouched, subjects: true})
                const options = element.options
                const selectedOptions = []
                Object.values(options).forEach((option)=>option.selected && selectedOptions.push(option.value))
                setValidInput({...validInput, subjects: selectedOptions.length > 2 && selectedOptions.length < 6} )
                
                return {...state, subjects:selectedOptions};
            }
        }
        
    }

    const [inputValue, inputValueDispatch] = useReducer(inputValueReducer, studentData)
        
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const submitFile = validInput.fName && validInput.lName 
        && validInput.age && validInput.admissionNo && validInput.subjects

        const addStudent = async(studentData)=>{
            
            try{                
                const addingStudent = await axios.post("http://127.0.0.1:8000/api/students/", studentData)
                setAddStudentStatus(addingStudent.status) ;
                navigator("/render props");
            } 
            catch(error){
                console.error(error);
            }    
            
        }
        submitFile && addStudent(inputValue);
    };

  return (
    <form onSubmit={handleFormSubmit} className="student-registration-form">
        <div className="first-name-container">
            <input 
                className="first-name" 
                name="firstName" 
                type="text" 
                placeholder="First Name" 
                value={inputValue.f_name}
                onBlur={() => setInputTouched({...inputTouched, fName:true})} 
                onChange={e=>inputValueDispatch({type:"fName", element:e.target})}
            />
            {validInput.fName || inputTouched.fName && <p className="error-messsage">{errorMessages.shortText}</p>}
        </div>
        <div className="last-name-container">
            <input 
                className="last-name" 
                name="lastName" 
                type="text" 
                placeholder="Last Name" 
                value={inputValue.l_name}
                onBlur={() => setInputTouched({...inputTouched, lName:true})} 
                onChange={e=>inputValueDispatch({type:"lName", element:e.target})}
            />
            {validInput.lName || inputTouched.lName && <p className="error-messsage">{errorMessages.shortText}</p>}
        </div>
        <div className="age-container">
            <input 
                className="form-age" 
                name="age" 
                type="number" 
                placeholder="Age" 
                value={inputValue.age}
                onBlur={() => setInputTouched({...inputTouched, age:true})} 
                onChange={e=>inputValueDispatch({type:"age", element:e.target})}
            />
            {validInput.age || inputTouched.age && <p className="error-messsage">{errorMessages.ageRange}</p>}
            
        </div>
        <div className="admin-no-container">
            <input 
                className="admin-no" 
                name="adminNo" 
                type="number" 
                placeholder="Admission no." 
                value={inputValue.admission_no}
                onBlur={() => setInputTouched({...inputTouched, adminNo:true})} 
                onChange={e=> inputValueDispatch({type: "adminNo", element: e.target})}
            />
            {validInput.admissionNo || inputTouched.adminNo && <p className="error-messsage">{errorMessages.admissionRange}</p>}
        </div>
        <div className="subjects-container">
            <select 
                name="subjects" 
                className="subjects"
                defaultValue={[]}
                multiple
                onChange={e=>inputValueDispatch({type: "subjects", element:e.target})} 
                size={3}
            >            
                    <option value="3">Mathematics</option>
                    <option value="5">Kiswahili</option>
                    <option value="6">Biology</option>
                    <option value="7">Physics</option>
                    <option value="8">Chemisry</option>
                    <option value="9">History</option>
                    <option value="10">Agriculture</option>
                    <option value="11">English</option>
            </select>
            {validInput.subjects || inputTouched.subjects && <p className="error-messsage">{errorMessages.subjectLimit}</p>}
        </div>
        <div className="submit-container">
            <button type="submit" className="form-submit">Submit</button>
        </div>
      
    </form>
  );
}

export default FormValidationForm;
