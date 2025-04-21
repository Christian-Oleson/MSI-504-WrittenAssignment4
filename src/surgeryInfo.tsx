import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, {JSX} from "react";
import TextField from "@mui/material/TextField";

export default function SurgeryInfo() : JSX.Element {

    const [value, setValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Surgery Information</h2>
        <Grid container spacing={1} sx={{ p: 1 }}>
            <Grid size={12}>
                <FormControl>
                    <FormLabel id="surgery-radio-buttons-group-label">Have you had surgery before?</FormLabel>
                    <RadioGroup
                        row
                        id="had-surgery-radio-buttons-group-label"
                        defaultValue="no"
                        name="had-surgeries-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid size={12}>
                <ListItem stringValue={value} />
            </Grid>
        </Grid>
    </Paper>
}

function ListItem(props: IListItem) {
    if (props.stringValue === "yes") {
        return <Grid>
            <TextField
                fullWidth
                id="surgery-list"
                label="List of Surgeries"
                maxRows={40}
                multiline
                placeholder="Submit your surgeries, one per line, with a date MM-YYYY"
                variant="outlined" />
        </Grid>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}
