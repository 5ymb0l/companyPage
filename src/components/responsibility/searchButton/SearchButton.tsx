import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
interface props {
  handleOnClick : (e: React.FormEvent) => void;
  query : string
}
export const  SearchButton : React.FC<props> =({handleOnClick , query}) => {
  return (
    <Button disabled = {!query} onClick = {handleOnClick} variant="contained" sx = {{
   
      padding: "9px 10px",
      
      gap: "1%",
      width: "117px",
      height: "10%",
      background: "#1073FF",
      borderRadius: "50px",
      color : ' #002F71',
      // fontFamily : 'Poppins',
      // fontStyle : 'normal',
      // fontWeight: 500,
      // fontSize: "60px", 
     }}> Search </Button>

  );
}
