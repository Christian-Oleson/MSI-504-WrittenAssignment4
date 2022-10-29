import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function FamilyInfo(): JSX.Element {
    return  <Paper elevation={3} variant="outlined">
        <h2>Family Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Please list family or next of kin, their relationship to you, and their contact information, including phone number and address"
                    maxRows={40}
                    multiline
                    variant="standard" />
            </Grid>
        </Grid>
    </Paper>
}