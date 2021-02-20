interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const SEARCH_REPOSITORIES = "search_repositories";
const SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success";
const SEARCH_REPOSITORIES_ERROR = "search_repositories_error";

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        data: [],
        error: null,
        loading: true,
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        data: action.payload,
        error: null,
        loading: false,
      };
    case SEARCH_REPOSITORIES_ERROR:
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