import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from "react";

export default function InsuranceInfo() : JSX.Element {
    return <Paper elevation={3} variant="outlined">
        <h2>Insurance Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Insurer"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Insurance Carrier Number"
                    required
                    variant="standard" />
            </Grid>
            <Grid item xs={12}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">This policy belongs to:</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="myself"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="myself" control={<Radio />} label="Myself" />
                        <FormControlLabel value="spouse" control={<Radio />} label="Spouse" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    </Paper>
}