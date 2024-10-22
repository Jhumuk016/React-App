// import necessary modules
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import patientdata from '../../json/patientdata.json'
import './PatientData.css';
import { Link, useNavigate  } from 'react-router-dom';
// Define the Patient interface

interface Contact {
    phone: string;
    email: string;
}

interface MedicalHistory {
    condition: string;
    diagnosed: string; // ISO 8601 date format (YYYY-MM-DD)
}

interface Medication {
    name: string;
    dosage: string;
    frequency: string;
}

interface Appointment {
    date: string; // ISO 8601 date format (YYYY-MM-DD)
    time: string; // Time format (HH:MM AM/PM)
    reason: string;
}

interface Patient {
    patient_id: string;
    name: string;
    age: number;
    gender: string;
    contact: Contact;
    medical_history: MedicalHistory[];
    medications: Medication[];
    appointments: Appointment[];
}

// Component to display patient data
export default function PatientData() {
  const [patients, setPatients] = useState<Patient[]>(patientdata);
  const navigate = useNavigate ();
  // Fetch patient data from JSON file
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/src/json.patientdata.json'); // adjust the path accordingly
//       const data = await response.json();
//       setPatients(data);
//     };
    
//     fetchData();
//   }, []);

  return (
    <div className='PatientTable'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1050 }} aria-label="simple table">
          <TableHead className='TableHead'>
            <TableRow>
              <TableCell align="center">Patient Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
             
              <TableRow
                key={patient.name}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={(e)=>{
                    console.log("row clicked", e, patient.patient_id);
                    navigate(`patient/:${patient.patient_id}`,{ state: { key: patient } })
                    // <Link to = {`patient/:${patient.patient_id}`}>
                }}
              >
           
                <TableCell align="center">{patient.patient_id}</TableCell>
                <TableCell align="center">{patient.name}</TableCell>
                <TableCell align="center">{patient.age}</TableCell>
                <TableCell align="center">{patient.contact.email}</TableCell>
                <TableCell align="center">{patient.gender}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
