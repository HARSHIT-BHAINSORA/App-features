export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (productdetails) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      productdetails,
    },
  });
};

export const deleteItem = (item_id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: {
      item_id,
    },
  });
};
