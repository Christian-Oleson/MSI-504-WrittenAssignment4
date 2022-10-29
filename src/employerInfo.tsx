import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import TextField from "@mui/material/TextField";

export default function EmployerInfo() : JSX.Element {

    const [employerValue, setEmployerValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmployerValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={3} variant="outlined">
        <h2>Employer Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Are you currently employed?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
                        name="radio-buttons-group"
                        value={employerValue}
                        onChange={handleChange}
                        >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <EmployerDetails stringValue={employerValue} />
        </Grid>
        <br/>
    </Paper>
}

function EmployerDetails(props: IListItem) : JSX.Element {
    if (props.stringValue === "yes") {
        return <>
                <Grid item xs={6} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Employer Name"
                    required
                    variant="standard" />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer Phone"
                        variant="standard" />
                </Grid>
                <Grid xs={6} sm={4} md={4}>
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer Address Line 1"
                        required
                        variant="standard" />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer Address Line 2"
                        variant="standard" />
                </Grid>
                <Grid xs={6} sm={4} md={4}>
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer City"
                        required
                        variant="standard" />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer State"
                        required
                        variant="standard" />
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer Zip Code"
                        required
                        type="number"
                        variant="standard" />
                </Grid>
            </>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}