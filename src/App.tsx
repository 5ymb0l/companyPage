import React from "react";
import Form from "./components/loginPage/form/Form"
import './App.css';
// import Plant from "./assets/plant.png"
// import PersistentDrawerLeft from './components/respon2/addRespons/dashboard/Dashboard';
// import AddResp from './components/addRespons/AddResp';
// import BasicTable from "./components/table/Table";
// import { positions } from "@mui/system";
import DashboardTwo from "./components/respon2/dashboard/DashboardTwo";
// import EditNew from "./components/respon2/addnewPopup/AddNewResponsibility";
import Dashboard from "./components/responsibility/dashboard/Dashboard";
// import FormControlLabelPosition from "./components/respon2/filter/Filter";
import { MuiDrawer } from "./components/DashBoard/Layout";
import CustomizedInputBase from "./components/responsibility/searchHere/SearchIt";
// import Layout from "./components/DashBoard/Layout";


const App : React.FC =() =>  {
 return (
    <div className="App">

{/* <CustomizedInputBase  /> */}
{/* <MuiDrawer /> */}
{/* <Layout /> */}
{/* <Dashboard/> */}
{/* <DashboardTwo /> */}
{/* <FormControlLabelPosition /> */}
   <Form />
{/* <EditNew /> */}
      {/* <div style={{
        flex : 1,
       
      }}>
      
        <div style={{
          display : "flex",
          justifyContent : "flex-end",
        alignItems : "flex-end"
        }}>

       <img  style = {{
        width : "250px",
        height : "260px",
        objectFit : "contain",
        position : "absolute"
      }}
      src={Plant} alt="" />
        </div>
        

      <div style={{
        flex : 1,
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
      }}>

      </div>
  
   </div>
    */}
    </div> 
  );
}

export default App;

  {/* <BasicTable /> */}
  {/* <PersistentDrawerLeft /> */}
     {/* <AddResp /> */}