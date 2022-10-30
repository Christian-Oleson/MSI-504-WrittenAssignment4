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

    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Employer Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl>
                    <FormLabel id="currently-employed-radio-buttons-group-label">Are you currently employed?</FormLabel>
                    <RadioGroup
                        row
                        id="employed-radio-buttons-group-label"
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
            <Grid item xs={12} sm={4} md={4}>
                <TextField
                    fullWidth
                    id="employer-name"
                    label="Employer Name"
                    required
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Employer Phone"
                        variant="outlined" />
                </Grid>
                <Grid xs={0} sm={4} md={4}>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="employer-address-line-1"
                        label="Employer Address Line 1"
                        required
                        variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="employer-address-line-2"
                        label="Employer Address Line 2"
                        variant="outlined" />
                </Grid>
                <Grid xs={0} sm={4} md={4}>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="employer-city"
                        label="Employer City"
                        required
                        variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="employer-state"
                        label="Employer State"
                        required
                        variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <TextField
                        fullWidth
                        id="employer-zip-code"
                        label="Employer Zip Code"
                        required
                        type="number"
                        variant="outlined" />
                </Grid>
            </>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}