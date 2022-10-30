import React from 'react';
import Paper from '@mui/material/Paper';
import './App.css';
import PersonalInfo from "./personalInfo";
import InsuranceInfo from "./insuranceInfo";
import SurgeryInfo from "./surgeryInfo";
import ImmunizationInfo from "./immunizationInfo";
import PainInfo from "./painInfo";
import EmployerInfo from './employerInfo';
import AppointmentInfo from "./appointmentInfo";
import FamilyInfo from "./familyInfo";
import MedicalHistory from './medicalHistory';
import HospitalizationInfo from './hospitalizationInfo';
import { Button } from '@mui/material';

function App() {
    return (
    <div className="App">
        <h1>Medical History Form</h1>
      <header className="App-header">
      </header>
        <body>
            <Paper elevation={12} sx={{p: 2, backgroundColor: "#e8eaed"}}>
                <PersonalInfo />
                <br/>
                <FamilyInfo />
                <br/>
                <MedicalHistory />
                <br/>
                <EmployerInfo />
                <br/>
                <InsuranceInfo />
                <br/>
                <HospitalizationInfo />
                <br/>
                <SurgeryInfo />
                <br/>
                <ImmunizationInfo />
                <br/>
                <AppointmentInfo />
                <br/>
                <PainInfo />
                <br/>
                <Paper elevation={12} sx={{p: 2}}>
                    <Button
                        onClick={() => {
                            alert('Your information has been submitted. You will receive a confirmation shortly from your health care provider.');
                        }} variant="contained">Submit
                    </Button>
                </Paper>
            </Paper>
        </body>
    </div>
  );
}

export default App;
