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
        
    }

  

    return (
            <>
            <span className="mx-3">Buscar: </span>
            <input
                value={find}
                name="find"
                onChange={onInputChange}/>
            </>
  )
}
