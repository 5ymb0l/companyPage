import {useState} from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { PeoplesData } from "../Person.type";
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
  Button,
  Select,
  tableRowClasses,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
  Menu
} from "@mui/material";
import  FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
// import Popup from "../addnewPopup/Popup";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BasicMenu from "../../Controls/BasicMenu";
import EditPopup from "../editNew/Popup";
import { EditNewResponsibility } from "../editNew/EditNew";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

   
  const next = ( ) =>  {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  const prev = () =>  {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  const jump = ( page : number) => {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { 
    next, prev, jump, currentData, currentPage, maxPage };
}
interface Props {
  userList? : PeoplesData[] ;
  // setUserList :  React.Dispatch<React.SetStateAction<TableData[] | undefined>>
  onDeleteClickHnd : (data:PeoplesData ) => void;
  onEdit : (data: PeoplesData) => void
  // onBackBtnClickHnd: () => void
  // data: PeoplesData
}


export default function BasicTableTwo({userList = [] , onDeleteClickHnd , onEdit} : Props) {
//  console.log({data})
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const count = Math.ceil(userList.length / rowsPerPage);
  const _DATA = usePagination({data : userList});
  const [openPopup, setOpenPopup] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
 
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handleChange = ( event: React.ChangeEvent<unknown>,
    newPage: number) => {
      // setPage(newPage);
    _DATA.jump(newPage);
  };

 
  // const itemRender = (type : string , data : any ) => {
  //            if (type === 'prev') {
  //             return <Button> Previous </Button>
  //            }
  //            if ( type === 'next') {
  //             return <Button> Next </Button>
  //            }
  //            return data;
  // }
  
  
  return (
  <>
    <Box sx={{ width: "100%" }}>

    <TableContainer
      sx={{ borderRadius: "15px", width: "100%" }} component={Paper}>
      <Table 
      // sx={{ minWidth: 650 }}
       aria-label="custom pagination table">
        <TableHead  sx={{
            
              tableLayout: "fixed",
              //  backgroundColor: '#00A77E',
            }}>
          <TableRow
          sx={{ display: "table", tableLayout: "fixed",width: "100%" }}
          >
            <TableCell align="center" style={{
              
                  width: "20%",
                  // paddingLeft: "4%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                
                }}
            >Name</TableCell>
            <TableCell align="center"  style={{
                  width: "15%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                }}
            >Phone Number</TableCell>
            <TableCell align="center"  style={{
                  width: "20%",
                  // paddingLeft: "8%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  fontWeight: 500,
                  fontSize: "20px",
                }} 
            >Email Address &nbsp;</TableCell>
            <TableCell align="center" 
              style={{
                width: "15%",
                fontFamily: "Poppins",
                color: "#6682AA",
                // paddingLeft: "10%",
                fontWeight: 500,
                fontSize: "20px",
              }}
            >Region</TableCell>
            <TableCell  align="center"  style={{
                  width: "10%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  // paddingLeft: "10%",
                  fontWeight: 500,
                  fontSize: "20px",
                }}>Type</TableCell>
                <TableCell align="center"  style={{
                  width: "10%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  // paddingLeft: "10%",
                  fontWeight: 500,
                  fontSize: "20px",
                }}> Role </TableCell>
            <TableCell align="center"  style={{
                  width: "10%",
                  fontFamily: "Poppins",
                  color: "#6682AA",
                  // paddingLeft: "10%",
                  fontWeight: 500,
                  fontSize: "20px",
                }}> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
              tableLayout: "fixed",
              display: "block",
              overflow: "auto",
              p: "0 auto",
              [`& .${tableRowClasses.root}`]: {
                position: "relative",
                "&::after": {
                  // backgroundColor: '#EBEBEB',
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
            }} >
        { _DATA.currentData().map((row , index , ..._DATA) => {
            return (
              <TableRow key={row.id} sx={{ display: "table", width: "100%" }}>
                <TableCell align="center" 
                  style={{
                    width: "20%",
                    // paddingLeft: "4%",
                    fontFamily: "Poppins",
                    // color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                    color : '#002F71',

                  }}
                  component="th"
                  scope="row"
                >
                  {`${row.firstName} ${row.lastName}`}
                </TableCell>
                <TableCell align="center" 
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
                <TableCell align="center" 
                  style={{
                    width: "20%",
                    // paddingLeft: "8%",
                    fontFamily: "Poppins",
                    color: "#002F71",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  {row.email}
                </TableCell>
                <TableCell align="center" 
                  style={{
                    width: "15%",
                    fontFamily: "Poppins",
                    color: "#002F71",
                    // paddingLeft: "10%",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
                  {`${row.country} ${row.state} ${row.sanghat}`}
                </TableCell>
                <TableCell align="center" 
                  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#002F71",
                    // paddingLeft: "10%",
                    fontWeight: 500,
                    fontSize: "20px",
                  }}
                >
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
               <TableCell align="center"  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#002F71",
                    // paddingLeft: "10%",
                    fontWeight: 500,
                    fontSize: "20px",
                 

                  }}>
                    <Box sx = {{
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'
                  }}>

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
                        color : "#002F71"

                      }}
                      arial-lable="SA"
                    >
                     SA
              </Box>


                    </Box>

                </TableCell>
                <TableCell align="right" 
                  style={{
                    width: "10%",
                    fontFamily: "Poppins",
                    color: "#6682AA",
                    fontWeight: 500,
                    fontSize: "20px",
                    
                  }}
                >
                  <Box sx = {{
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center'
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
                  
                   onDeleteClickHnd={() => onDeleteClickHnd(row)}/>
                    
                  </Box>


                  </Box>
                </TableCell>
              </TableRow>
            );
                  })}
      
        </TableBody>
        <TableFooter >

          <TableRow  sx = {{ 
            
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height : '10vh'
        
        }}> 
      
            <Pagination 
          //  hidePrevButton
        count={userList.length}
        size="small"
        page={_DATA.currentPage}
        variant="outlined"
        shape="circular"
        onChange={handleChange}
        hideNextButton
      />
        {/* <button disabled={_DATA.currentPage === 1 ? true : false} onClick={_DATA.prev}>
        PREVIOUS
      </button> */}
      <Box sx = {{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft : "10px"
      }}>

       <Button   sx={{
          // backgroundColor: "white",
          borderRadius: "50px",
          color : ' #002F71',
          // fontFamily : 'Poppins',
          // fontStyle : 'normal',
          fontWeight: 600,
          fontSize: "14px",
          textTransform: 'none',
          border: "1px solid #002F71"
        }} 
        variant="outlined"
       endIcon = {<ArrowForwardIosIcon/>}
        disabled={_DATA.currentPage === 10 ? true : false} onClick={_DATA.next}>
      
        Next
      </Button> 
       </Box>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Box> 
    {/* <EditPopup
          title="Edit Responsibility"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
            <>
            <EditNewResponsibility onUpdateClickHnd={ updateData}
             onBackBtnClickHnd = {handleClosePopup} 
             data ={dataToEdit}
             />
            
             </>
         </EditPopup>  */}
    
    
     {/* <Popup
     title="Edit Responsibility"
     openPopup={openPopup}
     setOpenPopup={setOpenPopup}   >
       <>
       { <EditNewResponsibility onUpdateClickHnd={onUpdateClickHnd}
        onBackBtnClickHnd = {onBackBtnClickHnd} 
        data ={data}
        /> }
       
        </>
    
   </Popup> */}
    </>
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
