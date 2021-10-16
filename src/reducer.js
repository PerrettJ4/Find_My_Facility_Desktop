export const GET_SPORT_SUCCESS = "GET_SPORT_SUCCESS";
export const GET_SPORT_REQUEST = "GET_SPORT_REQUEST";
export const SELECT_ID = "SELECT_ID";
export const INCREMENT_ID = "INCREMENT_ID";
export const DECREMENT_ID = "DECREMENT_ID";

// export const generateAction = (type, payload) => ({
//   type,
//   payload,
// });

const reducer = (state, { type, payload }) => {
  // action: {
  //     type: GET_SPORT_SUCCESS, payload: {}
  // }
  switch (type) {
    case GET_SPORT_SUCCESS:
      return { ...state, ...payload, isLoading: false };
    case GET_SPORT_REQUEST:
      return { ...state, isLoading: true };
    case SELECT_ID:
      return { ...state, selectedId: payload };
    case INCREMENT_ID:
      return {
        ...state,
        selectedId: state.selectedId < 215 ? state.selectedId + 1 : 1,
      };
    case DECREMENT_ID:
      return {
        ...state,
        selectedId: state.selectedId > 1 ? state.selectedId - 1 : 215,
      };
    default:
      return state;
  }
};

export default reducer;
