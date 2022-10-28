import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";

export default function PersonalInfo() : JSX.Element {
    return <Paper elevation={3} variant="outlined">
        <h2>Personal Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="First Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Last Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Birthdate (MM/DD/YYYY)"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address Line 1"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address Line 2"
                    variant="standard" />
            </Grid>
            <Grid  xs={4}>
            </Grid>
            <Grid item  xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="City"
                    required
                    variant="standard" />
            </Grid>
            <Grid item  xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="State"
                    required
                    variant="standard" />
            </Grid>
            <Grid item  xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Zip Code"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone Number"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Employer"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Office Phone"
                    variant="standard" />
            </Grid>
        </Grid>
        <br/>
    </Paper>
}