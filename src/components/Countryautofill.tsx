import React from 'react'

const Countryautofill = () => {
  return (
    <div>Countryautofill</div>
  )
}

export default Countryautofill

// import React, { useState, useEffect  } from 'react';
// import { Container } from "react-bootstrap";
// import { Model}  from "../components/model"

// interface Props {
//   index: any;
//   resCountry : Model
// }


// const Countryautofill : React.FC <Props> ({ index , resCountry}) =>
// {    
//   const [getcountry, setCountry]= useState([]);
//   const [getCountryid, setCountryid]= useState('');
//   const [getrowdata, setGetrowdata] = useState([]);
//   useEffect( ()=>{
//     const getcountrydata= async()=>{
//       const reqData= await fetch("http://localhost/devopsdeveloper/country/");
//       const resData= await reqData.json();
//      setCountry(await resData);
//     }
//     getcountrydata();
//   },[]);
  
//   const handlecountry=(event : React.ChangeEvent<HTMLSelectElement>)=>{
//     const getCountryid= event.target.value;   
//     setCountryid(getCountryid);
//   }

//   useEffect( ()=>{
//     const getCountryrowdata= async()=>{
//       const reqCountryrowdata= await fetch(`http://localhost/devopsdeveloper/country/getcountry/${getCountryid}`);
//       const reqcountryrowdata= await reqCountryrowdata.json();
//       setGetrowdata(await reqcountryrowdata); 
//     }
//     getCountryrowdata();
//   },[getCountryid]);

//     return(
//         <React.Fragment>   
//        <Container className="content">
//         <div className="row">
//           <div className="col-sm-12">
//             <h2 className="mt-4 mb-4 fw-bold">
//               Select Country, auto fill dial code and flag in input using React js { getCountryid}
//             </h2>
//                 <form className="row g-3" method='post'>
//                 <div className="col-md-3">
//                 <label  className="form-label">Country </label>            
//                     <div className="input-group mb-2">       
//                     <select name="country" className="form-control p-2" onChange={(e)=>handlecountry(e)}>
//                     <option value="">--Select Country--</option>
//                     { getcountry.map( (resCountry,index )=>(
//                     <option key={index} value={resCountry.id}>{resCountry.nicename}</option>
//                     ))
//                     } 
//                     </select>                  
//                     </div>
//                     </div> 
                
//                     <div className="col-md-2">
//                     <label  className="form-label">Dialcode </label>
//                     <div className="input-group mb-2"> 
//                   { getCountryid.length > 0 &&(
//                     <div className="input-group-prepend">
//                         <div className="input-group-text btn btn-success p-2"><img src={ process.env.PUBLIC_URL+'/flags/24X24/'+getrowdata.iso+'.png'} /></div>
//                     </div>
//                    ) }

//                     <div className="input-group-prepend">
//                         <div className="input-group-text btn btn-success p-2">+</div>
//                     </div>  
                                 
//                     <input type="text" name='phonecode' className="form-control p-2" placeholder="Dialcode" value={getrowdata.phonecode}  readOnly />
//                     </div>
//                    </div>               

//                     <div className="col-md-3">
//                     <label  className="form-label">Phone No </label>
//                     <div className="input-group mb-2">
//                       <input type="text" className="form-control p-2" id="inlineFormInputGroup" placeholder="Enter Phone No" maxLength="10"/>
//                     </div>
//                    </div>

//                    <div className="col-md-2">
//                     <label  className="form-label"></label>
//                     <div className="input-group mb-2">
//                       <button name="button" className='btn btn-success mt-2'>Submit</button>
//                     </div>
//                    </div>

//                 </form>

//             </div>
//             </div>
//             </Container>
//         </React.Fragment>
//     );
// }
// export default Countryautofill;