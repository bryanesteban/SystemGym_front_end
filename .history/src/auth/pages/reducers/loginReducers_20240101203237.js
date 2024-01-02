export const loginReducers = (stage={}, action) =>{
   
    switch(action.type){
        case 'login':
            return{
                isAuth:true,
                user: action.payload,
            };
        
        case 'logout':
            return{
                isAuth:true,
                user: action.payload,
            };
        default:
            return state;
    }
   
    
}