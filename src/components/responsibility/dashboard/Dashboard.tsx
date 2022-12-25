
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BasicTable from "../table/BasicTable";
import {NavLink} from 'react-router-dom';
import { Avatar, Stack } from "@mui/material";
import { SearchHere } from "../searchHere/SearchBar";
import { SearchButton } from "../searchButton/SearchButton";
import { width } from "@mui/system";

const drawerWidth = 240
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginBottom : "20%"
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const[ userList , setUserList] = React.useState < TableData []>(rows);
  const [query , setQuery] = React.useState<string>("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOnClick = (e : React.FormEvent) => {
    setUserList(rows.filter(row => row.name.toLowerCase().includes(query.toLowerCase())))
  }

  return (
    <Box sx={{ display : "flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#E6F2FE", 
    flex : 1,
    height : "100%"
   }}>
    
      <CssBaseline />
      <AppBar position="fixed" open={open} sx ={{
        background: "#002F71"
      }}>
        <Toolbar>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow : 1}}>
            LOGO
          </Typography>
          
          <Avatar style={{
            display : "flex-end",
            justifyContent : "center",
            alignItems : "center"
          }}> PG </Avatar>
         <div style={{
          marginLeft : "10px"
         }}>
<span className="text-gray-400 font-bold ml-1 text-14">
                Pratik
          </span>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Responsibilities",
            "Hierarchies",
            "Orders",
            "Inventories",
            "Warehouse",
            "Fulfillments",
            "Users",
            "Settings",
            "Histories",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>  
          ))}
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>

       <DrawerHeader/>

       <Box sx ={
        {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        width : "100%",
        justifyContent : "center"
      }
       }>
        <SearchHere query= {query} 
          setQuery = {setQuery}
         />
   <SearchButton query = {query} handleOnClick = {handleOnClick}/>
     </Box>
       {/* <DrawerHeader/> */}
       <Box sx = {{
         display : "flex",
         justifyContent : "center",
         alignItems : "center",
         marginTop : "2%",
         width : "100%",
         flexDirection : "row",
       }}> 
     <Box sx = {{
      display : "flex",
      flexDirection : "row",
      alignItems : "center",
      width : "100%",
      justifyContent : "center"
     }}>
      <BasicTable userList={userList} />
     </Box>
      
       <Box>
        {userList && userList?.length === 0 && (
          <Box
            sx={{
              width: 500,
              margin: "20px auto",
              padding: "20px",
              border: "1px solid lightgray",
              textAlign: "center",
            }}
          >
            {" "}
            No user Found{" "}
          </Box>
        )}
      </Box>
      </Box>
         </Main>
        </Box>
  );
}
export interface TableData {
  name: string,
   types: string,
    role: string, 
   }
export const rows = [
  {name : "Vadodara", types : "Sanghat", role : "SA",  },
  {name :"Ahmedabad", types :"District", role :"A", },
  {name :"Surat", types :"Sanghat", role : "A",  },
  
];


// export function createData(name: string, types: string, role: string, status: string) {
//   return { name, types, role, status };
// }
// export const rows = [
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
// ].sort((a, b) => (a.role < b.role ? -1 : 1));




// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import BasicTable from "../table/TableOne";
// import {NavLink} from 'react-router-dom';
// import { Avatar, Stack } from "@mui/material";
// import PaginationControlled from "../table/TableOne";
// import { SearchHere } from "../searchHere/SearchBar";
// import { SearchButton } from "../searchButton/SearchButton";

// const drawerWidth = 240
// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   // transition: theme.transitions.create("margin", {
//   //   easing: theme.transitions.easing.sharp,
//   //   duration: theme.transitions.duration.leavingScreen,
//   // }),
//   // marginLeft: `-${drawerWidth}px`,
//   // ...(open && {
//   //   transition: theme.transitions.create("margin", {
//   //     easing: theme.transitions.easing.easeOut,
//   //     duration: theme.transitions.duration.enteringScreen,
//   //   }),
//   //   marginLeft: 0,
//   // }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// export default function Dashboard() {
//   const[ userList , setUserList] = React.useState <{name: string, types: string, role: string, status: string} [] | undefined>(rows);
//  const [query , setQuery] = React.useState<string>("");
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleOnClick = (e : React.FormEvent) => {
//     // e.preventDefault();
//     const findUsers = userList && userList?.length > 0 ? userList ?. filter(u => u ?.name === query) : undefined
//     setUserList(findUsers)
//   }

//   return (
//     <Box sx={{ display : "flex",
//     backgroundColor: "#E6F2FE", 
//     flex : 1,
//     height : "100%"
//    }}>
    
//       <CssBaseline />
//       <AppBar position="fixed" open={open} sx ={{
//         background: "#002F71"
//       }}>
//         <Toolbar>
//          <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{flexGrow : 1}}>
//             LOGO
//           </Typography>
          
//           <Avatar style={{
//             display : "flex-end"
//           }}> PG </Avatar>
//          <div style={{
//           marginLeft : "10px"
//          }}>
// <span className="text-gray-400 font-bold ml-1 text-14">
//                 Pratik
//           </span>
//           </div>
          
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {[
//             "Responsibilities",
//             "Hierarchies",
//             "Orders",
//             "Inventories",
//             "Warehouse",
//             "Fulfillments",
//             "Users",
//             "Settings",
//             "Histories",
//           ].map((text) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>  
//           ))}
//         </List>
//         <Divider />
//       </Drawer>
//       <Main open={open}>

//        <DrawerHeader/>

//        <Box sx ={
//         {
//           // left : "14%",
//           // width : "79%"
//           display : "flex",
//           flexDirection : "column",
//           justifyContent : "center",
//           width : "100%",
//           // position : open ? null : "absolute",
//           // left : "250px"
//           // alignItems : "center"

         
//         }
//        }>

   
//        <div style={{
//         display : "flex",
//         flexDirection : "row",
//         alignItems : "center",
//         width : "100%",
//         justifyContent : "space-between"

//         }}>
//           <SearchHere query= {query} 
//           setQuery = {setQuery}
//          setUserList = {setUserList} />

//         <SearchButton query = {query} handleOnClick = {handleOnClick}/>
//        </div>
//        <DrawerHeader/>
//        <BasicTable />
//        <div>
//         {userList &&
//           userList?.length > 0 &&
//           userList?.map((rows) => {
//             return (
//               <div>
//                 <h3>Name : {rows?.name}</h3>
//                 <p> Types : {rows?.types} </p>
//                 <p> role : {rows?.role} </p>
//                 <p> Status : {rows?.status} </p>
//               </div>
//             );
//           })}
//       </div>
//       <div>
//         {userList && userList?.length === 0 && (
//           <div
//             style={{
//               width: 500,
//               margin: "20px auto",
//               padding: "20px",
//               border: "1px solid lightgray",
//               textAlign: "center",
//             }}
//           >
//             {" "}
//             No user Found{" "}
//           </div>
//         )}
//       </div>
       
//         </Box>
//          </Main>
//         </Box>
//   );
// }
//  export function createData(name: string, types: string, role: string, status: string) {
//   return { name, types, role, status };
// }
// export const rows = [
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
//   createData("Vadodara", "Sanghat", "SA", "Select"),
//   createData("Ahmedabad", "District", "A", "Select"),
//   createData("Surat", "Sanghat", "A", "Select"),
// ].sort((a, b) => (a.role < b.role ? -1 : 1));