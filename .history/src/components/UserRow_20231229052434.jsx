export const UserRow = ({handlerUserSelectedForm, handlerRemoveUser, id, username, email}) => {
    const onRemoreUser = (id) => {
        handlerRemoveUser(id);
    }
    
    return(
        <tr >
                            <td>{ id }</td>
                            <td>{ username }</td>
                            <td>{ email }</td>
                            <td>
                                <button 
                                    type="button"
                                    className="btn btn-secondary btn-sm"
                                >
                                    update
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onRemoreUser(id)}
                                >
                                    Remove
                                </button>
                            </td>
            </tr>

    )

}