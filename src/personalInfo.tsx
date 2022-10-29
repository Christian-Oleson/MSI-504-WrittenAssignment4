import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function PersonalInfo() : JSX.Element {
    return <Paper elevation={3} variant="outlined">
        <h2>Personal Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="First Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Last Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Birthdate"
                    required
                    type="date"
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Social Security Number"
                    required
                    type="number"
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone Number"
                    required
                    type="tel"
                    variant="standard" />
            </Grid>
            <Grid xs={6} sm={4} md={4}>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address Line 1"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Address Line 2"
                    variant="standard" />
            </Grid>
            <Grid xs={6} sm={4} md={4}>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="City"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="State"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Zip Code"
                    required
                    type="number"
                    variant="standard" />
            </Grid>
        </Grid>
        <br/>
    </Paper>
}