import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popup from '../respon2/addnewPopup/Popup';
export default function BasicMenu() {
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
            <MoreHorizIcon />
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
            <MenuItem onClick={handleClickOpenPopup}>Edit</MenuItem>

            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
        <Popup
          title="Edit Responsibility"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
            <> Content goes here</>
          {/* <AddNewResponsibility
                 onBackBtnClickHnd={handleClosePopup}
                 onSubmitClickHnd={addEmployee}
               /> */}
        </Popup>
      </>
    );
  }
  