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

function App() {
    return (
    <div className="App">
        <h1>Medical History Form</h1>
      <header className="App-header">
          <Paper elevation={5} variant="outlined" sx={{p: 2}}>
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
          </Paper>
      </header>
    </div>
  );
}

export default App;
