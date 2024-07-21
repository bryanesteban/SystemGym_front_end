import { useState } from "react";
import { useClients } from "../../hooks/useClients";


export const FindClient = () => {


    const [findID, setfindID] = useState({find:""});

    const { find } = findID;

    const { getClients } = useClients();
    const onInputChange = ( {target }) =>{
        
        const{name,value} = target;
        setfindID({
            ...findID,
            [name]:value,
        });
    }

    const onFindClient  = (event) => {
        event.preventDefault();

        getClients(find);
    }

  

    return (
            <form onSubmit={onFindClient}>
            <span className="mx-3">Buscar: </span>
            <input
                value={find}
                name="find"
                onChange={onInputChange}/>
            </form>
  )
}
