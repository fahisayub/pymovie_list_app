import * as types from './details.types'
import axios from 'axios';

export const getDetailsApi=(payload)=>async(dispatch)=>{
dispatch({type:types.GET_DETAILS_LOADING});

await axios.get(`https://pymovie-backend.cyclic.app/details/${payload.imdbID}`).then((res)=>{
    dispatch({type:types.GET_DETAILS_SUCCESS,payload:res.data});
console.log(res.data);
}).catch((err)=>{
    dispatch({type:types.GET_DETAILS_FAILURE})
    console.log(err);

})

}