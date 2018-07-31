import * as actionTypes from '../const/actionTypes'
import axios from 'axios';

export function moreButton( isActive, idx){
    return{
        type:actionTypes.SHOE_Dialog,
        isActive,
        idx
    }
}
export function topMessage( isActive, idx){
    
    return{
        type:actionTypes.TOPMESSAGE,
        isActive,
        idx
    }
}
export function delMessage( isActive, idx){
    
    return{
        type:actionTypes.DELMESSAGE,
        isActive,
        idx
    }
}
export function changeidea( isActive, idx){
    
    return{
        type:actionTypes.IDEA,
        isActive,
    }
}
export function changeclass(isActive, idx){
    
    return{
        type:actionTypes.CLASS,
        isActive,
    }
}





