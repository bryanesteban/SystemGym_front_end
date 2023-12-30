import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
const initiallUsers = [
    {

        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },    

] 

const initialUserForm = {
    id:0,
    username:'',
    password:'',
    email:'',
}

export const useUsers = () => {

    const [users,dispatch] = useReducer(usersReducer, initiallUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) =>{
        //console.log(user);
        
        let type ;
        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }
        dispatch({
          type: type,
          payload:user, 
        });

        Swal.fire(
            (user.id === 0) ? 
                'Usuario Creado!':
                'Usuario Actualizado',
            (user.id === 0) ?
                'El usuario ha sido creado con exito!':
                'El usuario ha sido actualizado con exito!',
            'success'
          )
    }

    const handlerRemoveUser = ( id ) => {
        
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type:'removeUser',
                    payload:id,
                })
              Swal.fire({
                title: "Usuario Eliminado!",
                text: "EL usuario ha sido elimiado con exito.",
                icon: "success"
              });
            }
          });
    }

    const handlerUserSelectedForm = (user) => {
        //console.log(user);
        setUserSelected({...user})

    }

    return {
        users,
        userSelected,
        initialUserForm,
        
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    }
}