const initialSate=[];

export const CartReducer=(state=initialSate,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.payload];
            case 'REMOVE_ITEM':
                return state.filter(user=>user.name !==action.payload.name);
                default :
                return state
    }

}


export const addItem =(name,email)=>{
    return {
        type:'ADD_ITEM',
        payload:{
            name,
            email
        }
        }
    }
 export const removeItem =(name)=>{
    return {
        type:'REMOVE_ITEM',
        payload:{name}
        }
    }

