export default function reducer(state, action) {
     switch (action.type) {
          case "FETCH_DATA":
               return { ...state, countryList: action.payload };

          case "GET_SAVED_DATA": {
               return action.data;
          }

          default:
               return state;
     }
}
