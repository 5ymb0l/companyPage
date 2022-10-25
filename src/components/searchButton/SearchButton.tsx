import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SearchButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button  sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "10px",
        position: "absolute",
        left: "76.09%",
        right: "3.62%",
        top: "14.29%",
        bottom: "82.37%",
        background: "#1073FF",
        borderRadius: "50px"
      }} variant="contained">Search</Button>
    </Stack>
  );
}
