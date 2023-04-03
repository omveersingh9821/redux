import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardData: []
}

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log('reducer data ', action.data)
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            }
            break;
        case REMOVE_TO_CART:
            // console.log('reducer data ', action.data)
            state.cardData.pop();
            return {
                ...state,
                cardData: [...state.cardData]

            }
            break;
        default:
            return state   
    }
}
