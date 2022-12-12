import {useState} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { PeoplesData } from "../Person.type";
// import { TableData } from "../dashboard/DashboardTwo";
// import {EditForm} from "../TestCase/EditForm"
// import {Todo} from  "../TestCase/model"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
  Pagination,
  Button
} from "@mui/material";
import  FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number
//   ) => void;
// }

// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };
interface PaginationProps { 
  data : PeoplesData[];
  itemsPerPage? : number; 
 
 }
function usePagination (props : PaginationProps ) {
  const { data, itemsPerPage = 5 } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump( page : number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}
interface Props {
  userList? : PeoplesData[] ;
  // setUserList :  React.Dispatch<React.SetStateAction<TableData[] | undefined>>

}
//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }



export default function BasicTableTwo({userList = [] } : Props) {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [edit, setEdit] = useState<boolean>(false);

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  // const handleClick = (e: React.MouseEvent<Element, MouseEvent>) =>  {
  //   e.preventDefault();
  //   setEdit(true)
  // }
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const count = Math.ceil(userList.length / rowsPerPage);
  const _DATA = usePagination({data : userList});
  
  const handleChange = ( event: React.ChangeEvent<unknown>,
    newPage: number) => {
      // setPage(newPage);
    _DATA.jump(newPage);
  };
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email Address &nbsp;</TableCell>
            <TableCell>Region</TableCell>
            <TableCell>Type</TableCell>
            {/* <TableCell> Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
        { _DATA.currentData().map((row , index) => {
            return(
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
              {`${row.firstName} ${row.lastName}`}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.email}
              </TableCell>
              <TableCell >
              {`${row.country} ${row.state} ${row.sanghat}`}
              </TableCell>
              <TableCell>
                {/* <Box sx ={{
                 background: "#E6F2FE",
                 borderRadius: "50px",
                 width: "35px",
                  position: "relative",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
               height: "35px",
              }} 
              arial-lable ="SA">
          
              </Box> */}
                 {row.types}
              </TableCell>
              <TableCell>
{/* <Button color="primary"
  onClick={() => { openInPopup(row) }}>  


</Button> */}


              </TableCell>
              {/* <TableCell>
               <Button variant="outlined"
                    sx={{
                       left: "65%",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                      border: "2px solid #1073FF",
                    }}>
           {row.status} 
           </Button>
           </TableCell> */}
           </TableRow>
            )
                  })}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            /> */}
               <Pagination
        count={userList.length}
        size="large"
        page={_DATA.currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}




// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Box,
//   TableFooter,
//   TablePagination
// } from "@mui/material";
// function createData(name: string, types: string, role: string, status: string) {
//   return { name, types, role, status };
// }

// const rows = [
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 ,
//         }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Responsiblities</TableCell>
//             <TableCell>Types</TableCell>
//             <TableCell>Role&nbsp;</TableCell>
//             <TableCell></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell>{row.types}</TableCell>
//               <TableCell>
//                     <Box
//                     sx={{
//                       background: "#E6F2FE",
//                       borderRadius: "50px",
//                       width: "35px",
//                       position: "relative",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       height: "35px",
//                     }}
//                     aria-label="SA"
//                   >
//                     {row.role}
//                   </Box>
                
//               </TableCell>
//               <TableCell>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       left: "65%",
//                       boxSizing: "border-box",
//                       borderRadius: "10px",
//                       border: "2px solid #1073FF",
//                     }}
//                   >
//                     {row.status}
//                   </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
// //           <TableRow>
// //             <TablePagination
//             rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}               colSpan={3}
//                count={rows.length}
//                rowsPerPage={rowsPerPage}
//               page={page}
//              SelectProps={{
//                  inputProps: {
//                    "aria-label": "rows per page",
//                  },
//                 native: true,
//               }}
//                onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               ActionsComponent={TablePaginationActions}
//            />
//           </TableRow>
//          </TableFooter>
//       </Table>
//     </TableContainer>
//   );
// }
