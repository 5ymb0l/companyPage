// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import EditNew from '../addnewPopup/EditNew';

// export default function EditForm() {
//   const [open, setOpen] = React.useState(false);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         ...
//       </Button>
//       <Dialog
//         fullScreen={fullScreen}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//          <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button onClick={handleClose} autoFocus>
//             Add
//           </Button>
//         </DialogActions>
//        <DialogContent>
//           <EditNew />
//         </DialogContent>
       
//       </Dialog>
//     </div>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
// import EditNew from '../addnewPopup/AddNewResponsibility';
import { DeleteForm } from '../deleteForm/DeleteForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        Edit          
     </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "60%" }}>
          {/* <h2 id="child-modal-title">Text in a child modal</h2> */}
          {/* <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
          <Button onClick={handleClose}>Cancle Edit</Button>
          <Button onClick={handleClose}>Add </Button>
          
          {/* <span> <EditNew /> </span> */}
        </Box>
      </Modal>
    </React.Fragment>
  );
}

// function ChildModalTwo() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>
//         Delete </Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           {/* <h2 id="child-modal-title">Text in a child modal</h2> */}
//           {/* <p id="child-modal-description">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           </p> */}
//            {/* <span> <DeleteForm /> </span> */}

//            <Button onClick={handleClose}> Delete </Button>
//           {/* <Button> Add </Button> */}
          
//          </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }


export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button onClick={handleOpen}> ... </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {/* <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
          <ChildModal />
          {/* <ChildModalTwo /> */}
         { !open && <Button onClick={handleClose}> Delete </Button>  } 

        </Box>
      </Modal>
    </div>
  );
}