import * as types from './movie.types'
import axios from 'axios';

export const getMovielistApi=(payload)=>async(dispatch)=>{
dispatch({type:types.GET_MOVIES_LOADING});

await axios.get('https://pymovie-backend.cyclic.app/movies/get').then((res)=>{
    dispatch({type:types.GET_MOVIES_SUCCESS,payload:res.data.data});
console.log(res.data.data);
}).catch((err)=>{
    dispatch({type:types.GET_MOVIES_FAILURE})
    console.log(err);

})

}