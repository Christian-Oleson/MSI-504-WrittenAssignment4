import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React, {JSX} from "react";
import TextField from "@mui/material/TextField";

export default function PainInfo(): JSX.Element {
    const [value, setValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Pain Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid size={12}>
                <FormControl>
                    <FormLabel id="pain-options-radio-buttons-group-label">Are you currently having any pain?</FormLabel>
                    <RadioGroup
                        row
                        id="pain-buttons-group-label"
                        defaultValue="no"
                        name="pain-radio-buttons-group"
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
    const [painValue, setPainValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPainValue((event.target as HTMLInputElement).value);
    };

    if (props.stringValue === "yes") {
        return <FormControl>
                <FormLabel id="pain-types-radio-buttons-group-label">What type of pain are you experiencing?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="pain-type-group-label"
                        defaultValue="no"
                        name="pain-type-radio-buttons-group"
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
                            variant="outlined" />
            </FormControl>
    }

    return <div></div>
}

interface IListItem {
    stringValue: string;
}