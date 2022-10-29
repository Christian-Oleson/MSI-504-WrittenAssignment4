import { Paper } from "@mui/material"
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function ImmunizationInfo(): JSX.Element {
    return  <Paper elevation={12} sx={{p: 2, backgroundColor: "#F8F8F8"}}>
        <h2>Immunization Information</h2>
        <Grid container padding={1} spacing={1}>
            <ListItem />
        </Grid>
    </Paper>
}

function ListItem() {
    return <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
                fullWidth
                id="list-of-immunizations"
                label="List of Immunizations"
                maxRows={40}
                multiline
                placeholder="Submit your immunizations, one per line, with a date MM-YYYY"
                variant="outlined" />
        </Grid>
}