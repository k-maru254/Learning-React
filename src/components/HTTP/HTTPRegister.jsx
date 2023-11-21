import React from 'react';
import "./styles/HttpRegister.css";
import {useFormik} from "formik";
import { json, useFormAction } from 'react-router-dom';
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function HTTPRegister() {
    const navigate = useNavigate()
    const formik = useFormik(
        {
            initialValues:{
                initials: "mr",
                first_name: "",
                middle_name: "",
                sir_name: "",
                tac_number: "",
                age: "",
                subjects:["initial"]
            },
            onSubmit: data =>{
                const createTeacher = async(teacher)=>{
                    try{            
                        console.log(teacher)            
                        const res = await axios.post("http://127.0.0.1:8000/api/teachers/", teacher);
                        console.log("Teacher added successfully.");          
                        navigate("/routes")
                    }
                    catch{
                        console.error(error);
                    }
                }
                // console.log(teacherData)
                createTeacher(data);
            },
            validationSchema: Yup.object({                
                initials:Yup.string().required("*Required"),
                first_name: Yup.string()
                    .min(2, "Name must have at least two (2) characters.")
                    .max(15, "Name must should have 15 or less character")
                    .required("*Required"),
                middle_name: Yup.string()
                    .min(2, "Name must have at least two (2) characters.")
                    .max(15, "Name must should have 15 or less character")
                    .required("*Required"),
                sir_name: Yup.string()
                    .min(2, "Name must have at least two (2) characters.")
                    .max(15, "Name must should have 15 or less character")
                    .required("*Required"),
                age: Yup.number().required("*Required")
                    .min(18, "Minimun age is 18 years")
                    .max(60, "Maximum age is 60 years")
                    .integer("Input must be an interger"),
                tac_number: Yup.number()
                    .required("*Required")
                    .min(1000, "Number should be greater than 1000")
                    .max(9999, "Number should not exceed 9999")
                    .integer("Should be an integer"),
                subjects: Yup.array().min(2, "Select two or three subjects").max(3, "Select two or three subjects")
            }
            )
        }
    );

  return (
    <div className="form-container">
        <form className="register-teacher" onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <label htmlFor="teacher-initials ">Initials</label>
                <select 
                    name="initials" 
                    id="teacher-initials" 
                    value={formik.values.initials}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Select one"
                    style= {formik.errors.first_name && formik.touched.initials 
                        ? {border: "solid red 1px"} : {}}
                >
                        <option disabled value="">Select one</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="miss">Miss</option>
                </select>
                {(formik.errors.initials && formik.touched.initials) 
                    && <p className="error-text">{formik.errors.first_name}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="teacher-fname">First Name</label>
                <input 
                    id="teacher-fname"
                    type="text" 
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    style= {formik.errors.first_name && formik.touched.first_name 
                        ? {border: "solid red 1px"} : {}}
                />
                {(formik.errors.first_name && formik.touched.first_name) 
                    && <p className="error-text">{formik.errors.first_name}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="teacher-mname">Middle Name</label>
                <input 
                    id="teacher-mname" 
                    type="text" 
                    name="middle_name"
                    value={formik.values.middle_name}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    style= {formik.errors.middle_name && formik.touched.middle_name ? {border: "solid red 1px"} : {}}
                />
                {(formik.errors.middle_name && formik.touched.middle_name) 
                    && <p className="error-text">{formik.errors.middle_name}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="teacher-sir-name">Sir Name</label>
                <input 
                    id="teacher-sir-name" 
                    type="text" 
                    name="sir_name" 
                    value={formik.values.sir_name}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    style= {formik.errors.sir_name && formik.touched.sir_name 
                        ? {border: "solid red 1px"} : {}}
                />
                {(formik.errors.sir_name && formik.touched.sir_name) 
                    && <p className="error-text">{formik.errors.sir_name}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="teacher-tac-number">TAC No.</label>
                <input 
                    id="teacher-tac-number" 
                    type="number" 
                    name="tac_number" 
                    value={formik.values.tac_number}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    style= {formik.errors.tac_number && formik.touched.tac_number 
                        ? {border: "solid red 1px"} : {}}
                />
                {(formik.errors.tac_number && formik.touched.tac_number) 
                    && <p className="error-text">{formik.errors.tac_number}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="age">Age</label>
                <input 
                    required
                    id="age" 
                    type="number" 
                    name="age" 
                    value={formik.values.age}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    style= {formik.errors.age && formik.touched.age 
                        ? {border: "solid red 1px"} : {}}
                />
                {(formik.errors.age && formik.touched.age) 
                    && <p className="error-text">{formik.errors.age}</p>}
            </div>
            <div className="input-container">
                <label htmlFor="subjects" style={{display: "block"}}>Subjets</label>
                <select multiple 
                    id="subjects" 
                    size={4} 
                    name="subjects" 
                    value={formik.values.subjects}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style= {formik.errors.subjects && formik.touched.subjects 
                        ? {border: "solid red 1px"} : {}}
                >
                        <option value="3">Mathematics</option>
                        <option value="11">English</option>
                        <option value="5">Kiswahili</option>
                        <option value="6">Biology</option>
                        <option value="8">Chemistry</option>
                        <option value="7">Physics</option>
                        <option value="9">History</option>
                        <option value="10">Agriculture</option>
                </select>
                {(formik.errors.subjects && formik.touched.subjects) 
                    && <p className="error-text">{formik.errors.subjects}</p>}
            </div>
            <div className="submit-container">
                <button className="submit-btn" type="submit">Submit</button>            
            </div>
        </form>
    </div>
  )
}

export default HTTPRegister
