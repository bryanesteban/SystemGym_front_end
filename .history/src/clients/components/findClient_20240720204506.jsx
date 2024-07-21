import { useState } from "react";


export const FindClient = () => {


    const [findID, setfindID] = useState({find:""});

    const { find } = findID;
    const onInputChange = ( {target }) =>{
        
        const{name,value} = target;
        setfindID({
            ...findID,
            [name]:value,
        });
        console.log("cedula:"+JSON.stringify(findID));
    }

    const onConsult = () => {

    }
  
  
  
  
    return (
            <>
            <span className="mx-5">Buscar: </span>
            <input
                value={find}
                name="find"
                onChange={onInputChange}/>
            </>
  )
}
