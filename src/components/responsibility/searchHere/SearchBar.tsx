import {Paper , InputBase  , IconButton  } from "@mui/material";
import { rows } from "../dashboard/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
interface props {
  query : string;
  setQuery :  React.Dispatch<React.SetStateAction<string>>;
 

  // handleOnClick : (e : React.FormEvent) => void
}
export const SearchHere : React.FC<props> = ({query , setQuery }) => {
  return (
      <Paper
      component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px 0px 0px 35px",
          gap: "20px",
           width: "96%",
           height: "10%",
           marginRight: "1%",
          background: "#FFFFFF",
          boxShadow: "0px 0px 17px rgba(0, 47, 113, 0.1)",
          borderRadius: "50px",
            }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            width: 43,
            height: 18,
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 18,
            order: 1,
          }}
          onChange = {(e) => {
            
            
            setQuery(e.target.value);
            
           }}
          value = {query}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Paper>
  );
}
