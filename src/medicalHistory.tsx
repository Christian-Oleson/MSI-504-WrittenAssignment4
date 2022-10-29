import { Checkbox, Paper } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function MedicalHistory(): JSX.Element {
    return <Paper elevation={3} variant="outlined">
        <h2>Medical History</h2>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="medical history table">
                <TableHead>
                    <TableRow>
                        <TableCell>Medical Condition</TableCell>
                        <TableCell align="right">I have had</TableCell>
                        <TableCell align="right">Family History</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">Diabetes</TableCell>
                        <TableCell align="right"><Checkbox color="secondary" /></TableCell>
                        <TableCell align="right"><Checkbox color="success" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Heart Trouble</TableCell>
                        <TableCell align="right"><Checkbox color="secondary" /></TableCell>
                        <TableCell align="right"><Checkbox color="success" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Cancer</TableCell>
                        <TableCell align="right"><Checkbox color="secondary" /></TableCell>
                        <TableCell align="right"><Checkbox color="success" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Seizure</TableCell>
                        <TableCell align="right"><Checkbox color="secondary" /></TableCell>
                        <TableCell align="right"><Checkbox color="success" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">Fainting</TableCell>
                        <TableCell align="right"><Checkbox color="secondary" /></TableCell>
                        <TableCell align="right"><Checkbox color="success" /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
}