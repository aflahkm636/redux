const initialState = {
    count: 0,
};

export const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
      return { count: state.count + 1 };

        case "DECREMENT":
      return { count: state.count - 1 };
        default:
            return state;
    }
};

 export const  increment=()=>{
    return {
         type: 'INCREMENT'
    };
 }

 export const  decrement=()=>{
    return {
         type: 'DECREMENT'
    }

 }
