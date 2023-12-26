export const UsersList = ({ users =[] }) =>{

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                   <th>#</th> 
                   <th>username</th> 
                   <th>email</th> 
                   <th>update</th> 
                   <th>remove</th> 
                </tr>
            </thead>
            <tbody>
                {
                    users.map( user => (
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.username }</td>
                            <td>{ user.email }</td>
                            <td>{ user.button }</td>
                            <td>{ user.username }</td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
       
    )
}