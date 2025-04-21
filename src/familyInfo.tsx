import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {JSX} from "react";

export default function FamilyInfo(): JSX.Element {
    return  <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Family Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={12}>
                <TextField
                    fullWidth
                    id="next-of-kin"
                    label="Please list family or next of kin, their relationship to you, and their contact information, including phone number and address"
                    maxRows={40}
                    multiline
                    variant="outlined" />
            </Grid>
        </Grid>
    </Paper>
}