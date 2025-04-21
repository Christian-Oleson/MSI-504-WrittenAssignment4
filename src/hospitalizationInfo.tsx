import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, {JSX} from "react";
import TextField from "@mui/material/TextField";

export default function HospitalizationInfo() : JSX.Element {

    const [hValue, setHValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Hospitalization Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={12}>
                <FormControl>
                    <FormLabel id="hosp-radio-buttons-group-label">Have you ever been hospitalized?</FormLabel>
                    <RadioGroup
                        row
                        id="hospitalizations-radio-buttons-group-label"
                        defaultValue="no"
                        name="hospitalization-radio-buttons-group"
                        value={hValue}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid size={12}>
                <ListItem stringValue={hValue} />
            </Grid>
        </Grid>
    </Paper>
}

function ListItem(props: IListItem) {
    if (props.stringValue === "yes") {
        return <Grid>
            <TextField
                fullWidth
                id="list-of-hospitalizations"
                label="List of Hospitalizations"
                maxRows={40}
                multiline
                placeholder="Submit your hospitalizations, one per line, with a date MM-YYYY"
                variant="outlined" />
        </Grid>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}