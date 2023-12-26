export const UsersList = ({ users =[] }) =>{

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                   <th>#</th> 
                   <th>username</th> 
                   <th>email</th> 
                   <th>password</th> 
                   <th>remove</th> 
                </tr>
            </thead>
            <tbody>
                {
                    users.map( user => (
                        <tr>
                            <td>{user.username}</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
       
    )
}