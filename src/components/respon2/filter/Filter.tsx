
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useMemo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
  Grid,
  Checkbox,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Box,
  TextField,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Autocomplete,
  Card,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Divider,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PeoplesData } from "../Person.type";
import { FilterData } from "./FilterData";
import { ICheckedUser , IAssignmentUserList } from "./DataFilter";
type Props = {
  // onBackBtnClickHnd : () => void
  // onSubmitClickHnd: (data: PeoplesData) => void;
  // userList?: PeoplesData[];
  expand? : false;
  checkedUserList? :  ICheckedUser[];
  onChangeChecked?: (checkedData: string[]) => void;
  isCheckBoxList?: boolean;
  handleSelectAll?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  assignmentUserData? : IAssignmentUserList[]
  handleCheck?: (id: string, name: string) => void;

};
export const AddFilter = ({expand , checkedUserList ,onChangeChecked = () => null ,isCheckBoxList , handleSelectAll = () => null, assignmentUserData , handleCheck = () => null }: Props) => {
  const [open, setOpen] = useState(false);
  // const [isExpand, setIsExpand] = useState(expand);
  const checkedUserIds: string[] = useMemo(
    () => (checkedUserList || []).map((user: ICheckedUser) => user._id),
    [checkedUserList],
  );
  useEffect(() => {
    onChangeChecked(checkedUserIds);
  }, [checkedUserList]);
  // const [users , setUsers] = useState(FilterData) 

  // useEffect(() => {
  //   setUsers(FilterData)
  // },[])
  
  
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {name , checked} = e.target
  //   let tempUser = users.map(user => user.name === name ? { ...user , isChecked : checked}: user);
  //   setUsers(tempUser)
  // }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box gap = {2} >



      <Button
        sx={{
          // backgroundColor: " #002F71",
          // borderRadius: "50px",
          color: " #002F71",
          // fontFamily : 'Poppins',
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "14px",
          textTransform: "none",
          // lineHeight: "15vh"
        }}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        
      >
        Add More
      </Button>
      <Button  sx={{
          backgroundColor: "white",
          borderRadius: "50px",
          color: " #002F71",
          // fontFamily : 'Poppins',
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          textTransform: "none",
          // lineHeight: "15vh"
        }}> Display : All </Button>
      </Box>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            minWidth: "20%",
            minHeight: "75%",
          }, 
        }}
        open={open}
        onClose={handleClose}
      >
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions> */}
        <DialogTitle
          gap={1}
          sx={{
            display: "flex",
          }}
        >
          {/* <Box sx ={{ 
        display: "flex",
        justifyContent : "center",
        alignItems: "center"

       }}> */}
          <Box
            sx={{
              fontSize: "20px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
          >
            Filter
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              color: "#1073FF",
              fontWeight: 500,
              fontFamily: "Poppins",
              paddingTop: "8px",
            }}
          >
            Reset All
          </Box>
          <Button
            sx={{
              marginLeft: 20,
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                color: "#002F71",
              }}
            />
          </Button>

          {/* </Box> */}
        </DialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
            }}
            >

            <FormControl component="fieldset">
            {/* {isCheckBoxList &&  ( */}

              <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                }}
                component="legend"
                >
                DISPLAY
              </FormLabel>
                {/* {  isCheckBoxList && (  */}
              
                <FormGroup aria-label="position">
                  <FormControlLabel
                    sx={{
                      color: "#002F71",
                    }}
                    value="top"
                    control={<Checkbox  sx={{
                      color : '#6682AA'  }}
                      // checked={acceptTnC}
                      // onChange={handleChange}
                    />
                  }
        
                    label="Immediate"
                    // labelPlacement="top"
                  />
                  <FormControlLabel
                    sx={{
                      color: "#002F71",
                    }}
                    value="start"
                    control={<Checkbox sx={{
                      color : '#6682AA'  }}
                      checked={assignmentUserData?.length === checkedUserIds.length}
                      onChange={handleSelectAll}
                      
                      />}
                    label="All"
                    // labelPlacement="start"
                  />
                </FormGroup>
                 {/* )}  */}
            
          
 
                {/* { 
                  !isCheckBoxList ? ( */}
                    {(assignmentUserData || []).map((item, index) => (
                    <>

              {/* <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                TYPE
              </FormLabel> */}
             
             
                <FormGroup sx={{
                  display : 'flex',
                  // justifyContent : "center",
                  // alignItems : "center"
                }}>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                      }}
                      // value="end"
                      control={<Checkbox  sx={{
                        color : '#6682AA'  }}
                        name={item.name}

                        checked={checkedUserIds.includes(item._id)}
                        onChange={() => handleCheck(item._id, item.name)}
                        />
                      
                      }
                      label={item.name}
                      // labelPlacement="end"
                    />
                    {/* <FormControlLabel
                      sx={{
                        color: "#002F71",
                        paddingLeft : "100px"
                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="District"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    /> */}
                  </FormGroup>
                  {/* <FormGroup aria-label="position" row>
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="State"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    />
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                        paddingLeft: "118px",
                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Taluka"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    />
                  </FormGroup> */}

                  {/* <FormGroup>
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Sanghat"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    />
                  </FormGroup> */}
                </FormGroup>
              
              {/* <FormLabel
                sx={{
                  color: "#6682AA",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  marginTop: "10px",
                }}
                component="legend"
              >
                REGION
              </FormLabel> */}
             
              {/* <Grid>
                <FormGroup>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                      }}
                      // value="bottom"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Vadodara"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="bottom"
                    />
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                        paddingLeft : "90px"

                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Valsad"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    />
                  </FormGroup>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                      }}
                      // value="bottom"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Surat"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="bottom"
                    />
                    <FormControlLabel
                      sx={{
                        color: "#002F71",
                        paddingLeft: "120px",
                      }}
                      // value="end"
                      control={<Checkbox sx={{
                        color : '#6682AA'  }} />}
                      label="Ahmedabad"
                      checked={checkedUserIds.includes(item._id)}
                      onChange={() => handleCheck(item._id, item.name)}
                      
                      // labelPlacement="end"
                    />
                  </FormGroup>
                </FormGroup>
              </Grid> */}
              </>                  
                    ))}


              {/* )} */}

            
            </FormControl>
          </Box>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx = {{   fontSize: "15px",
              color: "#002F71",
              fontWeight: 600,
              fontFamily: "Poppins",
          textTransform: "none",
        }}> Cancel</Button>
            <Button  onClick={handleClose} sx ={{
             textTransform: "none",
          }} variant="contained"> Apply Filters </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
