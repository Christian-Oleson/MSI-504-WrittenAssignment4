import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {JSX} from "react";

export default function AppointmentInfo(): JSX.Element {
    return  <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Appointment Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={12}>
                <p>Date of last exam</p>
                <TextField
                    fullWidth
                    id="last-exam-date"
                    type="date"
                    variant="outlined" />
            </Grid>
            <Grid size={12}>
                <TextField
                    fullWidth
                    id="appointment-reason"
                    label="Why are you seeing the doctor today?"
                    maxRows={40}
                    multiline
                    variant="outlined" />
            </Grid>
            <Grid size={12}>
                <TextField
                    fullWidth
                    id="referrer"
                    label="Who referred you?"
                    maxRows={40}
                    multiline
                    variant="outlined" />
            </Grid>
        </Grid>
    </Paper>
}