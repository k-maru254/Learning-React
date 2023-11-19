import React from 'react';
import FormValidationForm from './FormValidationForm';
import "./styles/FormValidation.css";

function FormValidation() {
  return (
    <>
        <div className="form-validation-header">
          <nav className="form-validation-navigation">
            <p>Register a student</p>
          </nav>
        </div>
        <div className="form-validation-main">
            <FormValidationForm/>
        </div>
    </>
  )
}

export default FormValidation
