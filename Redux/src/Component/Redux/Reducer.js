import { ADD_ITEM, DELETE_ITEM } from "./Action";

export const initialValue = {
  item: [],
};

export const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, item: [...state.item, action.payload.productdetails] };
    case DELETE_ITEM:
      return {
        ...state,
        item: state.item?.filter((it) => it.id !== action.payload.item_id.id),
      };
    default:
      return state;
  }
};
