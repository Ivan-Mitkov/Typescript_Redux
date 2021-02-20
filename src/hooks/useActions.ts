import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();
  //https://redux.js.org/api/bindactioncreators
  return bindActionCreators(actionsCreators, dispatch);
};
