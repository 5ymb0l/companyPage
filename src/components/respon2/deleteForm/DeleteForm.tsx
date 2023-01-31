import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Add';
export const DeleteForm = () => {
  return (
    <Button
    variant="outlined"
    startIcon={<DeleteIcon />}
   
> Delete </Button>
  )
}