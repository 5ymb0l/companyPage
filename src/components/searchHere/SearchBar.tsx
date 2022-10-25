import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchHere() {
  return (
  
        <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 1000,
        left: 3.62,
        right: 27.54,
        top: 14.29,
        bottom: 82.37,
        borderRadius: 50
        
      }} >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <InputBase
        sx={{ ml: 1,
           flex: 1,
           width: 43,
           height: 18,
           fontFamily: 'Poppins',
           fontStyle : "normal",
           fontWeight: 500,
           fontSize: 20,
           lineHeight: 18,
           order: 1
            }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      </Paper>
     
   
    

      
      
  );
}
