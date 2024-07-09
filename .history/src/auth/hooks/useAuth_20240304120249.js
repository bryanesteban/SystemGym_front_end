import Swal from "sweetalert2";
import { loginUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout, onIntLogin } from "../../store/slices/auth/authSlice";



export const useAuth = () =>{

    const dispatch = useDispatch();
    const{user, isAdmin, isAuth} = useSelector(state => state.auth);
    //const [login, dispatch] = useReducer(loginReducers, initialLogin);
    const navigate = useNavigate();
    
    const handlerLogin = async ({username, password}) => {

        try{
            dispatch(onIntLogin());
            const response = await loginUser({username, password});
            const token = response.data.token;
            const claims =JSON.parse(window.atob(token.split(".")[1])) ;
            console.log(claims);
            const user = {username: response.data.username}
           
            dispatch(onLogin({user,isAdmin : claims.isAdmin}));


          sessionStorage.setItem('login', JSON.stringify({
            isAuth: true,
            isAdmin: claims.isAdmin,
            user,
          }));
          sessionStorage.setItem('token',`Bearer ${token}`);
          navigate('/users');
        }catch(error){
            if(error.response?.status === 401){
                Swal.fire('Error Login','Usuario o password invalidos','error');
                dispatch(onLogout());
            }else if (error.response?.status === 403){
                Swal.fire('Error Login','No tiene acceso al recurso o permisos ','error');
                dispatch(onLogout());
                
            }else{
                dispatch(onLogout());
                throw error;
            }
        }
    }

    const handleLogout = () => {
        dispatch({
            type:'logout',

        })
        dispatch(onLogout());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('login');
        sessionStorage.clear;

    }
    
    return {
        login: {
            user,
            isAdmin,
            isAuth
        },
        handlerLogin,
        handleLogout,
    };
}