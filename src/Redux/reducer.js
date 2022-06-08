import { INCREMENT,DECREMENT,ADD,SUBSTRACT,MULTIPLY,DIVIDE } from "./action.type";

export const reducer = (state = { value: 0 }, { type, payload }) => {
  switch (type) {
    case INCREMENT: 
      return { ...state, value: state.value+1 };
    
    case DECREMENT: 
      return { ...state, value: state.value-1 };
    
    case ADD: 
      return { ...state, value: state.value + payload.value };
    
    case SUBSTRACT: {
      return { ...state, value: state.value - payload.value };
    }
    case MULTIPLY: {
      return { ...state, value: state.value * payload.value };
    }
    case DIVIDE: {
      return { ...state, value: state.value / payload.value };
    }
    default: {
      return state;
    }
  }
};
