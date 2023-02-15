

import * as types from './movie.types';


let initState={
    isLoading:false,isError:false,movies:[]
}

export const movieReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_MOVIES_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_MOVIES_SUCCESS:return{...state,isLoading:false,isError:false,movies:payload}
        case types.GET_MOVIES_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}