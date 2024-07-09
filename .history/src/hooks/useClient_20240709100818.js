import React from 'react'
import { findAllClient } from '../services/clientService'
import { useDispatch, useSelector } from 'react-redux'
import { loadingClient } from '../store/slices/clients/clientSlice';

export const useClient = () => {
    
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.clients);
    const getClients = async() => {

        try {

            const result = await findAllClient();
            dispatch(loadingClient(result.data));
        } catch (error) {
            if(error.response?.status == 401){

            }
        }
    }
  
  
    return 
    {
        getClients,
    }
}
