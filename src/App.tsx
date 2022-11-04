import Form from "./components/loginPage/form/Form"
import './App.css';
import Plant from "./assets/plant.png"
// import PersistentDrawerLeft from './components/respon2/addRespons/dashboard/Dashboard';
// import AddResp from './components/addRespons/AddResp';
// import BasicTable from "./components/table/Table";
import Dashboard from "./components/responsibility/dashboard/Dashboard";
import { positions } from "@mui/system";

function App() {
  return (
    <div className="App">
   <Form />

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

{/* <Dashboard /> */}
  {/* <BasicTable /> */}
  {/* <PersistentDrawerLeft /> */}
     {/* <AddResp /> */}