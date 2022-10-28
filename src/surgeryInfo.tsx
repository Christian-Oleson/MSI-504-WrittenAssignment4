import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import React from "react";

let num: number = 0;

export default function SurgeryInfo() : JSX.Element {
    const SurgeryInfo = () => {
        // @ts-ignore
        let listItem: JSX.Element = null;

        if (value == "yes") {
            let listItem = <h3>Hello1</h3>
        }

        return listItem;
    }

    const [value, setValue] = React.useState('no');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        num++;
        console.log(num);
        setValue((event.target as HTMLInputElement).value);

        console.log(value);
        if (value == "yes") {
            SurgeryInfo();
        }
    };

    return <Paper elevation={3} variant="outlined">
        <h2>Surgery Information</h2>
        <Grid container padding={1} spacing={1}>
            <Grid item xs={12}>
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
            <ListItem stringValue={value} />
        </Grid>
    </Paper>
}

function ListItem(props: IListItem) {
    return <h3>Hello! {props.stringValue}</h3>
}

interface IListItem {
    stringValue: string;
}