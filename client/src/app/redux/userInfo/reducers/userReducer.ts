import userAction from "../action/action";
import userInfo from "../state/state.";
function userReducer(state = userInfo, action) {
  switch (action.type) {
    case userAction.INJECT_USER_INFO:
      return { ...action.info };
    case userAction.REMOVE_USER_INFO:
      return { ...action.info };

    default:
      return { ...state };
  }
}
export default userReducer;
