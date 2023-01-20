import {useEffect, useState} from "react";
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
import BasicTableTwo from "../tableTwo/TableTwo";
import { PeoplesData , PageEnum } from "../Person.type";
import {AddNewResponsibility} from "../addnewPopup/Popup";
import BackTwoResp from "../backTwoResp/BackTwoResp";
import {AddFilter} from "../filter/Filter";
import { Avatar, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { EditNewResponsibility } from "../editNew/EditNew";
import EditPopup from "../editNew/Popup";
import { text } from "stream/consumers";
import { ICheckedUser } from "../filter/DataFilter";
import { FilterData } from "../filter/FilterData";
// import EditPopup from "../editNew/Popup";


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
...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DashboardTwo() {
  const [userList, setUserList] = useState<PeoplesData[]>([]);
  const [query, setQuery] = useState<string>("");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({} as PeoplesData);
  const [recordForEdit, setRecordForEdit] = useState(null);
 const [addPopup , setAddPopup] = useState(false);
 const [checkedData, setCheckedData] = useState<ICheckedUser[]>();


  
  const handleAddPopup = () => {
    setAddPopup(true)
  }
  const handleAddClosePopup = () => {
    setAddPopup(false)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  
  };
  const handleOnClick = (e: React.FormEvent) => {
  
    setUserList(
      userList.filter((row) =>
        row.firstName.toLowerCase().includes(query.toLowerCase()) ||   row.lastName.toLowerCase().includes(query.toLowerCase()) ||  row.email.toLowerCase().includes(query.toLowerCase()) || row.country.toLowerCase().includes(query.toLowerCase()) ||  row.phone.toLowerCase().includes(query.toLowerCase()) ||  row.types.toLowerCase().includes(query.toLowerCase()) ||  row.state.toLowerCase().includes(query.toLowerCase()) ||  row.role.toLowerCase().includes(query.toLowerCase()) ||  row.sanghat.toLowerCase().includes(query.toLowerCase())
        )
        );
  }
  // row.firstName.toLowerCase() === query.toLowerCase()
  
  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      setUserList(JSON.parse(listInString));
    }
  }, []);
 
  const addEmployee = (data: PeoplesData) => {
    setUserList([...userList, data]);
    handleClose()
    setRecordForEdit(null)

  };

  const deleteEmployee = (data: PeoplesData) => {
  const indexToDelete = userList.indexOf(data);
    const tempList = [...userList];

    tempList.splice(indexToDelete, 1);
    setUserList(tempList);
  };

  const editEmployeeData = (data: PeoplesData) => {
    setDataToEdit(data);
    setOpenPopup(true);
    console.log(data , "sss")
  };
  
    const updateData = (data: PeoplesData) => {
    const filteredData = userList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = userList.indexOf(filteredData);
    const tempData = [...userList];
    tempData[indexOfRecord] = data;
    setUserList(tempData);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E6F2FE",
          flex: 1,
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
              onClick={handleClickOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              LOGO
            </Typography>
            <Avatar
              style={{
                display: "flex-end",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              PG{" "}
            </Avatar>
            <div
              style={{
                marginLeft: "10px",
              }}
            >
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
            <IconButton onClick={handleClose}>
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
          <DrawerHeader />
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
              <AddNewResponsibility
                openPopup={addPopup}
                setOpenPopup={setAddPopup}
                onBackBtnClickHnd={handleAddClosePopup}
                onSubmitClickHnd={addEmployee}
              />
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

            <Box sx = {{
            display: "flex",
            justifyContent : "flex-end",
            alignItems: "center",
            }}>
              <Box
                sx={
                  {  
                    marginTop: "2%",
                    // alignSelf: "flex-end",
                    // marginRight : "1%"
                    // marginLeft : "83%"
                  }
                }
              >
                <AddFilter 
                // {...args}
                
     


                checkedUserList={checkedData}
                handleCheck={(id, name) => {
                  if ((checkedData || [])?.filter((item) => item._id === id).length > 0) {
                    setCheckedData((checkedData || [])?.filter((item) => item._id !== id));
                  } else {
                    setCheckedData([...(checkedData || []), { _id: id, name }]);
                  }
                }}
                handleSelectAll={(e) => {
                  if (e.target.checked) {
                    setCheckedData(FilterData);
                  } else {
                    setCheckedData([]);
                  }
                }}
               assignmentUserData = {FilterData}
                
                
                />
              </Box>
            </Box>
            <DrawerHeader />
            <BasicTableTwo
              onEdit={editEmployeeData}
              onDeleteClickHnd={deleteEmployee}
              userList={userList}
            />
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
                  No user Found
                </Box>
              )}
            </Box>
          </Box>
        </Main>
      </Box>

      <>
        <EditPopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <>
            <EditNewResponsibility
              onUpdateClickHnd={updateData}
              onBackBtnClickHnd={handleClosePopup}
              data={dataToEdit}
            />
          </>
        </EditPopup>
      </>
    </>
  );
}
