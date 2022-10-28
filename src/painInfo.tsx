import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from "react";
import TextField from "@mui/material/TextField";

export default function PainInfo(): JSX.Element {
    const [value, setValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={3} variant="outlined">
        <h2>Pain Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12}>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Are you currently having any pain?</FormLabel>
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
            <ListItem stringValue={value} />
        </Grid>
    </Paper>
}

function ListItem(props: IListItem) {
    const [painValue, setPainValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPainValue((event.target as HTMLInputElement).value);
    };

    if (props.stringValue === "yes") {
        return <Grid>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">What type of pain are you experiencing?</FormLabel>
                <Grid container padding={1} spacing={1}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
                        name="radio-buttons-group"
                        value={painValue}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="constant" control={<Radio />} label="Constant" />
                        <FormControlLabel value="sporadic" control={<Radio />} label="Sporadic" />
                    </RadioGroup>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="How long does your pain last?"
                            variant="standard" />
                </Grid>
            </FormControl>
        </Grid>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}