import * as actions from "../../actions/actionTypes";

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAR_AUTH_PROFILE_STATE:
      return initialState;

    case actions.SIGN_UP_START:
    case actions.SIGN_IN_START:
    case actions.RECOVERY_START:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actions.SIGN_UP_SUCCESS:
    case actions.SIGN_IN_SUCCESS:
    case actions.RECOVERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };

    case actions.SIGN_UP_FAIL:
    case actions.SIGN_IN_FAIL:
    case actions.RECOVERY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};
