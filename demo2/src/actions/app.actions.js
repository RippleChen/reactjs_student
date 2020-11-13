import { APP_ADD, APP_DEL } from "../constants";

export const setAppStateToAdd = (payload) => ({
    type: APP_ADD,
    payload
})


export const setAppStateToDel = (payload) => ({
    type: APP_DEL,
    payload
})

export const add = (value)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(setAppStateToAdd(value)) 
        },1000 );
    }
}

export const del = (value)=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(setAppStateToDel(value)) 
        },1000 );
    }
}
