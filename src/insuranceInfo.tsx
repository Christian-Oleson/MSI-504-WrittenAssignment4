import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, {JSX} from "react";

export default function InsuranceInfo() : JSX.Element {
    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Insurance Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={{xs: 12, sm: 6, md: 12}}>
                <TextField
                    fullWidth
                    id="insurer-name"
                    label="Insurer"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={12}>
                <TextField
                    fullWidth
                    id="insurance-carrier-number"
                    label="Insurance Carrier Number"
                    required
                    variant="outlined" />
            </Grid>
            <Grid size={12}>
                <FormControl>
                    <FormLabel id="policy-holder-radio-buttons-group-label">This policy belongs to:</FormLabel>
                    <RadioGroup
                        row
                        id="policy-options-radio-buttons-group-label"
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