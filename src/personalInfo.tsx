import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import {JSX} from "react";

export default function PersonalInfo() : JSX.Element {
    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Personal Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="first-name"
                    label="First Name"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    helperText="Birthdate"
                    id="birthdate"
                    required
                    type="date"
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="social-security-number"
                    label="Social Security Number"
                    required
                    type="number"
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="phone-number"
                    label="Phone Number"
                    required
                    type="tel"
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 0, sm: 4}}>
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="address-line-1"
                    label="Address Line 1"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="address-line-2"
                    label="Address Line 2"
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 0, sm: 4}}>
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="city"
                    label="City"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="state"
                    label="State"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={{xs: 12, sm: 4}}>
                <TextField
                    fullWidth
                    id="zip-code"
                    label="Zip Code"
                    required
                    type="number"
                    variant="outlined" />
            </Grid>
        </Grid>
        <br/>
    </Paper>
}