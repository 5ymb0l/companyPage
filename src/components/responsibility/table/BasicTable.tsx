import  {useState} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { TableData ,  } from "../dashboard/Dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Pagination,
  Paper,
  IconButton,
  TableHead,
  tableCellClasses,
  tableRowClasses,
  Button
} from "@mui/material";


interface PaginationProps { 
  data : TableData[];
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
  userList? : TableData[] ;
  // setUserList :  React.Dispatch<React.SetStateAction<TableData[] | undefined>>

}

export default function BasicTable({userList = [] } : Props) {
const [rowsPerPage, setRowsPerPage] = useState(24);
const count = Math.ceil(userList.length / rowsPerPage);
const _DATA = usePagination({data : userList});

const handleChange = ( event: React.ChangeEvent<unknown>,
  newPage: number) => {
    // setPage(newPage);
  _DATA.jump(newPage);
};

  return (
    <Box sx = {{ width : '100%'}}>
    <TableContainer sx = {{borderRadius: '15px',
    width: '100%',
    
    }}component={Paper}>
      <Table aria-label="simple table" 
      // sx={{
      //         [`&  .${tableCellClasses.root}`]: {
             
      //         },
      //       }} 
            >
        <TableHead sx={{
              tableLayout: 'fixed',
              //  backgroundColor: '#00A77E',
             
              }}>
          <TableRow sx={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
            <TableCell style={{
                    width: '40%',
                    paddingLeft : "4%",
                    fontFamily : "Poppins",
                    color : "#6682AA",
                    fontWeight : 500,
                    fontSize : "20px"
                    
                  }}>Responsiblities</TableCell>
            <TableCell style={{ width: '20%' ,   fontFamily : "Poppins",
               color : "#6682AA",fontWeight : 500,
               fontSize : "20px" }}>Types</TableCell>
            <TableCell style={{ width: '20%',  paddingLeft : "8%",  fontFamily : "Poppins",
               color : "#6682AA" , fontWeight : 500,
               fontSize : "20px"}}>Role&nbsp;</TableCell>
            <TableCell style={{ width: '20%' ,   fontFamily : "Poppins",
               color : "#6682AA",paddingLeft : "10%" , fontWeight : 500,
               fontSize : "20px"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody   sx={{
                tableLayout: 'fixed',
                display: 'block',
                overflow: 'auto',
                p: '0 auto',
                [`& .${tableRowClasses.root}`]: {
                  position: 'relative',
                  '&::after': {
                    // backgroundColor: '#EBEBEB',
                    bottom: 0,
                    content: '""',
                    display: 'block',
                    height: '2px',
                    left: '50%',
                    position: 'absolute',
                    transform: 'translate(-50%,0)',
                    width: '95%',
                  },
                  '&:last-child::after': {
                    display: 'none',
                  },
                },
              }}>
          { _DATA.currentData().map((row , index) => {
            return(
            <TableRow key={row.name} sx={{ display: 'table', width: '100%' }}>
              <TableCell style={{ width: '40%',
               paddingLeft : "4%" ,
               fontFamily : "Poppins",
                    color : "#002F71",
                    fontWeight : 500,
                    fontSize : "18px"
             }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: '20%',fontFamily : "Poppins",
                    color : "#002F71",
                    fontWeight : 500,
                    fontSize : "18px" }}>
                {row.types}
              </TableCell>
              <TableCell  style={{ width: '20%', paddingLeft : "8%",fontFamily : "Poppins",
                    color : "#002F71",
                    fontWeight : 500,
                    fontSize : "18px" }}>
                <Box sx ={{
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
             {row.role}
              </Box>
              </TableCell>
              <TableCell  style={{ width: '20%' , paddingLeft : "10%" ,fontFamily : "Poppins",
                    color : "#002F71",
                    fontWeight : 500,
                    fontSize : "18px"}}>
               <Button 
                onClick={()=> window.open("/dashtwo")}
               variant="outlined"
                    sx={{
                    
                      // boxSizing: "border-box",
                      // borderRadius: "10px",
                      // border: "2px solid #1073FF",
                    }}>
             Select
           </Button>
           </TableCell>
           </TableRow>
            )})}
      
        </TableBody>
        {/* <TableFooter>
          <TableRow>
       <Pagination
        count={userList.length}
        size="large"
        page={_DATA.currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
          </TableRow>
        </TableFooter> */}
      </Table>
    </TableContainer>
     </Box>
  )
};




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