export const UserForm = () => {
    return (
       <form>
            <input 
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"/>
            <input 
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"/>
            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"/>
        <form/>
    )

}