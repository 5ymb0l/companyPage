export interface PeoplesData {
    id : string;
    firstName : string ;
    lastName : string ;
    phone : string;
    email: string;
    country: string;
     types: string;
    state? : string ;
    sanghat : string;
    // role: string, 
     
    }
    export interface boxData {
    country: string;
    district: string;
    state: string;
    taluka:string;
    sanghat:string;
    vadodara:string;
    valsad:string;
    surat:string;
    ahmedabad:string;



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
    sanghat : "Surat",
    // role: "SA"
   
   }]


   export enum PageEnum {
    list , 
    add ,
    edit

}


export const DataList = [
    { id: "1", firstName: "Jhon", lastName: "Smith" , phone: "9972998045", email: "jhonsmith@gmail.com", country: "India" , type: "Taluka", sanghat: "Surat", role:"SA"  },
    { id: "2", firstName: "Myra", lastName: "Vedha" , phone: "9972228045", email: "myravedha@gmail.com", country: "India" , type: "Country", sanghat: "Valsad", role:"SA"  },
    { id: "3", firstName: "Tyson", lastName: "Jha" , phone: "3972998045", email: "tysonjha@gmail.com", country: "Usa" , type: "District", sanghat: "Vadodara", role:"SA"  },
    { id: "4", firstName: "Akif", lastName: "Saif" , phone: "9922998045", email: "akifsaif@gmail.com", country: "Pak" , type: "State", sanghat: "Ahmedabad", role:"SA"  },
    { id: "5", firstName: "Lia", lastName: "Taures" , phone: "94972998045", email: "liataures@gmail.com", country: "India" , type: "Sanghat", sanghat: "Vadodara", role:"SA"  },
    { id: "6", firstName: "Samirya", lastName: "Trivedi" , phone: "7972998045", email: "samiryatrivdei@gmail.com", country: "Usa" , type: "Sanghat", sanghat: "Valsad", role:"SA"  },
    { id: "7", firstName: "Manan", lastName: "Vakaria" , phone: "9972998045", email: "mananvakaria@gmail.com", country: "India" , type: "Taluka", sanghat: "Ahmedabad", role:"SA"  },
    { id: "8", firstName: "Akshat", lastName: "Shetty" , phone: "9972998045", email: "akshatshetty@gmail.com", country: "Pak" , type: "District", sanghat: "Ahmedabad", role:"SA"  },
    { id: "9", firstName: "Orif", lastName: "Liam" , phone: "9972908045", email: "orifliam@gmail.com", country: "Usa" , type: "State", sanghat: "Valsad", role:"SA"  },
    { id: "10", firstName: "Nyka", lastName: "Baura" , phone: "9974998045", email: "nykabaura@gmail.com", country: "India" , type: "Country", sanghat: "Vadodara", role:"SA"  },
    { id: "11", firstName: "Sarif", lastName: "Khan" , phone: "9972598045", email: "sarifkhan@gmail.com", country: "Pak" , type: "District", sanghat: "Surat", role:"SA"  },
    { id: "12", firstName: "Kiaan", lastName: "Chaucharia" , phone: "8972998045", email: "kianCha@gmail.com", country: "India" , type: "Sanghat", sanghat: "Vadodara", role:"SA"  },
    { id: "13", firstName: "Shaurya", lastName: "Tapi" , phone: "9972798045", email: "Shauryatapi@gmail.com", country: "India" , type: "Country", sanghat: "Surat", role:"SA"  },
    { id: "14", firstName: "Nyle", lastName: "Latur" , phone: "8772998045", email: "nylelatur@gmail.com", country: "Pak" , type: "Taluka", sanghat: "Ahmedabad", role:"SA"  },
    { id: "15", firstName: "Figma", lastName: "Manus" , phone: "9972996045", email: "fimamanus@gmail.com", country: "Usa" , type: "State", sanghat: "Surat", role:"SA"  },
    { id: "16", firstName: "Shlok", lastName: "Jayan" , phone: "9972998055", email: "shlokjayan@gmail.com", country: "Pak" , type: "Sanghat", sanghat: "Vadodara", role:"SA"  },
    { id: "17", firstName: "Moksh", lastName: "Poojari" , phone: "9955998045", email: "mokshpoojari@gmail.com", country: "Usa" , type: "District", sanghat: "Surat", role:"SA"  },
    { id: "18", firstName: "Agastya", lastName: "Jain" , phone: "8872998045", email: "agastyajain@gmail.com", country: "Pak" , type: "State", sanghat: "Valsad", role:"SA"  },
    { id: "19", firstName: "Nayan", lastName: "Mital" , phone: "9992998045", email: "nayanmittal@gmail.com", country: "Usa" , type: "Taluka", sanghat: "Surat", role:"SA"  },
    { id: "20", firstName: "Vismay", lastName: "Thakur" , phone: "9562998045", email: "visamytkhaur@gmail.com", country: "India" , type: "Country", sanghat: "Valsad", role:"SA"  },

 ];