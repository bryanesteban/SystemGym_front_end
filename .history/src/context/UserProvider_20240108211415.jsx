import { UserContext } from "./UserContext"

export const UserProvider = (children) => {
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    } = useUsers();



    return (
        <UserContext.Provider
            value ={{

            }}>
                {children}
        </UserContext.Provider>
    )

}