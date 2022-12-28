
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import BasicTable from '../table/BasicTable';
export default function CustomizedInputBase() {
  function createData(name: string, types: string, role: string, status: string) {
    return { name, types, role, status };
  }
const rows = [
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
  createData("Vadodara", "Sanghat", "SA", "Select"),
  createData("Ahmedabad", "District", "A", "Select"),
  createData("Surat", "Sanghat", "A", "Select"),
]
const[ userList , setUserList] = React.useState <{name: string, types: string, role: string, status: string} [] | undefined>(rows)
  const [query , setQuery] = React.useState<string>("");
  const handleOnClick = () => {
    const findUsers = userList && userList?.length > 0 ? userList ?. filter(u => u ?.name === query) : undefined
    setUserList(findUsers)
  }

  return (
    <Paper  
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, height: 'fit-content', marginTop: '200px' }}
      >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        onChange = {(e) => {setQuery(e.target.value); setUserList(rows)}}
        value = {query}
      />
     
      <Button disabled = {!query} onClick = {handleOnClick}>Search</Button>
      {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
     
   <div>
    {userList && userList?.length >0 && userList?.map(rows => {
      return(
        <div>
          <h3>Name : {rows?.name}</h3>
          <p> Types : {rows?.types} </p>
          <p> role : {rows?.role} </p>
          <p> Status : {rows?.status} </p>

        </div>
      )
    })}
   </div>
   <div>
        {userList && userList?.length===0 && (
          <div style={{
            width: 500,
  margin: "20px auto",
  padding: "20px",
  border: "1px solid lightgray",
  textAlign: "center"
          }}> No user Found </div>
        )}
      </div>

    </Paper>
  );
}

// import {useState  , useEffect} from 'react'
// import SearchIcon from "@mui/icons-material/Search"
//  import {InputBase , 
//     Divider ,
//      IconButton ,
//       Button ,
//       Paper} from "@mui/material"
//       export default function CustomizedInputBase ({onInputUpdate} : {
//         onInputUpdate : (text : string) => void
//       }) {
//  const [ searchValue , setSearchValue] = useState <string> ("")
// useEffect(() => {
//   onInputUpdate (searchValue)
// }, [searchValue])

// return (
// <Paper
// component= "form"
// sx ={{ p : "2px 0px" ,
//   display : "flex",
//   alignItems : "center",
//   width : 780
// }}
// >
//     <InputBase
//     sx={{ ml : 1 , flex : 1}}
// placeholder = "Search"
// inputProps={{"aria-label " : "search"}}
// onChange = {(e) => setSearchValue(e.target.value)}
// />
// <Button disabled> Clear</Button>
// <IconButton type = "submit" sx={{ p : "10px" }} aria-label = "search">
//     <SearchIcon />
// </IconButton>
// </Paper>
// )}


