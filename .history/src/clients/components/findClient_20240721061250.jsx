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
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form   className="d-flex"
                        role="search"
                        onSubmit={onFindClient}>
                
                <input
                    placeholder="Buscar"
                    value={find}
                    name="find"
                    onChange={onInputChange}/>
                </form>
            </div>
        </nav>
  )
}
