import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './App.css';
import PersonalInfo from "./personalInfo";
import InsuranceInfo from "./insuranceInfo";
import SurgeryInfo from "./surgeryInfo";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));

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
