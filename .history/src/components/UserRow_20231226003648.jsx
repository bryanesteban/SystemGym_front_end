export const UserRow = ({id, username,email}) => {
    return(
        <tr key={user.id}>
                            <td>{ user.id }</td>
                            <td>{ user.username }</td>
                            <td>{ user.email }</td>
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
                                >
                                    Remove
                                </button>
                            </td>
            </tr>

    )

}