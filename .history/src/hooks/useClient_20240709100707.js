import React from 'react'
import { findAllClient } from '../services/clientService'
import { useDispatch } from 'react-redux'

export const useClient = () => {
    
    const dispatch = useDispatch();
  
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
