export interface PeoplesData {
    id : string;
    firstName : string ;
    lastName : string ;
    phone : string;
    email: string;
country: string;
     types: string;
    state : string ;
    sanghat : string;
    
     
    }

   export const dummyPersonList : PeoplesData[] = [{
    id : new Date().toJSON().toString(),
    firstName : "Dummy1",
    lastName : "Dummy 2" ,
    phone : "+91 9977277373",
    email : "Dummy22@gmail.com",
    country: "India",
    types : 'Taluka',
    state : "Mh",
    sanghat : "Surat"
   
   }]


   export enum PageEnum {
    list , 
    add ,
    edit

}