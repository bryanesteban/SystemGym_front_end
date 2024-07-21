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

  

    return (
            <>
            <span className="mx-4">Buscar: </span>
            <input
                className=" mx-1"
                value={find}
                name="find"
                onChange={onInputChange}/>
            </>
  )
}
