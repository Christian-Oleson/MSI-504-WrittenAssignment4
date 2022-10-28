import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function ImmunizationInfo(): JSX.Element {
    return  <Paper elevation={3} variant="outlined">
        <h2>Immunization Information</h2>
        <Grid container padding={1} spacing={1}>
            <ListItem />
        </Grid>
    </Paper>
}

function ListItem() {
    return <Grid item xs={6} sm={4} md={4}>
            <TextField
                fullWidth
                id="outlined-basic"
                label="List of Immunizations"
                maxRows={40}
                multiline
                placeholder="Submit your immunizations, one per line, with a date DD-MM-YYYY"
                variant="standard" />
        </Grid>
}