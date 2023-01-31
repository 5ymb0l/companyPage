import Button from '@mui/material/Button';
interface props {
  handleOnClick ?: () => void;
  query? : string
}
export const  SearchButton : React.FC<props> =({handleOnClick = ()=> null
  , query}) => {
  return (
    <Button disabled = {!query} onClick = {handleOnClick} variant="contained" sx = {{
   
      padding: "9px 10px",
      
      gap: "1%",
      width: "117px",
      height: "10%",
      background: "#1073FF",
      borderRadius: "50px",
      color : ' #002F71',
     }}> Search </Button>

  );
}
