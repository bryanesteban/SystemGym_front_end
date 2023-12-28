export const UserForm = () => {
    return (
       <form>
            <input 
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                onChange={oninputChange}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Password"
                name="password"
                type="password"
                onChange={}/>

            <input 
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                onChange={}/>

            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    )

}