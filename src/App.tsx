import React from 'react';
import Paper from '@mui/material/Paper';
import './App.css';
import PersonalInfo from "./personalInfo";
import InsuranceInfo from "./insuranceInfo";
import SurgeryInfo from "./surgeryInfo";

function App() {
    return (
    <div className="App">
        <h1>Medical History Form</h1>
      <header className="App-header">
          <Paper elevation={5} variant="outlined" sx={{p: 2}}>
              <PersonalInfo />
              <br/>
              <InsuranceInfo />
              <br/>
              <SurgeryInfo />
          </Paper>
      </header>
    </div>
  );
}

export default App;
