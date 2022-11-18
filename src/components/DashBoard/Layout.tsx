import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Box>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' role='presentation' textAlign='center'>
          <Typography variant='h6' component='div'>
            Dashboard
          </Typography>
        </Box>
      </Drawer>
    </Box>
  )
}


// import { makeStyles, createStyles } from "@mui/styles";
// import { Drawer, Typography , Box, List, ListItem, ListItemText, Button } from "@mui/material";
// // import { useHistory } from 'react-router-dom'
// interface Props {
//     children?: JSX.Element
// }
// const drawerWidth = 240;
// const useStyles = makeStyles({
//   page: {
//     background: "#f9f9f9",
//     width: "100%",
//   },
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
// });

// export default function Layout({ children }: Props) {
//   const classes = useStyles();
//   const history = useHistory()
//   const menuItems = [
//     {
//         text : " My Notes",
//         path : "/"
//     },
//     {
//         text : "Create New",
//         path : "/create"
//     }
//   ]


//   return (
//   <Box className= {classes.root}>
// <Drawer className={classes.drawer} variant="permanent" anchor="left" classes = {{ paper: classes.drawerPaper }}>
        
//         <div>
//           <Typography variant="h5">Dashboard</Typography>
//           <div className={classes.page}>{children}</div>
//         </div>
// <List>

// {menuItems.map(item => (
//     <Button onClick={() => history.push(item.path)}>
// <ListItem  key = {item.text}>
//     <ListItemText primary={item.text} />
//   </ListItem>
//     </Button>
// ))}
// </List>
// </Drawer>
// </Box>
    
//   );
// }
