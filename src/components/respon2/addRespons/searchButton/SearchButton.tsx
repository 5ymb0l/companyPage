import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchButton() {
  return (
    <Button variant="contained" sx = {{
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "13px 26px",
      gap: "10px",
       position: "absolute",
      width: "117px",
      height: "50px",
      left: "1555px",
      top: "90px",
      background: "#1073FF",
      borderRadius: "50px",
     }}> Search </Button>
    // <Stack spacing={2} direction="row">
    //   <Button  sx={{
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     padding: "0px",
    //     gap: "10px",
    //     position: "absolute",
    //     left: "76.09%",
    //     right: "3.62%",
    //     top: "14.29%",
    //     bottom: "82.37%",
    //     background: "#1073FF",
    //     borderRadius: "50px"
    //   }} variant="contained">Search</Button>
    // </Stack>
  );
}
