import { useState } from "react";
import Box from "@mui/material/Box";
import { PeoplesData } from "../Person.type";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  Paper,
  TableHead,
  Pagination,
  Button,
  tableRowClasses,
} from "@mui/material";

import BasicMenu from "../../Controls/BasicMenu";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface PaginationProps {
  data: PeoplesData[];
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

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
  };
}
interface Props {
  userList?: PeoplesData[];
  onDeleteClickHnd: (data: PeoplesData) => void;
  onEdit: (data: PeoplesData) => void;
}

export default function BasicTableTwo({
  userList = [],
  onDeleteClickHnd,
  onEdit,
}: Props) {
  const _DATA = usePagination({ data: userList });

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    _DATA.jump(newPage);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TableContainer
          sx={{ borderRadius: "15px", width: "100%" }}
          component={Paper}
        >
          <Table aria-label="custom pagination table">
            <TableHead
              sx={{
                tableLayout: "fixed",
              }}
            >
              <TableRow
                sx={{ display: "table", tableLayout: "fixed", width: "100%" }}
              >
                <TableCell
                  align="center"
                  style={{
                    width: "20%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "15%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Phone Number
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "20%",

                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Email Address &nbsp;
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "15%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Region
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  Type
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Role{" "}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  Actions{" "}
                </TableCell>
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
              {_DATA.currentData().map((row, index, ..._DATA) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{ display: "table", width: "100%" }}
                  >
                    <TableCell
                      align="center"
                      style={{
                        width: "20%",
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        fontSize: "20px",
                        color: "#002F71",
                      }}
                      component="th"
                      scope="row"
                    >
                      {`${row.firstName} ${row.lastName}`}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: "15%",
                        fontFamily: "Poppins",
                        color: "#002F71",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {row.phone}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: "20%",
                        fontFamily: "Poppins",
                        color: "#002F71",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: "15%",
                        fontFamily: "Poppins",
                        color: "#002F71",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {`${row.country} ${row.state} ${row.sanghat}`}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: "10%",
                        fontFamily: "Poppins",
                        color: "#002F71",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {row.types}
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        width: "10%",
                        fontFamily: "Poppins",
                        color: "#002F71",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
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
                            color: "#002F71",
                          }}
                          arial-lable="SA"
                        >
                          SA
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        width: "10%",
                        fontFamily: "Poppins",
                        color: "#6682AA",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          sx={{
                            background: "#E6F2FE",
                            width: "30px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "35px",
                          }}
                          arial-lable="SA"
                        >
                          <BasicMenu
                            onEdit={() => onEdit(row)}
                            onDeleteClickHnd={() => onDeleteClickHnd(row)}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableFooter>
              <TableRow
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "10vh",
                }}
              >
                <Pagination
                  hidePrevButton
                  count={userList.length}
                  size="small"
                  page={_DATA.currentPage}
                  variant="outlined"
                  shape="circular"
                  onChange={handleChange}
                  hideNextButton
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "50px",
                      color: " #002F71",
                      fontWeight: 600,
                      fontSize: "14px",
                      textTransform: "none",
                      border: "1px solid #002F71",
                    }}
                    variant="outlined"
                    endIcon={<ArrowForwardIosIcon />}
                    disabled={_DATA.currentPage === 10 ? true : false}
                    onClick={_DATA.next}
                  >
                    Next
                  </Button>
                </Box>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
