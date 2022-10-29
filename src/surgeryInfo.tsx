import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from "react";
import TextField from "@mui/material/TextField";

export default function SurgeryInfo() : JSX.Element {

    const [value, setValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={3} variant="outlined">
        <h2>Surgery Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Have you had surgery before?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
                        name="radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <ListItem stringValue={value} />
            </Grid>
        </Grid>
    </Paper>
}

function ListItem(props: IListItem) {
    if (props.stringValue === "yes") {
        return <Grid item>
            <TextField
                fullWidth
                id="outlined-basic"
                label="List of Surgeries"
                maxRows={40}
                multiline
                placeholder="Submit your surgeries, one per line, with a date DD-MM-YYYY"
                variant="standard" />
        </Grid>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}