import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        data: [],
        error: null,
        loading: true,
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        error: action.payload,
        data: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
