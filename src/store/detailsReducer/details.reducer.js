import * as types from './details.types';


let initState={
    isLoading:false,isError:false,details:{}
}

export const detailsReducer=(state=initState,{type,payload})=>{

    switch(type){
        case types.GET_DETAILS_LOADING:return{...state,isLoading:true,isError:false}
        case types.GET_DETAILS_SUCCESS:return{...state,isLoading:false,isError:false,details:payload}
        case types.GET_DETAILS_FAILURE:return{...state,isLoading:false,isError:true}

        default:return state;
    }
}