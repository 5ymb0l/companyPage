import { useEffect, useState } from "react";
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
import { PeoplesData } from "../Person.type";
import { AddNewResponsibility } from "../addnewPopup/Popup";
import BackTwoResp from "../backTwoResp/BackTwoResp";
import { AddFilter } from "../filter/Filter";
import { Avatar } from "@mui/material";
import { EditNewResponsibility } from "../editNew/EditNew";
import EditPopup from "../editNew/Popup";

import { checkboxType, checkboxRegion } from "../filter/FilterData";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  marginBottom: "20%",
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

const defaultUser = [
  {
    id: "1",
    firstName: "Jhon",
    lastName: "Smith",
    phone: "9972998045",
    email: "jhonsmith@gmail.com",
    country: "India",
    types: "Taluka",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "2",
    firstName: "Myra",
    lastName: "Vedha",
    phone: "9972228045",
    email: "myravedha@gmail.com",
    country: "India",
    types: "Country",
    sanghat: "Valsad",
    role: "SA",
  },
  {
    id: "3",
    firstName: "Tyson",
    lastName: "Jha",
    phone: "3972998045",
    email: "tysonjha@gmail.com",
    country: "Usa",
    types: "District",
    sanghat: "Vadodara",
    role: "SA",
  },
  {
    id: "4",
    firstName: "Akif",
    lastName: "Saif",
    phone: "9922998045",
    email: "akifsaif@gmail.com",
    country: "Pak",
    types: "State",
    sanghat: "Ahmedabad",
    role: "SA",
  },
  {
    id: "5",
    firstName: "Lia",
    lastName: "Taures",
    phone: "94972998045",
    email: "liataures@gmail.com",
    country: "India",
    types: "Sanghat",
    sanghat: "Vadodara",
    role: "SA",
  },
  {
    id: "6",
    firstName: "Samirya",
    lastName: "Trivedi",
    phone: "7972998045",
    email: "samiryatrivdei@gmail.com",
    country: "Usa",
    types: "Sanghat",
    sanghat: "Valsad",
    role: "SA",
  },
  {
    id: "7",
    firstName: "Manan",
    lastName: "Vakaria",
    phone: "9972998045",
    email: "mananvakaria@gmail.com",
    country: "India",
    types: "Taluka",
    sanghat: "Ahmedabad",
    role: "SA",
  },
  {
    id: "8",
    firstName: "Akshat",
    lastName: "Shetty",
    phone: "9972998045",
    email: "akshatshetty@gmail.com",
    country: "Pak",
    types: "District",
    sanghat: "Ahmedabad",
    role: "SA",
  },
  {
    id: "9",
    firstName: "Orif",
    lastName: "Liam",
    phone: "9972908045",
    email: "orifliam@gmail.com",
    country: "Usa",
    types: "State",
    sanghat: "Valsad",
    role: "SA",
  },
  {
    id: "10",
    firstName: "Nyka",
    lastName: "Baura",
    phone: "9974998045",
    email: "nykabaura@gmail.com",
    country: "India",
    types: "Country",
    sanghat: "Vadodara",
    role: "SA",
  },
  {
    id: "11",
    firstName: "Sarif",
    lastName: "Khan",
    phone: "9972598045",
    email: "sarifkhan@gmail.com",
    country: "Pak",
    types: "District",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "12",
    firstName: "Kiaan",
    lastName: "Chaucharia",
    phone: "8972998045",
    email: "kianCha@gmail.com",
    country: "India",
    types: "Sanghat",
    sanghat: "Vadodara",
    role: "SA",
  },
  {
    id: "13",
    firstName: "Shaurya",
    lastName: "Tapi",
    phone: "9972798045",
    email: "Shauryatapi@gmail.com",
    country: "India",
    types: "Country",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "14",
    firstName: "Nyle",
    lastName: "Latur",
    phone: "8772998045",
    email: "nylelatur@gmail.com",
    country: "Pak",
    types: "Taluka",
    sanghat: "Ahmedabad",
    role: "SA",
  },
  {
    id: "15",
    firstName: "Figma",
    lastName: "Manus",
    phone: "9972996045",
    email: "fimamanus@gmail.com",
    country: "Usa",
    types: "State",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "16",
    firstName: "Shlok",
    lastName: "Jayan",
    phone: "9972998055",
    email: "shlokjayan@gmail.com",
    country: "Pak",
    types: "Sanghat",
    sanghat: "Vadodara",
    role: "SA",
  },
  {
    id: "17",
    firstName: "Moksh",
    lastName: "Poojari",
    phone: "9955998045",
    email: "mokshpoojari@gmail.com",
    country: "Usa",
    types: "District",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "18",
    firstName: "Agastya",
    lastName: "Jain",
    phone: "8872998045",
    email: "agastyajain@gmail.com",
    country: "Pak",
    types: "State",
    sanghat: "Valsad",
    role: "SA",
  },
  {
    id: "19",
    firstName: "Nayan",
    lastName: "Mital",
    phone: "9992998045",
    email: "nayanmittal@gmail.com",
    country: "Usa",
    types: "Taluka",
    sanghat: "Surat",
    role: "SA",
  },
  {
    id: "20",
    firstName: "Vismay",
    lastName: "Thakur",
    phone: "9562998045",
    email: "visamytkhaur@gmail.com",
    country: "India",
    types: "Country",
    sanghat: "Valsad",
    role: "SA",
  },
];
export default function DashboardTwo() {
  const [userList, setUserList] = useState<PeoplesData[]>(defaultUser);
  const [fUserList, setFUserList] = useState<PeoplesData[]>([]);
  const [query, setQuery] = useState<string>("");
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({} as PeoplesData);
  const [addPopup, setAddPopup] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    id: string
  ) => {
    if (!checkboxValues.includes(name)) {
      setCheckboxValues([...checkboxValues, name]);
    }
    if (checkboxValues.includes(name)) {
      setCheckboxValues(checkboxValues.filter((val) => val !== name));
    }
  };

  useEffect(() => {
    setFUserList(userList);
  }, [userList]);

  const handleAddClosePopup = () => {
    setAddPopup(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  const handleSearchBar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let target = e.target;

    if (target.value === "") {
      setFUserList(userList);
    } else {
      setFUserList(
        userList.filter(
          (row) =>
            row.firstName.toLowerCase().includes(target.value.toLowerCase()) ||
            row.lastName.toLowerCase().includes(target.value.toLowerCase()) ||
            row.email.toLowerCase().includes(target.value.toLowerCase()) ||
            row.country.toLowerCase().includes(target.value.toLowerCase()) ||
            row.phone.toLowerCase().includes(target.value.toLowerCase()) ||
            row.types.toLowerCase().includes(target.value.toLowerCase()) ||
            row?.state?.toLowerCase().includes(target.value.toLowerCase()) ||
            row.sanghat.toLowerCase().includes(target.value.toLowerCase())
        )
      );
    }
  };

  const handleSearchClick = () => {
    if (query === "") {
      setFUserList(userList);
    } else {
      setFUserList(
        userList.filter(
          (row) =>
            row.firstName.toLowerCase().includes(query.toLowerCase()) ||
            row.lastName.toLowerCase().includes(query.toLowerCase()) ||
            row.email.toLowerCase().includes(query.toLowerCase()) ||
            row.country.toLowerCase().includes(query.toLowerCase()) ||
            row.phone.toLowerCase().includes(query.toLowerCase()) ||
            row.types.toLowerCase().includes(query.toLowerCase()) ||
            row?.state?.toLowerCase().includes(query.toLowerCase()) ||
            row.sanghat.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };
  const handleFilter = () => {
    if (checkboxValues.length > 0) {
      setFUserList(
        userList.filter(
          (item: PeoplesData) =>
            checkboxValues.includes(item.types) ||
            checkboxValues.includes(item.sanghat)
        )
      );
    } else {
      setFUserList(userList);
    }
  };

  const handleSelectAllChange = () => {
    if (checkboxValues.length === 0) {
      setCheckboxValues(
        [
          checkboxType.map((it) => it.name),
          checkboxRegion.map((ite) => ite.name),
        ].flat(1)
      );
      return;
    }
    setCheckboxValues([]);
  };

  const addEmployee = (data: PeoplesData) => {
    setUserList([...userList, data]);
    handleClose();
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
    console.log(data, "sss");
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
              <SearchHere
                query={query}
                setQuery={setQuery}
                onSearchChange={handleSearchBar}
              />
              <SearchButton query={query} handleOnClick={handleSearchClick} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginTop: "2%",
                }}
              >
                <AddFilter
                  handleAddFilter={handleFilter}
                  handleCheckboxChange={(event, name, id) => {
                    handleCheckboxChange(event, name, id);
                  }}
                  checkboxValues={checkboxValues}
                  handleSelectAllChange={handleSelectAllChange}
                />
              </Box>
            </Box>
            <DrawerHeader />
            <BasicTableTwo
              onEdit={editEmployeeData}
              onDeleteClickHnd={deleteEmployee}
              userList={fUserList.reverse()}
            />
            <Box>
              {fUserList && fUserList?.length === 0 && (
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
