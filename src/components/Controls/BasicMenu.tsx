import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import Popup from '../respon2/addnewPopup/Popup';
import { PeoplesData } from '../respon2/Person.type';
import { EditNewResponsibility } from '../respon2/editNew/EditNew';
interface Props {
  onDeleteClickHnd : () => void;
  onEdit : () => void;
  // onBackBtnClickHnd: () => void;
  // data: PeoplesData;
  
}
export default function BasicMenu({onDeleteClickHnd , onEdit  }: Props) {
  // console.log({data})
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [openPopup, setOpenPopup] = useState(false);
    const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   

   
    return (
      <>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon sx={{
              color : "#002F71"
            }}/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClickOpenPopup}>Edit</MenuItem> */}
            <MenuItem onClick={onEdit}>Edit</MenuItem>


            <MenuItem onClick={onDeleteClickHnd}>Delete</MenuItem>
          </Menu>
        </div>
        {/* <Popup
          title="Edit Responsibility"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
            <>
            <EditNewResponsibility onUpdateClickHnd={onUpdateClickHnd}
             onBackBtnClickHnd = {onBackBtnClickHnd} 
             data ={data}
             />
            
             </>
         
        </Popup> */}
      </>
    );
  }
  