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
        <form onSubmit={onConsult}>

            <span className="mb-3">Buscar: </span>
            <input
                value={find}
                name="find"
                onChange={onInputChange}/>

        </form>
  )
}
