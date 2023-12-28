export const usersReducer = (state = [], action) => {

    switch(action.type){
        case '' :
            return [
                ...state,
                {
                    ...action.payload
                }
            ];
        default:
            return state;    
    }
}