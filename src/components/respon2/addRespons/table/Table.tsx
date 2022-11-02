import  "../../muiTheme/MyTheme"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Fab
}  from '@mui/material';
function createData(
  name: string,
  types: string,
  role: string,
  status : string
 
) {
  return { name, types, role , status} ;
}

const rows = [
  createData('Vadodara', "Sanghat", "SA", "Select"),
  createData('Ahmedabad', "District", "A", "Select"),
  createData('Surat', "Sanghat", "A","Select"),
];

export default function BasicTable() {
   return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Responsiblities</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>Role&nbsp;</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.types}</TableCell>
              <TableCell>
                <div>
                <Fab sx={{
                background: '#E6F2FE'
                }} aria-label="SA">
                {row.role} 
                 </Fab>
                </div>
            </TableCell>
              <TableCell>
               <div> 
                <Button variant = "outlined">
                {row.status}
                </Button>
                 </div>
             </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}