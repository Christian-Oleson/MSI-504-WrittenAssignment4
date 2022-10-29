import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function AppointmentInfo(): JSX.Element {
    return  <Paper elevation={12}>
        <h2>Appointment Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <p>Date of last exam</p>
                <TextField
                    fullWidth
                    id="last-exam-date"
                    type="date"
                    variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    fullWidth
                    id="appointment-reason"
                    label="Why are you seeing the doctor today?"
                    maxRows={40}
                    multiline
                    variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    fullWidth
                    id="referrer"
                    label="Who referred you?"
                    maxRows={40}
                    multiline
                    variant="standard" />
            </Grid>
        </Grid>
    </Paper>
}