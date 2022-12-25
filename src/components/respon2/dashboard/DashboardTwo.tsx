import {useState} from "react";
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
import { SearchHere } from "../../responsibility/searchHere/SearchBar";
import { SearchButton } from "../../responsibility/searchButton/SearchButton";
import { AddNewResponsibility } from "../addnewPopup/AddNewResponsibility";
import BasicTableTwo from "../tableTwo/TableTwo";
import { PeoplesData , dummyPersonList , PageEnum } from "../Person.type";
import Popup from "../addnewPopup/Popup";
import BackTwoResp from "../backTwoResp/BackTwoResp";
import AddFilter from "../filter/Filter";
import { Avatar } from "@mui/material";

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

export default function DashboardTwo() {
  const [userList, setUserList] = useState<PeoplesData[]>(dummyPersonList);
  const [query, setQuery] = useState<string>("");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState(
    dummyPersonList as PeoplesData[]
  );
  const [shownPage, setShownPage] = useState(PageEnum.list);
  console.log(query);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOnClick = (e: React.FormEvent) => {
    setUserList(
      dummyPersonList.filter((row) =>
        row.id.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  const onBackBtnClickHnd = () => {
    setShownPage(PageEnum.list);
  };
  const onAddEmployeeClick = () => {
    setShownPage(PageEnum.add);
  };
  const addEmployee = (data: PeoplesData) => {
    setEmployeeList([...employeeList, data]);
  };
  return (
    <Box
      sx={{
        display : "flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#E6F2FE", 
    flex : 1,
    height : "100%"
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: "#002F71",
        }}
      >
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
      <Main  sx ={{
  //         display :"flex",
  //  justifyContent : "center",
  //  alignItems : "center",
  //  height : "80vh"
      }}open={open}>
        <DrawerHeader/>
        <Box
          sx={{
            alignSelf: "flex-start",
            marginBottom: "2%",
          }}
        >
          <BackTwoResp />
        </Box>
        <Box>
          <Box
            sx={{
              alignSelf: "flex-start",
              marginBottom: "2%",
            }}
          >
            <Popup>
              <AddNewResponsibility
                onBackBtnClickHnd={onBackBtnClickHnd}
                onSubmitClickHnd={addEmployee}
              />
            </Popup>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <SearchHere query={query} setQuery={setQuery} />
            <SearchButton query={query} handleOnClick={handleOnClick} />
          </Box>

          <Box
            sx={{
              marginTop: "2%",
              alignSelf: "flex-end",
              marginLeft : "83%"
            }}
          >
            <AddFilter />
          </Box>
          <DrawerHeader />
          <BasicTableTwo userList={employeeList} />
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
// import BasicTableTwo from "../tableTwo/TableTwo";
// import AddMore from "../addmoreFilter/Popup";
// import { SearchHere } from "../../responsibility/searchHere/SearchBar";
// import { SearchButton } from "../../responsibility/searchButton/SearchButton";
// import NestedModal from "../tableTwo/NestedModal";
// import AddNew from "../addnewPopup/Popup";
// // import { rows } from "../../responsibility/dashboard/Dashboard";
// const drawerWidth = 240
// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(6),
  
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

// export default function DashboardTwo() {
//   const[ userList , setUserList] = React.useState < TableData []>(rows);
//   const [query , setQuery] = React.useState<string>("");
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
// console.log(query)
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const handleOnClick = (e : React.FormEvent) => {
//   setUserList(rows.filter(row => row.name.toLowerCase().includes(query.toLowerCase())))
//   }

//   return (
//     <Box sx={{ display : "flex",
//     backgroundColor: "#E6F2FE", 
//     flex : 1,
//     height : "100%"
//    }}>
//     <CssBaseline />
//       <AppBar position="fixed" open={open} sx ={{
//         background: "#002F71"
//       }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             LOGO
//           </Typography>
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

// <div style={{
//     alignSelf : "flex-start",
//     marginBottom : "2%"
//   }}> 
// <AddNew />
// </div>
   
//        <div style={{
//         display : "flex",
//         flexDirection : "row",
//         alignItems : "center",
//         width : "100%",
//         justifyContent : "space-between"

//         }}>
          
//           <SearchHere query= {query} 
//           setQuery = {setQuery} />
//       <SearchButton query = {query} handleOnClick = {handleOnClick}/>
//        </div>
       
//        <div style={{
        
//         alignSelf : "flex-end",
//        }}>
//        <AddMore />        
//        </div>
//        <DrawerHeader/>
//         <BasicTableTwo userList={userList}/>
//         <div>
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
// export interface TableData {
//   name: string;
//   phone : string;
//   email: string;
//   region : string;
//    types: string;
//  status: any}

// const rows = [
//   { name :"Judith Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"AS Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal />},
//   { name :"GH Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"JH Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"KL Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"ER Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"TY Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"UI Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
 
// ];

// export interface TableData {
//   name: string;
//   phone : string;
//   email: string;
//   region : string;
//    types: string;
//  status: any}

// const rows = [
//   { name :"Judith Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"AS Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal />},
//   { name :"GH Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"JH Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"KL Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"ER Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"TY Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
//   { name :"UI Armstrong",phone :"876-6363",email :"dolor.sit@outlook.org",region :"Stockholms län",types : "SA" , status : <NestedModal/>},
 
// ];






// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// export default function ResponsiveDrawer(props: Props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Hierarchies', 'Orders', 'Inventories', 'Warehouse', 'Fulfillments' , 'Users' , 'Settings' , 'Histories'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//               <ListItemText primary={text} />

//           </ListItem>
//         ))}
//       </List>
//       <Divider />

//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             LOGO
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
