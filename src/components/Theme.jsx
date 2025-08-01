
 export const themeReducer=(state="light",action)=>{
    switch(action.type){
        case 'TOGGLE':
            return state === "light"? "dark":"light";
            default:
                return state
    }
}
