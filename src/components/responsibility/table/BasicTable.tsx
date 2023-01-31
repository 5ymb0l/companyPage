import { useState } from "react";
import Box from "@mui/material/Box";
import { TableData } from "../dashboard/Dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  tableRowClasses,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

interface PaginationProps {
  data: TableData[];
  itemsPerPage?: number;
}

function usePagination(props: PaginationProps) {
  const { data, itemsPerPage = 5 } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

interface Props {
  userList?: TableData[];
}

export default function BasicTable({ userList = [] }: Props) {
  const _DATA = usePagination({ data: userList });


  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer
        sx={{ borderRadius: "15px", width: "100%" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead
            sx={{
              tableLayout: "fixed",
            }}
          >
            <TableRow
              sx={{ display: "table", tableLayout: "fixed", width: "100%" }}
            >
              <TableCell
                style={{
                  width: "40%",
                  paddingLeft: "4%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Responsiblities
              </TableCell>
              <TableCell
                style={{
                  width: "20%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Types
              </TableCell>
              <TableCell
                style={{
                  width: "20%",
                  paddingLeft: "8%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              >
                Role&nbsp;
              </TableCell>
              <TableCell
                style={{
                  width: "20%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  paddingLeft: "10%",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              tableLayout: "fixed",
              display: "block",
              overflow: "auto",
              p: "0 auto",
              [`& .${tableRowClasses.root}`]: {
                position: "relative",
                "&::after": {
                  bottom: 0,
                  content: '""',
                  display: "block",
                  height: "2px",
                  left: "50%",
                  position: "absolute",
                  transform: "translate(-50%,0)",
                  width: "95%",
                },
                "&:last-child::after": {
                  display: "none",
                },
              },
            }}
          >
            {_DATA.currentData().map((row, index) => {
              return (
                <TableRow
                  key={row.name}
                  sx={{ display: "table", width: "100%" }}
                >
                  <TableCell
                    style={{
                      width: "40%",
                      paddingLeft: "4%",
                      fontFamily: "Poppins",
                      color: "#002F71",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    style={{
                      width: "20%",
                      fontFamily: "Poppins",
                      color: "#002F71",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    {row.types}
                  </TableCell>
                  <TableCell
                    style={{
                      width: "20%",
                      paddingLeft: "8%",
                      fontFamily: "Poppins",
                      color: "#002F71",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
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
                      arial-lable="SA"
                    >
                      {row.role}
                    </Box>
                  </TableCell>
                  <TableCell
                    style={{
                      width: "20%",
                      paddingLeft: "10%",
                      fontFamily: "Poppins",
                      color: "#002F71",
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    <Link style={{ textDecoration: "none" }} to="/dashtwo">
                      <Button variant="outlined">Select</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
