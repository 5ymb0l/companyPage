
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
function createData(name: string, types: string, role: string, status: string) {
  return { name, types, role, status };
}

const rows = [
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,
        }} aria-label="simple table">
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
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.types}</TableCell>
              <TableCell>
                <div>
                  <Box
                    sx={{
                      background: "#E6F2FE",
                      borderRadius: "50px",
                      width: "35px",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "35px",
                    }}
                    aria-label="SA"
                  >
                    {row.role}
                  </Box>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <Button
                    variant="outlined"
                    sx={{
                      left: "65%",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "2px solid #1073FF",
                    }}
                  >
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
