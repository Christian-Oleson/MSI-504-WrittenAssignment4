import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

export default function PersonalInfo() : JSX.Element {
    return <Paper elevation={12}>
        <h2>Personal Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="first-name"
                    label="First Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="last-name"
                    label="Last Name"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="birthdate"
                    label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Birthdate"
                    required
                    type="date"
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="social-security-number"
                    label="Social Security Number"
                    required
                    type="number"
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="phone-number"
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
                    id="address-line-1"
                    label="Address Line 1"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="address-line-2"
                    label="Address Line 2"
                    variant="standard" />
            </Grid>
            <Grid xs={6} sm={4} md={4}>
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="city"
                    label="City"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="state"
                    label="State"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="zip-code"
                    label="Zip Code"
                    required
                    type="number"
                    variant="standard" />
            </Grid>
        </Grid>
        <br/>
    </Paper>
}