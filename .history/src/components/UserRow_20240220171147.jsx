import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { loginUser } from "../auth/services/AuthService";

export const UserRow = ({ id, username, email}) => {

    const {handlerUserSelectedForm, handlerRemoveUser} = useContext(UserContext);
    return(
        <tr >
                            <td>{ id }</td>
                            <td>{ username }</td>
                            <td>{ email }</td>

                            {!loginUser.isAdmin || <>
                                <td>
                                    <button 
                                        type="button"
                                        className="btn btn-secondary btn-sm"
                                        onClick={ () => handlerUserSelectedForm({
                                            id:id,
                                            username:username,
                                            email: email
                                        })}
                                        >
                                        update
                                    </button>
                                </td>
                            </>}
                            <td>
                                <NavLink className={'btn btn-secondary btn-sm'}
                                to={'/users/edit/' + id} >
                                 update route   
                                </NavLink>
                            </td>
                            <td>
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>  handlerRemoveUser(id)}
                                >
                                    Remove
                                </button>
                            </td>
            </tr>

    )

}