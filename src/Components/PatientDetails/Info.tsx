import { useLocation } from "react-router-dom";
import PatientTabs from './PatientCategoriesTab'
import './PatientDetails.css'
import { useState } from "react";

function Info({patient}:any){




    return (
        <>
         <div>
            <p>
            <label>Name:</label> <label>{patient.key.name}</label>
            </p>
            <label>Email:</label> <label>{patient.key.contact.email}</label>
         </div>
        </>
    )
}

export default Info;